# SVG

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-Examples/svg.html">Demo</a>

Loads SVG code asychronously and displays this on the page, for instance in an [icon](#icon).

## Usage

	var svg = require('polythene/svg/svg');

	var mySvg = m.component(svg, {
		src: 'img/arrow.svg'
	});

To load an SVG from one of the included icon sets, pass `iconset` and `name`. To load `polythene/svg/mdi/headphones.svg`:

	var mySvg = m.component(svg, {
		iconset: 'mdi',
		name: 'headphones'
	});

If the iconset has subfolders, pass the folder name as `group`. To load `polythene/svg/material-design-iconic-font/action/alarm.svg`:

	var mySvg = m.component(svg, {
	    iconset: 'material-design-iconic-font',
	    group: 'action',
	    name: 'alarm'
	});

SVG options can be passed to [icon](#icon):

	var icon = require('polythene/icon/icon');
	var myIcon = m.component(icon, {
	    iconset: 'material-design-iconic-font',
	    group: 'action',
	    name: 'alarm'
	});

Note that in this case `require('polythene/svg/svg')` is not needed (this is handled by icon). 


## Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML tag |
| **className** | optional | String |  | CSS class appended to 'svg' |
| **src** | either src or iconset+name must be passed | String |  | SVG URL |
| **iconset** | either src or iconset+name must be passed | String |  | Iconset name - see below |
| **group** | optional | String |  | Subfolder within iconset |
| **name** | either src or iconset+name must be passed | String |  | SVG filename without .svg extension |
| **refresh** | optional | Boolean | false | Set to true to fetch the SVG resource on reloads |


## Icon sets

By default 2 icons sets are included (after running `grunt`):

* Iconset `material-design-iconic-font`: [GitHub project](https://github.com/zavoloklom/material-design-iconic-font)
* Iconset `mdi`: [GitHub project](https://github.com/Templarian/MaterialDesign)



## Default generated HTML

	<div class="svg">
		<svg ...>
			...
		</svg>
	</div>

