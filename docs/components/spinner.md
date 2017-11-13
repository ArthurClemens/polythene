# Spinner

Circular progress indicator.

Available themed spinners:

* Indeterminate spinners:
  * `MaterialDesignSpinner`
  * `IOSSpinner`
* Determinate spinner:
  * `MaterialDesignProgressSpinner`



## Main features

* Conditionally show spinner
* Set size
* Create a FAB-like appearance with shadow and whitespace; set z-depth
* Material Design / iOS spinner: set color
* Progress spinner: set percentage
* Progress spinner: animate between steps; set update duration


## Usage

* [Usage with Mithril](mithril/spinner.md)
* [Usage with React](react/spinner.md)


## Options

### Spinner options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **permanent** | optional | Boolean | | Set to `true` to always show the spinner (mostly used for demonstration purposes) |
| **show** | optional | Boolean | | Set to true to show the spinner |

### Spinner appearance options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **size** | optional | String | "regular" | Either "small" (24px), "regular" (32px), "medium" (40px), "large" (48px), "fab" (56px). Adds CSS class "small", "regular", "medium", "large", "fab" |
| **raised** | optional | Boolean | | Set to `true` to create a FAB-like appearance with shadow and whitespace around the spinner |
| **z** | optional | Number 0-5 | 1 (if `raised` is set) | Depth of the shadow |

### Indeterminate options

For `MaterialDesignSpinner` and `IOSSpinner`:

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **singleColor** | optional | Boolean | | Set to true to use only one color (by default the primary color) |

### Determinate options

For `MaterialDesignProgressSpinner`:

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **percentage** | optional | Number (0..1) or Function | | (Determinate spinner) Sets the progress percentage value |
| **animated** | optional | Boolean | false | Set to `true` to animate the progress between subsequent steps |
| **updateDuration** | optional | Number (seconds) | 0.8 | The duration of the step progress update |

### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional | String | "div" | HTML element tag |
| **className** | optional | String |       | Extra CSS class appended to `pe-spinner` |
| **style**     | optional | Object |       | For setting simple style attributes |
| **id**        | optional | String |       | HTML element id |
| **before**    | optional | String, hyperscript or component | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional | String, hyperscript or component | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **events**    | optional | Object | | Options object containing one or more standard events such as `onclick` (React: `onClick`) |
| **tone**      | optional | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |


## Composition

Spinner sometimes uses:

* [Shadow](shadow.md) (when `raised` is used)


## CSS classes

* [Base Spinner classes](../../packages/polythene-css-classes/base-spinner.js)
* [iOS Spinner classes](../../packages/polythene-css-classes/ios-spinner.js)
* [Material Design Spinner classes](../../packages/polythene-css-classes/material-design-spinner.js)
* [Material Design Progress Spinner classes](../../packages/polythene-css-classes/material-design-progress-spinner.js)

