# Button

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-Examples/button.html">Demo</a>

Displays a text button with a [shadow](#shadow) and [ripple](#ripple) effect.

See also: [Icon Button](#icon-button) and [Floating Action Button](#fab)


## Usage

	var btn = require('polythene/button/button');

	var myBtn = m.component(btn, {
		label: 'Button',
		raised: true
	});

Add a URL:

	var myBtn = m.component(btn, {
		label: 'Button',
		raised: true,
		url: {href: 'index.html'}
	});


## Variations

* Buttons can be flat or raised. Using `raised` without specifying `z` gives the button a default shadow.
* The hover effect can be hidden with `wash: false`.
* The ripple effect on click can be hidden with `ink: false`.
* No icon in button, as this is not part of the Material Design guidelines; use [icon Button](#icon-button) instead


## Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML tag |
| **className** | optional | String |  | Extra CSS class appended to 'button' |
| **label** | required | String | | The button label |
| **url** | optional | Object | | Button URL; options object containing `href` and `config` |
| **wash** | optional | Boolean | true | Set to false to hide the effect on hover |
| **ink** | optional | Boolean | true | Set to false to disable the ripple effect on click/tap |
| **raised** | optional | Boolean | false | Shows a shadow; on button press the shadow depth is increased by 1 |
| **z** | optional | Number 0-5 | 1 | The shadow depth for a raised button; raised buttons have a default z of 1 |
| **disabled** | optional | Boolean | false | Disables the button |


## Default generated HTML

	<div raised="true" class="button">
		<div class="content">
			<span>Button label</span>
			<div fit="true" class="ripple constrained">
				<div class="ripple-mask">
					<div class="ripple-waves" style=""></div>
				</div>
			</div>
			<div fit="true" class="wash"></div>
			<div fit="true" class="shadow">
				<div fit="true" class="shadow-bottom shadow-bottom-z-1"></div>
				<div fit="true" class="shadow-top shadow-top-z-1"></div>
			</div>
		</div>
	</div>


## TODO

* Option to wait for ripple to finish

