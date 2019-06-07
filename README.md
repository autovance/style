# style

Autovance Javascript and Typescript ESLint Styles

## Use

In the `package.json`:

```json
...
  "devDependencies": {
    "@autovance/eslint-config-autovance": "^1.0.0"
  }
...
```

In the `.eslintrc`:

```js
module.exports = {
  "extends": [
    // Contains both Javascript and Typescript rules, for hybrid projects
    "@autovance/eslint-config-autovance",
    // Contains rules for javascript
    "@autovance/eslint-config-autovance/javascript",
    // Contains rules for typescript
    "@autovance/eslint-config-autovance/typescript",
  ],
  "rules": {
    // Style overrides
  }
}
```
