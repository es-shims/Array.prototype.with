'use strict';

var forEach = require('for-each');
var v = require('es-value-fixtures');
var inspect = require('object-inspect');

module.exports = function (arrayWith, t) {
	var input = [1, 2, 3];

	t.deepEqual(
		arrayWith(input, 0, 'a'),
		['a', 2, 3],
		'index 0 is replaced'
	);
	t.deepEqual(
		arrayWith(input, -3, 'a'),
		['a', 2, 3],
		'index -3 -> 0 is replaced'
	);

	t.deepEqual(
		arrayWith(input, 1, 'a'),
		[1, 'a', 3],
		'index 1 is replaced'
	);
	t.deepEqual(
		arrayWith(input, -2, 'a'),
		[1, 'a', 3],
		'index -2 -> 1 is replaced'
	);

	t.deepEqual(
		arrayWith(input, 2, 'a'),
		[1, 2, 'a'],
		'index 2 is replaced'
	);
	t.deepEqual(
		arrayWith(input, -1, 'a'),
		[1, 2, 'a'],
		'index -1 -> 2 is replaced'
	);

	t.deepEqual(
		arrayWith({ 0: 1, 1: 2, length: 2 }, 0, 'a'),
		['a', 2],
		'arraylike object becomes an array'
	);

	t.deepEqual(input, [1, 2, 3], 'original is not mutated');

	forEach(v.nonNumbers, function (nonInt) {
		t['throws'](
			function () { arrayWith([], nonInt); },
			typeof nonInt === 'symbol' ? TypeError : RangeError,
			inspect(nonInt) + ' is not a Number'
		);
	});

	t.deepEqual(arrayWith([1, 2], -1.3, 'a'), [1, 'a']);
	t.deepEqual(arrayWith([1, 2], 0.2, 'a'), ['a', 2]);
	t.deepEqual(arrayWith([1, 2], 1.8, 'a'), [1, 'a']);
	t.deepEqual(arrayWith([1, 2], 1 / 3, 'a'), ['a', 2]);

	forEach(v.bigints, function (bigint) {
		t['throws'](
			function () { arrayWith([], bigint); },
			TypeError,
			inspect(bigint) + ' can not be converted to a Number'
		);
	});

	t['throws'](
		function () { arrayWith([], 1); },
		RangeError,
		'1 is > length'
	);
	t['throws'](
		function () { arrayWith([], -1); },
		RangeError,
		'|-1| is > length'
	);

	t['throws'](
		function () { arrayWith([1], 2); },
		RangeError,
		'2 is > length'
	);
	t['throws'](
		function () { arrayWith([1], -2); },
		RangeError,
		'|-2| is > length'
	);
};
