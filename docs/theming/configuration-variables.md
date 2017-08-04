[Back to Theme main page](../theming.md)

# Configuration variables

Polythene components are styled with variables that specify the measurements and colors for that component.

These variables are located in each `src/theme/vars.js` file. For example, for Icon:

~~~javascript
// polythene-core-icon/src/theme/vars.js
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

"Global" variables such as `unit_icon_size_small` are imported from `polythene-theme`. To override these base variables, see "Theme file" on this page.


## Styling components with variables 

Component variables are passed on to "layout" and "colors", modules that take variables and return a style object. The style object is converted to a style sheet by [j2c](http://j2c.py.gy).

To create additional styles for a component, use this pattern:

~~~javascript
Component.theme(selector, vars)
~~~

* `selector`: CSS selector, but using a class selector is the most convenient because you can use the components `className` option
* `vars`: the component's theme variables, or a subset thereof

### Mithril example

To create large icons for the component with class "app-icon", we write:

~~~javascript
// app.js
import { Icon } from "polythene-mithril"

const unitSize = 20;
Icon.theme(".app-icon", {
  size_large:   4 * unitSize
  // Note that we only need to list the variables that differ
})

// Show the large icon
m(Icon, {
  className: "app-icon",
  size: "large" // results in 4 * unitSize
});
~~~

To create a blue button on a dark background:

~~~javascript
// app.js
import { Button } from "polythene-mithril"

Button.theme(".blue-on-dark-button", {
  color_dark_text: "#1976D2"
});

// Show the blue button on a dark background
m(".pe-dark-tone", 
  m(Button, {
    className: "blue-on-dark-button",
    label: "Blue Button"
  })
);
~~~

### React JSX example

To create large icons for the component with class "app-icon", we write:

~~~jsx
// app.js
import { Icon } from "polythene-react"

const unitSize = 20;
Icon.theme(".app-icon", {
  size_large:   4 * unitSize
  // Note that we only need to list the variables that differ
})

// Show the large icon
<Icon className="app-icon" size="large" />
~~~

To create a blue button on a dark background:

~~~jsx
// app.js
import { Button } from "polythene-react";

Button.theme(".blue-on-dark-button", {
  color_dark_text: "#1976D2"
});

// Show the blue button on a dark background
<div className="pe-dark-tone">
  <Button
    className="blue-on-dark-button"
    label="Blue Button"
  />
</div>
~~~








