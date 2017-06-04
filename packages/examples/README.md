# Polythene Examples

Demonstration of [Polythene](https://github.com/ArthurClemens/Polythene) components.

Online demos: [Polythene Examples](http://arthurclemens.github.io/Polythene-examples/index.html).


## Setup

* `cd src`
* `npm install`

This installs

* [Polythene](https://github.com/ArthurClemens/Polythene) - the core components
* [Polythene theme](https://github.com/ArthurClemens/Polythene-theme) - the default theme
* all example dependencies


## Viewing

Start up a local server, for instance:

* `npm install -g http-server`

Then:

* `http-server .`


## Developing

The examples are currently set up in 2 ways (to keep things relatively flexible):

* `src` uses SystemJS
* `build` uses Browserify

All examples are required using `import`, so everything gets bundled to one big file. Ideal for an app but not so much for a mobile website. Theoretically you could load all examples dynamically using `System.import()`, but this does not work nicely together with Browserify. I'll leave that as an excercise to the reader...


### Scripts

From the `src` directory:

* `npm run watch` - watches code changes in the src directory; transpiles to es5 in the src directory only
* `npm run transpile` - only transpile the es6 files once in the src directory
* `npm run build` - updates the build directory once; minifies built files

The watch/build scripts use babelify to transpile es6 to es5, but you can also choose to only use the included es5 files.
