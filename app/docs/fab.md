# Floating Action Button

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/fab">Demo</a>

A circular main button with a [shadow](#shadow) and [ripple](#ripple) effect.


## Usage

	import fab from 'polythene/fab/fab';

	const myFab = m.component(fab, {
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
| **class** | optional | String |  | Extra CSS class appended to 'fab' |
| **icon** | required | Object |  | [icon](#icon) options object |
| **z** | optional | Number 0-5 | 1 | Depth of the shadow |
| **small** | optional | Boolean | false | Set to true to display a small button (class name `fab mini`) |
| **before** | optional | Mithril template or String | | Extra content before main content |
| **after** | optional | Mithril template or String | | Extra content after main content |


## Inheritance

FAB inherits from [icon button](#icon-button) (which inherits from [button](#button), with these adjustments:

* Button options `raised` is set to true
* The ripple eminates from the center of the button
* The ripple has a 2/3 decay speed


## Default generated HTML

	<a class="raised fab">
	    <div class="content">
	        <div class="label">
	            <div class="icon icon-normal">
	                <i class="fit svg">
	                    <svg>...</svg>
	                </i>
	            </div>
	        </div>
	        <div class="fit ripple constrained">
	            <div class="ripple-mask">
	                <div class="ripple-waves" style=""></div>
	            </div>
	        </div>
	        <div class="wash fit"></div>
	        <div class="fit shadow ">
	            <div class="fit animated shadow-bottom shadow-bottom-z-2"></div>
	            <div class="fit animated shadow-top shadow-top-z-2"></div>
	        </div>
	    </div>
	</a>


## TODO

* "The floating action button animates onto the screen as an expanding piece of material, by default. The icon within it may be animated."
* "The floating action button can transform into a toolbar upon press or scroll. The toolbar can contain related actions, text and search fields, or any other items that would be useful at hand."
* "The floating action button can fling out related actions upon press."
* "The floating action button can transform into a single piece of material which contains all the actions."
* "The floating action button can transform into sheets of material that are part of the app structure."
