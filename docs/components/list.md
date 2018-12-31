# List

Displays a list of [List Tiles](list-tile.md), with an optional header.

Lists are also the base component of [Menus](menu.md).

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Main features](#main-features)
- [Usage](#usage)
- [Options](#options)
  - [List specific options](#list-specific-options)
  - [Common component options](#common-component-options)
- [Composition](#composition)
- [CSS classes](#css-classes)

<!-- /MarkdownTOC -->


<a id="main-features"></a>
## Main features

* All [List Tile](list-tile.md) main features
* Stack lists vertically
* Set borders
* Indent borders
* Optional compact display
* RTL (right-to-left) support


<a id="usage"></a>
## Usage

* [Usage with Mithril](mithril/list.md)
* [Usage with React](react/list.md)



<a id="options"></a>
## Options


<a id="list-specific-options"></a>
### List specific options

| **Parameter**      |  **Required** | **Type** | **Default** | **Description** |
| ------------------ | -------------- | -------- | ----------- | --------------- |
| **tiles**          | use `tiles` or `content` | Array of type String, hyperscript or component | | List of [List Tile](list-tile.md) components or List Tile options |
| **all**            | optional       | Options Object | | [List Tile](list-tile.md) options that will be applied to all tiles; for this, List children need to be passed as options (instead of passing a list of List Tile components) |
| **border**         | optional       | Boolean | false | Set to `true` to insert separator borders between List Tiles |
| **compact**        | optional       | Boolean | false | Set to `true` to reduce vertical padding of list tiles |
| **header**         | optional       | Object | | Options object for a [List Tile](list-tile.md); use `sticky` to pin the header when scrolling - [does not work in IE or Edge < 16](http://caniuse.com/#feat=css-sticky)  |
| **indentedBorder** | optional       | Boolean | false | Set to `true` to indent the list tile borders; for a proper layout, List Tiles must have option `indent` as well |
| **padding**        | optional       | String | "both" | Vertical padding; possible values: "top", "bottom", "none", "both" |


<a id="common-component-options"></a>
### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **after** | optional | String, hyperscript or component | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **before** | optional | String, hyperscript or component | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **className** | optional | String |  | Extra CSS class appended to `pe-list` |
| **content** | use `tiles` or `content` | String, hyperscript or component | | Alternative content; replaces children and ignores `tiles` |
| **element**   | optional | String | "div" | HTML element tag |
| **id** | optional | String | | HTML element id |
| **style**     | optional | Object |       | For setting simple style attributes |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |



<a id="composition"></a>
## Composition

List is composed from:

* [List Tile](list-tile.md)



<a id="css-classes"></a>
## CSS classes

* [List classes](../../packages/polythene-css-classes/list.js)

