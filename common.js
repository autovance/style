// These rules apply to both TS and JS and promote safety
// and readability

module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  env: {
    node: true,
    es6: true
  },
  plugins: ['node'],
  rules: {
    'prettier/prettier': 'error',

    'no-restricted-syntax': [
      'error',
      { selector: "MethodDefinition[kind='set']", message: 'Property setters are not allowed' },
      { selector: "MethodDefinition[kind='get']", message: 'Property getters are not allowed' }
    ],

    yoda: 'error',
    'consistent-return': 'warn',

    // Base TS&JS Safety
    eqeqeq: 'error',
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
    'no-spaced-func': 'error',
    'no-trailing-spaces': 'error',
    'no-var': 'error',
    'no-underscore-dangle': 'off',
    'no-extra-parens': 'off',
    'no-fallthrough': 'off',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error'
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    impliedStrict: true
  }
};
