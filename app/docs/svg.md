# SVG

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/svg">Demo</a>

Loads SVG code asychronously and displays this on the page, for instance in an [icon](#icon).


## Usage

	import svg from 'polythene/svg/svg';

	const mySvg = m.component(svg, {
		src: 'img/arrow.svg'
	});

To load an SVG from one of the included icon sets, pass `iconSet` and `name`. To load `polythene/svg/mdi/headphones.svg`:

	const mySvg = m.component(svg, {
		iconSet: 'mdi',
		name: 'headphones'
	});

If the icon set has subfolders, pass the folder name as `group`. To load `polythene/svg/material-design-iconic-font/action/alarm.svg`:

	const mySvg = m.component(svg, {
	    iconSet: 'material-design-iconic-font',
	    group: 'google/action',
	    name: 'alarm'
	});

SVG options can be passed to [icon](#icon):

	import icon from 'polythene/icon/icon';
	const myIcon = m.component(icon, {
	    iconSet: 'material-design-iconic-font',
	    group: 'google/action',
	    name: 'alarm'
	});

Note that in this case `import svg from 'polythene/svg/svg'` is not needed (this is handled by icon). 

When after user interaction another SVG is shown, the app is more responsive when the other SVG is already preloaded and cached. Param `preload` accepts a list of option objects:

	const mySvg = m.component(svg, {
        name: opts.favorite ? 'star' : 'star-outline',
        iconSet: 'mdi',
        preload: [{
            name: opts.favorite ? 'star-outline' : 'star',
            iconSet: 'mdi'
        }]
    }


## Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML tag |
| **class** | optional | String |  | CSS class appended to 'svg' |
| **src** | either src or iconSet+name must be passed | String |  | SVG URL |
| **iconSet** | either src or iconSet+name must be passed | String |  | Iconset name - see below |
| **group** | optional | String (file path) |  | Subfolder path within iconSet |
| **name** | either src or iconSet+name must be passed | String |  | SVG filename without .svg extension |
| **preload** | optional | Array of svg option objects | | List of SVG items (property `name`, `src`, `group`, `iconSet`) to preload; will be fetched after `name` has been loaded |
| **before** | optional | Mithril template or String | | Extra content before main content |
| **after** | optional | Mithril template or String | | Extra content after main content |


## Icon sets

By default 2 icons sets are included in the `deps/svg/` folder (after running `npm run setup`):

* Iconset `material-design-iconic-font`: [GitHub project](https://github.com/zavoloklom/material-design-iconic-font)
* Iconset `mdi`: [GitHub project](https://github.com/Templarian/MaterialDesign)

Other icon sets can be placed in `deps/svg/` and referred to by parameter `iconSet`.



## Default generated HTML

	<div class="svg">
		<svg>...</svg>
	</div>

