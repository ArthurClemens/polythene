# Ripple

Adds a touch ripple effect to an element.

Buttons contain a ripple element by default. This page documents how to add a ripple to other components.



## Usage

* [Usage with Mithril](Ripple-Mithril.md)
* [Usage with React](Ripple-React.md)



## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional | String | "div" | HTML element tag |
| **className** | optional | String |  | Extra CSS class appended to `pe-ripple` |
| **style**     | optional | Object |       | For setting simple style attributes |
| **id** | optional | String | | HTML element id |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |

### Ripple specific options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **start**     | optional | Function | | Callback function just before the ripple starts; see Callback functions |
| **end**       | optional | Function | | Callback function when the ripple has ended; see Callback functions |
| **disabled**  | optional | Boolean | false | Set to `true` to disable ripples |

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
| **target**                  | optional | Function | | Function to set (on request) the ripple's target; by default the ripple's parent node element is used as target  |



## Callback functions

| **Function**     |  **Types**              |
| ---------------- | ----------------------- |
| **start(Event)** | Event :: MouseEvent     |
| **end(Event)**   | Event :: AnimationEvent |



## CSS classes

See: `polythene-core-ripple/src/classes.js`



