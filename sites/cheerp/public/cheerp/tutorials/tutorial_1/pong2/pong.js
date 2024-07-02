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
function u() {
	var a = null,
		b = null;
	B = 400;
	j = 400;
	a = "pongcanvas";
	a = document.getElementById(a);
	a = a;
	f = a;
	a.width = 400;
	a = f;
	a.height = 400;
	a = document.body;
	b = f;
	a.appendChild(b);
	a = f;
	b = "2d";
	a = a.getContext(b);
	h = a;
	return;
}
function t() {
	var b = null,
		a = null,
		c = 0;
	b = h;
	a = "24px sans-serif";
	b.font = a;
	b = h;
	a = "Hello Canvas";
	c = j | 0;
	b.fillText(a, 0, +((c + -24) | 0));
	return;
}
function e(c, d) {
	var b = 0,
		g = 0,
		a = null,
		D = null;
	a = String();
	b = c[d] | 0;
	if ((b & 255) === 0) {
		return String(a);
	} else {
		g = 0;
	}
	while (1) {
		D = String.fromCharCode((b << 24) >> 24);
		a = a.concat(D);
		g = (g + 1) | 0;
		b = c[(d + g) | 0] | 0;
		if ((b & 255) === 0) {
			break;
		}
	}
	return String(a);
}
var h;
var C = new Uint8Array([
	50, 52, 112, 120, 32, 115, 97, 110, 115, 45, 115, 101, 114, 105, 102, 0,
]);
var j;
var B;
var y = new Uint8Array([112, 111, 110, 103, 99, 97, 110, 118, 97, 115, 0]);
var f;
var x = new Uint8Array([50, 100, 0]);
var HEAP8 = null;
var HEAP16 = null;
var HEAP32 = null;
var HEAPF32 = null;
var HEAPF64 = null;
var __asm = null;
function _asm_t() {
	t();
}
function _asm_u() {
	u();
}
function __dummy() {
	throw new Error("this should be unreachable");
}
var importObject = {
	imports: {
		__ZN8Graphics11debugOutputEPKc: _asm_t,
		__ZN8Graphics16initializeCanvasEii: _asm_u,
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
		instance.exports.z();
	}, console.log)
	.catch(console.log);
