// Rules that apply to typescript projects

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    '@autovance/eslint-config-autovance/common',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier/@typescript-eslint'
  ],
  rules: {
    'constructor-super': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off'
    
    "@typescript-eslint/prefer-includes': 'error'
    
    // This rule was proposed but is too slow because of the typescript parser requirement.
    // 'require-await': 'off', // must disable the base rule as it can report incorrect errors
    // '@typescript-eslint/require-await': 'warn'
  }
};
