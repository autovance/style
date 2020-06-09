#!/usr/bin/env node

const {readFile, writeFile, access, constants} = require('fs');
const {createInterface} = require('readline');
const {spawn} = require('child_process');
const {promisify} = require('util');

const accessAsync = promisify(access);
const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

const packageJSONPath = './package.json';

const styleExtendType = {
  javascript: '@autovance/eslint-config-autovance/javascript',
  typescript: '@autovance/eslint-config-autovance/typescript',
  hybrid: '@autovance/eslint-config-autovance'
};

async function hasValidPackageJSON(path) {
  try {
    await accessAsync(path, constants.W_OK);
    return true;
  } catch (err) {
    return false;
  }
}

async function promptFirstChar(question) {
  const readline = createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const response = await new Promise((resolve) => {
    readline.question(`${question}\n> `, (answer) => {
      resolve(answer)
      readline.close();
    });
  });
  return response.trim().toLowerCase().charAt(0);
}

async function getInstallPackages(type) {
  const thisPackagesPackageJSONPath = `${__dirname}/../package.json`;
  const thisPackagesPackageJSONStr = await readFileAsync(thisPackagesPackageJSONPath);
  const thisPackagesPackageJSON = JSON.parse(thisPackagesPackageJSONStr);

  const {name, peerDependencies} = thisPackagesPackageJSON;

  const isTypescriptOnlyDependency = (pkgName) => /typescript/i.test(pkgName);

  const peerDependencyNames = Object.keys(peerDependencies).filter((pkgName) => {
    // If we're installing a javascript package, we don't want any typescript dependencies
    if (type === 'javascript') return !isTypescriptOnlyDependency(pkgName);
    else return true;
  });

  return [
    name,
    ...peerDependencyNames
  ];
}

async function installPackages(cwd, packages) {
  const child = spawn(
    'npm',
    ['install', '--save-dev', ...packages],
    { cwd }
  );

  await new Promise((resolve) => child.on('exit', resolve));
}

async function setupConfig(path, type) {
  const packageJSONStr = await readFileAsync(path);
  const packageJSON = JSON.parse(packageJSONStr);

  const currentEslintConfig = packageJSON.eslintConfig || {};

  const extendsSet = new Set(currentEslintConfig.extends || []);
  Object.values(styleExtendType).forEach((value) => extendsSet.delete(value));
  extendsSet.add(styleExtendType[type]);

  packageJSON.prettier = '@autovance/eslint-config-autovance/prettier';
  packageJSON.eslintConfig = {
    ...currentEslintConfig,
    extends: [...extendsSet],
    plugins: currentEslintConfig.plugins || [],
    rules: currentEslintConfig.rules || {}
  }

  await writeFileAsync(path, JSON.stringify(packageJSON, null, 2));
}

void async function () {
  const validLocation = await hasValidPackageJSON(packageJSONPath);
  if (!validLocation) {
    throw new Error('No package.json found in current directory.');
  }

  const cont = await promptFirstChar('Do you wish to setup @autovance/style and its peers in this package?\n y - yes\n n - no');
  if (cont !== 'y') {
    throw new Error('Aborting.');
  }

  const styleExtendTypeKeys = Object.keys(styleExtendType);
  const typePrompts = styleExtendTypeKeys.map((key) => ` ${key[0]} - ${key}`).join('\n');
  const typeLetter = await promptFirstChar(`What type of package is this?\n${typePrompts}`);
  const type = styleExtendTypeKeys.find((key) => key.startsWith(typeLetter));
  if (!type) {
    throw new Error('Invalid type. Aborting.');
  }

  console.log('Installing style and peer dependencies...');

  const packages = await getInstallPackages(type);
  await installPackages(process.cwd(), packages);

  console.log('Setting up eslint config in package.json...');

  await setupConfig(packageJSONPath, type);

  console.log('Done.');
}()
.then(() => 0)
.catch((err) => {
  console.error(err.message);
  return 1;
})
.then((code) => process.exit(code));
