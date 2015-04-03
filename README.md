# Polythene

Polymer inspired modular implementation of Material Design. Use with [Mithril](http://lhorie.github.io/mithril) or as HTML/CSS modules.

Alpha status. Things will break.



## Motivation

This is a first stab at a collection of [Mithril](http://lhorie.github.io/mithril) frontend modules. Polythene borrows a great deal from [Polymer](http://polymer.github.io) (CSS styles, component names), but the architecture is fundamentally different.
 
Polymer is the leading framework of Web Components - an extensive collection of reusable user interface widgets, each with its own encapsulated code (HTML, CSS, JS). Components can be loosely coupled using each predefined component interface. You _can_ build app logic with Web Components, but without a framework (Angular, React) this can become quite messy.

Mithril is a small and fast MVC framework that encourages a clean app architecture. In Mithril pretty much everything is a function. Templates are functions that return objects, so they can be passed around, composed, mixed, have lazy rendering, etcetera.

So Polythene modules are functions with all the flexibility that Mithril brings. This makes it easy to combine smaller components into larger and to add interactivity.

Module dependencies are handled through [RequireJS](http://requirejs.org) (still the cleanest choice for asynchronous modules), including module specific CSS.

The generated HTML is styled by CSS. It is also possible to just use the HTML and CSS if you don't want to use Mithril.



## Examples

See [Polythene Examples](https://github.com/ArthurClemens/Polythene-Examples).



## Dependencies

To use Polythene, you will need:

* [Mithril](http://lhorie.github.io/mithril)
* [RequireJS](http://requirejs.org)
* [require-css](https://github.com/guybedford/require-css)
* [Material Design Iconic Font](https://github.com/zavoloklom/material-design-iconic-font)


## Installation

See the Examples repository.



## Development

NodeJS scripts are used for installing the development dependencies. For this step you need to have `npm` installed.

In the root directory, run the following commands:

1. `npm install` - installs grunt, grunt plugins and bower
2. `grunt deps` - lets bower install the frontend dependencies

If you want to change/extend Polythene and compile Sass files to Css, run:

* `grunt css`



## License

* Polythene: MIT
* Polymer: [Copyright (c) 2014 The Polymer Authors. All rights reserved.](http://polymer.github.io/LICENSE.txt)

