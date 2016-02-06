# SVG

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/svg">Demo</a>

Loads SVG code asychronously and displays this on the page, for instance in an [icon](#icon).


## Usage

If you want to use SVG for icons, the best method is to use [icon](#icon) directly.

For other usages, there are several methods to embed SVG on the page.


### Using msvg (Mitril-ified SVG) files

#### About msvg

SVG embedded in a Mithril element works best because the JavaScript can be inlined, which saves a server call for each icon.

A "Mithril-ified" SVG icon ("msvg") is basically:

~~~javascript
m.trust('<svg><path>...</path></svg>')
~~~

A large collection of msvg icons is available at [mmsvg](https://github.com/ArthurClemens/mmsvg).

#### Example

Assuming that 'stars.js' is a msvg file:

~~~javascript
import m from 'mithril';
import svg from 'polythene/svg/svg';
import iconStars from 'mmsvg/google/msvg/action/stars';

const mySvg = m.component(svg, {
	content: iconStars
});
~~~


### Using SVG XML

This is the same as "msvg", but with the raw SVG XML at hand:

~~~javascript
import svg from 'polythene/svg/svg';

const mySvg = m.component(svg, {
	content: m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>')
});
~~~


### Dynamically loading a file

This method requires SystemJS to be installed. Note that you even deploy this if you are using Browserify - see the [Polythene-examples](https://github.com/ArthurClemens/Polythene-examples) build with the SVG example.

When using SystemJS, you need to use the `system-text` plugin to load SVG files. The filename includes the extension '!text' to call the text plugin:

~~~javascript
import svg from 'polythene/svg/svg';

const mySvg = m.component(svg, {
	src: 'img/arrow.svg!text'
});
~~~



## Usage with icon

SVG options can be passed to [icon](#icon):

~~~javascript
import icon from 'polythene/icon/icon';

const myIcon = m.component(icon, {
    svg: {
        src: 'img/arrow.svg!text'
    }
});
~~~

## Optimizing dynamic loading

The interface is quicker to respond when dynamic files are preloaded. Param `preload` accepts a list of src files:

~~~javascript
const filename = opts.favorite ? 'star.svg' : 'star-outline.svg';
const preloadFilename = !opts.favorite ? 'star.svg' : 'star-outline.svg';

const mySvg = m.component(svg, {
    src: filename,
    preload: [preloadFilename]
}
~~~

## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML element tag |
| **class** | optional | String |  | Extra CSS class appended to 'pe-svg' |
| **id** | optional | String | | HTML element id |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` |
| **before** | optional | Mithril element | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after** | optional | Mithril element | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |

### SVG specific options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **src** | either src or content must be passed | String |  | SVG URL |
| **content** | either src or content must be passed | String |  | SVG XML |
| **preload** | optional | Array of strings | | List of src locations to preload |
