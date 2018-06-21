# Menu

A local popup menu with a list of choices. A menu contains one or more [Lists](list.md) with [List Tiles](list-tile.md) as menu elements.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Main features](#main-features)
- [Usage](#usage)
- [Options](#options)
  - [Menu specific options](#menu-specific-options)
  - [Transition options](#transition-options)
  - [Common component options](#common-component-options)
- [Composition](#composition)
- [CSS classes](#css-classes)
- [Future](#future)

<!-- /MarkdownTOC -->

<a id="main-features"></a>
## Main features

* Choose menu type: dropdown, exposing dropdown, dialog
* Anchor menu to position "top left", "bottom right", etcetera
* Tweak positioning with an offset
* Dropdown menu: optionally reposition according to selected item
* Long list: scroll selected item into view
* Custom transitions
* Optional backdrop
* All [List](list.md) main features


<a id="usage"></a>
## Usage

* [Usage with Mithril](mithril/menu.md)
* [Usage with React](react/menu.md)


<a id="options"></a>
## Options

<a id="menu-specific-options"></a>
### Menu specific options

| **Parameter**    |  **Required** | **Type** | **Default** | **Description** |
| ---------------- | -------------- | -------- | ----------- | --------------- |
| **backdrop**     | optional       | Boolean | | Set to `true` to add a backdrop below the menu |
| **height**       | optional       | String or Number | | Use "max" to use the maximum available height within the parent element (the top position and bottom margin will be subtracted automatically); otherwise use a number with or without pixels or percentage, for example: `160`, `"160px"` or `"75%"` (when using percentage the parent element must have a height) |
| **offsetH**      | optional | Number or String | 0 | Horizontal offset relative to target element; use a number with or without pixels or percentage, for example: `16`, `"16px"` or `"75%"`  |
| **offsetV**      | optional | Number or String | "79%" | Vertical offset relative to target element; use a number with or without pixels or percentage, for example: `16`, "16px" or "75%" |
| **origin**       | optional | String | "top" (if `target` is specified)      | Makes the menu appear from a corner or a side; use any combination of `"top"`, `"right"`, `"bottom"`, `"left"`; for example: `"top left"`, `"bottom right"`, `"top"`; but not: `"top bottom"`, `"right left"`  |
| **permanent**    | optional | Boolean |  | Set to `true` to always show the menu (mostly used for demonstration purposes) |
| **reposition**   | optional | Boolean | false | Set to `true` to position the menu to the menu item ([List Tile](list-tile.md)) that has class "selected" |
| **scrollTarget** | optional | String |  | HTML element selector to scroll to at appearance, for example `".list-item-12"` |
| **show**         | optional | Boolean | | Set to `true` to show the menu |
| **target**       | recommended | String |  | HTML element selector to position to, for example `"#my-button"` |
| **topMenu**      | optional | Boolean |  | Set to `true` to make the menu appear full width at the top |
| **transitions**  | optional | Object | | See "Transition options" below  |
| **width**        | optional | Number: 1, 1.5, 2, 3, 4, 5, 6, 7, or "auto" | | Multiplication factor of width unit (56px); with "auto" the menu takes the width of the widest element; note that on smaller devices a large size may get clipped by the screen |
| **z**            | optional | Number 0-5 | 3 | Depth of the shadow |

<a id="transition-options"></a>
### Transition options

See: [Transitions](../transitions.md)

<a id="common-component-options"></a>
### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **after**     | optional       | String, hyperscript or component | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **before**    | optional       | String, hyperscript or component | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **className** | optional       | String   |             | Extra CSS class appended to `pe-menu` |
| **content**   | use `content` or children | String, hyperscript or component | | Expects a [List](list.md), or an array of lists; replaces children |
| **element**   | optional       | String   | "div"       | HTML element tag |
| **events**    | optional       | Object | | Options object containing one or more standard events such as `onclick` (React: `onClick`) |
| **id**        | optional       | String   |             | HTML element id |
| **style**     | optional       | Object   |             | For setting simple style attributes |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |


<a id="composition"></a>
## Composition

Menu is usually composed from:

* [List](list.md)
* [List Tile](list-tile.md)

Menu also contains:

* [Shadow](shadow.md) (when option `z` is not `0`)


<a id="css-classes"></a>
## CSS classes

* [Menu classes](../../packages/polythene-css-classes/menu.js)


<a id="future"></a>
## Future

* Take the browser window into account to make sure that the menu is always in view
* Scrolling high menu content, style scrollbar
* Cascading menus
