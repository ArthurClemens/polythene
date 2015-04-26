# Icon

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-Examples/icon.html">Demo</a>

Displays an icon (image or [SVG](#svg)) as a 24px square. 


## Variations

The size is set with the `type` parameter or with CSS (in conjuction with `className`).

The color is set with the CSS `color` attribute of the parent element.


## Usage

	var icon = require('polythene/icon/icon');

	var myIcon = m.component(icon, {
		src: 'img/arrow.png'
	});

To use SVG instead of an image, pass an [svg](#svg) option object:

	var myIcon = m.component(icon, {
		svg: {
		    src: 'img/arrow.svg'
		}
	});

Or pass `iconset` (sub folder) and filename (without `.svg`):

	var myIcon = m.component(icon, {
		svg: {
			iconset: 'mdi',
		    name: 'emoticon-happy'
		}
	});


## Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML tag |
| **className** | optional | String |  | Extra CSS class appended to 'icon' |
| **src** | either src or svg must be passed | String |  | Icon URL (for `img` only; for `svg` pass this in the svg parameter) |
| **svg** | either src or svg must be passed | Object |  | [svg](#svg) options object |
| **type** | optional | String | 'normal' | Either 'small' (16px), 'normal' (24px), 'medium' (32px), 'large' (40px). Adds CSS class 'icon-small', 'icon-normal', 'icon-medium', 'icon-large.' `type: 'medium'` is the equivalent of passing `className: 'icon-medium'`. |
| **before** | optional | Mithril template or String or Array | | Extra content before main content |
| **after** | optional | Mithril template or String or Array | | Extra content after main content |


## Default generated HTML

	<div class="icon icon-normal">
		<i fit="true">
			img or svg
		</i>
	</div>


## TODO

* alt option: Alternative text content for accessibility support. If alt is present and not empty, it will set the element's role to img and add an aria-label whose content matches alt. If alt is present and is an empty string, '', it will hide the element from the accessibility layer If alt is not present, it will set the element's role to img and the element will fallback to using the icon attribute for its aria-label.

