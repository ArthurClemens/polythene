# Radio Button

Form control to select a single option from a set. Generates a styled radio button input element.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Main features](#main-features)
- [Usage](#usage)
- [Options](#options)
  - [Radio button specific](#radio-button-specific)
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

* [Usage with Mithril](mithril/radio-button.md)
* [Usage with React](react/radio-button.md)



<a id="options"></a>
## Options


<a id="radio-button-specific"></a>
### Radio button specific

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **checked**   | optional | Boolean | false | Managed checked state (see: [Handling state](../handling-state.md)) |
| **defaultChecked** | optional | Boolean | false | Initially checked state |
| **disabled**  | optional | Boolean |  | Set to `true` to disable the Radio Button |
| **iconButton** | optional | Options object for the [Icon Button](icon-button.md) | | Add attributes like `wash` and `ink` |
| **iconOff**    | optional | Options object for [Icon](icon.md) | | Assigns a different icon for the off state |
| **iconOn**     | optional | Options object for [Icon](icon.md) | | Assigns a different icon for the on state |
| **label**     | optional | String | | Text label |
| **name**      | optional, but required when using [Radio Group](radio-group.md) | String | | Input element name |
| **onChange**  | optional | Function `({event::Event, checked::Boolean, value::String}) -> undefined` | | See: [Handling state](../handling-state.md) |
| **selectable** | optional | Function `(checked::Boolean) -> Boolean` | | Sets the active state based on the checkbox state; receives the current selected state, return the selectable state |
| **size**       | optional | String | "regular" | Equivalent to [Icon's type](icon.md) option; either "small" (16px), "regular" (24px), "medium" (32px), "large" (40px) |
| **value**     | optional | String |  | Input element value |


<a id="common-component-options"></a>
### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **after**     | optional       | String, hyperscript or component |      | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **before**    | optional       | String, hyperscript or component |      | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **className** | optional       | String   |         | Extra CSS class appended to `pe-radio-control` |
| **element**   | optional       | String   | "div"       | HTML element tag for the Radio Button container |
| **events**    | optional       | Object   |             | Options object containing one or more standard events such as `onclick` (React: `onClick`) |
| **id**        | optional       | String   |             | HTML element id for the radio button container |
| **tabindex** (React: **tabIndex**)  | optional       | Integer  |             | Tab index |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |



<a id="composition"></a>
## Composition

Radio Button is composed from:

* [Selection Control](selection-control.md)
  * [Icon Button](icon-button.md)
  * [Icon](icon.md)



<a id="css-classes"></a>
## CSS classes

* [Radio Button classes](../../packages/polythene-css-classes/radio-button.js)


