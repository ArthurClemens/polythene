# Checkbox

Form control to select multiple options from a set. Generates a styled checkbox input element.



## Usage

To create an unselected checkbox with `name` and `value` attributes:

~~~javascript
import m from "mithril";
import checkbox from "polythene-checkbox";

m(checkbox, {
  name: "organisation",
  value: "EFF"
});
~~~

An (initially) selected checkbox with a label:

~~~javascript
m(checkbox, {
  checked: true,
  label: "Label"
});
~~~

### Dynamic values

To read the checked state use `getState`:

~~~javascript
m(checkbox, {
  getState: state => vnode.state.checked = state.checked
})
~~~

To set the checked state, use `checked` as a function:

~~~javascript
m(checkbox, {
  checked: () => vnode.state.checked
})
~~~

Of course you can also use `events` with an `onclick` event:

~~~javascript
m(checkbox, {
  events: {
    onclick: () => vnode.state.checked = !vnode.state.checked
  }
})
~~~



## Appearance

### Styling

Below are examples how to change the checkbox appearance, either with a theme or with CSS.

You can find more information about theming in [Theme](../polythene-theme).

#### Themed component

Checkbox is composed from Selection control, and it uses its style variables.

~~~javascript
checkbox.theme(".blue-checkbox", {
  color_light_on:    "#2196F3",
  color_light_off:   "#2196F3",
  color_light_label: "#2196F3"
});

m(checkbox, {
  className: "blue-checkbox",
  label: "Label"
});
~~~

#### CSS

Change CSS using the CSS Classes at the bottom of this page.

#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
m(checkbox, {
  style: { color: "#2196F3" }
});
~~~

#### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


### Icons

To use alternative icons, use options `iconOn` and `iconOff` (see also "msvg" at [icon](../polythene-core-icon)):

~~~javascript
import iconStar from "mmsvg/google/msvg/toggle/star";
import iconStarOutline from "mmsvg/google/msvg/toggle/star-border";

m(checkbox, {
  iconOn: { msvg: iconStar },
  iconOff: { msvg: iconStarOutline }
});
~~~



## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional       | String   | "div"       | HTML element tag for the checkbox container |
| **className**     | optional       | String   |             | Extra CSS class appended to "pe-checkbox-control" |
| **id**        | optional       | String   |             | HTML element id for the checkbox container |
| **before**    | optional       | String, hyperscript or component |      | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional       | String, hyperscript or component |      | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **events**    | optional       | Object   |             | Options object containing one or more standard events such as `onclick` |
| **tabindex**  | optional       | Integer  |             | Tab index |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |

### Checkbox specific

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **name**      | optional | String | | Input element name |
| **label**     | optional | String | | Text label |
| **checked**   | optional | Boolean or Function | false | Checked state; use as function to set the value from outside |
| **value**     | optional | String | "1" | Input element value |
| **disabled**  | optional | Boolean |  | Set to true to disable the checkbox |

### Appearance

| **Parameter**  |  **Mandatory** | **Type** | **Default** | **Description** |
| -------------- | -------------- | -------- | ----------- | --------------- |
| **iconOn**     | optional | Options object for [icon](../polythene-core-icon) | | Assigns a different icon for the on state |
| **iconOff**    | optional | Options object for [icon](../polythene-core-icon) | | Assigns a different icon for the off state |
| **iconButton** | optional | Options object for the icon button | | Add attributes like `wash` and `ink` |
| **size**       | optional | String | "regular" | Equivalent to [icon's type](../polythene-core-icon) option; either "small" (16px), "regular" (24px), "medium" (32px), "large" (40px) |

### Dynamic values

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **getState**  | optional | Function(state {Object}) | | Callback function that accepts the field state (Object with properties `checked` {Boolean}, `value` {String}) |
| **selectable** | optional | Function(checked {Boolean}) | | Use to set the active state based on the checkbox state; function that accepts the field checked value (Boolean) |



## Composition

Checkbox is composed from:

* [Selection control](../polythene-selection-control)
  * [Icon button](../polythene-icon-button)
  * [Icon](../polythene-core-icon)



## CSS classes

See: `src/classes.js`

See also: [Selection control classes](../polythene-selection-control) 


