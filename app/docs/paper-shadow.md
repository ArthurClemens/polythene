# Paper Shadow

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-Examples/paper-shadow.html">Demo</a>

Adds a configurable shadow to an element.

## Usage

	var paperShadow = require('polythene/paper-shadow/paper-shadow');

	var myShadow = m.component(paperShadow, {
		z: 1,
		content: 'My shadow'
	});

To animated the shadow:

	var myShadow = m.component(paperShadow, {
		z: 1,
		animated: true,
		content: 'My shadow'
	});


## Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML tag |
| **className** | optional | String |  | Extra CSS class appended to 'paper-shadow' |
| **content** | optional | Mithril template or String | | Content that will get the shadow |
| **z** | optional | Number 0-5 | 0 | Depth of the shadow |
| **animated** | optional | Boolean | false | Set to true to animate the shadow when setting a new z value. |


## Default generated HTML

	<div class="paper-shadow card" z="0">
		<div fit="true" class="shadow-bottom paper-shadow-bottom-z-0"></div>
		<div fit="true" class="shadow-top paper-shadow-top-z-0"></div>
		<div>Content...</div>
	</div>

