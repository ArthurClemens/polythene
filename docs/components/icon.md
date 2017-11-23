# Icon

Displays an icon (image or [SVG](svg.md)).

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" -->

- [Main features](#main-features)
- [Usage](#usage)
- [Options](#options)
  - [Icon options](#icon-options)
  - [Common component options](#common-component-options)
- [Composition](#composition)
- [CSS classes](#css-classes)

<!-- /MarkdownTOC -->

<a name="main-features"></a>
## Main features

* Set SVG or image
* Set size
* Create round avatar portrait image


<a name="usage"></a>
## Usage

* [Usage with Mithril](mithril/icon.md)
* [Usage with React](react/icon.md)


<a name="options"></a>
## Options

<a name="icon-options"></a>
### Icon options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **svg**       | either `src` or `svg` must be passed | Object |  | [SVG](SVG.md) options object |
| **src**       | either `src` or `svg` must be passed | String |  | Icon URL (for `img` only) |
| **size**      | optional | String | "regular" | Sets the size: either "small" (16px), "regular" (24px), "medium" (32px), "large" (40px). Adds CSS class `pe-icon--small`, etcetera |
| **avatar**    | optional | Boolean | | Set to `true` to add class `pe-icon--avatar` which creates a round portrait image |

<a name="common-component-options"></a>
### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional | String | "div" | HTML element tag |
| **className** | optional | String |       | Extra CSS class appended to `pe-icon` |
| **style**     | optional | Object |       | For setting simple style attributes |
| **id**        | optional | String |       | HTML element id |
| **content**   | optional | String, hyperscript or component |  | Any content; replaces children and ignores `svg`  |
| **before**    | optional | String, hyperscript or component | | Extra content before main content; this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional | String, hyperscript or component | | Extra content after main content; this content is placed right of preceding elements with a higher stacking depth |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |


<a name="composition"></a>
## Composition

Icon is composed from:

* [SVG](svg.md) (when using option `svg`)


<a name="css-classes"></a>
## CSS classes

* [Icon classes](../../packages/polythene-css-classes/icon.js)

