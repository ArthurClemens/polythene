# SVG

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-Examples/svg.html">Demo</a>

Loads SVG code asychronously.

## Usage

	var svg = require('polythene/svg/svg');

	m.component(svg, {
		src: 'img/arrow.svg'
	});

To load an SVG from one of the included icon sets, pass `iconset` and `name`:

	m.component(svg, {
		iconset: 'mdi',
		name: 'headphones'
	});

If the iconset has subfolders, pass the group name:

	m.component(svg, {
	    iconset: 'mdi',
	    group: 'action',
	    name: 'alarm'
	})


## Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML tag |
| **className** | optional | String |  | CSS class appended to 'svg' |
| **src** | src or svg must be passed | String |  | Icon URL (for `img` only; for `svg` pass this in the svg parameter) |
| **svg** | src or svg must be passed | Object |  | Parameters for [svg](/svg) |
| **type** | optional | String | 'normal' | Either 'small' (16px), 'normal' (24px), 'medium' (32px), 'large' (40px). Adds CSS class 'icon-small', 'icon-normal', 'icon-medium', 'icon-large.' `type: 'medium'` is the equivalent of passing `className: 'icon-medium'`. |


	## Default generated HTML

		<div class="icon icon-normal">
			<i fit="true">
				img or svg
			</i>
		</div>


Options:

    src: (optional) (String): icon URL
    or
    iconset: (optional) (String): sub-directory name inside directory 'svg'
    group: (optional) (String): sub-sub-directory
    name: (mandatory) (String): icon filename (without extension)
    
*/