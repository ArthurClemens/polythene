# Search

Search field with optional icons and buttons that respond to the input state.


## Main features

* Custom icons and buttons for states "focus", "focus and dirty", "dirty" and "none"
* Custom [Textfield](textfield.md) display
* Full width display


## Usage

* [Usage with Mithril](mithril/search.md)
* [Usage with React](react/search.md)


## Options

### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional | String | "div" | HTML element tag for the checkbox container |
| **className** | optional | String |  | Extra CSS class appended to `pe-search` |
| **style**     | optional       | Object   |             | For setting simple style attributes |
| **id** | optional | String | | HTML element id for the search field |
| **before**    | optional       | String, hyperscript or component | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional       | String, hyperscript or component | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` (React: `onClick`) |
| **tabindex** (React: **tabIndex**) | optional       | Integer | 0 | Tab index |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |

### Search specific options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **textfield** | required | Options object for [Text Field](textfield.md) | | Options for the text field, for instance to specify the label |
| **fullWidth** | optional | Boolean | false | A fullwidth search box is visually extended to the sides (with a height of 56px); inset search box has side (page) padding and is less tall (48px) |

### Search appearance options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **buttons** | optional | Object | | The Object needs to have (optional) attributes `none`, `focus`, `focus_dirty` and `dirty`, each with (optional) attributes `before` and `after`; pass a String, hyperscript or component (or Array) to each |


## Composition

Search is composed from:

* [Textfield](textfield.md)

Search usually contains:

* [Icon](icon.md)
* [Shadow](shadow.md)


## CSS classes

* [Search classes](../../packages/polythene-css-classes/search.js)


## Future

* History pane
* Search results pane


