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

Use parameter `after` to append the ripple to the content:

	var ripple = require('polythene/ripple/ripple');
	var iconBtn = require('polythene/icon-button/icon-button');

	var myIconBtn = m.component(iconBtn, {
		icon: {
			svg: {
			    src: 'img/arrow.svg'
			}
		},
		after: m.component(ripple)
	});

Use an options object to define specific behavior:

	var myIconBtn = m.component(iconBtn, {
		icon: {
			svg: {
			    src: 'img/arrow.svg'
			}
		},
		after: m.component(ripple, {
            constrained: false,
            className: 'colored-ripple'
        })
	});


## Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **constrained** | optional | Boolean | true | Set to `false` to make the ripple shape no longer bound to the clicked element |
| **className** | optional | String |  | Extra CSS class appended to 'ripple' |
| **initialOpacity** | optional | Number | 0.2 | Opacity at the start of the ripple |
| **opacityDecayVelocity** | optional | Number | 0.4 | Velocity of decrease of opacity |
| **start** | optional | Function | | Callback function just before the ripple starts |
| **end** | optional | Function | | Callback function when the ripple has ended |


## Callback functions

	Ripple start(Event)

	where:
	    Event :: MouseEvent

	Ripple end(Event)

	where:
	    Event :: AnimationEvent

