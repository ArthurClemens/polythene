# Radio Group

Manages a set of [Radio Buttons](radio-button.md).

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

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
| **all**       | optional       | Options Object | | [Radio Button options](radio-button.md#options) that will be applied to all Radio Buttons |
| **buttons**   | use `buttons` or `content` | Array | | List of [Radio Button options](radio-button.md#options) |
| **defaultSelectedValue** | optional | String | | The value of the default selected Radio Button |
| **name**      | required | String | | Name for all radio button elements |
| **onChange**  | optional | Function `({event::Event, checked::Boolean, value::String}) -> undefined` | | See: [Handling state](../handling-state.md) |


<a id="common-component-options"></a>
### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **after**     | optional       | String, hyperscript or component |      | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **before**    | optional       | String, hyperscript or component |      | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **className** | optional       | String   |             | Extra CSS class appended to `pe-radio-group` |
| **content** | use `buttons` or `content` | String, hyperscript or component | | See: `buttons` |
| **element**   | optional       | String   | "div"       | HTML element tag for the Radio Button container |
| **id**        | optional       | String   |             | HTML element id for the radio button container |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |



<a id="css-classes"></a>
## CSS classes

* [Radio Group classes](../../packages/polythene-css-classes/radio-group.js)


