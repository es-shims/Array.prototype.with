'use strict';

var define = require('define-properties');

var getPolyfill = require('./polyfill');

module.exports = function shim() {
	var polyfill = getPolyfill();

	define(
		Array.prototype,
		{ 'with': polyfill },
		{ 'with': function () { return Array.prototype['with'] !== polyfill; } }
	);

	return polyfill;
};
