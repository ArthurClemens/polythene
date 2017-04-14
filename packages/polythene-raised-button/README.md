# Raised Button

Displays a text button with a [shadow](../polythene-shadow) effect.

See also: [(flat) Button](../polythene-button), [Icon Button](../polythene-icon-button) and [Floating Action Button](../polythene-fab)



## Usage

~~~javascript
import m from "mithril";
import raisedButton from "polythene-raised-button";

m(raisedButton, {
  label: "Button"
});
~~~



## Appearance

### Styling

Below are examples how to change the raised button appearance, either with a theme or with CSS.

You can find more information about theming in [Theme](../polythene-theme).

#### Themed component

~~~javascript
raisedButton.theme(".themed-raised-button", {
  color_light_background: "#FF1744",
  color_light_text:       "#fff"
});

m(raisedButton, {
  class: "themed-raised-button",
  // ... other options
});
~~~

#### CSS

Change CSS using the CSS Classes at the bottom of this page.

#### Colors

Colors can be set using `style`.

~~~javascript
m(raisedButton, {
  style: {
    backgroundColor: "#EF6C00",
    color: "#fff"
  },
  // ... other options
});
~~~



## Options

All options for [Button](../polythene-button) also apply to Raised button, and additionally:

### Raised button options

| **Parameter**    |  **Mandatory** | **Type**   | **Default** | **Description** |
| ---------------- | -------------- | ---------- | ----------- | --------------- |
| **z**            | optional       | Number 0-5 | 1           | The shadow depth |
| **increase**     | optional       | Number     | 1           | The z-index increment/decrement on tap; the maximum z value is 5 |
| **animateOnTap** | optional       | Boolean    | true        | Set to false to remove z-animation and subsequent redraw |



## Composition

Raised button is composed from:

* [Button](../polythene-button)
  * [Ripple](../polythene-ripple) (when option `ink` is not `false`)
* [Shadow](../polythene-shadow) 



## CSS classes

| **Element**    | **Key**     |  **Class** |
| -------------- | ----------- | --------------- |
| Component      | component   | `pe-button pe-text-button pe-raised-button` |

