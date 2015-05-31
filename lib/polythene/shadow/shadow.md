# Shadow

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-Examples/shadow.html">Demo</a>

Adds a configurable shadow to an element.

Other than Polymer, the shadow component does not wrap content. Instead the shadow component is added below another element's content.


## Usage

	import shadow from 'polythene/shadow/shadow';

	let myShadow = m.component(shadow, {
		z: 1
	});

Add the shadow to a Mithril template:

	let myCard = m('.card', [
        m('div[self-center]', 'Card!'),
        myShadow
    ]);


To animated the shadow use `animated`:

	let myShadow = m.component(shadow, {
		z: 1,
		animated: true
	});


## Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML tag |
| **class** | optional | String |  | Extra CSS class appended to 'shadow' |
| **z** | optional | Number 0-5 | 0 | Depth of the shadow |
| **animated** | optional | Boolean | false | Set to true to animate the shadow when setting a new z value. |


## Default generated HTML

	<div fit="true" class="shadow">
		<div fit="true" class="shadow-bottom shadow-bottom-z-1"></div>
		<div fit="true" class="shadow-top shadow-top-z-1"></div>
	</div>


