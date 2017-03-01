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



## Options

All options for [Button](../polythene-button) also apply to Raised button, with additionally:

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


