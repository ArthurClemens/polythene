# Shadow

Adds a configurable shadow to an element.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Main features](#main-features)
- [Usage](#usage)
- [Options](#options)
  - [Shadow options](#shadow-options)
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


<a id="shadow-options"></a>
### Shadow options

| **Parameter**   |  **Required** | **Type** | **Default** | **Description** |
| --------------- | -------------- | -------- | ----------- | --------------- |
| **animated**    | optional | Boolean | false | Set to `true` to animate the shadow when setting a new shadow depth value. |
| **shadowDepth** | optional | Number 0-5 | 1 | Depth of the shadow; value `0` results in no shadow |


<a id="common-component-options"></a>
### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **after**     | optional | String, hyperscript or component | | Extra content after main content; this content is placed right of preceding elements with a higher stacking depth |
| **before**    | optional | String, hyperscript or component | | Extra content before main content; this content is placed left of subsequent elements with a lower stacking depth |
| **className** | optional | String |  | Extra CSS class appended to `pe-shadow` |
| **content**   | optional | String, hyperscript or component |  | Any content; replaces children  |
| **element**   | optional | String | "div" | HTML element tag |
| **id** | optional | String | | HTML element id |



<a id="css-classes"></a>
## CSS classes

* [Shadow classes](../../packages/polythene-css-classes/shadow.js)
