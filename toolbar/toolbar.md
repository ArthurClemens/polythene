# Toolbar

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/toolbar">Demo</a>

Displays a horizontal bar containing a label and action items. One toolbar can have 1 to 3 horizontal bars.


## Usage

~~~javascript
import toolbar from 'polythene/toolbar/toolbar';

const myToolbar = m.component(toolbar, {
    content: ...
});
~~~

To show a toolbar with a label and 3 icon buttons:

~~~javascript
import iconBtn from 'polythene/icon-button/icon-button';

const btn = function(group, name) {
    return m.component(iconBtn, {
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

const myToolbar = m.component(toolbar, {
    content: toolbarRow
});
~~~

To show 3 bars:

~~~javascript
const myToolbar = m.component(toolbar, {
	mode: 'tall',
	topBar: toolbarRow,
	middleBar: m.trust('<div flex class="middle indent">label aligns to the middle</div>'),
	bottomBar: m.trust('<div class="bottom indent" style="color: #666; font-size: 18px;">some stuffs align to the bottom</div>')
});
~~~

## Variations

Toolbar wraps 3 optional sub components:
* `topBar`
* `middleBar`
* `bottomBar`

Alternatively:
* `content` can be passed as substitute for the bars

Each bar contains the class 'toolbar-tools', plus the name of the bar type (f.i. 'topBar').

A toolbar can have different heights, set with param `mode`:

* `standard` (default)
* `medium-tall`
* `tall`

These heights are predefined by the toolbar CSS.


## Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML tag |
| **class** | optional | String |  | Extra CSS class appended to 'toolbar animate' (animate is used to transition the height) |
| **mode** | optional | String | 'standard' | CSS height class added to class; mode 'tall' is the same as using class 'tall' |
| **content** | either a bar or content must be passed | Mithril template | | Top bar content; use this if you only show 1 bar |
| **topBar** | either a bar or content must be passed | Mithril template | | Top bar content |
| **middleBar** | either a bar or content must be passed | Mithril template | | Middle bar content |
| **bottomBar** | either a bar or content must be passed | Mithril template | | Bottom bar content |
| **before** | optional | Mithril template or String | | Extra content before main content |
| **after** | optional | Mithril template or String | | Extra content after main content |


## Default generated HTML

When using a label and 3 icon buttons:

~~~html
<div class="fit shadow">
    <div class="fit shadow-bottom shadow-bottom-z-1"></div>
    <div class="fit shadow-top shadow-top-z-1"></div>
</div>
<div class="toolbar animate standard">
    <div class="center horizontal layout toolbar-tools topBar">
        <a class="icon-button">
            <div class="content">
                <div class="label">
                    <div class="icon icon-normal">
                        <i class="fit svg">
                            <svg>...</svg>
                        </i>
                    </div>
                </div>
                <div class="fit ripple constrained">
                    <div class="ripple-mask">
                        <div class="ripple-waves"></div>
                    </div>
                </div>
            </div>
        </a>
        <span class="flex">Toolbar title</span>
        <a class="icon-button">
            <div class="content">
                <div class="label">
                    <div class="icon icon-normal">
                        <i class="fit svg">
                            <svg>...</svg>
                        </i>
                    </div>
                </div>
                <div class="fit ripple constrained">
                    <div class="ripple-mask">
                        <div class="ripple-waves"></div>
                    </div>
                </div>
            </div>
        </a>
        <a class="icon-button">
            <div class="content">
                <div class="label">
                    <div class="icon icon-normal">
                        <i class="fit svg">
                            <svg>...</svg>
                        </i>
                    </div>
                </div>
                <div class="fit ripple constrained">
                    <div class="ripple-mask">
                        <div class="ripple-waves"></div>
                    </div>
                </div>
            </div>
        </a>
        <a class="icon-button">
            <div class="content">
                <div class="label">
                    <div class="icon icon-normal">
                        <i class="fit svg">
                            <svg>...</svg>
                        </i>
                    </div>
                </div>
                <div class="fit ripple constrained">
                    <div class="ripple-mask">
                        <div class="ripple-waves"></div>
                    </div>
                </div>
            </div>
        </a>
    </div>
</div>
~~~


## TODO

* Classes: justify, middleJustify, bottomJustify
* Toolbar adapts to mobile/narrow layout when there is a core-narrow class set on itself or any of its ancestors
