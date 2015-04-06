# Polythene

Polymer inspired modular implementation of Material Design. Use with [Mithril](http://lhorie.github.io/mithril) or as plain HTML/CSS.

Alpha status. Things will break.



## Background

Polythene borrows a great deal from [Polymer](http://polymer.github.io) (CSS styles, component names), but their architectures are fundamentally different.
 
Polymer is the leading framework of Web Components - an extensive collection of reusable user interface widgets, each with its own encapsulated code (HTML, CSS, JS). Components can be loosely coupled using each predefined component interface. You _can_ build app logic with Web Components, but without a framework (Angular, React) this can become quite messy.

[Mithril](http://lhorie.github.io/mithril) is a small and fast MVC framework that encourages a clean app architecture. In Mithril pretty much everything is a function. Templates are functions that return objects, so they can be passed around, composed, mixed, have lazy rendering, etcetera.

So Polythene components are functions with all the flexibility that Mithril brings. This makes it easy to compose larger components from smaller ones, and to mix and match components together.

Component dependencies are handled through [RequireJS](http://requirejs.org) (still the cleanest choice for asynchronous JS modules), that also takes care of loading component specific CSS.

The generated HTML is styled by CSS. It is also possible to just use the HTML and CSS if you don't want to use Mithril. But of course you will not have the benefit of integration that components bring.



## Composition

"Icon" is a small example how components can be combined. It is a wrapper around an SVG object (or PNG if you wish):

	var icon = require('polythene/icon/icon');
	icon({
	    svg: {
	        group: 'navigation',
	        name: 'menu'
	    }
	});

So `icon` is a function that takes an `args` object, where `svg` passes args to the "svg" component.

Polythene renders this function as HTML. But the function can also be used to create a larger component, such as `an "icon button".

	var icon = require('polythene/icon/icon');
	var menuIcon = icon({
	    svg: {
	        group: 'navigation',
	        name: 'menu'
	    }
	});

	var iconBtn = require('polythene/icon-button/icon-button');
	iconBtn({
		content: menuIcon
	})

Or using Object notation:

	var iconBtn = require('polythene/icon-button/icon-button');
	iconBtn({
		icon: {
		    svg: {
		        group: 'navigation',
		        name: 'menu'
		    }
		}
	})


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

