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
    "@autovance/eslint-config-autovance",
    "@autovance/eslint-config-autovance/javascript",
    "@autovance/eslint-config-autovance/typescript",
  ],
  "rules": {
    // Style overrides
  }
}
```
