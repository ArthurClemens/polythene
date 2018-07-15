# Raised Button

Also called Contained Button. Displays a text button with a background and [Shadow](shadow.md) effect.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Main features](#main-features)
- [Usage](#usage)
- [Options](#options)
  - [Raised button options](#raised-button-options)
- [Composition](#composition)
- [CSS classes](#css-classes)

<!-- /MarkdownTOC -->


<a id="main-features"></a>
## Main features

* All [Button](button.md) main features
* Custom z-depth
* Custom z-increase
* Disable z-animation



<a id="usage"></a>
## Usage

* [Usage with Mithril](mithril/raised-button.md)
* [Usage with React](react/raised-button.md)




<a id="options"></a>
## Options

All options for [Button](button.md) also apply to Raised Button, with additionally:


<a id="raised-button-options"></a>
### Raised button options

| **Parameter**    |  **Required** | **Type**   | **Default** | **Description** |
| ---------------- | -------------- | ---------- | ----------- | --------------- |
| **animateOnTap** | optional       | Boolean    | true        | Set to false to remove z-animation and subsequent redraw |
| **increase**     | optional       | Number     | 1           | The z-index increment/decrement on tap; the maximum z value is 5 |
| **shadowDepth**  | optional       | Number 0-5 | 1           | The shadow depth |



<a id="composition"></a>
## Composition

Raised button is composed from:

* [Button](button.md)
  * [Ripple](ripple.md) (when option `ink` is not `false`)
* [Shadow](shadow.md) 



<a id="css-classes"></a>
## CSS classes

* [Raised Button classes](../../packages/polythene-css-classes/raised-button.js)


