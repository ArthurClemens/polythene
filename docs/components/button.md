# Button

Displays a text button with a [Ripple](ripple.md) effect.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Button](#button)
  - [Main features](#main-features)
  - [Usage](#usage)
  - [Keyboard control](#keyboard-control)
  - [Options](#options)
    - [Button specific options](#button-specific-options)
    - [Raised button options](#raised-button-options)
    - [Common component options](#common-component-options)
  - [Accessibility](#accessibility)
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

Press TAB to navigate to a button - it will show a highlight. Press ENTER to execute the equivalent of a click.


<a id="options"></a>
## Options


<a id="button-specific-options"></a>
### Button specific options

| **Parameter** | **Required** | **Type** | **Default** | **Description** |
| --- | --- | --- | --- | --- |
| **border** | optional | Boolean | false | Set to `true` to add a border; by default the border has no color - set border color to class `pe-button__content` to see the border |
| **contained** | optional | Boolean | false | Set to `true` to give the button a Contained Button appearance (larger side padding) |
| **disabled** | optional | Boolean | false | Disables the button |
| **dropdown** | optional | Object |  | Set to a trueish value to add a dropdown icon; use `dropdown.open` to show an "open" icon, otherwise a "closed" icon is shown; note that a dropdown button has no minimum width |
| **extraWide** | optional | Boolean | false | Set to `true` to add even more side padding |
| **formaction** (React: **formAction**) | optional | String |  | "The URI of a program that processes the information submitted by the button. If specified, it overrides the action attribute of the button"s form owner." [source:MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formaction) |
| **highLabel** | optional | Boolean | false | This does not make the button higher in itself; set to `true` to move the vertical "outer" padding to the label, creating a higher hover effect (and higher separator when using [Button Group](button-group.md)) |
| **inactivate** | optional | Number |  | The number of seconds after tap/click when the button is inactive; useful to prevent double clicks |
| **inactive** | optional | Boolean |  | Set to `true` to disable button events and ripple/wash effects |
| **ink** | optional | Boolean | true | Set to false to disable the ripple effect on click/tap |
| **label** | use `label` or `content` | String |  | The button label |
| **ripple** | optional (valid if `ink` is `true`) | Options object |  | Pass [ripple](ripple.md) options to define ripple behavior |
| **selected** | optional | Boolean | false | Set to `true` to show the button as selected |
| **separatorAtStart** | optional | Boolean | false | For buttons in [Button Group](button-group.md); set to `true` to add a separator - normally placed at the left, with RTL languages at the right side |
| **textStyle**  | optional | Object |  | Style object for the text label |
| **url** | optional | Object with `href`, optionally `oncreate` (for Mithril 1.x) or `onClick` (for React) or `to` (for React Router) |  | URL location; Mithril 2.x: only use `url.href` and set `element` to `m.route.Link`; Mithril 1.x: for in-app route linking set `oncreate : m.route.link`; React: for in-app route linking use `onClick` and a router such as `react-router-dom` |
| **wash** | optional | Boolean | true | Set to false to hide the effect on hover |

### Raised button options

A raised button is a button with option `raised: true`.

| **Parameter**    |  **Required** | **Type**   | **Default** | **Description** |
| ---------------- | -------------- | ---------- | ----------- | --------------- |
| **raised**       | optional | Boolean | false | Set to `true` to create a Raised Button |
| **shadowDepth**  | optional       | Number 0-5 | 0           | The shadow depth |
| **animateOnTap** | optional       | Boolean    | true        | Set to false to remove shadow depth animation and subsequent redraw |
| **increase**     | optional       | Number     | 1           | The shadow depth increment/decrement on tap; the maximum shadow depth is 5 |
| **shadowDepth**  | optional       | Number 0-5 | 1           | The shadow depth |


<a id="common-component-options"></a>
### Common component options

| **Parameter** | **Required** | **Type** | **Default** | **Description** |
| --- | --- | --- | --- | --- |
| **aria** | optional | Object | | ARIA attributes, for example "role", "aria-labelledby", etcetera |
| **after** | optional | String, hyperscript or component |  | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **before** | optional | String, hyperscript or component |  | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **className** | optional | String |  | Extra CSS class appended to `pe-text-button` |
| **content** | use `label` or `content` | String, hyperscript or component |  | Alternative content; replaces children and ignores `label` |
| **element** | optional | String | "a" | HTML element tag; may also be "button" |
| **events** | optional | Object |  | Options object containing one or more standard events such as `onclick` (React: `onClick`) |
| **id** | optional | String |  | HTML element id |
| **style** | optional | Object |  | For setting simple style attributes |
| **tabindex** (React: **tabIndex**) | optional | Integer | 0 | Tab index |
| **tone** | optional | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |


## Accessibility

ARIA attributes:

* A default Button (a link, or `a` tag) does not contain the attributes "role" or "tabindex".
* With option `element: "button"`:
  * `role="button"`
  * `tabindex="0"`
* With options `disabled: true` or `inactive: true`:
  * `aria-disabled: "true"`
* Custom ARIA properties can be set with option `aria`, for example: `aria: { role: "link" }`

<a id="composition"></a>
## Composition

Button is optionally composed from:

* [Ripple](ripple.md) (when option `ink` is not `false`)
* [Shadow](shadow.md)


<a id="css-classes"></a>
## CSS classes

* [Button classes](../../packages/polythene-css-classes/button.js)
