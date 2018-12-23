[Back to Theme main page](../theming.md)

# Style variables

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Introduction](#introduction)
- [Styling components with variables](#styling-components-with-variables)
  - [Advanced: using media queries](#advanced-using-media-queries)
  - [Function `addStyle`](#function-addstyle)
- [Choosing CSS-in-JS or CSS files](#choosing-css-in-js-or-css-files)
- [Examples](#examples)
  - [Mithril example](#mithril-example)
  - [React JSX example](#react-jsx-example)
- [Global styling by overriding Polythene defaults](#global-styling-by-overriding-polythene-defaults)
- [List of all variables](#list-of-all-variables)

<!-- /MarkdownTOC -->


<a id="introduction"></a>
## Introduction

Polythene components are styled with variables that specify the sizes and colors for that component. The variables are used to create a component style, to be written by JavaScript or to a CSS file.

Component style variables are located in each component's CSS `vars.js` file (see the complete [list of all variables](#list-of-all-variables) below).

For example, the variables file for Icon is:

~~~javascript
// polythene-css-icon/src/vars.js
import { vars } from "polythene-theme"

export default {
  size_small:   vars.unit_icon_size_small,
  size_regular: vars.unit_icon_size,
  size_medium:  vars.unit_icon_size_medium,
  size_large:   vars.unit_icon_size_large,
  color_light:  "currentcolor",
  color_dark:   "currentcolor"
}
~~~

"Global" variables such as `unit_icon_size_small` are imported from `polythene-theme` (which gets them from package `polythene-style`). To override these base variables, see [Global theme file](global-theme-file.md).



<a id="styling-components-with-variables"></a>
## Styling components with variables 

Component variables are passed on to CSS creation modules (usually "layout" and "colors") that take variables and return a style object. The style object is converted to a style sheet by [j2c](http://j2c.py.gy).

Each component's CSS functions can be accessed with the naming pattern `{ComponentName}CSS`:

~~~javascript
import { IconCSS } from "polythene-css"
~~~

You may also choose to import directly from the component's CSS package:

~~~javascript
import { addStyle } from "polythene-css-icon"
~~~


Call `addStyle` to create a style:

~~~javascript
IconCSS.addStyle(selector, {
  // CSS style key value pairs
})
~~~

For example, to change the size and color of an icon:

~~~javascript
IconCSS.addStyle(".my-icon", {
  size_regular: 44,
  color_light:  "purple"
})
~~~

Then use that style for a specific component instance:

~~~javascript
m(Icon, { className: "my-icon" })
~~~

or using React with JSX:

~~~jsx
<Icon className="my-icon" />
~~~


<a id="function-addstyle"></a>
### Function `addStyle`

~~~javascript
addStyle(selector, vars, options)
~~~

| **Option**   | **Required** | **Type** | **Description** |
| ------------ | ------------ | -------- | --------------- |
| **selector** | required     | String   | CSS selector; using a class selector is the most convenient because of the reuse in component option `className` |
| **vars**     | required     | Object   | The component's theme variables, or a subset thereof |


<a id="choosing-css-in-js-or-css-files"></a>
## Choosing CSS-in-JS or CSS files

See [Polythene CSS](../css.md) for guidelines and instructions.



<a id="examples"></a>
## Examples


<a id="mithril-example"></a>
### Mithril example

If we want to create large icons:

~~~javascript
// app.js
import { Icon } from "polythene-mithril"
import { IconCSS } from "polythene-css"

const unitSize = 20

IconCSS.addStyle(".app-icon", {
  size_large: 4 * unitSize
  // Note that we only need to list the variables that differ
})

// Show the large icon
m(Icon, {
  className: "app-icon",
  size: "large" // results in 4 * unitSize
})
~~~

To create a blue button on a dark background:

~~~javascript
// app.js
import { Button } from "polythene-mithril"
import { ButtonCSS } from "polythene-css"

ButtonCSS.addStyle(".blue-on-dark-button", {
  color_dark_text: "#1976D2"
})

// Show the blue button on a dark background
m(".pe-dark-tone", 
  m(Button, {
    className: "blue-on-dark-button",
    label: "Blue Button"
  })
)
~~~


<a id="react-jsx-example"></a>
### React JSX example

If we want to create large icons:

~~~jsx
// app.js
import { Icon } from "polythene-react"
import { IconCSS } from "polythene-css"

const unitSize = 20

IconCSS.addStyle(".app-icon", {
  size_large: 4 * unitSize
  // Note that we only need to list the variables that differ
})

// Show the large icon
<Icon className="app-icon" size="large" />
~~~

To create a blue button on a dark background:

~~~jsx
// app.js
import { Button } from "polythene-react"
import { ButtonCSS } from "polythene-css"

ButtonCSS.addStyle(".blue-on-dark-button", {
  color_dark_text: "#1976D2"
})

// Show the blue button on a dark background
<div className="pe-dark-tone">
  <Button
    className="blue-on-dark-button"
    label="Blue Button"
  />
</div>
~~~


<a id="global-styling-by-overriding-polythene-defaults"></a>
## Global styling by overriding Polythene defaults

Using the same method it is possible to override the default styling, just by using Polythene classnames:

~~~javascript
IconCSS.addStyle(".pe-icon", {
  color_light:  "purple"
})
~~~

To override global variables such as the app's primary action color, see [Global theme file](global-theme-file.md).



<a id="list-of-all-variables"></a>
## List of all variables

Global variables:

* [polythene-style](../../packages/polythene-style/src/variables.js)

Component variables:

* [polythene-css-base-spinner](../../packages/polythene-css-base-spinner/src/vars.js)
* [polythene-css-button/contained-button](../../packages/polythene-css-button/src/contained-button/vars.js)
* [polythene-css-button/text-button](../../packages/polythene-css-button/src/text-button/vars.js)
* [polythene-css-card](../../packages/polythene-css-card/src/vars.js)
* [polythene-css-checkbox](../../packages/polythene-css-checkbox/src/vars.js)
* [polythene-css-dialog-pane](../../packages/polythene-css-dialog-pane/src/vars.js)
* [polythene-css-dialog](../../packages/polythene-css-dialog/src/vars.js)
* [polythene-css-fab](../../packages/polythene-css-fab/src/vars.js)
* [polythene-css-icon-button](../../packages/polythene-css-icon-button/src/vars.js)
* [polythene-css-icon](../../packages/polythene-css-icon/src/vars.js)
* [polythene-css-ios-spinner](../../packages/polythene-css-ios-spinner/src/vars.js)
* [polythene-css-list-tile](../../packages/polythene-css-list-tile/src/vars.js)
* [polythene-css-list](../../packages/polythene-css-list/src/vars.js)
* [polythene-css-material-design-progress-spinner](../../packages/polythene-css-material-design-progress-spinner/src/vars.js)
* [polythene-css-material-design-spinner](../../packages/polythene-css-material-design-spinner/src/vars.js)
* [polythene-css-menu](../../packages/polythene-css-menu/src/vars.js)
* [polythene-css-notification](../../packages/polythene-css-notification/src/vars.js)
* [polythene-css-ripple](../../packages/polythene-css-ripple/src/vars.js)
* [polythene-css-search](../../packages/polythene-css-search/src/vars.js)
* [polythene-css-selection-control](../../packages/polythene-css-selection-control/src/vars.js)
* [polythene-css-shadow](../../packages/polythene-css-shadow/src/vars.js)
* [polythene-css-slider](../../packages/polythene-css-slider/src/vars.js)
* [polythene-css-snackbar](../../packages/polythene-css-snackbar/src/vars.js)
* [polythene-css-svg](../../packages/polythene-css-svg/src/vars.js)
* [polythene-css-switch](../../packages/polythene-css-switch/src/vars.js)
* [polythene-css-tabs](../../packages/polythene-css-tabs/src/vars.js)
* [polythene-css-textfield](../../packages/polythene-css-textfield/src/vars.js)
* [polythene-css-toolbar](../../packages/polythene-css-toolbar/src/vars.js)

