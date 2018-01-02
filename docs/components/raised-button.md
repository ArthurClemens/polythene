# Raised Button

Displays a text button with a [Shadow](shadow.md) effect.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" -->

- [Main features](#main-features)
- [Usage](#usage)
- [Options](#options)
  - [Raised button options](#raised-button-options)
- [Composition](#composition)
- [CSS classes](#css-classes)

<!-- /MarkdownTOC -->

<a name="main-features"></a>
## Main features

* All [Button](button.md) main features
* Custom z-depth
* Custom z-increase
* Disable z-animation


<a name="usage"></a>
## Usage

* [Usage with Mithril](mithril/raised-button.md)
* [Usage with React](react/raised-button.md)



<a name="options"></a>
## Options

All options for [Button](button.md) also apply to Raised Button, with additionally:

<a name="raised-button-options"></a>
### Raised button options

| **Parameter**    |  **Required** | **Type**   | **Default** | **Description** |
| ---------------- | -------------- | ---------- | ----------- | --------------- |
| **z**            | optional       | Number 0-5 | 1           | The shadow depth |
| **increase**     | optional       | Number     | 1           | The z-index increment/decrement on tap; the maximum z value is 5 |
| **animateOnTap** | optional       | Boolean    | true        | Set to false to remove z-animation and subsequent redraw |


<a name="composition"></a>
## Composition

Raised button is composed from:

* [Button](button.md)
  * [Ripple](ripple.md) (when option `ink` is not `false`)
* [Shadow](shadow.md) 


<a name="css-classes"></a>
## CSS classes

* [Raised Button classes](../../packages/polythene-css-classes/raised-button.js)


