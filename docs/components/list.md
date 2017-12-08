# List

Displays a list of [List Tiles](list-tile.md), with an optional header.

Lists are also the base component of [Menus](menu.md).

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" -->

- [Main features](#main-features)
- [Usage](#usage)
- [Options](#options)
  - [List specific options](#list-specific-options)
  - [List appearance options](#list-appearance-options)
  - [Common component options](#common-component-options)
- [Composition](#composition)
- [CSS classes](#css-classes)

<!-- /MarkdownTOC -->

<a name="main-features"></a>
## Main features

* All [List Tile](list-tile.md) main features
* Stack lists vertically
* Set borders
* Indent borders
* Compact display


<a name="usage"></a>
## Usage

* [Usage with Mithril](mithril/list.md)
* [Usage with React](react/list.md)


<a name="options"></a>
## Options

<a name="list-specific-options"></a>
### List specific options

| **Parameter**     |  **Required** | **Type** | **Default** | **Description** |
| ----------------- | -------------- | -------- | ----------- | --------------- |
| **header**        | optional | Object | | Options object for a [List Tile](list-tile.md); any list tile option can be used; in addition the options `title` and `sticky` |
| **header.title**  | optional | String | | Title text label |
| **header.sticky** | optional | Boolean | | Make header sticky when scrolling; [does not work in Edge](http://caniuse.com/#feat=css-sticky) |
| **tiles**         | use `tiles` or `content` | Array of type String, hyperscript or component | | List of [List Tiles](list-tile.md) |
| **all**  | optional       | Options Object | | [List Tiles](list-tile.md) options that will be applied to all tiles; only works when List children are passed as options (instead of passing a list of ListTile components) |

<a name="list-appearance-options"></a>
### List appearance options

| **Parameter**       |  **Required** | **Type** | **Default** | **Description** |
| ------------------- | -------------- | -------- | ----------- | --------------- |
| **borders**         | optional | Boolean | | Set to `true` to add borders to list tiles |
| **indentedBorders** | optional | Boolean | | Set to `true` to indent the list tile borders; note that list tiles must have option `indent` as well       |
| **compact**         | optional | Boolean | | Set to `true` to reduce vertical padding of list tiles |
| **padding**         | optional | Boolean | true | Set to `false` to remove top and bottom padding |


<a name="common-component-options"></a>
### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional | String | "div" | HTML element tag |
| **className** | optional | String |  | Extra CSS class appended to `pe-list` |
| **style**     | optional | Object |       | For setting simple style attributes |
| **id** | optional | String | | HTML element id |
| **content** | use `tiles` or `content` | String, hyperscript or component | | Alternative content; replaces children and ignores `tiles` |
| **before** | optional | String, hyperscript or component | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after** | optional | String, hyperscript or component | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` (React: `onClick`) |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |


<a name="composition"></a>
## Composition

List is composed from:

* [List Tile](list-tile.md)


<a name="css-classes"></a>
## CSS classes

* [List classes](../../packages/polythene-css-classes/list.js)

