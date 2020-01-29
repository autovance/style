# style

Autovance Javascript and Typescript ESLint Styles

## Install

```
$ npm i --save-dev \
    @autovance/eslint-config-autovance \
    @typescript-eslint/eslint-plugin@2 \
    eslint@6 \
    eslint-config-prettier@6 \
    eslint-plugin-node@11 \
    eslint-plugin-prettier@3 \
    prettier@1
```

## Use

In the `package.json`:

```json
"prettier": "@autovance/eslint-config-autovance/prettier",
```

In the eslint config:

```js
{
  "extends": [
    // One of:
    // Contains both Javascript and Typescript rules, for hybrid projects
    "@autovance/eslint-config-autovance",
    // Contains rules for javascript
    "@autovance/eslint-config-autovance/javascript",
    // Contains rules for typescript
    "@autovance/eslint-config-autovance/typescript"
  ],
  "plugins: [
    // Implementation specific plugins like mocha, jest
  ]
  "rules": {
    // Style overrides
    // Implementation Specific rules like
    // "mocha/no-exclusive-tests": 2,
    // "jest/no-exclusive-tests": 2,
  }
}
```
