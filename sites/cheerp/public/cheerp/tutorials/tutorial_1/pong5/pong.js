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
function Y(c) {
	var a = -0;
	a = +c.keyCode;
	if (a === 37) {
		X();
		return;
	}
	a = +c.keyCode;
	if (!(a === 39)) {
		return;
	}
	W();
	return;
}
function w(i, f, d, c, a) {
	var q = null,
		p = null,
		ar = null,
		aq = null,
		ap = null,
		E = null,
		D = null,
		C = null,
		B = null;
	q = g;
	p = "";
	ar = "rgb(";
	aq = String(a & 255);
	ap = ",";
	E = String((a >>> 8) & 255);
	D = ",";
	C = String((a >>> 16) & 255);
	B = ")";
	p = p.concat(ar, aq, ap, E, D, C, B);
	q.fillStyle = p;
	q = g;
	q.fillRect(+(i | 0), +(f | 0), +(d | 0), +(c | 0));
	return;
}
function U() {
	var c = null,
		a = null,
		d = 0;
	c = g;
	a = "24px sans-serif";
	c.font = a;
	c = g;
	a = "rgb(255,255,255)";
	c.fillStyle = a;
	c = g;
	a = "You lost!";
	d = A | 0;
	c.fillText(a, 0, +((d + -24) | 0));
	return;
}
function S() {
	var a = null,
		c = null;
	ak = 400;
	A = 400;
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
	a = v;
	+requestAnimationFrame(a);
	a = "keydown";
	c = Y;
	document.addEventListener(a, c);
	return;
}
function v() {
	var a = null;
	V();
	a = v;
	+requestAnimationFrame(a);
	return;
}
function j(c, a) {
	var d = null,
		f = null,
		E = null,
		D = null,
		C = null,
		B = null,
		q = null,
		p = null,
		i = null;
	d = g;
	f = "";
	E = "rgb(";
	D = String(255);
	C = ",";
	B = String(255);
	q = ",";
	p = String(255);
	i = ")";
	f = f.concat(E, D, C, B, q, p, i);
	d.fillStyle = f;
	d = g;
	d.beginPath();
	d = g;
	d.arc(+(c | 0), +(a | 0), 5, 0, 6.2831853071795862);
	d = g;
	d.fill();
	return;
}
function e(a, b) {
	var d = 0,
		f = 0,
		c = null,
		i = null;
	c = String();
	d = a[b] | 0;
	if ((d & 255) === 0) {
		return String(c);
	} else {
		f = 0;
	}
	while (1) {
		i = String.fromCharCode((d << 24) >> 24);
		c = c.concat(i);
		f = (f + 1) | 0;
		d = a[(b + f) | 0] | 0;
		if ((d & 255) === 0) {
			break;
		}
	}
	return String(c);
}
var ak;
var A;
var aj = new Uint8Array([112, 111, 110, 103, 99, 97, 110, 118, 97, 115, 0]);
var l;
var ah = new Uint8Array([50, 100, 0]);
var g;
var ag = new Uint8Array([107, 101, 121, 100, 111, 119, 110, 0]);
var ai = [0];
var ac = new Uint8Array([114, 103, 98, 40, 0]);
var ab = new Uint8Array([44, 0]);
var af = new Uint8Array([41, 0]);
var ae = new Uint8Array([
	50, 52, 112, 120, 32, 115, 97, 110, 115, 45, 115, 101, 114, 105, 102, 0,
]);
var Z = new Uint8Array([
	114, 103, 98, 40, 50, 53, 53, 44, 50, 53, 53, 44, 50, 53, 53, 41, 0,
]);
var HEAP8 = null;
var HEAP16 = null;
var HEAP32 = null;
var HEAPF32 = null;
var HEAPF64 = null;
var __asm = null;
function _asm_w(i, f, d, c, a) {
	w(i, f, d, c, a);
}
function _asm_j(c, a) {
	j(c, a);
}
function _asm_U() {
	U();
}
function _asm_S() {
	S();
}
function V() {
	__asm.V();
}
function W() {
	__asm.W();
}
function X() {
	__asm.X();
}
function __dummy() {
	throw new Error("this should be unreachable");
}
var importObject = {
	imports: {
		__ZN8Graphics8drawRectEiiiii: _asm_w,
		__ZN8Graphics10drawCircleEiiii: _asm_j,
		__ZN8Graphics11debugOutputEPKc: _asm_U,
		__ZN8Graphics16initializeCanvasEii: _asm_S,
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
		instance.exports.T();
	}, console.log)
	.catch(console.log);
