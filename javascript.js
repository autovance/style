// Rules that apply to javascript projects

module.exports = {
  extends: ['@autovance/eslint-config-autovance/common'],
  plugins: [],
  rules: {
    'array-callback-return': 'error',
    'one-var': ['error', 'never'],
    strict: ['error', 'global'],
    'dot-notation': [
      'error',
      {
        allowKeywords: true
      }
    ],

    camelcase: [
      'off',
      {
        properties: 'never'
      }
    ]
  }
};
