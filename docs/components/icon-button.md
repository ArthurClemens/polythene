# Icon Button

Displays an [Icon](icon.md) as a button. Also called toggle button.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Main features](#main-features)
- [Usage](#usage)
- [Options](#options)
  - [Icon button specific options](#icon-button-specific-options)
  - [Common component options](#common-component-options)
- [Composition](#composition)
- [CSS classes](#css-classes)

<!-- /MarkdownTOC -->


<a id="main-features"></a>
## Main features

* All [Button](button.md) main features
* Custom icon
* Compact display
* Inactive display



<a id="usage"></a>
## Usage

* [Usage with Mithril](mithril/icon-button.md)
* [Usage with React](react/icon-button.md)



<a id="options"></a>
## Options


<a id="icon-button-specific-options"></a>
### Icon button specific options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **icon**      | either icon or child nodes must be passed | Object |  | [Icon](icon.md) options object; also used to show an round "avatar" portrait image |
| **label** | optional | String |  | Optional button label |
| **compact**   | optional | Boolean | | Set to `true` to use less padding |
| **inactive** | optional | Boolean | | Set to `true` to disable button events and ripple/wash effects |


<a id="common-component-options"></a>
### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional | String | "div" | HTML element tag |
| **className** | optional | String |  | Extra CSS class appended to `pe-icon-button` |
| **style**     | optional | Object |       | For setting simple style attributes |
| **id**        | optional | String | | HTML element id |
| **content**   | optional | String, hyperscript or component |  | Content; replaces any children |
| **before**    | optional | String, hyperscript or component | | Extra content before main content; this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional | String, hyperscript or component | | Extra content after main content; this content is placed right of preceding elements with a higher stacking depth |
| **events**    | optional | Object | | Options object containing one or more standard events such as `onclick` (React: `onClick`) |
| **tabindex** (React: **tabIndex**)  | optional | Integer | | Tab index |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |



<a id="composition"></a>
## Composition

Icon Button is composed from:

* [Button](button.md)
* [Icon](icon.md) (when using option `icon`)



<a id="css-classes"></a>
## CSS classes

* [Icon Button classes](../../packages/polythene-css-classes/icon-button.js)


