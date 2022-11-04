'use strict';

var GetIntrinsic = require('get-intrinsic');

var ArrayCreate = require('es-abstract/2022/ArrayCreate');
var CreateDataPropertyOrThrow = require('es-abstract/2022/CreateDataPropertyOrThrow');
var DefinePropertyOrThrow = require('es-abstract/2022/DefinePropertyOrThrow');
var Get = require('es-abstract/2022/Get');
var ToIntegerOrInfinity = require('es-abstract/2022/ToIntegerOrInfinity');
var LengthOfArrayLike = require('es-abstract/2022/LengthOfArrayLike');
var ToObject = require('es-abstract/2022/ToObject');
var ToString = require('es-abstract/2022/ToString');

var functionsHaveConfigurableNames = require('functions-have-names').functionsHaveConfigurableNames();

var $RangeError = GetIntrinsic('%RangeError%');

module.exports = function With(index, value) {
	var O = ToObject(this); // step 1
	var len = LengthOfArrayLike(O); // step 2
	var relativeIndex = ToIntegerOrInfinity(index); // step 3
	var actualIndex = relativeIndex >= 0 ? relativeIndex : len + relativeIndex; // step 4-5

	if (actualIndex >= len || actualIndex < 0) {
		throw new $RangeError('index is out of range'); // step 6
	}

	var A = ArrayCreate(len); // step 7
	var k = 0; // step 8
	while (k < len) { // step 9
		var Pk = ToString(k);
		var fromValue = k === actualIndex ? value : Get(O, Pk);
		CreateDataPropertyOrThrow(A, Pk, fromValue);
		k += 1;
	}

	return A; // step 10
};

if (functionsHaveConfigurableNames) {
	DefinePropertyOrThrow(module.exports, 'name', {
		'[[Configurable]]': true,
		'[[Enumerable]]': false,
		'[[Value]]': 'with',
		'[[Writable]]': false
	});
}
