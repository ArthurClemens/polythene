# Icon Button

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/icon-button">Demo</a>

Displays an [icon](#icon) as a button. Also called toggle button.


## Usage

Icon Button takes an icon options object:

~~~javascript
import m from 'mithril';
import iconBtn from 'polythene/icon-button/icon-button';

const myIconBtn = m.component(iconBtn, {
	icon: {
		src: 'img/arrow.png'
	}
});
~~~

To use SVG instead of an image, pass an `msvg` object:

~~~javascript
import gIconStars from 'mmsvg/google/msvg/action/stars';
import iconBtn from 'polythene/icon-button/icon-button';

const myIconBtn = m.component(iconBtn, {
	icon: {
		msvg: gIconStars
	}
});
~~~

or pass a [svg](#svg) option object:

~~~javascript
const myIconBtn = m.component(iconBtn, {
	icon: {
		svg: {
		    src: 'img/arrow.svg'
		}
	}
});
~~~

Finally, instead of an `icon` options object, you can pass an icon component as `content`:

~~~javascript
import icon from 'polythene/icon/icon';
import gIconStars from 'mmsvg/google/msvg/action/stars';

const myIcon = m.component(icon, {
    msvg: gIconStars
});

const myIconBtn = m.component(iconBtn, {
	content: myIcon
});
~~~

### Variations

The icon color is set with the CSS (text) `color` attribute of the parent element. For example:

~~~css
/* CSS */
.pe-button--icon {
	color: red;
}
~~~

~~~javascript
// JS
const myIconBtn = m.component(iconBtn, {
	class: 'colored'
});
~~~

Disable hover and ripple effects:

~~~javascript
const myIconBtn = m.component(iconBtn, {
	icon: {
		svg: {
		    src: 'img/arrow.svg'
		}
	},
	wash: false,
	ink: false
});
~~~

### Sizes

Pass `type` to the `icon` parameter, or use CSS.


## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML element tag |
| **class** | optional | String |  | Extra CSS class appended to 'pe-button--icon' |
| **id** | optional | String | | HTML element id |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` |
| **before** | optional | Mithril element | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after** | optional | Mithril element | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |

### Icon button specific options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **icon** | either icon or content must be passed | Object |  | [icon](#icon) options object; also used to show an round "avatar" portrait image |
| **content** | either icon or content must be passed | Mithril element | | Alternative content if no icon object is used |
| **url** | optional | Object with `href`, optionally `config` | | Button URL data |
| **inactive** | optional | Boolean | | Set to `true` to disable events |
| **tabindex** | optional | Integer | | Tab index |

### Icon button appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **wash** | optional | Boolean | false | Set to true to show the effect on hover |
| **ink** | optional | Boolean | true | Set to false to disable the ripple effect on click/tap |
| **raised** | optional | Boolean | false | Shows a shadow; on button press the shadow depth is increased by 1 |
| **z** | optional | Number 0-5 | 1 | The shadow depth for a raised button; raised buttons have a default z of 1 |
| **compact** | optional | Boolean | | Set to `true` to use less padding |
| **active** | optional | Boolean | | Set to true to show the active state (with border and background) |


## Inheritance/composition

Icon button is composed with [button](#button).
