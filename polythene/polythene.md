# Polythene: Material Design for Mithril

Modular implementation of Material Design for [Mithril](http://lhorie.github.io/mithril). Available on [Github](https://github.com/ArthurClemens/Polythene).

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html">All demos</a>


## Background

Mithril is a small and fast MVC framework that encourages a clean app architecture. In Mithril pretty much everything is a function. Templates are functions that return objects, so they can be passed around, composed, mixed, have lazy rendering, etcetera.

Polythene components inherit all of the flexibility of Mithril components.



## Material Design / custom design

Polythene components closely follow the [Material Design specification](http://www.google.com/design/spec/material-design/introduction.html), more so than related projects like [Polymer](http://polymer-project.org), [Angular Material](https://material.angularjs.org/) or even [Material Design Lite](http://getmdl.io).

But styling is set up in a flexible way. It is actually quite easy to create a theme or change the style entirely. More on this in [Theming](#theme).



## Composition

Polythene components are Mithril components: from an icon to a page wide header plus contents. Components can be combined and nested.

The icon component is a small example how components can be combined. It is a wrapper around an image or SVG (itself a component too):

~~~javascript
import icon from 'polythene/icon/icon';
let myIcon = m.component(icon, {
	src: 'app/icon/img/ic_directions_black_48dp.png'
});
~~~

[m.component](https://github.com/lhorie/mithril.js/blob/components/docs/mithril.component.md) is a Mithril function that instantiates a component with an options object; in this case a simple object with the single attribute `src`.

This principle can also be used to create a larger component, such as an [icon button](#icon-button):

~~~javascript
import icon from 'polythene/icon/icon';
let menuIcon = m.component(icon, {
    src: 'img/arrow.png'
});

import iconBtn from 'polythene/icon-button/icon-button';
let myIconBtn = m.component(iconBtn, {
	content: menuIcon
});
~~~

Because icon-button accepts an icon options object, we can use object notation as well:

~~~javascript
import iconBtn from 'polythene/icon-button/icon-button';
let myIconBtn = m.component(iconBtn({
	icon: {
	    src: 'img/arrow.png'
	}
});
~~~

If we want to create a toolbar with buttons, it is easier to create a function that generates buttons:

~~~javascript
import iconBtn from 'polythene/icon-button/icon-button';
let btn = (group, name) => {
    return m.component(iconBtn, {
        icon: {
            svg: {
                group: group,
                name: name
            }
        }
    });
};
~~~

The button row is an Array of icon button components and a Mithril element for the title:

~~~javascript
const toolbarRow = [
    btn('navigation', 'menu'),
    m('span.flex', 'Title'),
    btn('action', 'search'),
    btn('action', 'favorite'),
    btn('navigation', 'more-vert')
];
~~~

And the toolbar incorporates the row:

~~~javascript
import toolbar from 'polythene/toolbar/toolbar';
m.component(toolbar, {
    class: 'pe-dark-theme',
    content: toolbarRow
});
~~~

## Requirements

See the [main project page](https://github.com/ArthurClemens/Polythene).
