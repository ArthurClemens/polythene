# Shadow

Adds a configurable shadow to an element.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Main features](#main-features)
- [Usage](#usage)
- [Options](#options)
  - [Shadow appearance options](#shadow-appearance-options)
  - [Common component options](#common-component-options)
- [CSS classes](#css-classes)

<!-- /MarkdownTOC -->


<a id="main-features"></a>
## Main features

* Set z-depth
* Animate shadow change



<a id="usage"></a>
## Usage

* [Usage with Mithril](mithril/shadow.md)
* [Usage with React](react/shadow.md)



<a id="options"></a>
## Options


<a id="shadow-appearance-options"></a>
### Shadow appearance options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **z** | optional | Number 0-5 | 1 | Depth of the shadow; value `0` results in no shadow |
| **animated** | optional | Boolean | false | Set to `true` to animate the shadow when setting a new z value. |


<a id="common-component-options"></a>
### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional | String | "div" | HTML element tag |
| **className** | optional | String |  | Extra CSS class appended to `pe-shadow` |
| **id** | optional | String | | HTML element id |
| **content**   | optional | String, hyperscript or component |  | Any content; replaces children  |
| **before**    | optional | String, hyperscript or component | | Extra content before main content; this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional | String, hyperscript or component | | Extra content after main content; this content is placed right of preceding elements with a higher stacking depth |



<a id="css-classes"></a>
## CSS classes

* [Shadow classes](../../packages/polythene-css-classes/shadow.js)
