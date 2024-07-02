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
function j() {
	var a = null;
	a = g();
	console.log(a);
	return;
}
function g() {
	var a = null,
		d = null;
	a = String();
	d = String.fromCharCode(72);
	a = a.concat(d);
	d = String.fromCharCode(101);
	a = a.concat(d);
	d = String.fromCharCode(108);
	a = a.concat(d);
	d = String.fromCharCode(108);
	a = a.concat(d);
	d = String.fromCharCode(111);
	a = a.concat(d);
	d = String.fromCharCode(32);
	a = a.concat(d);
	d = String.fromCharCode(87);
	a = a.concat(d);
	d = String.fromCharCode(111);
	a = a.concat(d);
	d = String.fromCharCode(114);
	a = a.concat(d);
	d = String.fromCharCode(108);
	a = a.concat(d);
	d = String.fromCharCode(100);
	a = a.concat(d);
	return String(a);
}
var HEAP8 = null;
var HEAP16 = null;
var HEAP32 = null;
var HEAPF32 = null;
var HEAPF64 = null;
var __asm = null;
function _asm_j() {
	j();
}
function __dummy() {
	throw new Error("this should be unreachable");
}
var importObject = { imports: { __Z9domOutputPKc: _asm_j } };
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
		instance.exports.h();
	}, console.log)
	.catch(console.log);
