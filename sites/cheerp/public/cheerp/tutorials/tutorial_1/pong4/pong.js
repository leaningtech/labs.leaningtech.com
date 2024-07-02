"use strict";
/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/ var aSlot = null;
var oSlot = 0;
var nullArray = [null];
var nullObj = { d: nullArray, o: 0 };
function fetchBuffer(path) {
	var bytes = null;
	if (typeof window === "undefined" && typeof require === "undefined") {
		bytes = new Promise((resolve, reject) => {
			resolve(read(path, "binary"));
		});
	} else if (typeof window === "undefined") {
		var fs = require("fs");
		bytes = new Promise((resolve, reject) => {
			fs.readFile(path, function (error, data) {
				if (error) reject(error);
				else resolve(data);
			});
		});
	} else {
		bytes = fetch(path).then((response) => response.arrayBuffer());
	}
	return bytes;
}
function M(c) {
	var a = -0;
	a = +c.keyCode;
	if (a === 37) {
		K();
		return;
	}
	a = +c.keyCode;
	if (!(a === 39)) {
		return;
	}
	J();
	return;
}
function p(k, f, e, c, a) {
	var s = null,
		r = null,
		ac = null,
		ab = null,
		aa = null,
		$ = null,
		Z = null,
		Y = null,
		X = null;
	s = j;
	r = "";
	ac = "rgb(";
	ab = String(a & 255);
	aa = ",";
	$ = String((a >>> 8) & 255);
	Z = ",";
	Y = String((a >>> 16) & 255);
	X = ")";
	r = r.concat(ac, ab, aa, $, Z, Y, X);
	s.fillStyle = r;
	s = j;
	s.fillRect(+(k | 0), +(f | 0), +(e | 0), +(c | 0));
	return;
}
function E() {
	var a = null,
		c = null;
	W = 400;
	V = 400;
	a = "pongcanvas";
	a = document.getElementById(a);
	a = a;
	h = a;
	a.width = 400;
	a = h;
	a.height = 400;
	a = document.body;
	c = h;
	a.appendChild(c);
	a = h;
	c = "2d";
	a = a.getContext(c);
	j = a;
	a = n;
	+requestAnimationFrame(a);
	a = "keydown";
	c = M;
	document.addEventListener(a, c);
	return;
}
function n() {
	var a = null;
	Q();
	a = n;
	+requestAnimationFrame(a);
	return;
}
function d(a, b) {
	var e = 0,
		f = 0,
		c = null,
		k = null;
	c = String();
	e = a[b] | 0;
	if ((e & 255) === 0) {
		return String(c);
	} else {
		f = 0;
	}
	while (1) {
		k = String.fromCharCode((e << 24) >> 24);
		c = c.concat(k);
		f = (f + 1) | 0;
		e = a[(b + f) | 0] | 0;
		if ((e & 255) === 0) {
			break;
		}
	}
	return String(c);
}
var W;
var V;
var U = new Uint8Array([112, 111, 110, 103, 99, 97, 110, 118, 97, 115, 0]);
var h;
var S = new Uint8Array([50, 100, 0]);
var j;
var R = new Uint8Array([107, 101, 121, 100, 111, 119, 110, 0]);
var T = [0];
var P = new Uint8Array([114, 103, 98, 40, 0]);
var O = new Uint8Array([44, 0]);
var N = new Uint8Array([41, 0]);
var HEAP8 = null;
var HEAP16 = null;
var HEAP32 = null;
var HEAPF32 = null;
var HEAPF64 = null;
var __asm = null;
function _asm_p(k, f, e, c, a) {
	p(k, f, e, c, a);
}
function _asm_E() {
	E();
}
function Q() {
	__asm.Q();
}
function J() {
	__asm.J();
}
function K() {
	__asm.K();
}
function __dummy() {
	throw new Error("this should be unreachable");
}
var importObject = {
	imports: {
		__ZN8Graphics8drawRectEiiiii: _asm_p,
		__ZN8Graphics16initializeCanvasEii: _asm_E,
	},
};
fetchBuffer("pong.wasm")
	.then(
		(bytes) =>
			WebAssembly.compile(bytes).then(
				(m) => new WebAssembly.Instance(m, importObject),
				console.log,
			),
		console.log,
	)
	.then((instance) => {
		HEAP8 = new Uint8Array(instance.exports.memory.buffer);
		HEAP16 = new Uint16Array(instance.exports.memory.buffer);
		HEAP32 = new Int32Array(instance.exports.memory.buffer);
		HEAPF32 = new Float32Array(instance.exports.memory.buffer);
		HEAPF64 = new Float64Array(instance.exports.memory.buffer);
		__asm = instance.exports;
		instance.exports.F();
	}, console.log)
	.catch(console.log);
