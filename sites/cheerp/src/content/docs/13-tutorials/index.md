---
title: Tutorials
---

These tutorials are provided in order of increasing complexity, but are all self-contained and can be followed independently.

The main idea behind these tutorials is to guide you step by step through the specifics of compiling different types of C++ code to be run on the browser. They are designed to be educationals and easy to follow, and to show bite-sized best practices, rather than to push the limits of what's achievable with Cheerp.

### Hello, WebAssembly! ([Link to the Tutorial](/docs/tutorials/hello-wasm))

In this tutorial, we compile an Hello World to WebAssembly _and_ JavaScript, in order to use `console.log`.

- Input methods: none
- Output methods: `console.log()`, via `std::cout<<`
- Compilation mode: genericjs and wasm (C++ to WebAssembly and JavaScript)

### DOM Manipulation ([Link to the Tutorial](/docs/tutorials/dom))

In this tutorial, we modify the DOM of an existing HTML page from a C++ code compiled with Cheerp. We show webMain specifics and onLoad callback patterns, and the possibility to listen and respond to any DOM event with `cheerp::Callback`

- Input methods: DOM structure, text input, mouse position, clicks on buttons
- Output methods: DOM structure and `console.log()`
- Compilation mode: genericjs

### Pong: mixed mode JavaScript and WebAssembly ([Link to the Tutorial](/docs/tutorials/pong))

In this tutorial, we build a small Pong game in C++, and compile it to WebAssembly. We use C++ to draw on a Canvas in WebAssembly, while taking care of the input in the JavaScript side

- Input methods: key pressed
- Output methods: canvas element
- Compilation mode: genericjs and wasm (C++ to WebAssembly and JavaScript)

### Webworkers ([Link to the Tutorial](/docs/tutorials/webworkers))

In this tutorial, we see the basics of initializating a Web Worker in Cheerp, and passing messages.

- Input methods: none
- Output methods: `console.log()`
- Compilation mode: genericjs
