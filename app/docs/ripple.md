# Ripple

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/ripple">Demo</a>

Adds a touch ripple effect to an element.

Buttons have a ripple element by default. This page documents how to add a ripple to other components.


## Usage

Use parameter `after` to append the ripple to the content:

~~~javascript
import m from 'mithril';
import { Ripple, ListTile } from 'polythene';

m(ListTile, {
    title: 'Title',
    after: m(Ripple)
});
~~~

Use an options object to define specific behavior:

~~~javascript
m(ListTile, {
    title: 'Title',
    after: m(Ripple, {
    	constrained: false,
    	class: 'colored-ripple'
	})
});
~~~


## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML element tag |
| **class** | optional | String |  | Extra CSS class appended to 'pe-ripple' |
| **id** | optional | String | | HTML element id |

### Ripple specific options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **start** | optional | Function | | Callback function just before the ripple starts; see Callback functions |
| **end** | optional | Function | | Callback function when the ripple has ended; see Callback functions |
| **disabled** | optional | Boolean | false | Set to `true` to disable ripples |

### Ripple appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **constrained** | optional | Boolean | true | Set to `false` to make the ripple shape no longer bound to the clicked element |
| **center** | optional | Boolean | false | Set to `true` to start the ripple from the center |
| **initialOpacity** | optional | Number | 0.2 | Opacity at the start of the ripple |
| **opacityDecayVelocity** | optional | Number | 0.4 | Velocity of decrease of opacity |


## Styling

The ripple color can be set in CSS:

~~~css
.pe-ripple {
	color: green;
}
~~~

By default the inherited color from the parent element is used.


## Callback functions

	Ripple start(Event)

	where:
	    Event :: MouseEvent

	Ripple end(Event)

	where:
	    Event :: AnimationEvent
