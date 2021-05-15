# Spinner

Circular progress indicator.

Available themed spinners:

* Indeterminate spinners:
  * `MaterialDesignSpinner`
  * `IOSSpinner`
* Determinate spinner:
  * `MaterialDesignProgressSpinner`


<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Spinner](#spinner)
  - [Main features](#main-features)
  - [Usage](#usage)
  - [Options](#options)
    - [Spinner options](#spinner-options)
    - [Indeterminate options](#indeterminate-options)
    - [Determinate options](#determinate-options)
    - [Transition options](#transition-options)
    - [Common component options](#common-component-options)
  - [Composition](#composition)
  - [CSS classes](#css-classes)

<!-- /MarkdownTOC -->

<a id="main-features"></a>
## Main features

* Conditionally show spinner
* Set size
* Create a FAB-like appearance with shadow and whitespace; set z-depth
* Material Design / iOS spinner: set color
* Progress spinner: set percentage
* Progress spinner: animate between steps; set update duration


<a id="usage"></a>
## Usage

* [Usage with Mithril](mithril/spinner.md)
* [Usage with React](react/spinner.md)


<a id="options"></a>
## Options

<a id="spinner-options"></a>
### Spinner options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **permanent** | optional | Boolean | | Set to `true` to always show the spinner (mostly used for demonstration purposes) |
| **raised** | optional | Boolean | | Set to `true` to create a FAB-like appearance with shadow and whitespace around the spinner |
| **shadowDepth** | optional | Number 0-5 | 1 (if `raised` is set) | Depth of the shadow |
| **show** | optional | Boolean | | Set to `true` to show the spinner |
| **size** | optional | String | "regular" | Either "small" (24px), "regular" (32px), "medium" (40px), "large" (48px), "fab" (56px). Adds CSS class "small", "regular", "medium", "large", "fab" |

<a id="indeterminate-options"></a>
### Indeterminate options

For `MaterialDesignSpinner` and `IOSSpinner`:

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **singleColor** | optional | Boolean | | Set to `true` to use only one color (by default the primary color) |

<a id="determinate-options"></a>
### Determinate options

For `MaterialDesignProgressSpinner`:

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **animated** | optional | Boolean | false | Set to `true` to animate the progress between subsequent steps |
| **percentage** | optional | Number (0..1) or Function `() -> Number` | | (Determinate spinner) Sets the progress percentage value |
| **updateDuration** | optional | Number (seconds) | 0.8 | The duration of the step progress update |

<a id="transition-options"></a>
### Transition options

See: [Transitions](../transitions.md)

<a id="common-component-options"></a>
### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **after**     | optional | String, hyperscript or component | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **before**    | optional | String, hyperscript or component | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **className** | optional | String |       | Extra CSS class appended to `pe-spinner` |
| **dataSet** | optional | Object |  | Custom data attributes: `dataSet: { count: "0" }` creates `data-count="0"` (note that the key should be a lowercase string) |
| **element**   | optional | String | "div" | HTML element tag |
| **events**    | optional | Object | | Options object containing one or more standard events such as `onclick` (React: `onClick`) |
| **id**        | optional | String |       | HTML element id |
| **style**     | optional | Object |       | For setting simple style attributes |
| **tone**      | optional | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |


<a id="composition"></a>
## Composition

Spinner sometimes uses:

* [Shadow](shadow.md) (when `raised` is used)


<a id="css-classes"></a>
## CSS classes

* [Base Spinner classes](../../packages/polythene-css-classes/base-spinner.js)
* [iOS Spinner classes](../../packages/polythene-css-classes/ios-spinner.js)
* [Material Design Spinner classes](../../packages/polythene-css-classes/material-design-spinner.js)
* [Material Design Progress Spinner classes](../../packages/polythene-css-classes/material-design-progress-spinner.js)

