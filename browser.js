// Rules that apply to browser projects

module.exports = {
  extends: [
    '@autovance/eslint-config-autovance/common',
    // '@autovance/eslint-config-autovance/javascript',
    '@autovance/eslint-config-autovance/typescript'
  ],
  rules: {
    '@typescript-eslint/prefer-includes': 'off'
  }
};
