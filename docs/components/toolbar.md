# Toolbar

Displays a horizontal bar containing a label and action items. 

See [Material Design Toolbars](https://material.io/guidelines/layout/structure.html#structure-Toolbars) for examples of different usages.


## Main features

* Flexibly composable with labels and icon buttons
* Compact display


## Usage

* [Usage with Mithril](mithril/toolbar.md)
* [Usage with React](react/toolbar.md)


## Options

### Toolbar appearance options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **compact** | optional | Boolean | false | Set to `true` to create a more compact Toolbar |

### ToolbarTitle options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **text**      | either text or children | Boolean |  | Title text |
| **center**    | optional | Boolean | false | Set to `true` to center the text |
| **indent**    | optional | Boolean | false | Set to `true` to indent the text as if it would be next to an icon |

### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional | String | "div" | HTML element tag |
| **className** | optional | String |  | Extra CSS class appended to `pe-toolbar` |
| **style**     | optional | Object |       | For setting simple style attributes |
| **id** | optional | String | | HTML element id |
| **content** | either a bar or `content` must be passed | String, hyperscript or component | | Alternative content; replaces children |
| **before** | optional | String, hyperscript or component | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after** | optional | String, hyperscript or component | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` (React: `onClick`) |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |


## Composition

Toolbar is often composed from:

* [Icon Button](icon-button.md)
* ToolbarTitle (see usage examples)


## CSS classes

* [Toolbar classes](../../packages/polythene-css-classes/toolbar.js)

