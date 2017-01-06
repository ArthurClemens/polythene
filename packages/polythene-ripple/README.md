# Ripple

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/ripple">Demo</a>

Adds a touch ripple effect to an element.

Buttons contain a ripple element by default. This page documents how to add a ripple to other components.


## Usage

Append a ripple to any HTML element (as long as it has `position: relative` and a size):

~~~javascript
import m from "mithril";

m("div",
  {
    style: {
      position: "relative",
      width: "200px",
      height: "100px",
    }
  },
  m(ripple)
);
~~~

Use parameter `after` to append the ripple to a Polythene content:

~~~javascript
import m from "mithril";
import { ripple } from "polythene-ripple";
import { listTile } from "polythene-list-tile";

const myListTile = m(listTile, {
    title: "Title",
    after: m(ripple)
});
~~~

Use an options object to define specific behavior:

~~~javascript
const myListTile = m(listTile, {
  title: "Title",
  after: m(ripple, {
    constrained: false,
    class: "colored-ripple"
  })
});
~~~


## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element** | optional | String | "div" | HTML element tag |
| **class** | optional | String |  | Extra CSS class appended to `pe-ripple` |
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
| **constrained** | optional | Boolean | true | Set to `false` to make the ripple shape no longer bound to the target element |
| **center** | optional | Boolean | false | Set to `true` to start the ripple from the center |
| **initialOpacity** | optional | Number | 0.2 | Opacity at the start of the ripple |
| **opacityDecayVelocity** | optional | Number | 0.4 | Velocity of decrease of opacity |


## Styling

By default the inherited `color` from the parent element is used. It can be changed with CSS:

~~~css
.pe-ripple {
  color: green;
}
~~~

## CSS classes

| **Element** |  **Class name** |
| ----------- | --------------- |
| component   | `pe-ripple` |
| waves       | `pe-ripple__waves` |
| mask        | `pe-ripple__mask` |

| **State**       |  **Class name** |
| --------------- | --------------- |
| constrained     | `pe-ripple--constrained` |
| waves animating | `pe-ripple__waves--animating` |



## Callback functions

| **Function**     |  **Types**              |
| ---------------- | ----------------------- |
| **start(Event)** | Event :: MouseEvent     |
| **end(Event)**   | Event :: AnimationEvent |

