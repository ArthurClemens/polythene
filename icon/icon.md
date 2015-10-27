# Icon

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/icon">Demo</a>

Displays an icon (image or [SVG](#svg)) as a 24px (but configurable) square.


## Usage

###  Preferred usage

SVG embedded in a Mithril template works best because the JavaScript can be inlined, which saves a server call for each icon.

A "Mithril-ified" SVG icon ("msvg") is basically:

~~~javascript
m.trust('<svg><path>...</path></svg>')
~~~

A large collection of msvg icons is available at [mmsvg](https://github.com/ArthurClemens/mmsvg).

Use param `msvg`:

~~~javascript
import icon from 'polythene/icon/icon';
import gIconStars from 'mmsvg/google/action/stars';

const myIcon = m.component(icon, {
	msvg: gIconStars
});
~~~

msvg icons can be created using this template:

~~~javascript
var m = require('mithril');
module.exports = m.trust('paste svg contents here');
~~~


### Using PNG or SVG files

~~~javascript
import icon from 'polythene/icon/icon';

const myIcon = m.component(icon, {
	src: 'img/arrow.png'
});
~~~

To use SVG instead of an image, pass an [svg](#svg) option object:

~~~javascript
const myIcon = m.component(icon, {
	svg: {
	    src: 'img/arrow.svg'
	}
});
~~~

Or pass `iconSet` (sub folder) and filename (without `.svg`):

~~~javascript
const myIcon = m.component(icon, {
	svg: {
		iconSet: 'mdi',
	    name: 'emoticon-happy'
	}
});
~~~

## Variations

* The size is set with the `type` parameter or with CSS (in conjuction with `class`).
* The color is set with the CSS `color` attribute of the parent element.


## Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML element tag |
| **class** | optional | String |  | Extra CSS class appended to 'icon'; use convenience class `avatar` to make square images round |
| **id** | optional | String | | HTML element id |
| **msvg** | either `src` or `svg` or `msvg` must be passed | Mithril template |  | Mithril-ified SVG icon |
| **type** | optional | String | 'normal' | Either 'small' (16px), 'normal' (24px), 'medium' (32px), 'large' (40px). Adds CSS class 'icon-small', 'icon-normal', 'icon-medium', 'icon-large.' `type: 'medium'` is the equivalent of passing `class: 'icon-medium'`. |
| **before** | optional | Mithril template or String | | Extra content before main content |
| **after** | optional | Mithril template or String | | Extra content after main content |

### Options for icons with params src or svg

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **src** | either `src` or `svg` or `msvg` must be passed | String |  | Icon URL (for `img` only; for `svg` pass this in the svg parameter) |
| **svg** | either `src` or `svg` or `msvg` must be passed | Object |  | [svg](#svg) options object |
| **cache** | optional | Boolean | | Set to true to reuse the icon on next redraws |



## Default generated HTML

~~~html
<div class="icon icon-normal">
    <i class="fit svg">
        <svg>...</svg>
    </i>
</div>
~~~
