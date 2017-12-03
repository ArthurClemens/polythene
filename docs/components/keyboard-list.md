# Keyboard List

A [List](list.md) with keyboard control.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" -->

- [Usage](#usage)
- [Keyboard control](#keyboard-control)
- [Options](#options)
  - [Keyboard control options](#keyboard-control-options)
  - [Internally used options](#internally-used-options)
- [Composition](#composition)
- [CSS classes](#css-classes)

<!-- /MarkdownTOC -->

<a name="usage"></a>
## Usage

* [Usage with Mithril](mithril/list.md)
* [Usage with React](react/list.md)


<a name="keyboard-control"></a>
## Keyboard control

Besides the regular accessibility keyboard control, List offers additional keyboard control for use in selectable lists (for instance when displaying search results). 

See also: [List Tile](list-tile.md#keyboard-control)


<a name="options"></a>
## Options

<a name="keyboard-control-options"></a>
### Keyboard control options

| **Parameter**       |  **Required** | **Type** | **Default** | **Description** |
| ------------------- | -------------- | -------- | ----------- | --------------- |
| **highlightIndex**  | optional | Number | | Sets the highlighted index when the list does not have a highlight yet; after user interaction the index will be updated internally |
| **defaultHighlightIndex** | optional | Number | | Sets the initally highlighted index; after user interaction the index will be updated internally |
| **onSelect**  | optional | Function(state {Object}) | | Callback function that accepts the list selected state (Object with properties `event`, `index` {Number}, `dom` {HTMLElement}, `attrs` {Object}) |
| **onHighlightExit** | optional | Function({ index }) | | Callback function called when the highlight index is less than 0; higher than the last item's index; or when ESCAPE is pressed |


<a name="internally-used-options"></a>
### Internally used options

* `setHighlightIndex`


<a name="composition"></a>
## Composition

Keyboard List is composed from:

* [List](list.md)
* [List Tile](list-tile.md)


<a name="css-classes"></a>
## CSS classes

* [List classes](../../packages/polythene-css-classes/list.js)

