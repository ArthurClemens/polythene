# Button
<!--
<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/button">Demo</a>
-->

Displays a text button with a [shadow](#shadow) and [ripple](#ripple) effect.

See also: [Icon Button](#icon-button) and [Floating Action Button](#fab)

## Usage

~~~javascript
import m from "mithril";
import { button } from "polythene-button";

const myButton = m(button, {
  label: "Button",
  raised: true
});
~~~

Add a URL:

~~~javascript
const myButton = m(button, {
  label: "Button",
  raised: true,
  url: {
    href: "/index",
    oncreate: m.route.link
  }
});
~~~

Add an onclick event:

~~~javascript
const myButton = m(button, {
  label: "Button",
  raised: true,
  events: {
    onclick: () => console.log("click")
  }
});
~~~

## Variations

* Buttons can be flat or raised. Using `raised` gives the button a default shadow; specifying `z` varies the shadow depth.
* The hover effect can be hidden with `wash: false`.
* The ripple effect on click can be hidden with `ink: false`.
* Button contains no icon as this is not part of the Material Design guidelines; use [icon Button](#icon-button) instead


<!--
## Mobile and tap delay

To remove the tap delay on mobile it is advisable to use a library like [Fastclick](https://github.com/ftlabs/fastclick). But because Fastclick has an unresolved issue with tap events while scrolling on iOS, it is better to use the convenience wrapper provided in "polythene/common/no-tap-delay". This temporarily removes the Fastclick event when an element is scrolled.

~~~javascript
import "polythene/common/no-tap-delay";
~~~
-->

## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element** | optional | String | "a" | HTML element tag; may also be "button" |
| **class** | optional | String |  | Extra CSS class appended to "pe-button" |
| **id** | optional | String | | HTML element id |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` |
| **before** | optional | Mithril element | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after** | optional | Mithril element | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **tabindex** | optional | Integer | | Tab index |

### Button specific options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **label** | `label` or `content` is required | String | | The button label |
| **content** | `label` or `content` is required | Mithril element | | Alternative content, instead of a label |
| **url** | optional | Object with `href`, optionally `oncreate` | | URL location; for in-app route linking set `oncreate : m.route.link` |
| **borders** | optional | Boolean | false | Set to `true` to add a border; by default the border has no color - set border color to class `pe-button__content` to see the border |
| **disabled** | optional | Boolean | false | Disables the button |
| **selected** | optional | Boolean | false | Set to true to show the button as selected |
| **formaction** | optional | String | | "The URI of a program that processes the information submitted by the button. If specified, it overrides the action attribute of the button"s form owner." [source:MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formaction) |
| **animateOnTap** | optional | Boolean | true | Set to false to remove z-animation and subsequent redraw |
| **inactive** | optional | Boolean | | Set to `true` to disable button events and ripple/wash effects |
| **inactivate** | optional | Number | | The number of seconds after tap/click when the button is inactive; useful to prevent double clicks |

### Button appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **wash** | optional | Boolean | true | Set to false to hide the effect on hover |
| **ink** | optional | Boolean | true | Set to false to disable the ripple effect on click/tap |
| **ripple** | optional (valid if `ink` is `true`) | Options object | | Pass [ripple](#ripple) options to define ripple behavior |
| **raised** | optional | Boolean | false | Shows a shadow; on button press the shadow depth is increased by 1 |
| **z** | optional | Number 0-5 | 1 | The shadow depth for a raised button; raised buttons have a default z of 1 |
| **increase** | optional | Number | 1 | The z-index increment/decrement on tap; note that the maximum z value is 5 |


## CSS classes

| **Element** |  **Class name** |
| ----------- | --------------- |
| component   | `pe-button pe-button--text` |
| content     | `pe-button__content` |
| label       | `pe-button__label` |
| wash        | `pe-button__wash` |
| focus       | `pe-button__focus` |

| **State**   |  **Class name** |
| ----------- | --------------- |
| raised      | `pe-button--raised` |
| selected    | `pe-button--selected` |
| disabled    | `pe-button--disabled` |
| borders     | `pe-button--borders` |
| inactive    | `pe-button--inactive` |
| focus       | `pe-button--focus` |



## Future

* Option to wait for ripple to finish before url/event is followed
