# Checkbox

Form control to select one or more options from a set. Generates a styled checkbox input element.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Main features](#main-features)
- [Usage](#usage)
- [Keyboard control](#keyboard-control)
- [Options](#options)
  - [Checkbox specific](#checkbox-specific)
  - [Appearance options](#appearance-options)
  - [Common component options](#common-component-options)
- [Composition](#composition)
- [CSS classes](#css-classes)

<!-- /MarkdownTOC -->


<a id="main-features"></a>
## Main features

* Custom icons
* Customize button behaviour
* Set size
* Set the active state based on the checked state
* Keyboard control
* RTL (right-to-left) support


<a id="usage"></a>
## Usage

* [Usage with Mithril](mithril/checkbox.md)
* [Usage with React](react/checkbox.md)



<a id="keyboard-control"></a>
## Keyboard control

Read first: [Turning on keyboard control](../keyboard-control.md)

1. Start keyboard control by tabbing to the checkbox. It will show a focus state.
1. Press Enter to simulate a click.



<a id="options"></a>
## Options


<a id="checkbox-specific"></a>
### Checkbox specific

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **name**      | optional | String | | Input element name |
| **label**     | optional | String | | Text label |
| **defaultChecked** | optional | Boolean | false | Initially checked state |
| **checked**   | optional | Boolean | false | Managed checked state (see: [Handling state](../handling-state.md)) |
| **onChange**  | optional | Function `({event::Event, checked::Boolean, value::String}) -> undefined` | | See: [Handling state](../handling-state.md) |
| **selectable** | optional | Function `(selected::Boolean) -> Boolean` | | Sets the active state based on the checkbox state; receives the current selected state, return the selectable state |
| **value**     | optional | String |  | Input element value |
| **disabled**  | optional | Boolean |  | Set to true to disable the Checkbox |


<a id="appearance-options"></a>
### Appearance options

| **Parameter**  |  **Required** | **Type** | **Default** | **Description** |
| -------------- | -------------- | -------- | ----------- | --------------- |
| **iconOn**     | optional | Options object for [Icon](icon.md) | | Assigns a different icon for the on state |
| **iconOff**    | optional | Options object for [Icon](icon.md) | | Assigns a different icon for the off state |
| **iconButton** | optional | Options object for the [Icon Button](icon-button.md) | | Add attributes like `wash` and `ink` |
| **size**       | optional | String | "regular" | Equivalent to [Icon's type](icon.md) option; either "small" (16px), "regular" (24px), "medium" (32px), "large" (40px) |


<a id="common-component-options"></a>
### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional       | String   | "div"       | HTML element tag for the checkbox container |
| **className** | optional       | String   |             | Extra CSS class appended to `pe-checkbox-control` |
| **id**        | optional       | String   |             | HTML element id for the checkbox container |
| **before**    | optional       | String, hyperscript or component |      | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional       | String, hyperscript or component |      | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **events**    | optional       | Object   |             | Options object containing one or more standard events such as `onclick` (React: `onClick`) |
| **tabindex** (React: **tabIndex**) | optional       | Integer  |             | Tab index |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |



<a id="composition"></a>
## Composition

Checkbox is composed from:

* [Selection Control](selection-control.md)
  * [Icon Button](icon-button.md)
  * [Icon](icon.md)



<a id="css-classes"></a>
## CSS classes

* [Checkbox classes](../../packages/polythene-css-classes/checkbox.js)


