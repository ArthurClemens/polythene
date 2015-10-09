# Icon

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-Examples/index.html#/icon">Demo</a>

Displays an icon (image or [SVG](#svg)) as a 24px (but configurable) square.


## Usage

	import icon from 'polythene/icon/icon';

	const myIcon = m.component(icon, {
		src: 'img/arrow.png'
	});

To use SVG instead of an image, pass an [svg](#svg) option object:

	const myIcon = m.component(icon, {
		svg: {
		    src: 'img/arrow.svg'
		}
	});

Or pass `iconSet` (sub folder) and filename (without `.svg`):

	const myIcon = m.component(icon, {
		svg: {
			iconSet: 'mdi',
		    name: 'emoticon-happy'
		}
	});

Use Mithril-ified SVG icons (basically `m('svg', ...)`) for faster loading (Javascript can be inlined instead of loaded from the server). Use param `msvg`:

    import iconStars from 'm-icons/action/stars';

    const myIcon = m.component(icon, {
        msvg: iconStars
    });

msvg icons can be downloaded from  [mithril-material-design-icons](https://github.com/ArthurClemens/mithril-material-design-icons).

## Variations

* The size is set with the `type` parameter or with CSS (in conjuction with `class`).
* The color is set with the CSS `color` attribute of the parent element.


## Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML tag |
| **class** | optional | String |  | Extra CSS class appended to 'icon'; use convenience class `avatar` to make square images round |
| **src** | either `src` or `svg` or `msvg` must be passed | String |  | Icon URL (for `img` only; for `svg` pass this in the svg parameter) |
| **svg** | either `src` or `svg` or `msvg` must be passed | Object |  | [svg](#svg) options object |
| **msvg** | either `src` or `svg` or `msvg` must be passed | Mithril template |  | Mithril-ified SVG icon |
| **type** | optional | String | 'normal' | Either 'small' (16px), 'normal' (24px), 'medium' (32px), 'large' (40px). Adds CSS class 'icon-small', 'icon-normal', 'icon-medium', 'icon-large.' `type: 'medium'` is the equivalent of passing `class: 'icon-medium'`. |
| **cache** | optional | Boolean | | Set to true to reuse the icon on next redraws |
| **before** | optional | Mithril template or String | | Extra content before main content |
| **after** | optional | Mithril template or String | | Extra content after main content |


## Default generated HTML

	<div class="icon icon-normal">
	    <i class="fit svg">
	        <svg>...</svg>
	    </i>
	</div>
