# Floating Action Button

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-Examples/fab.html">Demo</a>

A circular main button with a [shadow](#shadow) and [ripple](#ripple) effect.


## Usage

	var fab = require('polythene/fab/fab');

	var myFab = m.component(fab, {
        icon: {
        	svg: {
        	    src: 'img/arrow.svg'
        	}
        }
    });



## Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML tag |
| **className** | optional | String |  | Extra CSS class appended to 'fab' |
| **icon** | required | Object |  | [icon](#icon) options object |
| **z** | optional | Number 0-5 | 1 | Depth of the shadow |
| **small** | optional | Boolean | false | Set to true to display a small button |
| **before** | optional | Mithril template or String or Array | | Extra content before main content |
| **after** | optional | Mithril template or String or Array | | Extra content after main content |



## Default generated HTML

	<div class="shadow fab">
	    <div fit="true" class="shadow-bottom shadow-bottom-z-1"></div>
	    <div fit="true" class="shadow-top shadow-top-z-1"></div>
	    <div class="icon icon-normal">
	        <i fit="true" class="svg">
	            svg...
	        </i>
	    </div>
	    <div fit="true" class="ripple constrained">
	        <div class="waves"></div>
	    </div>
	</div>
