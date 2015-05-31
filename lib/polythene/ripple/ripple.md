# Ripple

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-Examples/ripple.html">Demo</a>

Adds a touch ripple effect to an element.

Buttons have a ripple element by default. This page documents how to add a ripple to other components.


## Usage

Use parameter `after` to append the ripple to the content:

	import ripple from 'polythene/ripple/ripple';
	import listTile from 'polythene/list-tile/list-tile';

	let myListTile = m.component(listTile, {
	    title: 'Title',
	    after: m.component(ripple)
	});

Use an options object to define specific behavior:

	let myListTile = m.component(listTile, {
	    title: 'Title',
	    after: m.component(ripple, {
	    	constrained: false,
	    	class: 'colored-ripple'
    	})
	});



## Variations

The ripple color can be set in CSS:

	.colored-ripple {
		color: green;
	}

By default the inherited color from the parent element is used.


## Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **constrained** | optional | Boolean | true | Set to `false` to make the ripple shape no longer bound to the clicked element |
| **center** | optional | Boolean | false | Set to `true` to start the ripple from the center |
| **class** | optional | String |  | Extra CSS class appended to 'ripple' |
| **initialOpacity** | optional | Number | 0.2 | Opacity at the start of the ripple |
| **opacityDecayVelocity** | optional | Number | 0.4 | Velocity of decrease of opacity |
| **start** | optional | Function | | Callback function just before the ripple starts; see Callback functions |
| **end** | optional | Function | | Callback function when the ripple has ended; see Callback functions |


## Callback functions

	Ripple start(Event)

	where:
	    Event :: MouseEvent

	Ripple end(Event)

	where:
	    Event :: AnimationEvent

