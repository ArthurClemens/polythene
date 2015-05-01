# Icon Button

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-Examples/icon-button.html">Demo</a>

Displays an [icon](#icon) as a button.


## Usage

Icon Button takes an icon options object:

	var iconBtn = require('polythene/icon-button/icon-button');

	var myIconBtn = m.component(iconBtn, {
		icon: {
			src: 'img/arrow.png'
		}
	});

To use SVG instead of an image, pass an [svg](#svg) option object:

	var myIconBtn = m.component(iconBtn, {
		icon: {
			svg: {
			    src: 'img/arrow.svg'
			}
		}
	});

Instead of an `icon` options object, you can pass an icon component:
	
	var icon = require('polythene/icon/icon');

	var myIcon = m.component(icon, {
	    svg: {
	        name: 'emoticon-happy',
	        iconset: 'mdi'
	    }
	});

	var myIconBtn = m.component(iconBtn, {
		content: myIcon
	});


## Variations

The icon color is set with the CSS `color` attribute of the parent element. For example:

	/* CSS */
	.icon-button.colored {
		color: red;
	}

	// JS
	var myIconBtn = m.component(iconBtn, {
		className: 'colored'
	});


## Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML tag |
| **className** | optional | String |  | Extra CSS class appended to 'icon-button' |
| **icon** | either icon or content must be passed | Object |  | [icon](#icon) options object |
| **content** | either icon or content must be passed | Mithril template or String | | Alternative content if no icon object is used |
| **active** | optional | Boolean | | Set to true to show the active state (with border and background) |
| **before** | optional | Mithril template or String or Array | | Extra content before main content |
| **after** | optional | Mithril template or String or Array | | Extra content after main content |


## Inheritance

Icon button inherits from [button](#button). Button options `ink` and `wash` are set to false.


## Default generated HTML

	<div noink="true" class="icon-button">
	    <div class="button-content">
	        <div class="icon icon-normal">
	            <i fit="true" class="svg ">
	                svg...
	            </i>
	        </div>
	    </div>
	</div>

