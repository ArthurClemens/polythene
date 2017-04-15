# Ripple

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
import ripple from "polythene-ripple";
import listTile from "polythene-list-tile";

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



## Appearance

### Styling

Below are examples how to change the ripple appearance, either with a theme or with CSS.

You can find more information about theming in [Theme](../polythene-theme).

#### Themed component

~~~javascript
ripple.theme(".themed-ripple", {
  color_light:   "#F44336"
});

m(ripple, {
  class: "themed-ripple",
  // ... other options
});
~~~

#### CSS

Change CSS using the CSS Classes at the bottom of this page.

By default the inherited `color` from the parent element is used. It can be changed with CSS:

~~~css
.pe-ripple {
  color: green;
}
~~~

#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
m(ripple, {
  style: {
    color: "#2196F3"
  },
  // ... other options
});
~~~

#### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set



## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element** | optional | String | "div" | HTML element tag |
| **class** | optional | String |  | Extra CSS class appended to `pe-ripple` |
| **style**     | optional | Object |       | For setting simple style attributes |
| **id** | optional | String | | HTML element id |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |

### Ripple specific options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **start** | optional | Function | | Callback function just before the ripple starts; see Callback functions |
| **end** | optional | Function | | Callback function when the ripple has ended; see Callback functions |
| **disabled** | optional | Boolean | false | Set to `true` to disable ripples |

### Ripple appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **constrained**             | optional | Boolean | true | Set to `false` to make the ripple shape no longer bound to the target element |   
| **center**                  | optional | Boolean | false | Set to `true` to start the ripple from the center |
| **duration**                | optional | Number | `1 / opacityDecayVelocity * 0.2` | The animation duration in seconds |
| **startOpacity**            | optional | Number | 0.2 | Opacity at the start of the ripple animation |
| **endOpacity**              | optional | Number | 0.0 | Opacity at the end of the ripple animation |
| **startScale**              | optional | Number | 0.1 | Scale at the start of the ripple animation |
| **endScale**                | optional | Number | 2.0 | Scale at the end of the ripple animation |
| **animationTimingFunction** | optional | String | "ease-out" | Animation function: "ease-in-out" or "cubic-bezier(0.1, 0.7, 1.0, 0.1)" |
| **opacityDecayVelocity**    | optional | Number | 0.4 | Velocity of decrease of opacity |
| **persistent**              | optional | Boolean | false | Set to `true` to keep the ripple at the end of the animation |
| **getTarget**               | optional | Function | | Function to set (on request) the ripple's target; by default the ripple's parent node element is used as target  |



## CSS classes

| **Element**           | **Key**         |  **Class** |
| --------------------- | --------------- | --------------- |
| Component             | component       | `pe-ripple` |
| Waves element         | waves           | `pe-ripple__waves` |
| mask                  | mask            | `pe-ripple__mask` |

| **State**             | **Key**         |  **Class** |
| --------------------- | --------------- | --------------- |
| Constrained           | constrained     | `pe-ripple--constrained` |
| Animating waves state | wavesAnimating  | `pe-ripple__waves--animating` |



## Callback functions

| **Function**     |  **Types**              |
| ---------------- | ----------------------- |
| **start(Event)** | Event :: MouseEvent     |
| **end(Event)**   | Event :: AnimationEvent |

