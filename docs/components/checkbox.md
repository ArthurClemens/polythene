# Checkbox

Form control to select one or more options from a set. Generates a styled checkbox input element.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Checkbox](#checkbox)
  - [Main features](#main-features)
  - [Usage](#usage)
  - [Keyboard control](#keyboard-control)
  - [Options](#options)
    - [Checkbox specific](#checkbox-specific)
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

Press TAB to navigate to a button - it will show a highlight. Press ENTER to execute the equivalent of a click.


<a id="options"></a>
## Options


<a id="checkbox-specific"></a>
### Checkbox specific

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **checked**   | optional | Boolean | false | Managed checked state (see: [Handling state](../handling-state.md)) |
| **defaultChecked** | optional | Boolean | false | Initially checked state; ignored if `value` is used |
| **disabled**  | optional | Boolean |  | Set to `true` to disable the Checkbox |
| **iconButton** | optional | Options object for the [Icon Button](icon-button.md) | | Add attributes like `wash` and `ink` |
| **iconOff**    | optional | Options object for [Icon](icon.md) | | Assigns a different icon for the off state |
| **iconOn**     | optional | Options object for [Icon](icon.md) | | Assigns a different icon for the on state |
| **label**     | optional | String | | Text label |
| **name**      | optional | String | | Input element name |
| **onChange**  | optional | Function `({ event: Event, checked: boolean, value: string }) => undefined` | | See: [Handling state](../handling-state.md) |
| **selectable** | optional | Function `(selected: boolean) => boolean` | | Sets the active state based on the checkbox state; receives the current selected state, return the selectable state |
| **size**       | optional | String | "regular" | Equivalent to [Icon's type](icon.md) option; either "small" (16px), "regular" (24px), "medium" (32px), "large" (40px) |
| **value**     | optional | String |  | Input element value |


<a id="common-component-options"></a>
### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **after**     | optional       | String, hyperscript or component |      | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **before**    | optional       | String, hyperscript or component |      | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **className** | optional       | String   |             | Extra CSS class appended to `pe-checkbox-control` |
| **dataSet** | optional | Object |  | Custom data attributes: `dataSet: { count: "0" }` creates `data-count="0"` (note that the key should be a lowercase string) |
| **element**   | optional       | String   | "div"       | HTML element tag for the checkbox container |
| **events**    | optional       | Object   |             | Options object containing one or more standard events such as `onclick` (React: `onClick`) |
| **id**        | optional       | String   |             | HTML element id for the checkbox container |
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


