# List

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-Examples/list.html">Demo</a>

Displays a list of [list tiles](#list-tile), with an optional header (which is also a list tile). 


## Usage

	var list = require('polythene/list/list');

	var myList = m.component(list, {
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


## Variations

> If there is a floating action button left-aligned with the avatar/icon in a list,
> align the subheader with the text content.
> [source](http://www.google.com/design/spec/components/subheaders.html#subheaders-list-subheaders)

To align the subheader with the text, add parameter `class` with value `'indent'`.


## Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML tag |
| **class** | optional | String |  | Extra CSS class appended to 'list-tile'; use 'indent' to align the subheader with text contents of the list tiles below |
| **header** | optional | Object | | Options object for a [list tile](#list-tile); use `title` for the text label |
| **tiles** | optional | Array of type Mithril template | | List of [list tiles](#list-tile) |
| **mode** | optional | String | | Give borders to list tiles; use either `bordered` or `bordered-indent` |
| **before** | optional | Mithril template or String | | Extra content before main content |
| **after** | optional | Mithril template or String | | Extra content after main content |


## Default generated HTML

	<div class="list list-has-subheader">
	    <div horizontal="true" layout="true" center="true" class="list-tile list-tile-single-line subheader">
	        <a flex="true" class="list-tile-primary">
	            <div class="list-tile-content">
	                <div class="list-tile-title">Subheader</div>
	            </div>
	        </a>
	    </div>
	    <div horizontal="true" layout="true" center="true" class="list-tile list-tile-two-line">
	        <a flex="true" class="list-tile-primary">
	            <div class="list-tile-content">
	                <div class="list-tile-title">Two-line item</div>
	                <div class="list-tile-info">Secondary text</div>
	            </div>
	        </a>
	    </div>
	</div>


## TODO

* Sticky headers
