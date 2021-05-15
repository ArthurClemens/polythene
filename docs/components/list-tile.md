# List Tile

Displays a list element as part of a [List](list.md).

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [List Tile](#list-tile)
  - [Main features](#main-features)
  - [Usage](#usage)
  - [Options](#options)
    - [List tile content options](#list-tile-content-options)
    - [List tile primary content options](#list-tile-primary-content-options)
    - [List tile secondary content options](#list-tile-secondary-content-options)
    - [Common component options](#common-component-options)
  - [Composition](#composition)
  - [CSS classes](#css-classes)

<!-- /MarkdownTOC -->


<a id="main-features"></a>
## Main features

* Separately set primary, secondary and front content
* Hover state
* Selected state
* Customize ripple effect (center, opacity, speed, color)
* Compact display
* Set as sticky header
* Indent content
* RTL (right-to-left) support


<a id="usage"></a>
## Usage

* [Usage with Mithril](mithril/list-tile.md)
* [Usage with React](react/list-tile.md)




<a id="options"></a>
## Options


<a id="list-tile-content-options"></a>
### List tile content options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **compact** | optional | Boolean | | Set to `true` to reduce vertical padding |
| **content**   | -              | -        |             | See below |
| **disabled** | optional | Boolean | false | Set to `true` to deactivate the url and hover state (in case of [List](List.md) with setting `hoverable`) and show a disabled state |
| **header**    | optional       | Boolean  | false       | Set to `true` to make this a header tile |
| **highlight** | optional | Boolean | false | Set to `true` to show a highlight state; a selected state always has precedence over a highlight state |
| **hoverable** | optional | Boolean | false | Set to `true` to show a hover effect (non-touch devices) |
| **indent** | optional | Boolean | false | Set to `true` to indent the content |
| **ink** | optional | Boolean | false | Set to `true` to show a ripple effect when the tile is tapped |
| **inset** | optional | Boolean | false | Set to `true` to add side and vertical margins (if set: default 8px) |
| **insetH** | optional | Boolean | false | Set to `true` to add side margins (if set: default 8px) |
| **insetV** | optional | Boolean | false | Set to `true` to add vertical margins (if set: default 8px) |
| **navigation** | optional | Boolean | false | Set to `true` to use a Material Design navigation style |
| **ripple** | optional (valid if `ink` is `true`) | Options object | | Pass [Ripple](ripple.md) options to define ripple behavior |
| **rounded** | optional | Boolean | false | Set to `true` to make the highlight and selection rounded |
| **secondary** | optional       | Object   |             | Options for secondary content, see below |
| **selectable** | optional | Boolean | false | Set to `true` to show a mouse pointer (non-touch devices) |
| **selected** | optional | Boolean | false | Set to `true` to show a selected state |
| **sticky** | optional | Boolean | false | Make list tile sticky when scrolling; this is normally set in the [List](list.md) component as `header.sticky`; [does not work in IE or Edge < 16](http://caniuse.com/#feat=css-sticky) |


<a id="list-tile-primary-content-options"></a>
### List tile primary content options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **compactFront** | optional | Boolean | false | Set to `true` to reduce horizontal width of `front` content |
| **content**      | optional | String, hyperscript or component | | Any primary content; ignores `title`, `subtitle`, `highSubtitle`, `subContent` and `children` |
| **front**        | optional | String, hyperscript or component |  | Content to show at the left of the primary content |
| **highSubtitle** | optional | String, hyperscript or component | | Secondary text content (2 lines high) |
| **subContent**   | optional | String, hyperscript or component | | Secondary content (no height restriction) |
| **subtitle**     | optional | String | | Secondary text content (1 line high) |
| **title**        | optional | String | | The text content |
| **url** | optional | Object with `href`, optionally `oncreate` (for Mithril) or `onClick` (for React) or `to` (for React Router) | | URL location; Mithril 2.x: only use `url.href` and set `element` to `m.route.Link`; Mithril 1,x: for in-app route linking set `oncreate : m.route.link`; React: for in-app route linking use `onClick` and a router such as `react-router-dom` |


<a id="list-tile-secondary-content-options"></a>
### List tile secondary content options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **secondary.content** | optional | String, hyperscript or component | | Secondary content |
| **secondary.element** | optional | String | | HTML element for secondary content |
| **secondary.icon** | optional | Object |  | [Icon](Icon.md) options object for icon in secondary content; will be placed above secondary.content |
| **secondary.url** | optional | Object with `href`, optionally `oncreate` (for Mithril 1.x) or `onClick` (for React) | | URL for secondary content; Mithril 2.x: only use `url.href` and set `element` to `m.route.Link`; Mithril 1.x: for in-app route linking set `oncreate : m.route.link`; React: for in-app route linking use `onClick` and a router such as `react-router-dom` |


<a id="common-component-options"></a>
### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **after** | optional | String, hyperscript or component | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **before** | optional | String, hyperscript or component | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **className** | optional | String |  | Extra CSS class appended to `pe-list-tile` |
| **dataSet** | optional | Object |  | Custom data attributes: `dataSet: { count: "0" }` creates `data-count="0"` (note that the key should be a lowercase string) |
| **element** | optional | String | "div" | HTML element tag |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` (React: `onClick`) |
| **id** | optional | String | | HTML element id |
| **style**     | optional | Object |       | For setting simple style attributes |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |



<a id="composition"></a>
## Composition

List Tile is composed from:

* [Ripple](ripple.md) (when option `ink` is used)
* [Icon](icon.md) (when option `secondary.icon` is used)



<a id="css-classes"></a>
## CSS classes

* [List Tile classes](../../packages/polythene-css-classes/list-tile.js)

