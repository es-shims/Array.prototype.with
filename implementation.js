'use strict';

var ArrayCreate = require('es-abstract/2023/ArrayCreate');
var CreateDataPropertyOrThrow = require('es-abstract/2023/CreateDataPropertyOrThrow');
var Get = require('es-abstract/2023/Get');
var ToIntegerOrInfinity = require('es-abstract/2023/ToIntegerOrInfinity');
var LengthOfArrayLike = require('es-abstract/2023/LengthOfArrayLike');
var ToObject = require('es-abstract/2023/ToObject');
var ToString = require('es-abstract/2023/ToString');

var $RangeError = require('es-errors/range');

var setFunctionName = require('set-function-name');

module.exports = setFunctionName(function With(index, value) {
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
}, 'with', true);
