// Rules that apply to typescript projects

module.exports = {
  extends: [
    '@autovance/eslint-config-autovance/common',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier/@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/camelcase': false,
    '@typescript-eslint/no-explicit-any': false,
    '@typescript-eslint/no-parameter-properties': false,
    '@typescript-eslint/explicit-function-return-type': false
  }
};
