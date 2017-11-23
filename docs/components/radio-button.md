# Radio Button

Form control to select a single option from a set. Generates a styled radio button input element.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" -->

- [Main features](#main-features)
- [Usage](#usage)
- [Options](#options)
  - [Radio button specific](#radio-button-specific)
  - [Appearance options](#appearance-options)
  - [Common component options](#common-component-options)
- [Composition](#composition)
- [CSS classes](#css-classes)

<!-- /MarkdownTOC -->

<a name="main-features"></a>
## Main features

* Custom icons
* Customize button behaviour
* Set size
* Set the active state based on the checked state
* Keyboard control


<a name="usage"></a>
## Usage

* [Usage with Mithril](mithril/radio-button.md)
* [Usage with React](react/radio-button.md)


<a name="options"></a>
## Options

<a name="radio-button-specific"></a>
### Radio button specific

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **name**      | optional, but required when using [Radio Group](radio-group.md) | String | | Input element name |
| **label**     | optional | String | | Text label |
| **defaultChecked** | optional | Boolean | false | Initially checked state |
| **checked**   | optional | Boolean | false | Managed checked state (see: [Handling state](../handling-state.md)) |
| **onChange**  | optional | Function(state {Object}) | | Callback function that accepts the input state (Object with properties `event`, `checked` {Boolean}, `value` {String}) (see: [Handling state](../handling-state.md)) |
| **selectable** | optional | Function(checked {Boolean}) | | Use to set the active state based on the Radio Button state; function that accepts the field checked value (Boolean) |
| **value**     | optional | String |  | Input element value |
| **disabled**  | optional | Boolean |  | Set to true to disable the Radio Button |

<a name="appearance-options"></a>
### Appearance options

| **Parameter**  |  **Required** | **Type** | **Default** | **Description** |
| -------------- | -------------- | -------- | ----------- | --------------- |
| **iconOn**     | optional | Options object for [Icon](icon.md) | | Assigns a different icon for the on state |
| **iconOff**    | optional | Options object for [Icon](icon.md) | | Assigns a different icon for the off state |
| **iconButton** | optional | Options object for the [Icon Button](icon-button.md) | | Add attributes like `wash` and `ink` |
| **size**       | optional | String | "regular" | Equivalent to [Icon's type](icon.md) option; either "small" (16px), "regular" (24px), "medium" (32px), "large" (40px) |

<a name="common-component-options"></a>
### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional       | String   | "div"       | HTML element tag for the Radio Button container |
| **className** | optional       | String   |         | Extra CSS class appended to `pe-radio-control` |
| **id**        | optional       | String   |             | HTML element id for the radio button container |
| **before**    | optional       | String, hyperscript or component |      | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional       | String, hyperscript or component |      | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **events**    | optional       | Object   |             | Options object containing one or more standard events such as `onclick` (React: `onClick`) |
| **tabindex** (React: **tabIndex**)  | optional       | Integer  |             | Tab index |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |


<a name="composition"></a>
## Composition

Radio Button is composed from:

* [Selection Control](selection-control.md)
  * [Icon Button](icon-button.md)
  * [Icon](icon.md)


<a name="css-classes"></a>
## CSS classes

* [Radio Button classes](../../packages/polythene-css-classes/radio-button.js)


