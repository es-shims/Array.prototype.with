'use strict';

var GetIntrinsic = require('get-intrinsic');

var DefinePropertyOrThrow = require('es-abstract/2021/DefinePropertyOrThrow');
var ToIntegerOrInfinity = require('es-abstract/2021/ToIntegerOrInfinity');
var LengthOfArrayLike = require('es-abstract/2021/LengthOfArrayLike');
var ToObject = require('es-abstract/2021/ToObject');

var functionsHaveConfigurableNames = require('functions-have-names').functionsHaveConfigurableNames();

var $RangeError = GetIntrinsic('%RangeError%');

var callBound = require('call-bind/callBound');
var $concat = callBound('Array.prototype.concat');
var $slice = callBound('Array.prototype.slice');

module.exports = function With(index, value) {
	var O = ToObject(this); // step 1
	var len = LengthOfArrayLike(O); // step 2
	var relativeIndex = ToIntegerOrInfinity(index); // step 3
	var actualIndex = relativeIndex >= 0 ? relativeIndex : len + relativeIndex; // step 4-5

	if (actualIndex >= len || actualIndex < 0) {
		throw new $RangeError('index is out of range'); // step 6
	}
	return $concat([], $slice(O, 0, actualIndex), value, $slice(O, actualIndex + 1)); // steps 8 - 11
};

if (functionsHaveConfigurableNames) {
	DefinePropertyOrThrow(module.exports, 'name', {
		'[[Configurable]]': true,
		'[[Enumerable]]': false,
		'[[Value]]': 'with',
		'[[Writable]]': false
	});
}
