// Rules that apply to typescript projects

module.exports = {
  extends: [
    '@autovance/eslint-config-autovance/common',
    '@autovance/eslint-config-autovance/javascript',
    '@autovance/eslint-config-autovance/typescript'
  ],
  rules: {},
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off', // JS conflict
        'constructor-super': 'error',
        'require-await': 'warn', // TS disables this as it can report incorrectly for ts
        'no-unused-expressions': 'off', // Replace no-unused-expressions with typescript rule to allow optional chaining on method calls
      }
    }
  ]
};
