_This is documentation for Polythene 0.3. A newer version of Polythene - compatible with Mithril 1.x - is available at https://github.com/ArthurClemens/polythene_


# Polythene: Material Design for Mithril

Modular implementation of Material Design for Mithril.


## Background

Polythene components closely follow the [Material Design specification](https://material.io/guidelines/material-design/introduction.html). But styling is set up in a flexible way - it is easy to [create a theme or change the style entirely](theming.md).


## No architecture

Polythene components are a loose collection of UI components that can be used standalone or optionally combined into larger components. There is no overarching architecture - it is all quite simple.



## Composition

Polythene components are Mithril components: from an icon to a page wide header plus contents. Components can be combined and nested.

The [Icon component](components/icon.md) is a small example how components can be combined. It is a wrapper around an image or SVG (itself a component too):

~~~javascript
import { Icon } from 'polythene';
m(Icon, {
	src: 'app/icon/img/ic_directions_black_48dp.png'
});
~~~

This principle can also be used to create a larger component, such as an [Icon Button](components/icon-button.md):

~~~javascript
import { Icon } from 'polythene';

m(Icon, {
    src: 'img/arrow.png'
});

import { IconButton } from 'polythene';
m(IconButton, {
	content: menuIcon
});
~~~

Because icon-button accepts an icon options object, we can use object notation as well:

~~~javascript
import { IconButton } from 'polythene';

m(IconButton({
	icon: {
	    src: 'img/arrow.png'
	}
});
~~~

If we want to create a toolbar with buttons, it is easier to create a function that generates buttons:

~~~javascript
import { IconButton } from 'polythene';

let btn = (group, name) => {
    return m(IconButton, {
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
import { Toolbar } from 'polythene';

m(Toolbar, {
    class: 'pe-dark-theme',
    content: toolbarRow
});
~~~


