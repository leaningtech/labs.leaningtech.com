"use strict";
/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/ var m = Math.imul;
var n = Math.fround;
var oSlot = 0;
var nullArray = [null];
var nullObj = { d: nullArray, o: 0 };
function k() {
	console.log(j());
}
function j() {
	return String(i());
}
function i() {
	var b = null,
		c = 0,
		a = 0;
	b = String();
	a = 0;
	c = 72;
	while (1) {
		b = b.concat(String.fromCharCode((c << 24) >> 24));
		a = (a + 1) | 0;
		c = l[(0 + a) | 0] | 0;
		if ((c & 255) !== 0) continue;
		break;
	}
	return b;
}
var l = new Uint8Array([
	72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 32, 87, 105, 100, 101,
	32, 87, 101, 98, 33, 0,
]);
k();
