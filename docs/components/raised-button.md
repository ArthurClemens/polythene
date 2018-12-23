# Raised Button


Displays a text button with a background and [Shadow](shadow.md) effect.

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

Raised Button is a [Button](button.md) with option `raised: true`. All options for [Button](button.md) also apply to Raised Button, with additionally:


<a id="raised-button-options"></a>
### Raised button options

| **Parameter**    |  **Required** | **Type**   | **Default** | **Description** |
| ---------------- | -------------- | ---------- | ----------- | --------------- |
| **animateOnTap** | optional       | Boolean    | true        | Set to false to remove shadow depth animation and subsequent redraw |
| **increase**     | optional       | Number     | 1           | The shadow depth increment/decrement on tap; the maximum z value is 5 |
| **shadowDepth**  | optional       | Number 0-5 | 1           | The shadow depth |

