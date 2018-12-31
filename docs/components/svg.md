# SVG

Simple wrapper for SVG XML.

This is a low-level and simple module for handling SVGs. If you want to use SVG for icons, the best method is to use [Icon](icon.md) directly.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Usage](#usage)
- [Options](#options)
  - [Common component options](#common-component-options)
- [CSS classes](#css-classes)

<!-- /MarkdownTOC -->


<a id="usage"></a>
## Usage

* [Usage with Mithril](mithril/svg.md)
* [Usage with React](react/svg.md)



<a id="options"></a>
## Options


<a id="common-component-options"></a>
### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **after**     | optional       | String, hyperscript or component | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **before**    | optional       | String, hyperscript or component | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **className** | optional       | String   |       | Extra CSS class appended to `pe-svg` |
| **content**   | use `content` or children | String, hyperscript or component |  | SVG content |
| **element**   | optional       | String   | "div" | HTML element tag |
| **id**        | optional       | String   |       | HTML element id |
| **style**     | optional       | Object   |       | For setting simple style attributes |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |



<a id="css-classes"></a>
## CSS classes

* [SVG classes](../../packages/polythene-css-classes/svg.js)
