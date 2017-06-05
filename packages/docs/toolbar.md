# Toolbar

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/toolbar">Demo</a>

Displays a horizontal bar containing a label and action items. One toolbar can have 1 to 3 horizontal bars.


## Usage

~~~javascript
import m from 'mithril';
import { Toolbar } from 'polythene';

m(Toolbar, {
    content: ...
});
~~~

To show a toolbar with a label and 3 icon buttons:

~~~javascript
import { IconButton } from 'polythene';

const btn = function(group, name) {
    return m(IconButton, {
        icon: {
            svg: {
                group: group,
                name: name
            }
        }
    });
};

const toolbarRow = [
    btn('navigation', 'menu'),
    m('span.flex', 'Toolbar'),
    btn('navigation', 'refresh'),
    btn('content', 'add')
];

m(Toolbar, {
    content: toolbarRow
});
~~~

To show 3 bars:

~~~javascript
m(Toolbar, {
	mode: 'tall',
	topBar: toolbarRow,
	middleBar: ...,
	bottomBar: ...)
});
~~~

## Variations

Toolbar wraps 3 optional sub components:
* `topBar`
* `middleBar`
* `bottomBar`

Alternatively:
* `content` can be passed as substitute for the bars

Each bar contains the class 'toolbar__bar', plus the name of the bar type (f.i. 'toolbar__top-bar').

A toolbar can have different heights, set with param `mode`:

* `standard` (default)
* `medium-tall`
* `tall`

These heights are predefined by the toolbar CSS.


## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML element tag |
| **class** | optional | String |  | Extra CSS class appended to 'pe-toolbar' |
| **id** | optional | String | | HTML element id |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` |
| **before** | optional | Mithril element | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after** | optional | Mithril element | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |

### Toolbar specific options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **content** | either a bar or content must be passed | Mithril element | | Top bar content; use this if you only show 1 bar |
| **topBar** | either a bar or content must be passed | Mithril element | | Top bar content |
| **middleBar** | either a bar or content must be passed | Mithril element | | Middle bar content |
| **bottomBar** | either a bar or content must be passed | Mithril element | | Bottom bar content |

### Toolbar appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **mode** | optional | String | 'standard' | CSS height class added to class; mode 'tall' is the same as using class 'pe-header--tall' |

## Styling

To indent a title, use CSS class 'toolbar__title--indent':

~~~javascript
const myToolbar = m(Toolbar, {
	mode: 'tall',
	topBar: toolbarRow,
	middleBar: m.trust('<div flex class="middle toolbar__title--indent">label aligns to the middle</div>'),
	bottomBar: m.trust('<div class="bottom toolbar__title--indent" style="color: #666; font-size: 18px;">some stuffs align to the bottom</div>')
});
~~~

## Future

* Classes: justify, middle-justify, bottom-justify
* Toolbar adapts to mobile/narrow layout when there is a core-narrow class set on itself or any of its ancestors
