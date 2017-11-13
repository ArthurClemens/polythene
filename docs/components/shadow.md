# Shadow

Adds a configurable shadow to an element.


## Main features

* Set z-depth
* Animate shadow change


## Usage

* [Usage with Mithril](mithril/shadow.md)
* [Usage with React](react/shadow.md)


## Options

### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional | String | "div" | HTML element tag |
| **className** | optional | String |  | Extra CSS class appended to `pe-shadow` |
| **id** | optional | String | | HTML element id |
| **content**   | optional | String, hyperscript or component |  | Any content; replaces children  |
| **before**    | optional | String, hyperscript or component | | Extra content before main content; this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional | String, hyperscript or component | | Extra content after main content; this content is placed right of preceding elements with a higher stacking depth |

### Shadow appearance options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **z** | optional | Number 0-5 | 1 | Depth of the shadow; value `0` results in no shadow |
| **animated** | optional | Boolean | false | Set to true to animate the shadow when setting a new z value. |


## CSS classes

* [Shadow classes](../../packages/polythene-css-classes/shadow.js)
