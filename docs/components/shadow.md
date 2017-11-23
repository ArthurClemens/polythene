# Shadow

Adds a configurable shadow to an element.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" -->

- [Main features](#main-features)
- [Usage](#usage)
- [Options](#options)
  - [Shadow appearance options](#shadow-appearance-options)
  - [Common component options](#common-component-options)
- [CSS classes](#css-classes)

<!-- /MarkdownTOC -->

<a name="main-features"></a>
## Main features

* Set z-depth
* Animate shadow change


<a name="usage"></a>
## Usage

* [Usage with Mithril](mithril/shadow.md)
* [Usage with React](react/shadow.md)


<a name="options"></a>
## Options

<a name="shadow-appearance-options"></a>
### Shadow appearance options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **z** | optional | Number 0-5 | 1 | Depth of the shadow; value `0` results in no shadow |
| **animated** | optional | Boolean | false | Set to true to animate the shadow when setting a new z value. |

<a name="common-component-options"></a>
### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional | String | "div" | HTML element tag |
| **className** | optional | String |  | Extra CSS class appended to `pe-shadow` |
| **id** | optional | String | | HTML element id |
| **content**   | optional | String, hyperscript or component |  | Any content; replaces children  |
| **before**    | optional | String, hyperscript or component | | Extra content before main content; this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional | String, hyperscript or component | | Extra content after main content; this content is placed right of preceding elements with a higher stacking depth |


<a name="css-classes"></a>
## CSS classes

* [Shadow classes](../../packages/polythene-css-classes/shadow.js)
