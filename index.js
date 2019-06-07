// Rules that apply to typescript projects

module.exports = {
  "extends": [
    "@autovance/eslint-config-autovance/common",
    "@autovance/eslint-config-autovance/typescript",
    "@autovance/eslint-config-autovance/javascript",
  ],
  "rules": {
    "@typescript-eslint/no-var-requires": "off",
  }
}
