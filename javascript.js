// Rules that apply to javascript projects

module.exports = {
  "extends": [
    "@autovance/eslint-config-autovance/common"
  ],
  "env": {
    "node": true,
    "mocha": true,
    "jest": true,
    "es6": true
  },
  "plugins": ["mocha"],
  "rules": {
    "@typescript-eslint/no-var-requires": "off",

    "array-callback-return": 1,
    "one-var": [2, "never"],
    "strict": [2, "global"],
    "dot-notation": [
      2,
      {
        "allowKeywords": true
      }
    ],

    "camelcase": [
      0,
      {
        "properties": "never"
      }
    ]
  }
}
