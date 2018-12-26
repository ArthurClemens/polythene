# Toolbar

Displays a horizontal bar containing a label and action items. 

See [Material Design Toolbars](https://material.io/guidelines/layout/structure.html#structure-Toolbars) for examples of different usages.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Main features](#main-features)
- [Usage](#usage)
- [Options](#options)
  - [Toolbar options](#toolbar-options)
  - [ToolbarTitle options](#toolbartitle-options)
  - [Common component options](#common-component-options)
- [Composition](#composition)
- [CSS classes](#css-classes)

<!-- /MarkdownTOC -->


<a id="main-features"></a>
## Main features

* Flexibly composable with labels and icon buttons
* Optional compact display
* RTL (right-to-left) support



<a id="usage"></a>
## Usage

* [Usage with Mithril](mithril/toolbar.md)
* [Usage with React](react/toolbar.md)



<a id="options"></a>
## Options


<a id="toolbar-options"></a>
### Toolbar options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **border** | optional | Boolean | false | Set to `true` to add a bottom border |
| **compact** | optional | Boolean | false | Set to `true` to create a more compact Toolbar |
| **fullbleed** | optional | Boolean | false | Set to `true` to remove side padding |
| **shadowDepth** | optional | Number 0-5 | No shadow | Depth of the shadow |


<a id="toolbartitle-options"></a>
### ToolbarTitle options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **center**    | optional | Boolean | false | Set to `true` to center the text |
| **indent**    | optional | Boolean | false | Set to `true` to indent the text as if it would be next to an icon |
| **text**      | either text or children | Boolean |  | Title text |
| **url** | optional | Object with `href`, optionally `oncreate` (for Mithril) or `onClick` (for React) or `to` (for React Router) | | URL location; Mithril: for in-app route linking set `oncreate : m.route.link`; React: for in-app route linking use `onClick` and a router such as `react-router-dom` |


<a id="common-component-options"></a>
### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **after** | optional | String, hyperscript or component | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **before** | optional | String, hyperscript or component | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **className** | optional | String |  | Extra CSS class appended to `pe-toolbar` |
| **content** | either a bar or `content` must be passed | String, hyperscript or component | | Alternative content; replaces children |
| **element**   | optional | String | "div" | HTML element tag |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` (React: `onClick`) |
| **id** | optional | String | | HTML element id |
| **style**     | optional | Object |       | For setting simple style attributes |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |



<a id="composition"></a>
## Composition

Toolbar is often composed from:

* [Icon Button](icon-button.md)
* ToolbarTitle (see usage examples)



<a id="css-classes"></a>
## CSS classes

* [Toolbar classes](../../packages/polythene-css-classes/toolbar.js)

