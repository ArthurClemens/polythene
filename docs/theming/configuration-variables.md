[Back to Theme main page](../theming.md)

# Configuration variables

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" -->

- [Introduction](#introduction)
- [Styling components with variables](#styling-components-with-variables)
  - [Simple example](#simple-example)
  - [Function `addStyle`](#function-addstyle)
  - [Dynamic styles with CSS-in-JS](#dynamic-styles-with-css-in-js)
  - [Writing styles to CSS files](#writing-styles-to-css-files)
- [Examples](#examples)
  - [Mithril example](#mithril-example)
  - [React JSX example](#react-jsx-example)
- [Global styling by overriding Polythene defaults](#global-styling-by-overriding-polythene-defaults)
- [List of all variables](#list-of-all-variables)

<!-- /MarkdownTOC -->

<a name="introduction"></a>
## Introduction

Polythene components are styled with variables that specify the sizes and colors for that component.

These variables are located in each component's `src/vars.js` file (see the complete [list of all variables](#list-of-all-variables) below).

For example, the variables file for Icon is:

~~~javascript
// polythene-core-icon/src/vars.js
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

"Global" variables such as `unit_icon_size_small` are imported from `polythene-theme` (which gets them from `polythene-style`). To override these base variables, see [Global theme file](global-theme-file.md).


<a name="styling-components-with-variables"></a>
## Styling components with variables 

Component variables are passed on to CSS creation modules (usually "layout" and "colors") that take variables and return a style object. The style object is converted to a style sheet by [j2c](http://j2c.py.gy).

To create additional styles for a component, use this pattern:

~~~javascript
import { IconCSS } from "polythene-css"

IconCSS.addStyle(selector, vars)
~~~

So each imported component's CSS functions can be accessed with the naming pattern `{ComponentName}CSS`.

You may also choose to import directly from the component's CSS package:

~~~javascript
import { addStyle } from "polythene-css-icon"
~~~

<a name="simple-example"></a>
### Simple example

~~~javascript
IconCSS.addStyle(".my-icon", {
  size_regular: 44,
  color_light:  "purple"
})
~~~

and then use that style for a specific component instance:

~~~javascript
m(Icon, { className: "my-icon" })
~~~

or 

~~~jsx
<Icon className="my-icon" />
~~~


<a name="function-addstyle"></a>
### Function `addStyle`

| **Option**   | **Required** | **Type** | **Description** |
| ------------ | ------------ | -------- | --------------- |
| **selector** | required     | String   | CSS selector; using a class selector is the most convenient because of the reuse in component option `className` |
| **vars**     | required     | Object   | The component's theme variables, or a subset thereof |


<a name="dynamic-styles-with-css-in-js"></a>
### Dynamic styles with CSS-in-JS 

This mechanism is triggered by having `import "polythene-css"` is the code.

JavaScript is used to create CSS styles that are automatically added to `<head>`. 

<a name="writing-styles-to-css-files"></a>
### Writing styles to CSS files

It is also possible to generate static files.

Steps: 

1. Use [polythene-scripts](../packages/polythene-scripts.md) to generate a CSS file (outside of the app runtime, so for instance in a build script)
1. Place the CSS file in your build directory, or import the css file using bundler tooling


<a name="examples"></a>
## Examples

<a name="mithril-example"></a>
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

<a name="react-jsx-example"></a>
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

<a name="global-styling-by-overriding-polythene-defaults"></a>
## Global styling by overriding Polythene defaults

Using the same method it is possible to override the default styling, just by using Polythene classnames:

~~~javascript
IconCSS.addStyle(".pe-icon", {
  color_light:  "purple"
})
~~~



<a name="list-of-all-variables"></a>
## List of all variables

Global variables:

* [polythene-style](../../packages/polythene-style/src/variables.js)

Component variables:

* [polythene-core-base-spinner](../../packages/polythene-core-base-spinner/src/vars.js)
* [polythene-core-button](../../packages/polythene-core-button/src/vars.js)
* [polythene-core-card](../../packages/polythene-core-card/src/vars.js)
* [polythene-core-checkbox](../../packages/polythene-core-checkbox/src/vars.js)
* [polythene-core-dialog-pane](../../packages/polythene-core-dialog-pane/src/vars.js)
* [polythene-core-dialog](../../packages/polythene-core-dialog/src/vars.js)
* [polythene-core-fab](../../packages/polythene-core-fab/src/vars.js)
* [polythene-core-icon-button](../../packages/polythene-core-icon-button/src/vars.js)
* [polythene-core-icon](../../packages/polythene-core-icon/src/vars.js)
* [polythene-core-ios-spinner](../../packages/polythene-core-ios-spinner/src/vars.js)
* [polythene-core-list-tile](../../packages/polythene-core-list-tile/src/vars.js)
* [polythene-core-list](../../packages/polythene-core-list/src/vars.js)
* [polythene-core-material-design-progress-spinner](../../packages/polythene-core-material-design-progress-spinner/src/vars.js)
* [polythene-core-material-design-spinner](../../packages/polythene-core-material-design-spinner/src/vars.js)
* [polythene-core-menu](../../packages/polythene-core-menu/src/vars.js)
* [polythene-core-notification](../../packages/polythene-core-notification/src/vars.js)
* [polythene-core-raised-button](../../packages/polythene-core-raised-button/src/vars.js)
* [polythene-core-ripple](../../packages/polythene-core-ripple/src/vars.js)
* [polythene-core-search](../../packages/polythene-core-search/src/vars.js)
* [polythene-core-selection-control](../../packages/polythene-core-selection-control/src/vars.js)
* [polythene-core-shadow](../../packages/polythene-core-shadow/src/vars.js)
* [polythene-core-slider](../../packages/polythene-core-slider/src/vars.js)
* [polythene-core-snackbar](../../packages/polythene-core-snackbar/src/vars.js)
* [polythene-core-svg](../../packages/polythene-core-svg/src/vars.js)
* [polythene-core-switch](../../packages/polythene-core-switch/src/vars.js)
* [polythene-core-tabs](../../packages/polythene-core-tabs/src/vars.js)
* [polythene-core-textfield](../../packages/polythene-core-textfield/src/vars.js)
* [polythene-core-toolbar](../../packages/polythene-core-toolbar/src/vars.js)

