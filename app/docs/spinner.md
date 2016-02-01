# Spinner

Circular progress indicator for indeterminate and determinate processes.


## Themes

Available themed spinners:

* Material Design indeterminate spinner at `polythene/spinner/indeterminate-spinner`
* Material Design determinate spinner at `polythene/spinner/determinate-spinner`
* iOS indeterminate spinner at `polythene/spinner/ios-spinner`


## Usage

~~~javascript
import indeterminateSpinner from 'polythene/spinner/indeterminate-spinner';

m.component(indeterminateSpinner, {
    singleColor: true,
    type: 'small'
})
~~~

Creates a small indeterminate spinner with a single color.


## Show / hide

By default the spinner is hidden, unless:

* option `show` is true
* option `hide` is false
* options `permanent` is true (for testing and demos)

To manage the visibility of a spinner, store its visible state for example in the controller. Each of the following setups are possible:

~~~javascript
m.component(spinner, {
    show: ctrl.visible
})
~~~

~~~javascript
m.component(spinner, {
    hide: !ctrl.visible
})
~~~

~~~javascript
m.component(spinner, {
    show: ctrl.visible,
    hide: !ctrl.visible
})
~~~


## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML element tag |
| **class** | optional | String |  | Extra CSS class appended to 'pe-spinner' |
| **id** | optional | String | | HTML element id |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` |
| **before** | optional | Mithril element | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after** | optional | Mithril element | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |

### Spinner specific options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **permanent** | optional | Boolean | | Set to `true` to always show the spinner (mostly used for demonstration purposes) |
| **show** | optional | Boolean | | Set to true to show the menu |
| **hide** | optional | Boolean | | Set to true to hide the menu |

### Deterministic spinner options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **percentage** | optional | Number (0..1) or Function | | Percentage in progress |
| **getPercentage** | optional | Function({Number: 0..1}) | | Callback function to receive the percentage in progress |
| **animated** | optional | Boolean | false | Set to `true` to animate the progress between subsequent steps |

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

### Show/hide transition options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **transition** | optional | String: 'both', 'show', 'hide', 'none' | 'both' | Sets when a transition is used |
| **showDuration** | optional | Number | .150 | The show transition duration in seconds |
| **hideDuration** | optional | Number | .150 | The hide transition duration in seconds |
| **showDelay** | optional | Number | 0 | The show delay duration in milliseconds |
| **hideDelay** | optional | Number | 0 | The hide delay duration in milliseconds; no delay is used when the menu is dismissed, for instance by tapping outside of the menu |


## Styling

When `singleColor` is specified, the primary color is used. Override this by setting the CSS `color` attribute:

~~~css
.pe-spinner {
    color: red
}
~~~


## Future

* Integration with circular buttons
