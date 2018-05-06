# Button

Displays a text button with a [Ripple](ripple.md) effect.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Main features](#main-features)
- [Usage](#usage)
- [Keyboard control](#keyboard-control)
- [Options](#options)
  - [Button specific options](#button-specific-options)
  - [Button appearance options](#button-appearance-options)
  - [Common component options](#common-component-options)
- [Composition](#composition)
- [CSS classes](#css-classes)

<!-- /MarkdownTOC -->


<a id="main-features"></a>
## Main features

* Ripple effect, optionally disable
* Customize ripple effect (center, opacity, speed, color)
* Hover effect, optionally disable
* Selected state
* After click, inactivate for n seconds
* Add borders
* Keyboard control



<a id="usage"></a>
## Usage

* [Usage with Mithril](mithril/button.md)
* [Usage with React](react/button.md)



<a id="keyboard-control"></a>
## Keyboard control

Read first: [Turning on keyboard control](../keyboard-control.md)

1. Start keyboard control by tabbing to the button. It will show a focus state.
1. Press Enter to simulate a click.



<a id="options"></a>
## Options


<a id="button-specific-options"></a>
### Button specific options

| **Parameter** | **Required** | **Type** | **Default** | **Description** |
| --- | --- | --- | --- | --- |
| **label** | use `label` or `content` | String |  | The button label |
| **url** | optional | Object with `href`, optionally `oncreate` (for Mithril) or `onClick` (for React) or `to` (for React Router) |  | URL location; Mithril: for in-app route linking set `oncreate : m.route.link`; React: for in-app route linking use `onClick` and a router such as `react-router-dom` |
| **disabled** | optional | Boolean | false | Disables the button |
| **selected** | optional | Boolean | false | Set to true to show the button as selected |
| **formaction** (React: **formAction**) | optional | String |  | "The URI of a program that processes the information submitted by the button. If specified, it overrides the action attribute of the button"s form owner." [source:MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formaction) |
| **inactive** | optional | Boolean |  | Set to `true` to disable button events and ripple/wash effects |
| **inactivate** | optional | Number |  | The number of seconds after tap/click when the button is inactive; useful to prevent double clicks |


<a id="button-appearance-options"></a>
### Button appearance options

| **Parameter** | **Required** | **Type** | **Default** | **Description** |
| --- | --- | --- | --- | --- |
| **wash** | optional | Boolean | true | Set to false to hide the effect on hover |
| **ink** | optional | Boolean | true | Set to false to disable the ripple effect on click/tap |
| **ripple** | optional (valid if `ink` is `true`) | Options object |  | Pass [ripple](ripple.md) options to define ripple behavior |
| **border** | optional | Boolean | false | Set to `true` to add a border; by default the border has no color - set border color to class `pe-button__content` to see the border |
| **dropdown** | optional | Boolean | false | Set to `true` to add a dropdown triangle; a dropdown button has no minimum width |


<a id="common-component-options"></a>
### Common component options

| **Parameter** | **Required** | **Type** | **Default** | **Description** |
| --- | --- | --- | --- | --- |
| **element** | optional | String | "a" | HTML element tag; may also be "button" |
| **className** | optional | String |  | Extra CSS class appended to `pe-text-button` |
| **style** | optional | Object |  | For setting simple style attributes |
| **id** | optional | String |  | HTML element id |
| **content** | use `label` or `content` | String, hyperscript or component |  | Alternative content; replaces children and ignores `label` |
| **before** | optional | String, hyperscript or component |  | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after** | optional | String, hyperscript or component |  | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **events** | optional | Object |  | Options object containing one or more standard events such as `onclick` (React: `onClick`) |
| **tabindex** (React: **tabIndex**) | optional | Integer | 0 | Tab index |
| **tone** | optional | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |



<a id="composition"></a>
## Composition

Button is optionally composed from:

* [Ripple](ripple.md) (when option `ink` is not `false`)



<a id="css-classes"></a>
## CSS classes

* [Button classes](../../packages/polythene-css-classes/button.js)
