// These rules apply to both TS and JS and promote safety
// and readability

module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  "env": {
    "node": true,
    "es6": true
  },
  "plugins": ["node"],
  "rules": {
    "prettier/prettier": "error",

    "no-restricted-syntax": [
      "error",
      {"selector": "MethodDefinition[kind='set']", "message": "Property setters are not allowed"},
      {"selector": "MethodDefinition[kind='get']", "message": "Property getters are not allowed"}
    ],

    "yoda": 2,
    "consistent-return": 1,

    // Base TS&JS Safety
    "eqeqeq": 2,
    "no-eval": 2,
    "no-with": 2,
    "no-alert": 2,
    "no-caller": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-implied-eval": 2,
    "no-iterator": 2,
    "no-label-var": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-native-reassign": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-octal-escape": 2,
    "no-proto": 2,
    "no-return-assign": 2,
    "no-script-url": 2,
    "no-sequences": 2,
    "no-unused-expressions": 2,
    "no-shadow": 2,
    "no-shadow-restricted-names": 2,
    "no-undef-init": 2,
    "no-console": 2,
    "no-array-constructor": 2,
    "no-extra-parens": 0,
    "no-new-object": 2,
    "no-spaced-func": 2,
    "no-trailing-spaces": 2,
    "no-underscore-dangle": 0,
    "no-fallthrough": 0
  },
  "overrides": [],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "impliedStrict": true
  }
}
