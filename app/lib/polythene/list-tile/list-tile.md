# List Tile

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-Examples/list-tile.html">Demo</a>

Displays a list element as part of a [list](#list).

Material Design lists are not part of Polymer. This implementation follows [the design specification](http://www.google.com/design/spec/components/lists.html).


## Variations

A list tile can have 1 to 3 lines:

* `title`: first line
* `info`: secondary line
* `info_high`: secondary line runs over 2 lines

A list tile can optionally have an icon.

Text and icon are taken together as primary content. Primary content can optionally have a link.

A list tile can optionally have secondary content, displayed to the right. Secondary content can contain any content, and conditionally have a link.


## Usage

	var listTile = require('polythene/list-tile/list-tile');

	var myListTile = m.component(listTile, {
		title: 'My title'
	});

To show a secondary line:

	var myListTile = m.component(listTile, {
		title: 'My title',
		info: 'My info'
	});

To show 2 secondary lines:

	var myListTile = m.component(listTile, {
		title: 'My title',
		info_high: 'My loooooooooooong info'
	});

To show an icon:

	var myListTile = m.component(listTile, {
		title: 'My title',
		icon: {
		    type: 'large',
		    src: 'app/list-tile/avatars/1.png'
		}
	});

Or use an SVG as icon:

	var myListTile = m.component(listTile, {
		title: 'My title',
		icon: {
            svg: {
                name: 'star-outline',
                iconset: 'mdi'
            }
        }
	});

To make the primary content a link:

	var myListTile = m.component(listTile, {
		title: 'My title',
		icon: {
		    type: 'large',
		    src: 'app/list-tile/avatars/1.png'
		},
		url: 'toolbar.html',
		url_config: null
	});

To show secondary content at the right, including a link:

	var icon = require('polythene/icon/icon');

	var myListTile = m.component(listTile, {
		title: 'My title',
		icon: {
		    type: 'large',
		    src: 'app/list-tile/avatars/1.png'
		},
		secondary: m.component(icon, {
            type: 'small',
            svg: {
                name: 'heart-outline',
                iconset: 'mdi'
            }
        }),
        secondary_url: 'faved',
        secondary_url_config: null
	});
                            


## Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML tag |
| **className** | optional | String |  | Extra CSS class appended to 'list-tile' |
| **title** | required | String | | The text content |
| **info** | optional | String | | Secondary text content (1 line high) |
| **info_high** | optional | String | | Secondary text content (2 lines high) |
| **icon** | optional | Object |  | [icon](#icon) options object |
| **primary_tag** | optional | String | 'a[flex]' | HTML tag for primary content; note that this is a link tag but lacking a href attribute |
| **secondary_tag** | optional | String | See below | HTML tag for secondary content |
| **primary_url** | optional | String | | URL for primary content |
| **secondary_url** | optional | String | | URL for secondary content |
| **primary_url_config** | optional | m.route Object | `m.route` | The config for the primary URL |
| **secondary_url_config** | optional | m.route Object | `m.route` | The config for the secondary URL |
| **before** | optional | Mithril template or String or Array | | Extra content before main content |
| **after** | optional | Mithril template or String or Array | | Extra content after main content |


## Layout of secondary content

The default tag for secondary content depends on the content of the tile:

* 1 or 2 lines: `a[horizontal][layout][center]` (to vertically center align)
* 3 lines: `a[vertical][layout][start]` (to vertically align to top)

To show 2 elements, one at the top and one at the bottom of the right side, we use [flex] to separate the 2:

	secondary: [
	    m('div', '15 min'),
	    m('div[flex]'),
	    m.component(icon, {
	        svg: {
	            name: 'star-outline',
	            iconset: 'mdi'
	        }
	    })
	]

And then use this tag:

	secondary_tag: 'div[layout][vertical][end]'


## Default generated HTML

	<div horizontal="true" layout="true" center="true" class="list-tile list-tile-single-line">
	    <a flex="true" class="list-tile-primary">
	        <div class="list-tile-content">
	            <div class="list-tile-title">...</div>
	        </div>
	    </a>
	</div>

When using a large icon (avatar image):

	<div horizontal="true" layout="true" center="true" class="list-tile list-tile-single-line list-tile-has-icon">
	    <a flex="true" class="list-tile-primary">
	        <div class="icon icon-large">
	            <i fit="true">
	                <img src="app/list-tile/avatars/1.png" />
                </i>
            </div>
            <div class="list-tile-content">
                <div class="list-tile-title">...</div>
            </div>
        </a>
    </div>

