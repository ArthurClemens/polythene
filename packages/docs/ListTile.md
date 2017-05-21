# List Tile

Displays a list element as part of a [List](List.md).



## Usage

* [Usage with Mithril](ListTile-Mithril.md)
* [Usage with React](ListTile-React.md)



## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element** | optional | String | "div" | HTML element tag |
| **className** | optional | String |  | Extra CSS class appended to "pe-list-tile" |
| **style**     | optional | Object |       | For setting simple style attributes |
| **id** | optional | String | | HTML element id |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` |
| **before** | optional | String, hyperscript or component | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after** | optional | String, hyperscript or component | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |

### List tile content options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **content**   | -              | -        |             | See below |
| **secondary** | optional       | Object   |             | Options for secondary content, see below |

### List tile appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **indent** | optional | Boolean | | Set to `true` to indent the content |
| **selected** | optional | Boolean | false | Set to `true` to show a selected state; adds class "selected" |
| **disabled** | optional | Boolean | false | Set to `true` to deactivate the url and hover state (in case of [List](List.md) with setting `hoverable`) and show a disabled state; adds class "disabled" |
| **ink** | optional | Boolean | false | Set to `true` to show a ripple effect when the tile is tapped |
| **ripple** | optional (valid if `ink` is `true`) | Options object | | Pass [Ripple](Ripple.md) options to define ripple behavior |
| **hoverable** | optional | Boolean | false | Set to true to show a hover effect (non-touch devices) |
| **selectable** | optional | Boolean | false | Set to true to show a mouse pointer (non-touch devices) |
| **sticky** | optional | Boolean | | Make list tile sticky when scrolling; this is normally set in the [list](../polythene-list) component as `header.sticky`; [does not work in Chrome or IE/Edge](http://caniuse.com/#feat=css-sticky); adds class "sticky" |
| **compact** | optional | Boolean | | Set to `true` to reduce vertical padding |

### List tile primary content options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **content** | optional | String, hyperscript or component | | Any primary content; replaces children and ignores `title`, `subTitle` and `highSubtitle` |
| **title** | optional | String | | The text content |
| **subtitle** | optional | String | | Secondary text content (1 line high) |
| **highSubtitle** | optional | String | | Secondary text content (2 lines high) |
| **front** | optional | String, hyperscript or component |  | Content to show at the left of the primary content |
| **url** | optional | Object with `href`, optionally `oncreate` (for Mithril) or `onClick` (for React) | | URL location; Mithril: for in-app route linking set `oncreate : m.route.link`; React: for in-app route linking use `onClick` and a router such as `react-router-dom` |

### List tile secondary content options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **secondary.element** | optional | String | See "Layout of secondary content" below | HTML element for secondary content |
| **secondary.icon** | optional | Object |  | [Icon](Icon.md) options object for icon in secondary content; will be placed above secondary.content |
| **secondary.url** | optional | Object with `href`, optionally `oncreate` (for Mithril) or `onClick` (for React) | | URL for secondary content; Mithril: for in-app route linking set `oncreate : m.route.link`; React: for in-app route linking use `onClick` and a router such as `react-router-dom` |
| **secondary.content** | optional | String, hyperscript or component | | Secondary content |



## Composition

List Tile is composed from:

* [Ripple](Ripple.md) (when option `ink` is used)
* [Icon](Icon.md) (when option `secondary.icon` is used)



## CSS classes

See: `polythene-core-list-tile/src/classes.js`

