# Header Panel

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/header-panel.html">Demo</a>

Displays a content panel with header with various scrolling behaviors. Use this for a page with a header bar (like the current page), or a title/menu bar.

<script async type="text/javascript" src="https://jsfiddle.net/ArthurClemens/n73anbva/embed/js,css,result/">
<h2>Example with condensing header</h2>
</script>

## Comparison with Polymer

In Polymer, `core-header-panel` and `core-scroll-header-panel` are two different components. That makes it impossible to have scrolling behaviors like `condenses` for 'normal' core-header-panels.

In Polythene all behaviors are offered in the current component.



## Usage

For small panels, the header will often be fixed:

~~~javascript
import m from 'mithril';
import headerPanel from 'polythene/header-panel/header-panel';

const myHeaderPanel = m.component(headerPanel, {
	fixed: true,
    header: {
        content: 'My title'
    },
    content: 'My content'
});
~~~

To make the panel stretch the width and height of the page, use class `header-panel--fit`:

~~~javascript
const myHeaderPanel = m.component(headerPanel, {
	class: 'header-panel--fit',
    header: {
        content: 'Flex'
    },
    content: 'My content'
});
~~~

To make a tall header condensing when scrolling:

~~~javascript
const myHeaderPanel = m.component(headerPanel, {
    header: {
        toolbar: {
            mode: 'tall',
            topBar: 'Top bar',
            bottomBar: 'Bottom bar'
        }
    },
    content: 'My content'
});
~~~


## Requirements

The header-panel will not display if its parent does not have a height.


## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML element tag |
| **class** | optional | String |  | Extra CSS class appended to 'pe-header-panel' |
| **id** | optional | String | | HTML element id |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` |
| **before** | optional | Mithril element | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after** | optional | Mithril element | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |

### Header panel specific options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **mode** | optional | String | 'standard'| Controls header and scrolling behavior - see below |
| **header** | required | Mithril element or options object | | The header above the scrolling area - see below |
| **header.toolbar** | optional | Mithril element or options object | | The header above the scrolling area - see below |
| **content** | optional | Mithril element | | Panel contents |
| **updateContentOnScroll** | Boolean | false | Set to `true` to "unfreeze" panel contents during scrolling; for performance this is set to false by default |
| **scroll** | optional | Function | | Callback function when the header panel scrolls; see Callback functions |
| **transform** | optional | Function | | Callback function when the header panel is transforming; see Callback functions |
| **restoreScrollPositionId** | optional | String | | Pass an identifier when this scroll view on load should scroll to the previous scroll position |

### Header panel appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **shadow** | optional | Boolean | `true` | If set to `false`, no shadow will be shown, regardless the mode |
| **tallClass** | optional | String | 'tall' | Set this when the header has a class other than 'tall' and the height needs to be toggled. |
| **condenses** | optional | Boolean | false | Set to `true` to condense the header's height to `condensedHeaderHeight` when scrolling |
| **condensedHeaderHeight** | optional | Number | 1/3 of either: 1. the measured header height; 2. `headerHeight` | The height of the header when it is condensed |
| **headerHeight** | optional | Number | the measured header height | The height of the header when it is at its full size |
| **scrollAwayTopbar** | optional | Boolean | false | Set to `true` to scroll away the top part ([toolbar's topBar](#toolbar)) of the header to be scrolled away |
| **noReveal** | optional | Boolean | false | Set to `true` to not let the header slide back in when scrolling back up |
| **fixed** | optional | Boolean | false | Set to `true` to keep the header fixed to the top |
| **keepCondensedHeader** | optional | Boolean | false | Set to `true` to not move away the condensed header |
| **noDissolve** | optional | Boolean | false | Set to `true` to keep the background the same opacity when scrolling |
| **backgroundScrollSpeed** | optional | Number | 0.5 | The speed of the background when scrolling; this value is multiplied with the scroll distance; use 0 to keep the background in place |

### Mode

Controls header and scrolling behavior. Options:

* `standard`: The header is a step above the panel. The header will consume the panel at the point of entry, preventing it from passing through to the opposite side.
* `seamed`: The header is presented as seamed with the panel.
* `waterfall`: Similar to standard mode, but header is initially presented as seamed with panel, but then separates to form the step.
* `waterfall-tall`: The header is initially taller (`header-panel--tall` class is added to the header).  As the user scrolls, the header separates (forming an edge) while condensing (`tall` class is removed from the header).
* `scroll`: The header keeps its seam with the panel, and is pushed off screen.


## Header

A header can be create by passing a content string:

~~~javascript
header: {
    content: 'My title'
}
~~~

in which case a div with class 'header' is created.

Alternatively, pass [toolbar](#toolbar) options to use a toolbar as header:

~~~javascript
header: {
    toolbar: {
        mode: 'tall',
        content: toolbarRow
    }
}
~~~

Or use a Mithril element:

~~~javascript
header: m('.pe-header.demo-header', 'My custom header')
~~~

A custom header must have class `pe-header` or `pe-toolbar`!

The bar height is created by the top bar height; `middleBar` and `bottomBar` are positioned absolute and have no height themselves.


## Header background images

Background images are set with CSS:

~~~css
/* make sure that the toolbar does not have a background color */
.pe-toolbar {
	background-color: transparent;
}

/* set header background color */
.pe-header-panel__header-container {
	background-color: #673ab7;
}

/* set image as background image */
.pe-header-panel__header-background {
	background-image: url(images/bg1.jpg);
}

/* optionally also set condensed header background color */
.condensed-header-panel__header-background {
	background-color: #f4b400;
}

/* for cross-fading images, use the condensed header background image */
.pe-header-panel__condensed-background {
	background-image: url(images/bg2.jpg);
}
~~~

An additional HTML element to control the image is 'header-panel__media-dimmer'. To create a fuzzy dark border all around use an inset box shadow:

~~~css
.pe-header-panel__media-dimmer {
	box-shadow: inset 0px 0px 200px rgba(0,0,0,.6);
}
~~~

## Callback functions

~~~javascript
void scroll(UIEvent event)

void transform({Number y, Number height, Number condensedHeight})
~~~



## Future

* Test and document: Mode `cover`: The panel covers the whole `header-panel` including the header. This allows user to style the panel in such a way that the panel is partially covering the header.
