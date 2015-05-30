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

When after user interaction another SVG is shown, the app is more responsive when the other SVG is already preloaded and cached. Param `preload` accepts a list of option objects:

	var mySvg = m.component(svg, {
        name: opts.favorite ? 'star' : 'star-outline',
        iconset: 'mdi',
        preload: [{
            name: opts.favorite ? 'star-outline' : 'star',
            iconset: 'mdi'
        }]
    }


## Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML tag |
| **class** | optional | String |  | CSS class appended to 'svg' |
| **src** | either src or iconset+name must be passed | String |  | SVG URL |
| **iconset** | either src or iconset+name must be passed | String |  | Iconset name - see below |
| **group** | optional | String |  | Subfolder within iconset |
| **name** | either src or iconset+name must be passed | String |  | SVG filename without .svg extension |
| **preload** | optional | Array of svg option objects | | List of SVG items (property `name`, `src`, `group`, `iconset`) to preload; will be fetched after `name` has been loaded |
| **before** | optional | Mithril template or String | | Extra content before main content |
| **after** | optional | Mithril template or String | | Extra content after main content |


## Icon sets

By default 2 icons sets are included in the `deps/svg/` folder (after running `npm run setup`):

* Iconset `material-design-iconic-font`: [GitHub project](https://github.com/zavoloklom/material-design-iconic-font)
* Iconset `mdi`: [GitHub project](https://github.com/Templarian/MaterialDesign)

Other icon sets can be placed in `deps/svg/` and referred to by parameter `iconset`.



## Default generated HTML

	<div class="svg">
		<svg ...>
			...
		</svg>
	</div>

