#!/usr/bin/env node

const {readFile, writeFile, access, constants} = require('fs');
const {createInterface} = require('readline');
const {spawn} = require('child_process');
const {promisify} = require('util');

const accessAsync = promisify(access);
const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

const packageJSONPath = './package.json';

const packages = [
  '@autovance/eslint-config-autovance',
  '@typescript-eslint/eslint-plugin@3',
  'eslint@7',
  'eslint-config-prettier@6',
  'eslint-plugin-node@11',
  'eslint-plugin-prettier@3',
  'prettier@2'
];

const styleExtendType = {
  hybrid: '@autovance/eslint-config-autovance',
  javascript: '@autovance/eslint-config-autovance/javascript',
  typescript: '@autovance/eslint-config-autovance/typescript'
};

async function hasValidPackageJSON(path) {
  try {
    await accessAsync(path, constants.W_OK);
    return true;
  } catch (err) {
    return false;
  }
}

async function prompt(question) {
  const readline = createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const response = await new Promise((resolve) => {
    readline.question(question, (answer) => {
      resolve(answer)
      readline.close();
    });
  });
  return response.trim().toLowerCase();
}

async function installPackages(cwd) {
  const child = spawn(
    'npm',
    ['install', '--save-dev', ...packages],
    { cwd }
  );

  // child.stdout.pipe(process.stdout);
  // child.stderr.pipe(process.stderr);

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

  const cont = await prompt('Do you wish to setup @autovance/style in this package? ([y]es/[n]o) ');
  if (cont !== 'y') {
    throw new Error('Aborting.');
  }

  const styleExtendTypeKeys = Object.keys(styleExtendType);
  const typePrompts = styleExtendTypeKeys.map((key) => `[${key[0]}]${key.slice(1)}`).join('/');
  const typeLetter = await prompt(`What type of package is this? (${typePrompts}) `);
  const type = styleExtendTypeKeys.find((key) => key.startsWith(typeLetter));
  if (!type) {
    throw new Error('Invalid type. Aborting.');
  }

  console.log('Installing packages...');

  await installPackages(process.cwd());

  console.log('Setting up config...');

  await setupConfig(packageJSONPath, type);

  console.log('Done.');
}()
.then(() => 0)
.catch((err) => {
  console.error(err.message);
  return 1;
})
.then((code) => process.exit(code));
