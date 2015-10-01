# Polythene

[![Join the chat at https://gitter.im/ArthurClemens/Polythene](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ArthurClemens/Polythene?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Modular implementation of Material Design for [Mithril](http://lhorie.github.io/mithril). 

Version 0.1.4


* [Examples](http://arthurclemens.github.io/Polythene-Examples/index.html)
* [Documentation](http://polythene.js.org)


## Browser support

The default theme uses flexbox, so this works in IE10 and other browsers. For IE9 you will need to adapt the theme.


## Setup

Polythene uses Node tools to build. It can run in Node and in the browser.

Source files are written in es6 and transpiled to es5. Components are async es6 modules and loaded when needed, but using [SystemJS Builder](https://github.com/systemjs/builder) or [jspm](https://github.com/jspm/jspm-cli) it is also possible to create bundles where all required modules are combined.

To keep the components modular (and only required when needed) I have chosen to keep the async aspect. 
The `examples` and `docs` directories show a more complete "real world" setup of a Mithril/Polythene application using SystemJS.

Polythene works both in es6 and es5 applications.


## Installation

Either:
* Download or clone from Github
* `npm install`

Or:
* `npm install Polythene`



## Examples

Follow instructions in the examples folder:

* `cd examples`
* See the README in that folder


## Developing

For compiling/transpiling, you need to install the following:

* `npm install postcss-cli -g`
* `npm install clean-css -g`
* `npm install babel -g`

Compile (transpile) everything:

* `npm run transpile` - compile all scss and es6 files

While developing:

* `npm run watch` - watch changes to scss and es6 files



## License

MIT

