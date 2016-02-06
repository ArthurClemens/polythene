# List

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/list">Demo</a>

Displays a list of [list tiles](#list-tile), with an optional header. Lists can be stacked.

Lists are also the base component of [menus](#menu).

## Usage

~~~javascript
import m from 'mithril';
import list from 'polythene/list/list';

const myList = m.component(list, {
	header: {
		title: 'My header'
	},
	tiles: [
	    m.component(listTile, {
	        title: 'Ali Connors',
	        info: 'Brunch this weekend?',
	        icon: {
	            type: 'large',
	            src: 'app/list-tile/avatars/1.png'
	        }
	    })
	]
});
~~~

The header will be rendered using a list tile too.


## Variations

> If there is a floating action button left-aligned with the avatar/icon in a list,
> align the subheader with the text content.
> [source](http://www.google.com/design/spec/components/subheaders.html#subheaders-list-subheaders)

In this situation we want to indent the list-header, and if we show borders, indent them too. We do so by adding the parameter `indent` to the header [list tiles](#list-tile), and set `indentedBorders` to true.


## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML element tag |
| **class** | optional | String |  | Extra CSS class appended to 'pe-list' |
| **id** | optional | String | | HTML element id |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` |
| **before** | optional | Mithril element | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after** | optional | Mithril element | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |

### List specific options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **header** | optional | Object | | Options object for a [list tile](#list-tile); attributes `title` and `sticky` |
| **header.title** | optional | String | | Title text label |
| **header.sticky** | optional | Boolean | | Make header sticky when scrolling; [does not work in Chrome](http://caniuse.com/#feat=css-sticky) |
| **tiles** | optional | Array of type Mithril element | | List of [list tiles](#list-tile) |
| **compact** | optional | Boolean | | Set to `true` to reduce vertical padding of list tiles |

### List appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **borders** | optional | Boolean | | Set to `true` to add borders to list tiles |
| **indentedBorders** | optional | Boolean | | Set to `true` to indent the list tile borders |
| **hoverable** | optional | Boolean | false | Set to true to show a hover effect on list tiles (non-touch devices) |
| **selectable** | optional | Boolean | false | Set to true to show a mouse pointer on list tiles (non-touch devices) |
