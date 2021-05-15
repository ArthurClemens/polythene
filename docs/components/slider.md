# Slider

Select a value from a continuous or discrete range of values by moving the slider thumb. Optimized for mobile.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Slider](#slider)
  - [Main features](#main-features)
  - [Usage](#usage)
  - [Keyboard control](#keyboard-control)
  - [Options](#options)
    - [Slider specific options](#slider-specific-options)
    - [Common component options](#common-component-options)
  - [Composition](#composition)
  - [CSS classes](#css-classes)
  - [Design considerations](#design-considerations)
  - [Future](#future)

<!-- /MarkdownTOC -->


<a id="main-features"></a>
## Main features

* Touch support
* Continuous or discrete slider by setting the step size (adjustable to any value including 0)
* Optional tick marks
* Optional pin label
* Custom thumb element (for instance SVG)
* Optionally disable clicking on track
* Keyboard control



<a id="usage"></a>
## Usage

* [Usage with Mithril](mithril/slider.md)
* [Usage with React](react/slider.md)



<a id="keyboard-control"></a>
## Keyboard control

Press TAB to navigate to the slider thumb - it will show a highlight. Press ENTER to execute the equivalent of a click.

1. Start keyboard control by tabbing to the slider thumb. It will show a focus state.
1. Keyboard interaction follows the [WAI-ARIA slider authoring practices](https://www.w3.org/TR/wai-aria-practices-1.1/#slider).

| **Keys** | **Result** |
| -------- | ---------- |
| Right Arrow | Increase the value of the slider by one step. |
| Up Arrow | Increase the value of the slider by one step. |
| Left Arrow | Decrease the value of the slider by one step. |
| Down Arrow | Decrease the value of the slider by one step. |
| Home | Set the slider to the first allowed value in its range. |
| End | Set the slider to the last allowed value in its range. |
| Page Up | Increment the slider by 10 steps. |
| Page Down | Decrement the slider by 10 steps. |
| Shift, and Right Arrow or Up Arrow | Increment the slider by 10 steps. |
| Shift, and Left Arrow or Down Arrow | Decrement the slider by 10 steps. |

The amount of change depends on the step size. This can be set with option `step` (default: `1`). Also the values for first allowed value (`min`) and last allowed value (`max`) can be set.



<a id="options"></a>
## Options


<a id="slider-specific-options"></a>
### Slider specific options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **defaultValue** | optional | Number | 0 | Initial slider value |
| **disabled** | optional | Boolean | false | Set to `true` to make the slider read only |
| **icon** | optional | String, hyperscript or component | | Adds a String, hyperscript or component to the slider control |
| **interactiveTrack** | optional | Boolean | true | Set to `false` to prevent clicking on the track |
| **max** | optional | Number | 100 | Maximum slider value |
| **min** | optional | Number | 0 | Minimum slider value |
| **onChange** | optional | Function `({ value: number }) => undefined` | | Callback function that receives the slider state |
| **pin** | optional | Boolean | false | Use with `step`; on click shows a pin shape with the current value |
| **stepSize** | optional | Number | 1 | Step size; set to 0 for a continuous (smooth) slider |
| **ticks** | optional | Boolean | false | Show a tick for each step; limited to 100 |
| **value** | optional | Number | 0 | Managed Slider value (see: [Handling state](../handling-state.md)) |


<a id="common-component-options"></a>
### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **after**     | optional       | String, hyperscript or component |      | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **before**    | optional       | String, hyperscript or component |      | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **className** | optional       | String   |             | Extra CSS class appended to `pe-slider` |
| **dataSet** | optional | Object |  | Custom data attributes: `dataSet: { count: "0" }` creates `data-count="0"` (note that the key should be a lowercase string) |
| **element**   | optional       | String   | "div"       | HTML element tag |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` (React: `onClick`) |
| **id**        | optional       | String   |             | HTML element id |
| **tabindex** (React: **tabIndex**)  | optional       | Integer  | 0           | Tab index |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |



<a id="composition"></a>
## Composition

Slider is optionally composed from:

* [Icon](icon.md) (with option `icon`)



<a id="css-classes"></a>
## CSS classes

* [Slider classes](../../packages/polythene-css-classes/slider.js)



<a id="design-considerations"></a>
## Design considerations

* With both usability and theming in mind, no range input element is created (other than for instance [Material Design Lite](http://www.getmdl.io)). The range input has limited styling options, for instance it is not possible to create a large enough click area for the slider thumb (without making the thumb itself enormous). Using a different image for the thumb is out of the question. This Slider component is composed from DIV elements instead.
* Vertical orientation is not supported because it is not part of the design specification. The same goes for multi-thumb support.



<a id="future"></a>
## Future

* Right to left support
* Full ARIA specs


