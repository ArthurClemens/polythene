# Tabs

Displays a tab row of navigation buttons.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Tabs](#tabs)
  - [Main features](#main-features)
  - [Usage](#usage)
  - [Options](#options)
    - [Tabs options](#tabs-options)
    - [Tab button options](#tab-button-options)
    - [Common component options](#common-component-options)
  - [Composition](#composition)
  - [CSS classes](#css-classes)

<!-- /MarkdownTOC -->


<a id="main-features"></a>
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



<a id="usage"></a>
## Usage

* [Usage with Mithril](mithril/tabs.md)
* [Usage with React](react/tabs.md)



<a id="options"></a>
## Options


<a id="tabs-options"></a>
### Tabs options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **activeSelected** | optional | Boolean | false | Set to `true` to enable clicks/taps on the selected tab button |
| **all**  | optional       | Options Object | | Tab button options that will be applied to all tabs, see "Tab button options" below |
| **autofit** | optional | Boolean | false | Set to `true` to let the buttons fill the entire button row |
| **centered** | optional | Boolean | false | Set to `true` to center the button row; this automatically sets `autofit` to `false` |
| **hideIndicator** | optional | Boolean | false | Set to `true` to hide the "current tab" indicator |
| **largestWidth** | optional | Boolean | false | Set to `true` to give all tabs the width of the largest tab |
| **menu** | optional | Boolean | false | Set to `true` to make the tabs behave like a mobile navigation menu; this removes the minimum width settings from the tab buttons and compresses padding and label font size |
| **noIndicatorSlide** | optional | Boolean | false | Set to `true` not let the "current tab" indicator slide to the new position |
| **onChange**  | optional       | Function `({ index: number, options: TabButtonOptions, el: HTMLElement }) => undefined` | | Callback function that receives the tabs state |
| **scrollable** | optional | Boolean | false | Set to `true` to make the button row scrollable; this automatically sets `autofit` to `false`; on non-touch devices, 2 scroll buttons will be added to navigate tabs |
| **scrollIconBackward** | optional | [Icon](icon.md) options object | | Overrides default arrow icon |
| **scrollIconForward** | optional | [Icon](icon.md) options object | | Overrides default arrow icon |
| **selectedTabIndex** | optional | Number | 0 | The Array index of the selected tab. Overridden when one of the tabs has option `selected`. |
| **small** | optional | Boolean | false | Set to `true` to reduce the tab widths on larger screens |
| **tabs**   | use `content` or `tabs` | Array of tab button option objects | | Button row content |


<a id="tab-button-options"></a>
### Tab button options

Tab buttons use the same parameters as [button](button.md), except for `wash` (disabled), `raised` and `shadowDepth` (makes visually no difference).

These options can be grouped into `tabsOpts` and applied to all tabs.

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **className** | optional | String |  | Extra CSS class appended to "pe-button pe-tabs__tab" |
| **disabled** | optional | Boolean | false | Disables the button |
| **element** | optional | String | "a" (if `url` is passed) or "div" | HTML element tag |
| **events** | optional | Object | | Button events; options object containing one or more events like `onclick` |
| **ink** | optional | Boolean | true | Set to false to disable the ripple effect on click/tap |
| **label** | required | String | | The button label |
| **selected** | optional | Boolean | false | Set to `true` to show the button as selected |
| **url** | optional | Object with `href`, optionally `oncreate` (for Mithril 1.x) or `onClick` (for React) or `to` (for React Router) | | URL location; Mithril 2.x: for in-app route linking set  only use `url.href` and set `element` to `m.route.Link`; Mithril 1.x: for in-app route linking set `oncreate : m.route.link`; React: for in-app route linking use `onClick` and a router such as `react-router-dom` |


<a id="common-component-options"></a>
### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **after**     | optional | String, hyperscript or component | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **before**    | optional | String, hyperscript or component | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **className**     | optional       | String |  | Extra CSS class appended to `pe-tabs` |
| **content**   | use `content` or `tabs` | Array of option objects | | Button row content |
| **dataSet** | optional | Object |  | Custom data attributes: `dataSet: { count: "0" }` creates `data-count="0"` (note that the key should be a lowercase string) |
| **element**   | optional       | String | "div" | HTML element tag |
| **id**        | optional       | String | | HTML element id |
| **style**     | optional | Object |       | For setting simple style attributes |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |



<a id="composition"></a>
## Composition

Tabs is composed from:

* [Button](button.md)
* [Icon Button](icon-button.md) (for scroll buttons)

Tabs sometimes uses:

* [Icon](icon.md) (when `icon` is passed instead of `label`)



<a id="css-classes"></a>
## CSS classes

* [Tabs classes](../../packages/polythene-css-classes/tabs.js)


