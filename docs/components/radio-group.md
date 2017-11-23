# Radio Group

Manages a set of [Radio Buttons](radio-button.md).

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" -->

- [Main features](#main-features)
- [Usage](#usage)
- [Options](#options)
  - [Radio Group specific](#radio-group-specific)
  - [Common component options](#common-component-options)
- [CSS classes](#css-classes)

<!-- /MarkdownTOC -->

<a name="main-features"></a>
## Main features

* Facilitates managing radio buttons


<a name="usage"></a>
## Usage

Described in:

* [Radio Buttons with Mithril](mithril/radio-button.md)
* [Radio Buttons with React](react/radio-button.md)


<a name="options"></a>
## Options

<a name="radio-group-specific"></a>
### Radio Group specific

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **buttons**   | use `buttons` or `content` | Array | | List of [Radio Button options](radio-button.md#options) |
| **all**       | optional       | Options Object | | [Radio Button options](radio-button.md#options) that will be applied to all Radio Buttons |
| **name**      | required | String | | Name for all radio button elements |
| **onChange**  | optional | Function(state {Object}) | | Callback function that accepts the input state (Object with properties `event`, `checked` {Boolean}, `value` {String}) (see: [Handling state](../handling-state.md)) |

<a name="common-component-options"></a>
### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional       | String   | "div"       | HTML element tag for the Radio Button container |
| **className** | optional       | String   |             | Extra CSS class appended to `pe-radio-group` |
| **id**        | optional       | String   |             | HTML element id for the radio button container |
| **content** | use `buttons` or `content` | String, hyperscript or component | | See: `buttons` |
| **before**    | optional       | String, hyperscript or component |      | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional       | String, hyperscript or component |      | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |


<a name="css-classes"></a>
## CSS classes

* [Radio Group classes](../../packages/polythene-css-classes/radio-group.js)


