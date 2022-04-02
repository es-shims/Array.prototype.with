# array.prototype.with <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ESnext spec-compliant `Array.prototype.with` shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the proposed [spec](https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.with).

Because `Array.prototype.with` depends on a receiver (the `this` value), the main export takes the array to operate on as the first argument.

## Getting started

```sh
npm install --save array.prototype.with
```

## Usage/Examples

```js
var arrayWith = require('array.prototype.with');
var assert = require('assert');

var arr = [0, 1, 2, 3, 4, 5];

var results = arrayWith(arr, 3, 'c');

assert.deepEqual(results, [0, 1, 2, 'c', 4, 5]);
assert.deepEqual(arr, [0, 1, 2, 3, 4, 5]);
```

```js
var arrayWith = require('array.prototype.with');
var assert = require('assert');
/* when Array#with is not present */
delete Array.prototype.with;
var shimmed = arrayWith.shim();

assert.equal(shimmed, arrayWith.getPolyfill());
assert.deepEqual(arr.with(0, true), arrayWith(arr, 0, true));
```

```js
var arrayWith = require('array.prototype.with');
var assert = require('assert');
/* when Array#with is present */
var shimmed = arrayWith.shim();

assert.equal(shimmed, Array.prototype.with);
assert.deepEqual(arr.with(1, false), arrayWith(arr, 1, false));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/array.prototype.with
[npm-version-svg]: https://versionbadg.es/es-shims/Array.prototype.with.svg
[deps-svg]: https://david-dm.org/es-shims/Array.prototype.with.svg
[deps-url]: https://david-dm.org/es-shims/Array.prototype.with
[dev-deps-svg]: https://david-dm.org/es-shims/Array.prototype.with/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Array.prototype.with#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/array.prototype.with.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/array.prototype.with.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/array.prototype.with.svg
[downloads-url]: https://npm-stat.com/charts.html?package=array.prototype.with
