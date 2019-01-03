# Search

Search field with optional icons and buttons that respond to the input state.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Main features](#main-features)
- [Usage](#usage)
- [Options](#options)
  - [Search specific options](#search-specific-options)
  - [Common component options](#common-component-options)
- [Composition](#composition)
- [CSS classes](#css-classes)
- [Future](#future)

<!-- /MarkdownTOC -->


<a id="main-features"></a>
## Main features

* Custom icons and buttons for states "focus", "focus and dirty", "dirty" and "none"
* Custom [Textfield](textfield.md) display
* Full width display



<a id="usage"></a>
## Usage

* [Usage with Mithril](mithril/search.md)
* [Usage with React](react/search.md)



<a id="options"></a>
## Options


<a id="search-specific-options"></a>
### Search specific options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **buttons** | optional | Object | | Object with icons for each state:  `none`, `focus`, `focus_dirty` and `dirty`. Each state ("none", "focus", "focus_dirty" and "dirty") can have buttons `before` and `after` the search field. Pass hyperscript or a component (or Array) to each. |
| **fullWidth** | optional | Boolean | false | A fullwidth search box is visually extended to the sides (with a height of 56px); inset search box has side (page) padding and is less tall (48px) |
| **textfield** | required | Options object for [Text Field](textfield.md) | | Options for the TextField, for instance to specify the label |


<a id="common-component-options"></a>
### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **after**     | optional       | String, hyperscript or component | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **before**    | optional       | String, hyperscript or component | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **className** | optional | String |  | Extra CSS class appended to `pe-search` |
| **element**   | optional | String | "div" | HTML element tag for the checkbox container |
| **id** | optional | String | | HTML element id for the search field |
| **style**     | optional       | Object   |             | For setting simple style attributes |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |



<a id="composition"></a>
## Composition

Search is composed from:

* [Textfield](textfield.md)

Search usually contains:

* [Icon](icon.md)
* [Shadow](shadow.md)



<a id="css-classes"></a>
## CSS classes

* [Search classes](../../packages/polythene-css-classes/search.js)



<a id="future"></a>
## Future

* History pane
* Search results pane


