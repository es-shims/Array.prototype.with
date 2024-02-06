# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.1.5](https://github.com/es-shims/Array.prototype.with/compare/v1.1.4...v1.1.5) - 2024-02-06

### Commits

- [Dev Deps] use `hasown` instead of `has` [`dbf5ddc`](https://github.com/es-shims/Array.prototype.with/commit/dbf5ddc7d023b94c5e8f3ba53b6b6fd899ab574b)
- [Refactor] use `es-errors`, so things that only need those do not need `get-intrinsic` [`1336b0d`](https://github.com/es-shims/Array.prototype.with/commit/1336b0dc7bcd8afcde779b85f57a3158aa485f64)
- [Dev Deps] update `aud`, `npmignore`, `tape` [`ca2f226`](https://github.com/es-shims/Array.prototype.with/commit/ca2f2262f022cfc81dcb9bb7056e5f687ffa6747)
- [Deps] update `call-bind`, `es-abstract`, `get-intrinsic` [`cb35187`](https://github.com/es-shims/Array.prototype.with/commit/cb3518791fe3774c35c9e7eb85804fea963f83f2)
- [Dev Deps] update `object-inspect`, `tape` [`edc349a`](https://github.com/es-shims/Array.prototype.with/commit/edc349afb5f574be8da5406e69ff8596f8ec5230)
- [Deps] update `call-bind` [`4ea70a2`](https://github.com/es-shims/Array.prototype.with/commit/4ea70a22dc63c90c0adb7705fc71fdc7f64653cd)

## [v1.1.4](https://github.com/es-shims/Array.prototype.with/compare/v1.1.3...v1.1.4) - 2023-09-13

### Commits

- [Refactor] use `set-function-name` [`126714d`](https://github.com/es-shims/Array.prototype.with/commit/126714d966739c4c2366da7984a7bdd92ec41127)
- [Deps] update `define-properties`, `set-function-name` [`d82016e`](https://github.com/es-shims/Array.prototype.with/commit/d82016eec35bbd3714b687a24c1e67adc4d40a91)

## [v1.1.3](https://github.com/es-shims/Array.prototype.with/compare/v1.1.2...v1.1.3) - 2023-08-30

### Commits

- [actions] revert f0cfcdc [`8d942ea`](https://github.com/es-shims/Array.prototype.with/commit/8d942eadf221dac01bbc4b3351656ad6b247ca7a)
- [Deps] update `define-properties`, `es-abstract`, `get-intrinsic` [`6084367`](https://github.com/es-shims/Array.prototype.with/commit/6084367aa36db7ba5f9c3dc12d1f3294409ba423)
- [Dev Deps] update `@es-shims/api`, `@ljharb/eslint-config`, `aud`, `object-inspect`, `tape` [`1fe64cd`](https://github.com/es-shims/Array.prototype.with/commit/1fe64cd24154bf536c2757eec9bd6c18b13598dd)

## [v1.1.2](https://github.com/es-shims/Array.prototype.with/compare/v1.1.1...v1.1.2) - 2022-12-01

### Commits

- [Fix] `with` should not be in `Symbol.unscopables` [`b7616fe`](https://github.com/es-shims/Array.prototype.with/commit/b7616fed57864a6ef00b28469132829ecd38ca70)

## [v1.1.1](https://github.com/es-shims/Array.prototype.with/compare/v1.1.0...v1.1.1) - 2022-11-03

### Commits

- [Deps] update `es-abstract`, `get-intrinsic` [`e64d465`](https://github.com/es-shims/Array.prototype.with/commit/e64d4653480ff38d9b20ee4e7c181ee696c8f378)
- [actions] update rebase action to use reusable workflow [`5283ecc`](https://github.com/es-shims/Array.prototype.with/commit/5283ecc39864e11e79c63ed3ae5d500c6ac30484)
- [Dev Deps] update `aud`, `tape` [`d274553`](https://github.com/es-shims/Array.prototype.with/commit/d274553e3efe87be565b019de9adece8cb6f6a95)

## [v1.1.0](https://github.com/es-shims/Array.prototype.with/compare/v1.0.1...v1.1.0) - 2022-08-14

### Commits

- [meta] use `npmignore` to autogenerate an npmignore file [`0ccfaa1`](https://github.com/es-shims/Array.prototype.with/commit/0ccfaa1c8750e65dc414294395890560ffcd7968)
- [Deps] update `define-properties`, `es-abstract`, `functions-have-names`, `get-intrinsic` [`b5bb3dd`](https://github.com/es-shims/Array.prototype.with/commit/b5bb3dd5e621e8b54718411f32507bb5fdc7f54d)
- [Dev Deps] update `@ljharb/eslint-config`, `es-value-fixtures`, `object-inspect`, `tape` [`d7a32b9`](https://github.com/es-shims/Array.prototype.with/commit/d7a32b9444c427188976192cc1d75580e24e6db6)
- [New] `shim`/`auto`: add `with` to `Symbol.unscopables` [`0a2b944`](https://github.com/es-shims/Array.prototype.with/commit/0a2b94400fc033231083c864534bb44d63ef82b2)

## [v1.0.1](https://github.com/es-shims/Array.prototype.with/compare/v1.0.0...v1.0.1) - 2022-04-02

### Commits

- Revert "[Refactor] use concat/slice instead of explicit spec steps" [`ff94848`](https://github.com/es-shims/Array.prototype.with/commit/ff9484831f4ea7eafbd8ab4683fd0575a65961b3)
- [Tests] add tests that failed without ff94848 [`793f148`](https://github.com/es-shims/Array.prototype.with/commit/793f14851ddefd99762c613bad33c539e07b2828)
- [readme] fix spec link [`ec92afe`](https://github.com/es-shims/Array.prototype.with/commit/ec92afe5188c5e89f52c24534788216696388931)

## v1.0.0 - 2022-03-31

### Commits

- initial implementation, tests, readme [`8fd97ff`](https://github.com/es-shims/Array.prototype.with/commit/8fd97ff8bf3f2f4804dc9e303fa4902164b52d26)
- Initial commit [`ffe7194`](https://github.com/es-shims/Array.prototype.with/commit/ffe7194883dd3b8764508b740fe3db9b9372eb65)
- [meta] do not publish workflow files [`6db6582`](https://github.com/es-shims/Array.prototype.with/commit/6db65820b12d34665dd205e606a4b9e33c03b784)
- [Tests] temporarily use actions instead of composable workflows [`f0cfcdc`](https://github.com/es-shims/Array.prototype.with/commit/f0cfcdc01fb68ad3fe75c856b03b6ffd5b26b493)
- npm init [`b5c1362`](https://github.com/es-shims/Array.prototype.with/commit/b5c1362d256f49518b466c7296a3bfadb4f4d47d)
- [Fix] use `relativeIndex` to compare [`9cdfb47`](https://github.com/es-shims/Array.prototype.with/commit/9cdfb474f4aef7b24ba36febf1e2c8a8c9d393ca)
- [Refactor] use concat/slice instead of explicit spec steps [`c583150`](https://github.com/es-shims/Array.prototype.with/commit/c583150734291ac0e6ba8bcd57257e5be4564031)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `aud`, `auto-changelog`, `tape` [`e59da8c`](https://github.com/es-shims/Array.prototype.with/commit/e59da8c2c71d4d6f1fbda5de98786ddf01252094)
- [meta] add version script [`49857dc`](https://github.com/es-shims/Array.prototype.with/commit/49857dc67c85a03faabd195855d0d7c60fdf65c9)
- Only apps should have lockfiles [`933c060`](https://github.com/es-shims/Array.prototype.with/commit/933c060d1d0822a2a6ee1b340431877513a52e33)
- [Deps] update `es-abstract` [`114b7a1`](https://github.com/es-shims/Array.prototype.with/commit/114b7a1153b9abac3a073dd4a36ffb5684cd9d64)
