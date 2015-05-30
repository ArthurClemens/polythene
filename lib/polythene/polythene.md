# Polythene: Material Design for Mithril

Modular implementation of Material Design for [Mithril](http://lhorie.github.io/mithril). Available on [Github](https://github.com/ArthurClemens/Polythene).

The components are generic enough to be used with other designs too. It is actually quite easy to create a theme or change the style entirely.


<p style='color: red'>Version v0.0.1-alpha</p>

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-Examples/index.html">All demos</a>


## Background

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
* Theming

### To do

1. Tab
1. Dialog
1. Menu
1. Grid list
1. List: Control
1. Toggle button
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

### Wish list

* Page transitions
* Loading animation
* Pull to refresh
* Localstorage/offline use


