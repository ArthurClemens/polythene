# Menu

A local popup menu with a list of choices. A menu contains one or more [Lists](list.md) with [List Tiles](list-tile.md) as menu elements.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" -->

- [Main features](#main-features)
- [Usage](#usage)
- [Options](#options)
  - [Menu specific options](#menu-specific-options)
  - [Menu appearance options](#menu-appearance-options)
  - [Transition options](#transition-options)
  - [Common component options](#common-component-options)
- [Composition](#composition)
- [CSS classes](#css-classes)
- [Future](#future)

<!-- /MarkdownTOC -->

<a name="main-features"></a>
## Main features

* All [List](list.md) main features
* Set origin
* Set offset
* Set z-depth
* Set position to selected item
* Custom transitions
* Pass menu options to dialog to show as a menu-dialog


<a name="usage"></a>
## Usage

* [Usage with Mithril](mithril/menu.md)
* [Usage with React](react/menu.md)


<a name="options"></a>
## Options

<a name="menu-specific-options"></a>
### Menu specific options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **visible** | required | Boolean | false | Set to true to show the menu |
| **permanent** | optional | Boolean |  | Set to true to always show the menu (mostly used for demonstration purposes) |
| **target** | optional | String |  | HTML element selector to position to, for instance `"#my-button"` |
| **reposition** | optional | Boolean | false | Set to `true` to position the menu to the menu item ([List Tile](list-tile.md)) that has class "selected" |
| **show** | optional | Boolean | | Set to true to show the menu |

<a name="menu-appearance-options"></a>
### Menu appearance options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **offset** | optional | Number | 16 | Horizontal offset  |
| **origin** | optional | String: "top-left", "top-right", "bottom-left", "bottom-right" | "top-left" (if `target` is specified) | Positioned menu corner |
| **size** | optional | Number: 1, 1.5, 2, 3, 4, 5, 6, 7; or "auto" | | Multiplication factor of width unit (56px); with "auto" the menu takes the width of the widest element; note that a large size can be displayed off screen on smaller devices |
| **z** | optional | Number 0-5 | 3 | Depth of the shadow |

<a name="transition-options"></a>
### Transition options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **transition** | optional | String: "both", "show", "hide", "none" | "both" | Sets when a transition is used |
| **showDuration** | optional | Number | .150 | The show transition duration in seconds |
| **hideDuration** | optional | Number | .150 | The hide transition duration in seconds |
| **showDelay** | optional | Number | 0 | The show delay duration in milliseconds |
| **hideDelay** | optional | Number | 0 | The hide delay duration in milliseconds; no delay is used when the menu is dismissed, for instance by tapping outside of the menu |
| **didShow** | optional | Function `(id::String) -> undefined` |  | Callback function that is called when the show transition is done |
| **didHide** | optional | Function `(id::String) -> undefined` |  | Callback function that is called when the hide transition is done |

<a name="common-component-options"></a>
### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional       | String   | "div"       | HTML element tag |
| **className** | optional       | String   |             | Extra CSS class appended to `pe-menu` |
| **style**     | optional       | Object   |             | For setting simple style attributes |
| **id**        | optional       | String   |             | HTML element id |
| **content**   | use `content` or children | String, hyperscript or component | | Expects a [List](list.md), or an array of lists; replaces children |
| **before**    | optional       | String, hyperscript or component | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional       | String, hyperscript or component | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **events**    | optional       | Object | | Options object containing one or more standard events such as `onclick` (React: `onClick`) |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |


<a name="composition"></a>
## Composition

Menu is usually composed from:

* [List](list.md)
* [List Tile](list-tile.md)

Menu also contains:

* [Shadow](shadow.md) (when option `z` is not `0`)


<a name="css-classes"></a>
## CSS classes

* [Menu classes](../../packages/polythene-css-classes/menu.js)


<a name="future"></a>
## Future

* Take the browser window into account to make sure that the menu is always in view
* Scrolling high menu content, style scrollbar
* Cascading menus
