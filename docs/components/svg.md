# SVG

Simple wrapper for SVG XML.

This is a low-level and simple module for handling SVGs. If you want to use SVG for icons, the best method is to use [Icon](icon.md) directly.


## Usage

* [Usage with Mithril](mithril/svg.md)
* [Usage with React](react/svg.md)


## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional       | String   | "div" | HTML element tag |
| **className** | optional       | String   |       | Extra CSS class appended to `pe-svg` |
| **style**     | optional       | Object   |       | For setting simple style attributes |
| **id**        | optional       | String   |       | HTML element id |
| **content**   | use `content` or children | String, hyperscript or component |  | Any content |
| **before**    | optional       | String, hyperscript or component | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional       | String, hyperscript or component | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |


## CSS classes

See: `polythene-core-svg/src/classes.js`


