# style

Autovance Javascript and Typescript ESLint Styles
## Use

In the `package.json`:

```json
...
"prettier": "@autovance/eslint-config-autovance/prettier",
...
  "devDependencies": {
    "@autovance/eslint-config-autovance": "^1.0.0"
  }
...
```

In the eslint config:

```js
{
  "extends": [
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
    ...
  }
}
```
