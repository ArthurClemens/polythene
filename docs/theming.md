# Theming

Polythene is an implementation of Google's Material Design, but it can also be used with (radically) different styling.

This section describes a number of ways to create customizations - from simple local colors to more radical changes.


## Customization options

Customization options can be used side by side:

1. [Light and Dark](theming/light-and-dark.md)
1. [Configuration variables](theming/configuration-variables.md)
1. [Wrapper components](theming/wrapper-components.md)
1. [Global theme file](theming/global-theme-file.md)
1. [Custom CSS](theming/custom-css.md)


## The quickest way to create a custom blue button

Read this first if you are just looking for a quick way to make a modification to a component.

Create custom CSS by passing a new CSS class and component [configuration variables](theming/configuration-variables.md).

### Mithril example

~~~javascript
import mithril from "mithril"
import { Button } from "polythene-mithril"

Button.theme(".blue-button", {
  color_light_background: "blue",
  color_light_text:       "white"
})

m(Button, {
  className: "blue-button",
  label: "Blue Button"
})
~~~ 

### React JSX example

~~~jsx
import React from "react"
import { Button } from "polythene-react"

Button.theme(".blue-button", {
  color_light_background: "blue",
  color_light_text:       "white"
})

<Button className="blue-button" label="Blue Button" />
~~~ 

### React hyperscript example

~~~javascript
import { renderer as h, Button } from "polythene-react"

Button.theme(".blue-button", {
  color_light_background: "blue",
  color_light_text:       "white"
})

h(Button, {
  className: "blue-button",
  label: "Blue Button"
})
~~~ 


