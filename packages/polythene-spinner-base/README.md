# Spinner (base)

Base functionality for:

* [Material Design spinner](../polythene-md-spinner)
* [Material Design "end" spinner](../polythene-md-end-spinner)
* [iOS spinner](../polythene-ios-spinner)



## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional | String | "div" | HTML element tag |
| **class**     | optional | String |       | Extra CSS class appended to `pe-fab` |
| **style**     | optional | Object |       | For setting simple style attributes |
| **id**        | optional | String |       | HTML element id |
| **content**   | either `icon` or `content` | Mithril element |  | Alternative content |
| **before**    | optional | Mithril element | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional | Mithril element | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **tabindex**  | optional | Integer | | Tab index |
| **events**    | optional | Object | | Options object containing one or more standard events such as `onclick` |
| **tone**      | optional | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **permanent** | optional | Boolean | | Set to `true` to always show the spinner (mostly used for demonstration purposes) |
| **show** | optional | Boolean or Number in seconds | | Set to true to show the menu; set to a seconds value to make the spinner appear after a delay |
| **hide** | optional | Boolean or Number in seconds | | Set to true to hide the menu; set to a seconds value to make the spinner hide after a delay |

### Spinner appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **type** | optional | String | 'regular' | Either 'small' (24px), 'regular' (32px), 'medium' (40px), 'large' (48px), 'fab' (56px). Adds CSS class 'small', 'regular', 'medium', 'large', 'fab'; `type: 'medium'` is the equivalent of passing `class: 'medium'` |
| **raised** | optional | Boolean | | Set to `true` to create a FAB-like appearance with shadow and whitespace around the spinner |
| **z** | optional | Number 0-5 | 1 (if `raised` is set) | Depth of the shadow |

### Material Design spinner options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **singleColor** | optional | Boolean | | Set to true to use only one color (by default the primary color) |

### Material Design "end" spinner options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **percentage** | optional | Number (0..1) or Function | | (Determinate spinner) Sets the progress percentage value |
| **animated** | optional | Boolean | false | (Determinate spinner) Set to `true` to animate the progress between subsequent steps |
| **updateDuration** | optional | Number (seconds) | 0.8 | The duration of the step progress update |



## CSS classes

See: `src/classes.js`


