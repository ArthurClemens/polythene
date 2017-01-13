# Raised Button

Displays a text button with a [shadow](#shadow) effect.

See also: [(flat) Button](#button), [Icon Button](#icon-button) and [Floating Action Button](#fab)



## Usage

~~~javascript
import m from "mithril";
import { raisedButton } from "polythene-raised-button";

const myButton = m(raisedButton, {
  label: "Button"
});
~~~



## Options

All options for [Button](#button) also apply to Raised button, with additionally:

### Raised button options

| **Parameter**    |  **Mandatory** | **Type**   | **Default** | **Description** |
| ---------------- | -------------- | ---------- | ----------- | --------------- |
| **z**            | optional       | Number 0-5 | 1           | The shadow depth |
| **increase**     | optional       | Number     | 1           | The z-index increment/decrement on tap; the maximum z value is 5 |
| **animateOnTap** | optional       | Boolean    | true        | Set to false to remove z-animation and subsequent redraw |



## Composition

Button is composed from:

* [Button](#button)
  * [Ripple](#ripple) (when option `ink` is not `false`)
* [Shadow](#shadow) 



## CSS classes

| **Element**    | **Key**     |  **Class** |
| -------------- | ----------- | --------------- |
| Component      | component   | `pe-button pe-button--text pe-button--raised` |


