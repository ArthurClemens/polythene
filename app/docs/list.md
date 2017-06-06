# List

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/list">Demo</a>

Displays a list of [list tiles](#list-tile), with an optional header. Lists can be stacked.

Lists are also the base component of [menus](#menu).

## Usage

~~~javascript
import m from 'mithril';
import { List, ListTile } from 'polythene';

m(List, {
	header: {
		title: 'Friends'
	},
	tiles: [
	    m(ListTile, {
	        title: 'Ali Connors',
	        subtitle: 'Brunch this weekend?'
	    }),
	    // ...
	]
});
~~~

The header will be also rendered using a list tile.

See [List Tile](#list-tile) for layout variations, for example to add links, icons and images. For example:

~~~javascript
import m from 'mithril';
import { List, ListTile, icon } from 'polythene';

m(List, {
	header: {
		title: 'Friends'
	},
	tiles: [
	    m(ListTile, {
	        title: 'Ali Connors',
	        subtitle: 'Brunch this weekend?',
	        front: m(icon, {
	            type: 'large',
	            src: 'images/ali.png'
	        }),
	        url: {
				    href: '/friends/ali'
				    config: m.route
				  }
	    }),
	    // ...
	]
});
~~~


## Variations

> If there is a floating action button left-aligned with the avatar/icon in a list,
> align the subheader with the text content.
> [source](http://www.google.com/design/spec/components/subheaders.html#subheaders-list-subheaders)

In this situation we want to indent the list-header, and if we show borders, indent them too. We do so by adding the parameter `indent` to the header [list tiles](#list-tile), and set `indentedBorders` to true. For example:

~~~javascript
import m from "mithril";
import { List, ListTile } from 'polythene';

const myList = m(List, {
	indentedBorders: true,
	tiles: [
	    m(ListTile, {
	        title: 'Ali Connors',
	        indent: true
	    }),
	    // ...
	]
});
~~~


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
| **indentedBorders** | optional | Boolean | | Set to `true` to indent the list tile borders; note that list tiles must have option `indent` as well |
| **hoverable** | optional | Boolean | false | Set to true to show a hover effect on list tiles (non-touch devices) |
| **selectable** | optional | Boolean | false | Set to true to show a mouse pointer on list tiles (non-touch devices) |
