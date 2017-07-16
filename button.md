# Button

Displays a text button with a [ripple](ripple.md) effect.

Button variations: [Raised Button](raisedButton.md), [Icon Button](icon-button.md), [Floating Action Button](fab.md)



## Usage

* [Usage with Mithril](mithril/button.md)
* [Usage with React](react/button.md)



## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional       | String   | "a"         | HTML element tag; may also be "button" |
| **className** | optional       | String   |             | Extra CSS class appended to `pe-text-button` |
| **style**     | optional       | Object   |             | For setting simple style attributes |
| **id**        | optional       | String   |             | HTML element id |
| **content**   | use `label` or `content` | String, hyperscript or component | | Alternative content; replaces children and ignores `label` |
| **before**    | optional       | String, hyperscript or component | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional       | String, hyperscript or component | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **events**    | optional       | Object | | Options object containing one or more standard events such as `onclick` |
| **tabindex**  | optional       | Integer | 0 | Tab index |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |

### Button specific options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **label** | use `label` or `content` | String | | The button label |
| **url** | optional | Object with `href`, optionally `oncreate` (for Mithril) or `onClick` (for React) | | URL location; Mithril: for in-app route linking set `oncreate : m.route.link`; React: for in-app route linking use `onClick` and a router such as `react-router-dom` |
| **disabled** | optional | Boolean | false | Disables the button |
| **selected** | optional | Boolean | false | Set to true to show the button as selected |
| **formaction** | optional | String | | "The URI of a program that processes the information submitted by the button. If specified, it overrides the action attribute of the button"s form owner." [source:MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formaction) |
| **inactive** | optional | Boolean | | Set to `true` to disable button events and ripple/wash effects |
| **inactivate** | optional | Number | | The number of seconds after tap/click when the button is inactive; useful to prevent double clicks |

### Button appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **wash** | optional | Boolean | true | Set to false to hide the effect on hover |
| **ink** | optional | Boolean | true | Set to false to disable the ripple effect on click/tap |
| **ripple** | optional (valid if `ink` is `true`) | Options object | | Pass [ripple](../polythene-ripple) options to define ripple behavior |
| **increase** | optional | Number | 1 | The z-index increment/decrement on tap; note that the maximum z value is 5 |
| **borders** | optional | Boolean | false | Set to `true` to add a border; by default the border has no color - set border color to class `pe-button__content` to see the border |



### Composition

Button is composed from:

* [Ripple](ripple.md) (when option `ink` is not `false`)



## CSS classes

See: `polythene-core-button/src/classes.js`



## Future

* Option to wait before url/event is followed

