# List

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-Examples/list.html">Demo</a>

Displays a list of [List Tiles](#list-tile), with an optional header (itself a list tile). 


## Variations

> If there is a floating action button left-aligned with the avatar/icon in a list,
> align the subheader with the text content.

To align the subheader with the text, use `className: 'indent'`.


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


## Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML tag |
| **className** | optional | String |  | Extra CSS class appended to 'list-tile' |
| **header** | optional | Object | | Options object for a [List Tile](#list-tile) |
| **tiles** | optional | Array of type Mithril template| | List of [List Tiles](#list-tile) |


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

