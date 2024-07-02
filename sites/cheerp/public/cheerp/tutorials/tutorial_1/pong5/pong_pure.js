"use strict";
/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/ var aq = Math.imul;
var ar = Math.fround;
var aSlot = null;
var oSlot = 0;
var nullArray = [null];
var nullObj = { d: nullArray, o: 0 };
function asmJS(stdlib, ffi, heap) {
	"use asm";
	var __stackPtr = ffi.heapSize | 0;
	var HEAP8 = new stdlib.Uint8Array(heap);
	var HEAP16 = new stdlib.Uint16Array(heap);
	var HEAP32 = new stdlib.Int32Array(heap);
	var HEAPF32 = new stdlib.Float32Array(heap);
	var HEAPF64 = new stdlib.Float64Array(heap);
	var Infinity = stdlib.Infinity;
	var NaN = stdlib.NaN;
	var abs = stdlib.Math.abs;
	var acos = stdlib.Math.acos;
	var asin = stdlib.Math.asin;
	var atan = stdlib.Math.atan;
	var atan2 = stdlib.Math.atan2;
	var ceil = stdlib.Math.ceil;
	var cos = stdlib.Math.cos;
	var exp = stdlib.Math.exp;
	var floor = stdlib.Math.floor;
	var log = stdlib.Math.log;
	var pow = stdlib.Math.pow;
	var sin = stdlib.Math.sin;
	var sqrt = stdlib.Math.sqrt;
	var tan = stdlib.Math.tan;
	var aq = stdlib.Math.imul;
	var ar = stdlib.Math.fround;
	var __dummy = ffi.__dummy;
	function ap() {
		var __savedStack = 0;
		__savedStack = __stackPtr;
		__stackPtr = __stackPtr & 0xfffffff8;
		__stackPtr = __savedStack;
		return;
	}
	function __asmjs_memmove(src, dst, size) {
		src = src | 0;
		dst = dst | 0;
		size = size | 0;
		var i = 0;
		var end = 0;
		var inc = 1;
		if (src >>> 0 < dst >>> 0) {
			i = (size - 1) | 0;
			end = -1;
			inc = -1;
		} else end = size;
		while (1) {
			if ((i | 0) == (end | 0)) break;
			HEAP8[(dst + i) | 0] = HEAP8[(src + i) | 0];
			i = (i + inc) | 0;
		}
		return dst | 0;
	}
	var __FUNCTION_TABLE_v = [ap];
	return {};
}
var heap = new ArrayBuffer(1048576);
var HEAP8 = new Uint8Array(heap);
var HEAP16 = new Uint16Array(heap);
var HEAP32 = new Int32Array(heap);
var HEAPF32 = new Float32Array(heap);
var HEAPF64 = new Float64Array(heap);
function __dummy() {
	throw new Error("this should be unreachable");
}
var ffi = { heapSize: heap.byteLength, __dummy: __dummy };
var stdlib = {
	Math: Math,
	Infinity: Infinity,
	NaN: NaN,
	Uint8Array: Uint8Array,
	Uint16Array: Uint16Array,
	Int32Array: Int32Array,
	Float32Array: Float32Array,
	Float64Array: Float64Array,
};
function X(d) {
	var c = -0,
		a = 0;
	c = +d.keyCode;
	if (c === 37) {
		a = j | 0;
		j = (a + -5) | 0;
		return;
	}
	c = +d.keyCode;
	if (!(c === 39)) {
		return;
	}
	a = j | 0;
	j = (a + 5) | 0;
	return;
}
function W() {
	var a = 0,
		f = 0,
		d = 0,
		c = 0,
		k = null,
		h = null;
	v(0, 0, 400, 400, 0);
	a = j | 0;
	v(a, 380, 30, 7, 16777215);
	f = y | 0;
	a = p | 0;
	d = (a + f) | 0;
	p = d;
	a = n | 0;
	c = o | 0;
	c = (c + a) | 0;
	o = c;
	if (!((c | 0) < 400)) {
		k = g;
		h = "24px sans-serif";
		k.font = h;
		k = g;
		h = "rgb(255,255,255)";
		k.fillStyle = h;
		k = g;
		h = "You lost!";
		a = z | 0;
		k.fillText(h, 0, +((a + -24) | 0));
		a = p | 0;
		f = o | 0;
		m(a, f);
		return;
	}
	if (!((d + -1) >>> 0 < 399)) {
		y = (0 - f) | 0;
	}
	if ((c | 0) < 1) {
		a = (0 - a) | 0;
		n = a;
	}
	f = j | 0;
	if (
		!((c + -381) >>> 0 < 29 && (f | 0) < (d | 0) && ((f + 30) | 0) > (d | 0))
	) {
		m(d, c);
		return;
	}
	n = (0 - a) | 0;
	m(d, c);
	return;
}
function v(h, f, d, c, a) {
	var q = null,
		k = null,
		ao = null,
		an = null,
		am = null,
		E = null,
		D = null,
		C = null,
		B = null;
	q = g;
	k = "";
	ao = "rgb(";
	an = String(a & 255);
	am = ",";
	E = String((a >>> 8) & 255);
	D = ",";
	C = String((a >>> 16) & 255);
	B = ")";
	k = k.concat(ao, an, am, E, D, C, B);
	q.fillStyle = k;
	q = g;
	q.fillRect(+(h | 0), +(f | 0), +(d | 0), +(c | 0));
	return;
}
function V() {
	U();
	return;
}
function U() {
	var a = null,
		c = null;
	ad = 400;
	z = 400;
	a = "pongcanvas";
	a = document.getElementById(a);
	a = a;
	l = a;
	a.width = 400;
	a = l;
	a.height = 400;
	a = document.body;
	c = l;
	a.appendChild(c);
	a = l;
	c = "2d";
	a = a.getContext(c);
	g = a;
	a = x;
	+requestAnimationFrame(a);
	a = "keydown";
	c = X;
	document.addEventListener(a, c);
	return;
}
function x() {
	var a = null;
	W();
	a = x;
	+requestAnimationFrame(a);
	return;
}
function m(d, c) {
	var a = null,
		f = null,
		E = null,
		D = null,
		C = null,
		B = null,
		q = null,
		k = null,
		h = null;
	a = g;
	f = "";
	E = "rgb(";
	D = String(255);
	C = ",";
	B = String(255);
	q = ",";
	k = String(255);
	h = ")";
	f = f.concat(E, D, C, B, q, k, h);
	a.fillStyle = f;
	a = g;
	a.beginPath();
	a = g;
	a.arc(+(d | 0), +(c | 0), 5, 0, 6.2831853071795862);
	a = g;
	a.fill();
	return;
}
function e(a, b) {
	var d = 0,
		f = 0,
		c = null,
		h = null;
	c = String();
	d = a[b] | 0;
	if ((d & 255) === 0) {
		return String(c);
	} else {
		f = 0;
	}
	while (1) {
		h = String.fromCharCode((d << 24) >> 24);
		c = c.concat(h);
		f = (f + 1) | 0;
		d = a[(b + f) | 0] | 0;
		if ((d & 255) === 0) {
			break;
		}
	}
	return String(c);
}
var ad;
var z;
var aj = new Uint8Array([112, 111, 110, 103, 99, 97, 110, 118, 97, 115, 0]);
var l;
var ai = new Uint8Array([50, 100, 0]);
var g;
var ah = new Uint8Array([107, 101, 121, 100, 111, 119, 110, 0]);
var j = 185;
var y = 2;
var p = 200;
var n = -2;
var o = 200;
var ac = new Uint8Array([
	50, 52, 112, 120, 32, 115, 97, 110, 115, 45, 115, 101, 114, 105, 102, 0,
]);
var ab = new Uint8Array([
	114, 103, 98, 40, 50, 53, 53, 44, 50, 53, 53, 44, 50, 53, 53, 41, 0,
]);
var aa = new Uint8Array([89, 111, 117, 32, 108, 111, 115, 116, 33, 0]);
var $ = [0];
var ag = new Uint8Array([114, 103, 98, 40, 0]);
var af = new Uint8Array([44, 0]);
var ae = new Uint8Array([41, 0]);
var __asm = asmJS(stdlib, ffi, heap);
V();
