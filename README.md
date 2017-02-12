# Polythene

[![Join the chat at https://gitter.im/ArthurClemens/Polythene](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ArthurClemens/Polythene?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![CDNJS](https://img.shields.io/cdnjs/v/polythene.svg)](https://cdnjs.com/libraries/polythene)

Modular implementation of Material Design for [Mithril](http://lhorie.github.io/mithril).

* [Demos / Examples](http://arthurclemens.github.io/Polythene-examples/)
* [Online documentation](http://polythene.js.org)
* [Project setup example](https://github.com/ArthurClemens/Polythene-setup)



## Release 0.2.0

This release contains a major refactoring of all components, including:

* CSS now uses BEM notation
* Polythene-theme is now integrated
* More options to customize theming
* Simplified opening/closing of dialogs
* Rewrite of Slider with more customization options

Added components:

* Checkbox
* Radio button
* Search
* Spinner
* Switch
* Text field



## Background

* [Polythene background](https://github.com/ArthurClemens/Polythene/blob/master/polythene/polythene.md)
* [Theming](https://github.com/ArthurClemens/Polythene/blob/master/theme/theme.md)



## Setup

Polythene uses Node tools to build. It runs in the browser.

Source files are written in es6 and transpiled to es5. The building blocks are async es6 modules and loaded when needed, but using SystemJS / jspm / Browserify it is also possible to create bundles where all required modules are combined.

Polythene works both in es6 and es5 applications.



### Basic example

A simple es6 module that shows a button:

~~~javascript
import m from 'mithril';
import button from 'polythene/button/button';
import 'polythene/theme/theme';

const app = {
    view: () => {
        return m('div', [
            m.component(button, {
                label: 'Button',
                raised: true
            })
        ]);
    }
};

m.mount(document.body, app);
~~~

### Standalone version

A standalone script is included for use on JSBin / JSFiddle. Include this script:

~~~html
https://rawgit.com/ArthurClemens/Polythene/master/polythene-standalone.js
~~~



## Installation

You will need:

* `Polythene` - the core components (this repository; see instructions below)
* [Polythene examples](https://github.com/ArthurClemens/Polythene-examples) - (optional) to see implementations of components


### Using npm with SystemJS or Browserify

~~~
npm install polythene
~~~

### Using jspm

~~~
jspm install github:ArthurClemens/Polythene
~~~



## Using Polythene with es5

When using Browserify, use `require` to get components:

~~~javascript
var m = require('mithril');
require('polythene/theme/theme');
var btn = require('polythene/button/button');
~~~



## Developing

Transpile everything:

* `npm run transpile .`

Transpile the dialog component:

* `npm run transpile dialog`



## Browser support

The default theme uses flexbox, so this works in IE10 and other browsers. For IE9 you will need to adapt the theme.



## Project progress

### Done

* Button
* Card
* Checkbox
* Dialog
* Divider (part of List)
* Floating Action Button
* Header panel
* Icon
* Icon button (toggle button)
* List
* List tile
* Menu, Simple menu
* Notification and Snackbar
* Radio button
* Ripple
* Search
* Shadow
* Slider
* Spinner
* Subheader (part of List)
* SVG
* Switch
* Tabs
* Text field
* Theming
* Toolbar
* Validation



### To do

1. Collapse
1. Dropdown button
1. Progress bar
1. Bottom sheet
1. Grid list
1. Data table
1. Stepper
1. Tooltip
1. Side menu
1. Picker
1. Chip
1. Reorder list



## License

MIT
