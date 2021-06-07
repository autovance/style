<div align="center">

  <img src="https://cdn.autovance.com/img/repo/style.png" alt="style" />

  <h3>Autovance Javascript and Typescript ESLint Styles</h3>
</div>

---

## Install

### Automatic

```
npx @autovance/eslint-config-autovance
```

### Manual

```
$ npm i --save-dev \
    @autovance/eslint-config-autovance \
    @typescript-eslint/eslint-plugin@3 \
    eslint@7 \
    eslint-config-prettier@6 \
    eslint-plugin-node@11 \
    eslint-plugin-prettier@3 \
    prettier@2
```

In the `package.json`:

```json
"prettier": "@autovance/eslint-config-autovance/prettier",
```

In the eslint config:

```jsonc
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
  "plugins": [
    // Implementation specific plugins like mocha, jest
  ],
  "rules": {
    // Style overrides
    // Implementation Specific rules like
    // "mocha/no-exclusive-tests": 2,
    // "jest/no-exclusive-tests": 2,
  }
}
```
