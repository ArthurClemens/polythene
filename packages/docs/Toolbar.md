# Toolbar

Displays a horizontal bar containing a label and action items. 

See [Material Design Toolbars](https://material.io/guidelines/layout/structure.html#structure-Toolbars) for examples of different usages.



## Usage

* [Usage with Mithril](Toolbar-Mithril.md)
* [Usage with React](Toolbar-React.md)



## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional | String | "div" | HTML element tag |
| **className** | optional | String |  | Extra CSS class appended to `pe-Toolbar` |
| **style**     | optional | Object |       | For setting simple style attributes |
| **id** | optional | String | | HTML element id |
| **content** | either a bar or `content` must be passed | String, hyperscript or component | | Alternative content; replaces children |
| **before** | optional | String, hyperscript or component | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after** | optional | String, hyperscript or component | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |

### Toolbar appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **compact** | optional | Boolean | false | Set to `true` to create a more compact Toolbar |



## CSS classes

See: `polythene-core-toolbar/src/classes.js`

