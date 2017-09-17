[Back to Theme main page](../theming.md)

# Configuration variables

Polythene components are styled with variables that specify the measurements and colors for that component.

These variables are located in each `src/vars.js` file. For example, for Icon:

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

"Global" variables such as `unit_icon_size_small` are imported from `polythene-theme`. To override these base variables, see [Global theme file](global-theme-file.md).


## Styling components with variables 

Component variables are passed on to "layout" and "colors", modules that take variables and return a style object. The style object is converted to a style sheet by [j2c](http://j2c.py.gy).

To create additional styles for a component, use this pattern:

~~~javascript
import { ButtonCSS } from "polythene-css"

ButtonCSS.addStyle(selector, vars)
~~~

"polythene-css" exports each component's CSS functions that can be accessed with `{ComponentName}CSS`.

Alternatively import directly from the component's css package:

~~~javascript
import { addStyle } from "polythene-css-button"
~~~

### `addStyle` options

| **Option**   | **Required** | **Type** | **Description** |
| ------------ | ------------ | -------- | --------------- |
| **selector** | required     | String   | CSS selector; using a class selector is the most convenient because of the reuse in component option `className` |
| **vars**     | required     | Object   | The component's theme variables, or a subset thereof |


### Dynamic styles with CSS-in-JS 

The styles are automatically added to `<head>`. This is triggered by having `import "polythene-css"` is the code.


### Writing styles to CSS files

It is also possible to generate static files using the same `addStyle` function.

Steps: 

1. Use [polythene-scripts](../packages/polythene-scripts.md) to generate a CSS file (outside of the app runtime, so for instance in a build script)
1. Place the CSS file in your build directory, or import the css file using bundler tooling


## Examples

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
