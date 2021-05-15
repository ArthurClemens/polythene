# Radio Group

Manages a set of [Radio Buttons](radio-button.md).

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Radio Group](#radio-group)
  - [Main features](#main-features)
  - [Usage](#usage)
  - [Options](#options)
    - [Radio Group options](#radio-group-options)
    - [Common component options](#common-component-options)
  - [CSS classes](#css-classes)

<!-- /MarkdownTOC -->


<a id="main-features"></a>
## Main features

* Facilitates managing radio buttons



<a id="usage"></a>
## Usage

Described in:

* [Radio Buttons with Mithril](mithril/radio-button.md)
* [Radio Buttons with React](react/radio-button.md)



<a id="options"></a>
## Options


<a id="radio-group-options"></a>
### Radio Group options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **name**      | required | String | | Name for all radio button elements |
| **buttons**   | use `buttons` or `content` | Array | | List of [Radio Button options](radio-button.md#options) |
| **defaultCheckedValue** | optional | String | | The value of the default checked Radio Button; ignored if Radio Button's `checked` is used |
| **checkedValue**     | optional | String | | Checks the Radio Button that has this value. It is ignored when one of the group's Radio Buttons uses option `checked`. This is useful when you maintain the state of the value yourself. |
| **onChange**  | optional | Function `({ event: Event, checked: boolean, value: string }) => undefined` | | See: [Handling state](../handling-state.md) |
| **all**       | optional       | Options Object | | [Radio Button options](radio-button.md#options) that will be applied to all Radio Buttons |


<a id="common-component-options"></a>
### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **after**     | optional       | String, hyperscript or component |      | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **before**    | optional       | String, hyperscript or component |      | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **className** | optional       | String   |             | Extra CSS class appended to `pe-radio-group` |
| **content** | use `buttons` or `content` | String, hyperscript or component | | See: `buttons` |
| **dataSet** | optional | Object |  | Custom data attributes: `dataSet: { count: "0" }` creates `data-count="0"` (note that the key should be a lowercase string) |
| **element**   | optional       | String   | "div"       | HTML element tag for the Radio Button container |
| **id**        | optional       | String   |             | HTML element id for the radio button container |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |



<a id="css-classes"></a>
## CSS classes

* [Radio Group classes](../../packages/polythene-css-classes/radio-group.js)


