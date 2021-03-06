// Rules that apply to hybrid projects

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
        '@typescript-eslint/explicit-module-boundary-types': 'off', // Reports incorrectly
        '@typescript-eslint/no-var-requires': 'off', // JS conflict
        'constructor-super': 'error'
      }
    },
    {
      files: ['*.ts'],
      rules: {
        'no-shadow': 'off', // eclipsed by @typescript-eslint/no-shadow, reports incorrectly
        'no-unused-expressions': 'off' // Replace no-unused-expressions with typescript rule to allow optional chaining on method calls
      }
    }
  ]
};
