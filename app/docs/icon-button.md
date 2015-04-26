# Icon Button

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-Examples/icon-button.html">Demo</a>

Displays an [icon](#icon) as a button.


## Variations

The icon color is set with the CSS `color` attribute of the parent element.


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



## Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML tag |
| **className** | optional | String |  | Extra CSS class appended to 'icon-button' |
| **icon** | either icon or content must be passed | Object |  | [icon](#icon) options object |
| **wash** | optional | Boolean | true | Set to false to hide the 'active' overlay; wash is mostly redundant is also ripple is used |
| **content** | either icon or content must be passed | Mithril template or String | | Alternative content if no icon object is used |
| **active** | optional | Boolean | | Set to true to show the active state (with border and background) |
| **before** | optional | Mithril template or String or Array | | Extra content before main content |
| **after** | optional | Mithril template or String or Array | | Extra content after main content |


## Default generated HTML

	<div class="icon-button">
		<div class="icon icon-normal">
			<i fit="true" class="svg ">
				img or svg
			</i>
		</div>
	</div>

