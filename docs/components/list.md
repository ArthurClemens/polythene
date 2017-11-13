# List

Displays a list of [List Tiles](list-tile.md), with an optional header.

Lists are also the base component of [Menus](menu.md).


## Main features

* All [List Tile](list-tile.md) main features
* Stack lists vertically
* Set borders
* Indent borders
* Compact display


## Usage

* [Usage with Mithril](mithril/list.md)
* [Usage with React](react/list.md)


## Keyboard control

Besides the regular accessibility keyboard control, List offers additional keyboard control for use in selectable lists (for instance when displaying search results). See option `keyboardControl` and usage examples.

See also: [List Tile](list-tile.md#keyboard-control)


## Options

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

### List specific options

| **Parameter**     |  **Required** | **Type** | **Default** | **Description** |
| ----------------- | -------------- | -------- | ----------- | --------------- |
| **header**        | optional | Object | | Options object for a [List Tile](list-tile.md); any list tile option can be used; in addition the options `title` and `sticky` |
| **header.title**  | optional | String | | Title text label |
| **header.sticky** | optional | Boolean | | Make header sticky when scrolling; [does not work in Edge](http://caniuse.com/#feat=css-sticky) |
| **tiles**         | use `tiles` or `content` | Array of type String, hyperscript or component | | List of [List Tiles](list-tile.md) |
| **all**  | optional       | Options Object | | [List Tiles](list-tile.md) options that will be applied to all tiles; only works when List children are passed as options (instead of passing a list of ListTile components) |


### List appearance options

| **Parameter**       |  **Required** | **Type** | **Default** | **Description** |
| ------------------- | -------------- | -------- | ----------- | --------------- |
| **borders**         | optional | Boolean | | Set to `true` to add borders to list tiles |
| **indentedBorders** | optional | Boolean | | Set to `true` to indent the list tile borders; note that list tiles must have option `indent` as well       |
| **compact**         | optional | Boolean | | Set to `true` to reduce vertical padding of list tiles |
| **padding**         | optional | Boolean | true | Set to `false` to remove top and bottom padding |


### List keyboard control options

| **Parameter**       |  **Required** | **Type** | **Default** | **Description** |
| ------------------- | -------------- | -------- | ----------- | --------------- |
| **keyboardControl** | optional | Boolean | | Set to `true` to enable keyboard control |
| **defaultHighlightIndex** | optional | Number | | Sets the initally highlighted index; after user interaction the index will be updated internally |
| **onSelect**  | optional | Function(state {Object}) | | Callback function that accepts the list selected state (Object with properties `event`, `index` {Number}, `dom` {HTMLElement}, `attrs` {Object}) |




## Composition

List is composed from:

* [List Tile](list-tile.md)


## CSS classes

* [List classes](../../packages/polythene-css-classes/list.js)

