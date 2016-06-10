# List Tile

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/list-tile">Demo</a>

Displays a list element as part of a [list](#list).


## Usage

~~~javascript
import m from 'mithril';
import listTile from 'polythene/list-tile/list-tile';

const myListTile = m.component(listTile, {
	title: 'My title'
});
~~~

To show a secondary line:

~~~javascript
const myListTile = m.component(listTile, {
	title: 'My title',
	subtitle: 'My subtitle'
});
~~~

To show 2 secondary lines:

~~~javascript
const myListTile = m.component(listTile, {
	title: 'My title',
	highSubtitle: 'My loooooooooooong subtitle'
});
~~~

To show an icon:

~~~javascript
const myListTile = m.component(listTile, {
	title: 'My title',
    front: m.component(icon, {
	    type: 'large',
	    class: 'avatar',
	    src: 'app/list-tile/avatars/1.png'
	})
});
~~~

Or use an SVG as icon:

~~~javascript
import iconStarOutline from 'mmsvg/templarian/msvg/star-outline';

const myListTile = m.component(listTile, {
	title: 'My title',
	front: m.component(icon, {
        msvg: iconStarOutline
    })
});
~~~

To make the primary content a link:

~~~javascript
const myListTile = m.component(listTile, {
	title: 'My title',
	front: m.component(icon, {
	    type: 'large',
	    src: 'app/list-tile/avatars/1.png'
	}),
	url: {href: 'toolbar', config: m.route}
});
~~~

To show secondary content at the right, including a link:

~~~javascript
import icon from 'polythene/icon/icon';
import iconStarOutline from 'mmsvg/templarian/msvg/star-outline';

const myListTile = m.component(listTile, {
	title: 'My title',
	front: m.component(icon, {
	    type: 'large',
	    src: 'app/list-tile/avatars/1.png'
	}),
	secondary: {
		icon: {
            type: 'small',
            msvg: iconStarOutline
		},
		url: {'faved', config: m.route}
    })
});
~~~

## Variations

A list tile can have 1 to 3 lines:

* `title`: titel on a single line
* `subtitle`: subtitle on a single line
* `highSubtitle`: subtitle runs over 2 lines

A list tile can optionally have an icon.

Text and icon are taken together as primary content. Primary content can optionally have a link.

A list tile can optionally have secondary content, displayed to the right. Secondary content can contain any content, and conditionally have a link.


## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div.horizontal.layout.center' | HTML element tag |
| **class** | optional | String |  | Extra CSS class appended to 'pe-list-tile' |
| **id** | optional | String | | HTML element id |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` |
| **before** | optional | Mithril element | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after** | optional | Mithril element | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |

### List tile specific options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **content** | optional | Mithril element or component | | Any content |
| **title** | optional | String | | The text content |
| **subtitle** | optional | String | | Secondary text content (1 line high) |
| **highSubtitle** | optional | String | | Secondary text content (2 lines high) |
| **front** | optional | Mithril element or component |  | Content to show at the left of the primary content |
| **url** | optional | Object with `href`, optionally `config` | | URL for primary content |
| **sticky** | optional | Boolean | | Make list tile sticky when scrolling; this is normally set in the [list](#list) component as `header.sticky`; [does not work in Chrome or IE/Edge](http://caniuse.com/#feat=css-sticky); adds class "sticky" |
| **compact** | optional | Boolean | | Set to `true` to reduce vertical padding |
| **secondary** | optional | Object | | Options for secondary content, see below |

### List tile secondary content options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **secondary.tag** | optional | String | See "Layout of secondary content" below | HTML tag for secondary content |
| **secondary.icon** | optional | Object |  | [icon](#icon) options object for icon in secondary content; will be placed above secondary.content |
| **secondary.url** | optional | Object | | URL for secondary content; options object containing `href` and `config` |
| **secondary.content** | optional | Mithril element | | Secondary content |

### List tile appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **indent** | optional | Boolean | | Set to `true` to indent the content |
| **selected** | optional | Boolean | false | Set to `true` to show a selected state; adds class 'selected' |
| **disabled** | optional | Boolean | false | Set to `true` to deactivate the url and hover state (in case of [list](#list) with setting `hoverable`) and show a disabled state; adds class 'disabled' |
| **ink** | optional | Boolean | false | Set to `true` to show a ripple effect when the tile is tapped |
| **ripple** | optional (valid if `ink` is `true`) | Options object | | Pass [ripple](#ripple) options to define ripple behavior |
| **hoverable** | optional | Boolean | false | Set to true to show a hover effect (non-touch devices) |
| **selectable** | optional | Boolean | false | Set to true to show a mouse pointer (non-touch devices) |


## Styling

* Use class 'list-tile--compact' to reduce the vertical padding.
