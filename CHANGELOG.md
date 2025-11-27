# Changelog

## v0.3.0

[compare changes](https://github.com/kikiutils/stylelint-config/compare/v0.2.0...v0.3.0)

### 🚀 Enhancements

- Add `update-peer-dependencies-meta.ts` ([643c006](https://github.com/kikiutils/stylelint-config/commit/643c006))

### 🩹 Fixes

- Resolve alias configuration error in tsdown setup ([656e2e0](https://github.com/kikiutils/stylelint-config/commit/656e2e0))
- Add missing -b flag to typecheck command ([cf0c795](https://github.com/kikiutils/stylelint-config/commit/cf0c795))
- Remove custom exports configuration from tsdown ([efb18bc](https://github.com/kikiutils/stylelint-config/commit/efb18bc))
- Remove tsdown `remove-types-js` plugin ([6922c2f](https://github.com/kikiutils/stylelint-config/commit/6922c2f))
- Remove tsdown remove-types-js plugin and custom exports configuration ([735a3a9](https://github.com/kikiutils/stylelint-config/commit/735a3a9))
- Ensure tsdown `customExports` returns after deleting keys containing internals ([7324bab](https://github.com/kikiutils/stylelint-config/commit/7324bab))

### 💅 Refactors

- **tsconfig:** Separate references so src and tests use different settings ([df472e2](https://github.com/kikiutils/stylelint-config/commit/df472e2))
- Rename func parameters in `arr.map` and similar methods to `item` for consistency ([c5768ac](https://github.com/kikiutils/stylelint-config/commit/c5768ac))
- Tidy up code ([1a92f2c](https://github.com/kikiutils/stylelint-config/commit/1a92f2c))

### 📖 Documentation

- Update README ([63ba464](https://github.com/kikiutils/stylelint-config/commit/63ba464))

### 📦 Build

- ⚠️  Switch builder to tsdown and convert package to pure ESM ([d307be4](https://github.com/kikiutils/stylelint-config/commit/d307be4))
- Clean up js files under `dist/types` after tsdown build and update exports config ([2affd31](https://github.com/kikiutils/stylelint-config/commit/2affd31))
- Clean up js files under `dist/types` after tsdown build and update exports config ([299e647](https://github.com/kikiutils/stylelint-config/commit/299e647))
- Clean up js files under `dist/types` after tsdown build and update exports config ([6fa1d2b](https://github.com/kikiutils/stylelint-config/commit/6fa1d2b))
- Update tsdown config to treat all dependencies as external ([f5e4f7a](https://github.com/kikiutils/stylelint-config/commit/f5e4f7a))
- Update tsdown customExports to remove entries with keys containing "internals" ([59b1622](https://github.com/kikiutils/stylelint-config/commit/59b1622))
- Update tsdown entry ([2e67d6b](https://github.com/kikiutils/stylelint-config/commit/2e67d6b))
- Set tsdown external from package.json instead of using wildcard * ([7dc5f28](https://github.com/kikiutils/stylelint-config/commit/7dc5f28))
- Update `customExports` rules to enable IDE import hints for package usage ([e4111c0](https://github.com/kikiutils/stylelint-config/commit/e4111c0))
- Update `customExports` rules to enable IDE import hints for package usage ([fa88888](https://github.com/kikiutils/stylelint-config/commit/fa88888))

### 🏡 Chore

- **scripts:** Ensure all scripts `cd` to their current directory correctly ([5362c3b](https://github.com/kikiutils/stylelint-config/commit/5362c3b))
- Set `--max-warnings=0` for `lint` and `lint:fix` ([bffe476](https://github.com/kikiutils/stylelint-config/commit/bffe476))
- Set eslint config to enable `lib` mode ([59e03e4](https://github.com/kikiutils/stylelint-config/commit/59e03e4))
- Disable `ts/explicit-function-return-type` eslint rule ([5190f6b](https://github.com/kikiutils/stylelint-config/commit/5190f6b))
- Lint code ([f8f0974](https://github.com/kikiutils/stylelint-config/commit/f8f0974))
- **test:** Migrate from `jest` to `vitest` ([9a9d869](https://github.com/kikiutils/stylelint-config/commit/9a9d869))
- Split `tsconfig` and create build-specific config for production builds ([564b6d2](https://github.com/kikiutils/stylelint-config/commit/564b6d2))
- **vitest:** Configure coverage to collect files only under `src/` ([e2c7f65](https://github.com/kikiutils/stylelint-config/commit/e2c7f65))
- Upgrade dependencies and remove `@types/node` ([32aaf31](https://github.com/kikiutils/stylelint-config/commit/32aaf31))
- Wrap all variable expansions in scripts with `${}` ([82c47c9](https://github.com/kikiutils/stylelint-config/commit/82c47c9))
- Update dependencies and modify scripts ([374cc56](https://github.com/kikiutils/stylelint-config/commit/374cc56))
- ⚠️  Drop support for Node.js 18.12.1, set minimum supported version to 20 ([32c6ad3](https://github.com/kikiutils/stylelint-config/commit/32c6ad3))
- Bump tsconfig target to es2023 ([b9185b7](https://github.com/kikiutils/stylelint-config/commit/b9185b7))
- Update `.gitignore` ([1465997](https://github.com/kikiutils/stylelint-config/commit/1465997))
- **ci:** Configure pnpm cache in workflow ([79e2264](https://github.com/kikiutils/stylelint-config/commit/79e2264))
- **ci:** Remove pnpm cache configure in workflow ([abc0801](https://github.com/kikiutils/stylelint-config/commit/abc0801))
- ⚠️  Drop support for Node.js 20, set minimum supported version to 22 ([3319820](https://github.com/kikiutils/stylelint-config/commit/3319820))
- Upgrade devDependencies ([57244a0](https://github.com/kikiutils/stylelint-config/commit/57244a0))
- Set tsdown alias and tsconfig paths ([be49779](https://github.com/kikiutils/stylelint-config/commit/be49779))
- Update tsdown config ([fc9e7cb](https://github.com/kikiutils/stylelint-config/commit/fc9e7cb))
- Add `tsconfig.base.json` ([f6ba6dd](https://github.com/kikiutils/stylelint-config/commit/f6ba6dd))
- Update eslint config ([99cd82e](https://github.com/kikiutils/stylelint-config/commit/99cd82e))
- Update tsdown entry ([9cbb6bb](https://github.com/kikiutils/stylelint-config/commit/9cbb6bb))
- Disable `isolatedDeclarations` ([85f066e](https://github.com/kikiutils/stylelint-config/commit/85f066e))
- Update eslint config ([09d584b](https://github.com/kikiutils/stylelint-config/commit/09d584b))
- Update all scripts ([fa5e797](https://github.com/kikiutils/stylelint-config/commit/fa5e797))
- Set minimum supported version to 22.12.0 ([76e8cc1](https://github.com/kikiutils/stylelint-config/commit/76e8cc1))
- Remove alias config ([e353604](https://github.com/kikiutils/stylelint-config/commit/e353604))
- Change `update-peer-dependencies-meta.ts` to non-executable permission file ([62a7690](https://github.com/kikiutils/stylelint-config/commit/62a7690))
- Update base tsconfig ([26f4158](https://github.com/kikiutils/stylelint-config/commit/26f4158))
- Add `.editorconfig` ([11056ce](https://github.com/kikiutils/stylelint-config/commit/11056ce))
- Upgrade devDependencies ([aca04e8](https://github.com/kikiutils/stylelint-config/commit/aca04e8))
- Replace `@kikiutils/changelogen` with `changelogen` ([8d1d648](https://github.com/kikiutils/stylelint-config/commit/8d1d648))
- Update script ([44312fb](https://github.com/kikiutils/stylelint-config/commit/44312fb))
- Update `pnpm.onlyBuiltDependencies` ([9788a78](https://github.com/kikiutils/stylelint-config/commit/9788a78))
- Update tsdown config ([59407a9](https://github.com/kikiutils/stylelint-config/commit/59407a9))
- Disable tsdown `fixedExtension` config ([9039405](https://github.com/kikiutils/stylelint-config/commit/9039405))
- Update eslint config ([e75c3d7](https://github.com/kikiutils/stylelint-config/commit/e75c3d7))

### ✅ Tests

- Change vitest config file to mjs ([5c3bc1f](https://github.com/kikiutils/stylelint-config/commit/5c3bc1f))
- Fix vitest config to correctly load tsconfig and aliases ([0522f79](https://github.com/kikiutils/stylelint-config/commit/0522f79))

### 🤖 CI

- Update test workflow ([1519e46](https://github.com/kikiutils/stylelint-config/commit/1519e46))
- Update condition for uploading to Codecov in workflow job ([39851ac](https://github.com/kikiutils/stylelint-config/commit/39851ac))
- Set `--prod=false` when install dependencies ([93d7945](https://github.com/kikiutils/stylelint-config/commit/93d7945))
- Remove `--prod=false` flag when install dependencies ([249def0](https://github.com/kikiutils/stylelint-config/commit/249def0))
- Update config file ([cfba23c](https://github.com/kikiutils/stylelint-config/commit/cfba23c))

#### ⚠️ Breaking Changes

- ⚠️  Switch builder to tsdown and convert package to pure ESM ([d307be4](https://github.com/kikiutils/stylelint-config/commit/d307be4))
- ⚠️  Drop support for Node.js 18.12.1, set minimum supported version to 20 ([32c6ad3](https://github.com/kikiutils/stylelint-config/commit/32c6ad3))
- ⚠️  Drop support for Node.js 20, set minimum supported version to 22 ([3319820](https://github.com/kikiutils/stylelint-config/commit/3319820))

### ❤️ Contributors

- Kiki-kanri

## v0.2.0

[compare changes](https://github.com/kikiutils/stylelint-config/compare/v0.1.0...v0.2.0)

### 🚀 Enhancements

- Add `ignoreUtilityAtRules` option and functionally ([464c7af](https://github.com/kikiutils/stylelint-config/commit/464c7af))

### 🩹 Fixes

- Correct badge src in README ([69798a4](https://github.com/kikiutils/stylelint-config/commit/69798a4))

### 📖 Documentation

- Replace `%2F` with `/` in badge URLs in README ([4aaf916](https://github.com/kikiutils/stylelint-config/commit/4aaf916))

### 🏡 Chore

- Ensure all scripts change to their own directory before execution ([9be5fbf](https://github.com/kikiutils/stylelint-config/commit/9be5fbf))
- Update ignore files ([c81c294](https://github.com/kikiutils/stylelint-config/commit/c81c294))
- Upgrade dependencies ([e97f416](https://github.com/kikiutils/stylelint-config/commit/e97f416))
- Remove unused dependencies ([5c961f1](https://github.com/kikiutils/stylelint-config/commit/5c961f1))

### ❤️ Contributors

- kiki-kanri

## v0.1.0

[compare changes](https://github.com/kikiutils/stylelint-config/compare/e853831...v0.1.0)

### 🚀 Enhancements

- Add main feature files ([c047c78](https://github.com/kikiutils/stylelint-config/commit/c047c78))

### 📖 Documentation

- Update README badges urls ([499bc71](https://github.com/kikiutils/stylelint-config/commit/499bc71))

### 🏡 Chore

- Format script ([16ca049](https://github.com/kikiutils/stylelint-config/commit/16ca049))
- Update file permissions after installing or updating dependencies ([d141f76](https://github.com/kikiutils/stylelint-config/commit/d141f76))
- Add `--hideAuthorEmail` flag to bumplog command ([382091b](https://github.com/kikiutils/stylelint-config/commit/382091b))
- Add typecheck command to package.json scripts ([2a1f7e0](https://github.com/kikiutils/stylelint-config/commit/2a1f7e0))
- Rename `jest.config.js` to `jest.config.mjs` ([76371a1](https://github.com/kikiutils/stylelint-config/commit/76371a1))
- Reorder lint, test, and build steps in release command ([b63dcb4](https://github.com/kikiutils/stylelint-config/commit/b63dcb4))
- Disable `isolatedDeclarations` in tsconfig ([ed1636f](https://github.com/kikiutils/stylelint-config/commit/ed1636f))
- Update `modify-files-permissions.sh` ([89f72e3](https://github.com/kikiutils/stylelint-config/commit/89f72e3))
- Add option to `upgrade-dependencies.sh` to clean `node_modules` and `pnpm-lock.yaml` before upgrading ([e542b14](https://github.com/kikiutils/stylelint-config/commit/e542b14))
- Upgrade dependencies ([d3ee5a7](https://github.com/kikiutils/stylelint-config/commit/d3ee5a7))
- Update package base info ([1cf5b45](https://github.com/kikiutils/stylelint-config/commit/1cf5b45))
- Add required dependencies ([422cc60](https://github.com/kikiutils/stylelint-config/commit/422cc60))

### ✅ Tests

- Add pass test unit ([d7b98bd](https://github.com/kikiutils/stylelint-config/commit/d7b98bd))

### 🤖 CI

- Add test github workflow config file ([dd421d1](https://github.com/kikiutils/stylelint-config/commit/dd421d1))

### ❤️ Contributors

- kiki-kanri
