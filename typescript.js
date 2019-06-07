// Rules that apply to typescript projects

module.exports = {
  "extends": [
    "@autovance/eslint-config-autovance/common",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
  ],
  "env": {
    "jest": true
  },
  "rules": {
    "no-undef": "off",
    "@typescript-eslint/camelcase": false,
    "@typescript-eslint/no-explicit-any": false,
    "@typescript-eslint/no-parameter-properties": false
  }
}
