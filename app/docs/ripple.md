# Ripple

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-Examples/ripple.html">Demo</a>

Adds a touch ripple effect to an element.


## Variations

The ripple color can be set in CSS:

	.colored-ripple {
		color: green;
	}

By default the inherited color from the parent element is used.


## Usage

This component should not be used standalone. Instead add a `ripple` property to a regular module.

Use `true` to simply enable the ripple with default values:

	var iconBtn = require('polythene/icon-button/icon-button');

	var myIconBtn = m.component(iconBtn, {
		icon: {
			svg: {
			    src: 'img/arrow.svg'
			}
		},
		ripple: true
	});

Use an options object to define specific behavior:

	var myIconBtn = m.component(iconBtn, {
		icon: {
			svg: {
			    src: 'img/arrow.svg'
			}
		},
		ripple: {
            constrained: false,
            className: 'colored-ripple'
        }
	});


## Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **constrained** | optional | Boolean | true | Set to `false` to make the ripple shape no longer bound to the clicked element |
| **className** | optional | String |  | Extra CSS class appended to 'ripple' |
| **start** | optional | Function | | Callback function just before the ripple starts |
| **end** | optional | Function | | Callback function when the ripple has ended |


## Callback functions

	start(Event)

	where:
	    Event :: MouseEvent

	end(Event)

	where:
	    Event :: AnimationEvent
