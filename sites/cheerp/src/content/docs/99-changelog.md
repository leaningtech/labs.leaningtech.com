---
title: Changelog
---

Cheerp 3.0 - March 6th, 2023

    * Rebase on top of LLVM/Clang 16.0
    * [[cheerp::jsexport]] support for classes compiled to WebAssembly
    * WebAssembly SIMD support
    * CFGStackifier improvements
    * PartialExecuter improvements
    * Various performance improvements
    * Various robustness improvements
    * Switch to new LLVM PassManager
    * Use musl + dlmalloc as libc
    * Progress towards opaque pointer support

Cheerp 2.7 - March 29th, 2022:

    * Rebase on top of LLVM/Clang 14.0
    * Switch to monorepo (cheerp-compiler)
    * Support ES6 modules with -cheerp-make-module=es6
    * Support for C++ exceptions
    * Support for catching JavaScript exceptions
    * Introduction of [[cheerp::interface_name]] attribute
    * Full rework of Cheerp clang checks
    * Removal of cheerp-mode command line options
    * Removal of cfg-legacy command line options
    * Support for branch hint Wasm custom section
    * Various performance improvements
    * Various robustness improvements
    * PartialExecuter and SinkGenerator IR-optimization passes
    * Adopt new BranchHinting standard

Cheerp 2.6 - December 16th, 2020

        * Improved handling of WebAssembly instantiation errors
        * Rebase on top of LLVM/Clang 9.0
        * Full rework of 64-bit integer support
        * Full rework of [[cheerp::jsexport]] support
        * Full rework of LLVM ConstantExpr support
        * Improved codegen for memcpy/memset/memmove
        * Support non-void block types in WebAssembly code
        * Improvements to devirtualization support
        * Improved lowering of SwitchInst

Cheerp 2.5 - May 13th, 2020

        * Target WebAssembly by default
        * Full rework of CFGStackifier
        * Full rework of Registerize (locals allocator)
        * Large improvements to JavaScript/WebAssembly interoperability
        * Rebase on top of LLVM/Clang 6.0
        * Support -cheerp-strict-linking= to report missing symbols at link time
        * Reduced output size (both JavaScript/WebAssembly)
        * Use compount operators (+=, -=, etc) in JavaScript code
        * Reduce code generation time
        * Support RPM packages
        * Support devirtualization of indirect calls in some cases
        * Support removal of indirectly used functions in some cases
        * Support removing unobservable globals in some cases
        * Fixed build determinism
        * Initial support for anyref
        * Various performance improvements
        * Various robustness improvements
        * Experimental support for anyref

Cheerp 2.0 - Feb 18th, 2019

        * Introduce CFGStackifier (successor to Relooper)
        * Support commonjs modules with -cheerp-make-module
        * Support static methods in [[cheerp::jsexport]] classes
        * Support inlining of simple functions across the genericjs/asmjs/wasm boundary
        * Improved sourcemaps support
        * Improved support for __asm__ syntax
        * Reduced output size (both wasm and js)
        * Faster memcpy/memset/memmove in linear memory mode
        * Various performance improvements
        * Various robustness improvements

Cheerp 2.0-RC2 - Apr 23rd, 2018

    * Much improved interoperability between WebAssembly and JavaScript code
    * Much improved compile time errors when using interoperability features
    * Support variable length stack arrays in WebAssembly and JavaScript mode
    * Optimize WebAssembly code generation to reduce code size
    * Support virtual bases in WebAssembly and JavaScript mode
    * Support runtime bounds checking in WebAssembly and JavaScript mode
    * Introduce Identical Code Folding to remove duplicated code in WebAssembly and Asmj.js mode

Cheerp 2.0-RC1 - Nov 11th, 2017:
_ Add a WebAssembly backend that produces binary and textual wasm
_ Add flag -cheerp-asmjs-mem-file to output a file holding asm.js module initialized memory
_ Add flag -cheerp-wasm-loader to output a file that initialises the WebAssembly file
_ Add flag -cheerp-linear-heap-size that sets heap size in megabytes for asmjs and wasm
_ Add flag -cheerp-no-math-fround that disables the usage of Math.fround()
_ Add `[[cheerp::asmjs]]` attribute for setting globals in the asmjs section manually
_ Add `[[cheerp::genericjs]]` attribute for setting globals in the generic section
_ Enabling asmjs mode will define `__ASMJS__` in the preprocessor
_ Enabling wasm mode will define `__WASM__` in the preprocessor
_ Overhaul of priority system to remove useless parenthesis and type coercions

Cheerp 1.3 - Feb 7th, 2017:

    * Improve support for unions
    * Make it possible to define globals in the client namespace
    * Improve support for variadic arguments
    * Improvements to PreExecuter
    * Improvements to JavaScript minimizer
    * Declare all variables at the beginning of the functions
    * Add -cheerp-reserved-names option to skip specific names in the minimizer
    * Improve support for [[cheerp::jsexport]]
    * Make it possible to use [[cheerp::jsexport]] on free functions beside classes
    * Improve precision of float constants
    * Merge small integers fields together
    * Improve promotion of pointer to value arguments
    * Initial support for PreExecusing main/webMain
    * Introduce debug command line flags -cheerp-bounds-check and -cheerp-defined-members-check
    * Enable 64-bit enums
    * Enable dynamic_cast of references
    * Improve compilation speed
    * Various optimizations

Cheerp 1.2.1 - Feb 10th, 2016

    * Fixed encoding of literal strings in JS
    * Minor fixes

Cheerp 1.2 - Jan 25th, 2016

    * Based on updated LLVM/clang
    * Support covariant return types
    * Add support for 64-bit integers
    * Support RTTI and dynamic_cast
    * Improved compiler diagnostic messages
    * Reduced code size
    * Reduced code startup time
    * Improved performance of generated code
    * Support JavaScript module pattern
    * Improved SourceMaps

Cheerp 1.1 - Jun 15th, 2015

    * Greatly improved performance for the generated code

Cheerp 1.0 - May 28th, 2014

    * Initial stable release
    * Greatly improved clientlib.h header
    * Generated Doxygen documentation for Web APIs
    * Several fixes to robustness and performance
