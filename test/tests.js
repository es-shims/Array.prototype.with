'use strict';

var forEach = require('for-each');
var v = require('es-value-fixtures');
var inspect = require('object-inspect');
var has = require('has');

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
		arrayWith(input, NaN, 'a'),
		['a', 2, 3],
		'index NaN -> 0 is replaced'
	);
	t.deepEqual(
		arrayWith(input, 'NaN', 'a'),
		['a', 2, 3],
		'index "NaN" -> 0 is replaced'
	);
	t.deepEqual(
		arrayWith(input, { valueOf: function () { return NaN; } }, 'a'),
		['a', 2, 3],
		'ToNumber index argument: index NaN -> 0 is replaced'
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
		arrayWith(input, { valueOf: function () { return 2; } }, 'a'),
		[1, 2, 'a'],
		'ToNumber index argument: index 2 is replaced'
	);
	t.deepEqual(
		arrayWith(input, { valueOf: function () { return -1; } }, 'a'),
		[1, 2, 'a'],
		'ToNumber index argument: index -1 -> 2 is replaced'
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

	t.test('holes', function (st) {
		var arr = [0, , 2, , 4]; // eslint-disable-line no-sparse-arrays
		Array.prototype[3] = 3; // eslint-disable-line no-extend-native
		st.teardown(function () {
			delete Array.prototype[3];
		});

		var result = arrayWith(arr, 2, 6);
		st.deepEqual(result, [0, undefined, 6, 3, 4]);
		st.ok(has(result, 1), 'hole at index 1 is filled');
		st.ok(has(result, 3), 'hole at index 3 is filled');

		st.end();
	});
};
