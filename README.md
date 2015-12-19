# Polythene

[![Join the chat at https://gitter.im/ArthurClemens/Polythene](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ArthurClemens/Polythene?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Modular implementation of Material Design for [Mithril](http://lhorie.github.io/mithril).


* [Examples](http://arthurclemens.github.io/Polythene-examples/index.html)
* [Documentation](http://polythene.js.org)



## Setup

Polythene uses Node tools to build. It can run in Node and in the browser.

Source files are written in es6 and transpiled to es5. The building blocks are async es6 modules and loaded when needed, but using SystemJS / jspm / Browserify  it is also possible to create bundles where all required modules are combined.

Polythene works both in es6 and es5 applications.


## Installation

You will need:

* `Polythene` - the core components (this repository; see instructions below)
* [Polythene theme](https://github.com/ArthurClemens/Polythene-theme) - the default theme
* [Polythene examples](https://github.com/ArthurClemens/Polythene-examples) - (optional) to see implementations of components


### Using npm with SystemJS or Browserify

```
npm install polythene
npm install polythene-theme
```

### Using jspm

```
jspm install github:ArthurClemens/Polythene
jspm install github:ArthurClemens/Polythene-theme
```


## Developing

Transpile everything once:

* `npm run transpile`

Watch changes while developing:

* `npm run watch`


## Browser support

The default theme uses flexbox, so this works in IE10 and other browsers. For IE9 you will need to adapt the theme.



## License

MIT
