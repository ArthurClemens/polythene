# Button

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-Examples/index.html#/button">Demo</a>

Displays a text button with a [shadow](#shadow) and [ripple](#ripple) effect.

See also: [Icon Button](#icon-button) and [Floating Action Button](#fab)


## Usage

~~~javascript
import btn from 'polythene/button/button';

const myBtn = m.component(btn, {
	label: 'Button',
	raised: true
});
~~~

Add a URL:

~~~javascript
const myBtn = m.component(btn, {
	label: 'Button',
	raised: true,
	url: {
		href: 'index.html'
	}
});
~~~

Add an onclick event:

~~~javascript
const myBtn = m.component(btn, {
	label: 'Button',
	raised: true,
	events: {
		onclick: () => console.log('click')
	}
});
~~~

## Variations

* Buttons can be flat or raised. Using `raised` without specifying `z` gives the button a default shadow.
* The hover effect can be hidden with `wash: false`.
* The ripple effect on click can be hidden with `ink: false`.
* No icon in button, as this is not part of the Material Design guidelines; use [icon Button](#icon-button) instead


## Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'a' (if `url` is passed) or 'div' | HTML tag |
| **class** | optional | String |  | Extra CSS class appended to 'button' |
| **label** | required | String | | The button label |
| **url** | optional | Object with `href`, optionally `config` | | Button URL or click handler |
| **events** | optional | Object | | Button events; options object containing one or more events like `onclick` |
| **wash** | optional | Boolean | true | Set to false to hide the effect on hover |
| **ink** | optional | Boolean | true | Set to false to disable the ripple effect on click/tap |
| **raised** | optional | Boolean | false | Shows a shadow; on button press the shadow depth is increased by 1 |
| **z** | optional | Number 0-5 | 1 | The shadow depth for a raised button; raised buttons have a default z of 1 |
| **disabled** | optional | Boolean | false | Disables the button |
| **selected** | optional | Boolean | false | Set to true to show the button as selected |

### Developer options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **animateOnTap** | optional | Boolean | true | Set to false to remove z-animation and subsequent redraw |
| **onTap** | optional | Function | | Callback function on button tap "down" and "up"" |


## Default generated HTML

~~~html
<a class="raised button">
    <div class="content layout vertical">
        <span class="flex"></span>
        <span>Normal</span>
        <span class="flex"></span>
        <div class="fit ripple constrained">
            <div class="ripple-mask">
                <div class="ripple-waves" style=""></div>
            </div>
        </div>
        <div class="wash fit"></div>
        <div class="fit shadow">
            <div class="fit animated shadow-bottom shadow-bottom-z-1"></div>
            <div class="fit animated shadow-top shadow-top-z-1"></div>
        </div>
    </div>
</a>
~~~

## TODO

* Option to wait for ripple to finish before url/event is followed
