// These rules apply to both TS and JS and promote safety and readibility

module.exports = {
  plugins: ['node', 'regexp', 'radar', 'promise'],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:regexp/recommended',
    'plugin:radar/recommended',
    'plugin:promise/recommended'
  ],
  env: {
    node: true,
    es6: true
  },
  rules: {
    'prettier/prettier': 'off', // Set this on when you run your fix hooks, but usually you don't want to display this

    'no-restricted-syntax': [
      'warn',
      { selector: "MethodDefinition[kind='set']", message: 'Property setters are not allowed' },
      { selector: "MethodDefinition[kind='get']", message: 'Property getters are not allowed' },
      {
        selector: 'MemberExpression > Identifier[name="catch"]',
        message: 'Avoid Promise.catch - Use try/catch with async/await.'
      }
    ],

    'yield-star-spacing': ['error', 'after'],

    yoda: 'error',
    'consistent-return': 'warn',

    // Base TS&JS Safety
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'no-eval': 'error',
    'no-with': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-native-reassign': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-sequences': 'error',
    'no-unused-expressions': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef-init': 'error',
    'no-console': 'error',
    'no-array-constructor': 'error',
    'no-new-object': 'error',
    'func-call-spacing': ['error', 'never'],
    'no-trailing-spaces': 'error',
    'no-var': 'error',
    'no-return-await': 'error',
    'require-await': 'warn',
    'spaced-comment': [
      'warn',
      'always',
      {
        block: { balanced: true }
      }
    ],

    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',

    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: true,
          object: false
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],

    'no-underscore-dangle': 'off',
    'no-extra-parens': 'off',
    'no-fallthrough': 'off'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    impliedStrict: true
  }
};
