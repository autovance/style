// Rules that apply to typescript projects

module.exports = {
  "extends": [
    "@autovance/eslint-config-autovance/common",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
  ],
  "env": {
    "node": true,
    "jest": true,
    "es6": true
  },
  "rules": {
    "no-undef": "off",
    "@typescript-eslint/camelcase": false,
    "@typescript-eslint/no-explicit-any": false,
    "@typescript-eslint/no-parameter-properties": false,
    "@typescript-eslint/explicit-function-return-type": false
  }
}
