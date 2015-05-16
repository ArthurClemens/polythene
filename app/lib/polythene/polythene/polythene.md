# Polythene: Material Design for Mithril

Polymer inspired modular implementation of Material Design for [Mithril](http://lhorie.github.io/mithril). Available on [Github](https://github.com/ArthurClemens/Polythene).

<p style='color: red'>Work in progress</p>

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-Examples/index.html">All demos</a>


## Background

Polythene borrows a great deal from [Polymer](http://polymer.github.io) (CSS styles, component names), but instead of using Web Components, it is built with [Mithril](http://lhorie.github.io/mithril).

Mithril is a small and fast MVC framework that encourages a clean app architecture. In Mithril pretty much everything is a function. Templates are functions that return objects, so they can be passed around, composed, mixed, have lazy rendering, etcetera.

Polythene components inherit all of the flexibility of Mithril components.



## Composition

The icon component is a small example how components can be combined. It is a wrapper around an image or SVG:

	var icon = require('polythene/icon/icon');
	var myIcon = m.component(icon, {
		src: 'app/icon/img/ic_directions_black_48dp.png'
	});

[m.component](https://github.com/lhorie/mithril.js/blob/components/docs/mithril.component.md) is a Mithril function that instantiates a component with an options object; in this case a simple object with the single key `src`.

This principle can also be used to create a larger component, such as an icon button:

	var icon = require('polythene/icon/icon');
	var menuIcon = m.component(icon, {
	    src: 'img/arrow.png'
	});

	var iconBtn = require('polythene/icon-button/icon-button');
	var myIconBtn = m.component(iconBtn, {
		content: menuIcon
	});

Because icon button accepts an icon options object, we can also use object notation:

	var iconBtn = require('polythene/icon-button/icon-button');
	var myIconBtn = m.component(iconBtn({
		icon: {
		    src: 'img/arrow.png'
		}
	});


## Requirements

See the [main project page](https://github.com/ArthurClemens/Polythene).


## Project progress

### Done

* Header panel
* Toolbar
* List
* Card
* Button
* Icon button
* Icon
* SVG
* Ripple
* Shadow
* Floating Action Button
* List tile
* Subheader (part of List)
* Divider (part of List)

### To do

1. Tab
1. Dialog
1. Menu
1. Grid list
1. List: Control
1. Form: Text field
1. Form: Selection control
1. Data table
1. Bottom sheet
1. Chip
1. Picker
1. Progress & activity
1. Slider
1. Snackbar & toast
1. Tooltip


