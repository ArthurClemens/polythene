# Icon Button

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/icon-button">Demo</a>

Displays an [icon](#icon) as a button.


## Usage

Icon Button takes an icon options object:

~~~javascript
import iconBtn from 'polythene/icon-button/icon-button';

const myIconBtn = m.component(iconBtn, {
	icon: {
		src: 'img/arrow.png'
	}
});
~~~

To use SVG instead of an image, pass an `msvg` object:

~~~javascript
import gIconStars from 'mmsvg/google/action/stars';

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
import gIconStars from 'mmsvg/google/action/stars';

const myIcon = m.component(icon, {
    msvg: gIconStars
});

const myIconBtn = m.component(iconBtn, {
	content: myIcon
});
~~~

## Variations

The icon color is set with the CSS (text) `color` attribute of the parent element. For example:

~~~css
/* CSS */
.icon-button.colored {
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

## Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML element tag |
| **class** | optional | String |  | Extra CSS class appended to 'icon-button' |
| **id** | optional | String | | HTML element id |
| **icon** | either icon or content must be passed | Object |  | [icon](#icon) options object; also used to show an round "avatar" portrait image |
| **content** | either icon or content must be passed | Mithril template or String | | Alternative content if no icon object is used |
| **url** | optional | Object with `href`, optionally `config` | | Button URL |
| **wash** | optional | Boolean | false | Opposite to [button](#button): set to true to show the effect on hover |
| **ink** | optional | Boolean | true | Set to false to disable the ripple effect on click/tap |
| **raised** | optional | Boolean | false | Shows a shadow; on button press the shadow depth is increased by 1 |
| **z** | optional | Number 0-5 | 1 | The shadow depth for a raised button; raised buttons have a default z of 1 |
| **active** | optional | Boolean | | Set to true to show the active state (with border and background) |
| **before** | optional | Mithril template or String | | Extra content before main content |
| **after** | optional | Mithril template or String | | Extra content after main content |


## Inheritance

Icon button inherits from [button](#button).


## Default generated HTML

~~~html
<a class="icon-button">
    <div class="content">
        <div class="label">
            <div class="icon icon-normal">
                <i class="fit svg">
                    <svg>...</svg>
                </i>
            </div>
        </div>
        <div class="fit ripple constrained ">
            <div class="ripple-mask">
                <div class="ripple-waves" style=""></div>
            </div>
        </div>
    </div>
</a>
~~~
