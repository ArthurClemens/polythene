# List

Displays a list of [List Tiles](ListTile.md), with an optional header. Lists can be stacked.

Lists are also the base component of [menus](Menu.md).



## Usage

* [Usage with Mithril](List-Mithril.md)
* [Usage with React](List-React.md)



## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional | String | "div" | HTML element tag |
| **className** | optional | String |  | Extra CSS class appended to `pe-list` |
| **style**     | optional | Object |       | For setting simple style attributes |
| **id** | optional | String | | HTML element id |
| **content** | use `tiles` or `content` | String, hyperscript or component | | Alternative content; replaces children and ignores `tiles` |
| **before** | optional | String, hyperscript or component | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after** | optional | String, hyperscript or component | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |

### List specific options

| **Parameter**     |  **Mandatory** | **Type** | **Default** | **Description** |
| ----------------- | -------------- | -------- | ----------- | --------------- |
| **header**        | optional | Object | | Options object for a [List Tile](ListTile.md); any list tile option can be used; in addition the options `title` and `sticky` |
| **header.title**  | optional | String | | Title text label |
| **header.sticky** | optional | Boolean | | Make header sticky when scrolling; [does not work in Edge](http://caniuse.com/#feat=css-sticky) |
| **tiles**         | use `tiles` or `content` | Array of type String, hyperscript or component | | List of [List Tiles](ListTile.md) |

### List appearance options

| **Parameter**       |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------------- | -------------- | -------- | ----------- | --------------- |
| **borders**         | optional | Boolean | | Set to `true` to add borders to list tiles |
| **indentedBorders** | optional | Boolean | | Set to `true` to indent the list tile borders; note that list tiles must have option `indent` as well       |
| **compact**         | optional | Boolean | | Set to `true` to reduce vertical padding of list tiles |



## Composition

List is composed from:

* [List Tile](ListTile.md)



## CSS classes

See: `polythene-core-list/src/classes.js`

