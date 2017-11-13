# Tabs

Displays a tab row of navigation buttons.


## Main features

* Use text, icon, or combination
* Automatically fit display
* Centered display
* Compact display
* Make all tabs as wide as the widest tab
* Hide tab indicator
* Remove indicator slide effect
* Custom button behaviour
* Scrollable
* Custom scroll buttons
* Display tabs as mobile navigation menu


## Usage

* [Usage with Mithril](mithril/tabs.md)
* [Usage with React](react/tabs.md)


## Options

### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional       | String | "div" | HTML element tag |
| **className**     | optional       | String |  | Extra CSS class appended to `pe-tabs` |
| **style**     | optional | Object |       | For setting simple style attributes |
| **id**        | optional       | String | | HTML element id |
| **content**   | use `content` or `tabs` | Array of option objects | | Button row content |
| **before**    | optional | String, hyperscript or component | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional | String, hyperscript or component | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |

### Tabs options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tabs**   | use `content` or `tabs` | Array of option objects | | Button row content |
| **all**  | optional       | Options Object | | Tab button options that will be applied to all tabs, see "Tab button options" below |
| **onChange**  | optional       | Function(state {Object}) | | Callback function that accepts the tabs state (Object with properties `index` {Boolean}, `options` {Object}, `el` {HTMLElement}) |

### Tabs appearance options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **menu** | optional | Boolean | false | Set to `true` to make the tabs behave like a mobile navigation menu; this removes the minimum width settings from the tab buttons and compresses padding and label font size |
| **small** | optional | Boolean | false | Set to `true` to reduce the tab widths on larger screens |
| **autofit** | optional | Boolean | false | Set to true to let the buttons fill the button row |
| **scrollable** | optional | Boolean | false | Set to true to make the button row scrollable; this automatically sets `autofit` to `false`; on no-touch devices 2 scroll buttons will be added to navigate tabs |
| **activeSelected** | optional | Boolean | | Set to `true` to enabled clicks/taps on the selected tab button |
| **scrollIconBackward** | optional | [Icon](icon.md) options object | | Overrides default arrow icon |
| **scrollIconForward** | optional | [Icon](icon.md) options object | | Overrides default arrow icon |
| **centered** | optional | Boolean | false | Set to true to center the button row; this automatically sets `autofit` to `false` |
| **largestWidth** | optional | Boolean | false | Set to true to make all tabs the width of the largest tab |
| **selectedTab** | optional | Number | 0 | The Array index of the selected tab |
| **hideIndicator** | optional | Boolean | false | Set to true to hide the tab indicator |
| **noIndicatorSlide** | optional | Boolean | false | Set to true not let the tab indicator slide to the new position |

### Tab button options

Tab buttons use the same parameters as [button](button.md), except for `wash` (disabled), `raised` and `z` (makes visually no difference).

These options can be grouped into `tabsOpts` and applied to all tabs.

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element** | optional | String | "a" (if `url` is passed) or "div" | HTML element tag |
| **events** | optional | Object | | Button events; options object containing one or more events like `onclick` |
| **className** | optional | String |  | Extra CSS class appended to "pe-button pe-tabs__tab" |
| **label** | required | String | | The button label |
| **url** | optional | Object with `href`, optionally `oncreate` (for Mithril) or `onClick` (for React) or `to` (for React Router) | | URL location; Mithril: for in-app route linking set `oncreate : m.route.link`; React: for in-app route linking use `onClick` and a router such as `react-router-dom` |
| **ink** | optional | Boolean | true | Set to false to disable the ripple effect on click/tap |
| **disabled** | optional | Boolean | false | Disables the button |
| **selected** | optional | Boolean | false | Set to true to show the button as selected |


## Composition

Tabs is composed from:

* [Button](button.md)
* [Icon Button](icon-button.md) (for scroll buttons)

Tabs sometimes uses:

* [Icon](icon.md) (when `icon` is passed instead of `label`)


## CSS classes

* [Tabs classes](../../packages/polythene-css-classes/tabs.js)


