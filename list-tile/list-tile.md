# List Tile

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/list-tile">Demo</a>

Displays a list element as part of a [list](#list).


## Usage

~~~javascript
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
	icon: {
	    type: 'large',
	    class: 'avatar',
	    src: 'app/list-tile/avatars/1.png'
	}
});
~~~

Or use an SVG as icon:

~~~javascript
const myListTile = m.component(listTile, {
	title: 'My title',
	icon: {
        svg: {
            name: 'star-outline',
            iconSet: 'mdi'
        }
    }
});
~~~

To make the primary content a link:

~~~javascript
const myListTile = m.component(listTile, {
	title: 'My title',
	icon: {
	    type: 'large',
	    src: 'app/list-tile/avatars/1.png'
	},
	url: {href: 'toolbar', config: m.route}
});
~~~

To show secondary content at the right, including a link:

~~~javascript
import icon from 'polythene/icon/icon';

const myListTile = m.component(listTile, {
	title: 'My title',
	icon: {
	    type: 'large',
	    src: 'app/list-tile/avatars/1.png'
	},
	secondary: {
		icon: {
            type: 'small',
            svg: {
                name: 'heart-outline',
                iconSet: 'mdi'
            }
		},
		url: {'faved', config: m.route}
    })
});
~~~

## Variations

A list tile can have 1 to 3 lines:

* `title`: first line
* `subtitle`: secondary line
* `highSubtitle`: secondary line runs over 2 lines

A list tile can optionally have an icon.

Text and icon are taken together as primary content. Primary content can optionally have a link.

A list tile can optionally have secondary content, displayed to the right. Secondary content can contain any content, and conditionally have a link.


## Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'a.flex' | HTML tag for primary content |
| **class** | optional | String |  | Extra CSS class appended to 'list-tile' |
| **id** | optional | String | | HTML element id |
| **title** | required | String | | The text content |
| **subtitle** | optional | String | | Secondary text content (1 line high) |
| **highSubtitle** | optional | String | | Secondary text content (2 lines high) |
| **icon** | optional | Object |  | [icon](#icon) options object |
| **url** | optional | Object with `href`, optionally `config` | | URL for primary content |
| **selected** | optional | Boolean | false | Set to `true` to show a selected state; adds class 'selected' |
| **disabled** | optional | Boolean | false | Set to `true` to deactivate the url and hover state (in case of [list](#list) with setting `hoverable`) and show a disabled state; adds class 'disabled' |
| **ink** | optiona; | Boolean | false | Set to `true` to show a ripple effect when the tile is tapped |
| **ripple** | optional (valid if `ink` is `true`) | Options object | | Pass [ripple](#ripple) options to define ripple behavior |
| **secondary** | optional | Object | | Options for secondary content |
| **secondary.tag** | optional | String | See "Layout of secondary content" below | HTML tag for secondary content |
| **secondary.icon** | optional | Object |  | [icon](#icon) options object for icon in secondary content; will be placed above secondary.content |
| **secondary.url** | optional | Object | | URL for secondary content; options object containing `href` and `config` |
| **secondary.content** | optional | Mithril template or String | | Secondary content |
| **before** | optional | Mithril template or String | | Extra content before main content |
| **after** | optional | Mithril template or String | | Extra content after main content |


## Layout of secondary content

The default tag for secondary content depends on the content of the tile:

* 1 or 2 lines: `.horizontal.layout.center` (to vertically center align)
* 3 lines: `.vertical.layout.start` (to vertically align to top)

To show 2 elements, one at the top and one at the bottom of the right side, we use `.flex` to separate the 2:

~~~javascript
	secondary: {
		content: {
		    m('div', '15 min'),
		    m('.flex'),
		    m.component(icon, {
		        svg: {
		                name: 'star-outline',
		                iconSet: 'mdi'
		            }
		        }
		    )
		},
	    tag: '.layout.vertical.end'
	}
~~~

## Default generated HTML

Single line item:

~~~html
<div class="flex list-tile-primary">
    <div class="layout horizontal center">
        <div class="flex list-tile-content">
            <div class="list-tile-title">Title</div>
        </div>
    </div>
</div>
~~~

When using a large icon (avatar image):

~~~html
<div class="horizontal layout center list-tile list-tile-single-line list-tile-has-icon">
    <div class="flex list-tile-primary">
        <div class="layout horizontal center">
            <div class="list-tile-content-icon">
                <div class="icon icon-large avatar">
                    <i class="fit">
                        <img src="..." />
                    </i>
                </div>
            </div>
            <div class="flex list-tile-content">
                <div class="list-tile-title">Title</div>
            </div>
        </div>
    </div>
</div>
~~~
