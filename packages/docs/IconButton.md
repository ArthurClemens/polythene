# Icon Button

Displays an [icon](../polythene-core-icon) as a button. Also called toggle button.



## Usage

* [Usage with Mithril](IconButton-Mithril.md)
* [Usage with React](IconButton-React.md)



## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional | String | "div" | HTML element tag |
| **className** | optional | String |  | Extra CSS class appended to "pe-icon-button" |
| **style**     | optional | Object |       | For setting simple style attributes |
| **id**        | optional | String | | HTML element id |
| **content**   | optional | String, hyperscript or component |  | Any content; replaces children |
| **before**    | optional | String, hyperscript or component | | Extra content before main content; this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional | String, hyperscript or component | | Extra content after main content; this content is placed right of preceding elements with a higher stacking depth |
| **events**    | optional | Object | | Options object containing one or more standard events such as `onclick` |
| **tabindex**  | optional | Integer | | Tab index |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |

### Icon button specific options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **icon**      | either icon or child nodes must be passed | Object |  | [icon](../polythene-icon) options object; also used to show an round "avatar" portrait image |
| **compact**   | optional | Boolean | | Set to `true` to use less padding |
| **inactive** | optional | Boolean | | Set to `true` to disable button events and ripple/wash effects |



## Composition

Icon Button is composed from:

* [Button](Button.md)
* [Icon](Icon.md) (when using option `icon`)



## CSS classes

See: `polythene-core-icon-button/src/classes.js`


