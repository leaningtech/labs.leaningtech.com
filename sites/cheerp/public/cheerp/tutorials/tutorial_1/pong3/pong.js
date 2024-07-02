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
function o(j, f, e, c, a) {
	var q = null,
		p = null,
		V = null,
		U = null,
		T = null,
		S = null,
		R = null,
		Q = null,
		P = null;
	q = i;
	p = "";
	V = "rgb(";
	U = String(a & 255);
	T = ",";
	S = String((a >>> 8) & 255);
	R = ",";
	Q = String((a >>> 16) & 255);
	P = ")";
	p = p.concat(V, U, T, S, R, Q, P);
	q.fillStyle = p;
	q = i;
	q.fillRect(+(j | 0), +(f | 0), +(e | 0), +(c | 0));
	return;
}
function B() {
	var a = null,
		c = null;
	O = 400;
	N = 400;
	a = "pongcanvas";
	a = document.getElementById(a);
	a = a;
	g = a;
	a.width = 400;
	a = g;
	a.height = 400;
	a = document.body;
	c = g;
	a.appendChild(c);
	a = g;
	c = "2d";
	a = a.getContext(c);
	i = a;
	a = m;
	+requestAnimationFrame(a);
	return;
}
function m() {
	var a = null;
	D();
	a = m;
	+requestAnimationFrame(a);
	return;
}
function d(a, b) {
	var e = 0,
		f = 0,
		c = null,
		j = null;
	c = String();
	e = a[b] | 0;
	if ((e & 255) === 0) {
		return String(c);
	} else {
		f = 0;
	}
	while (1) {
		j = String.fromCharCode((e << 24) >> 24);
		c = c.concat(j);
		f = (f + 1) | 0;
		e = a[(b + f) | 0] | 0;
		if ((e & 255) === 0) {
			break;
		}
	}
	return String(c);
}
var O;
var N;
var M = new Uint8Array([112, 111, 110, 103, 99, 97, 110, 118, 97, 115, 0]);
var g;
var J = new Uint8Array([50, 100, 0]);
var i;
var I = [0];
var H = new Uint8Array([114, 103, 98, 40, 0]);
var K = new Uint8Array([44, 0]);
var E = new Uint8Array([41, 0]);
var HEAP8 = null;
var HEAP16 = null;
var HEAP32 = null;
var HEAPF32 = null;
var HEAPF64 = null;
var __asm = null;
function _asm_o(j, f, e, c, a) {
	o(j, f, e, c, a);
}
function _asm_B() {
	B();
}
function D() {
	__asm.D();
}
function __dummy() {
	throw new Error("this should be unreachable");
}
var importObject = {
	imports: {
		__ZN8Graphics8drawRectEiiiii: _asm_o,
		__ZN8Graphics16initializeCanvasEii: _asm_B,
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
		instance.exports.C();
	}, console.log)
	.catch(console.log);
