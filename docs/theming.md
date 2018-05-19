# Theming

Polythene is an implementation of Google's Material Design, but it can also be used with (radically) different styling.

This section describes a number of ways to create customizations - from simple local colors to more radical changes.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Customization options](#customization-options)
- [The quickest way to create a custom blue button](#the-quickest-way-to-create-a-custom-blue-button)
  - [Mithril example](#mithril-example)
  - [React JSX example](#react-jsx-example)
  - [React hyperscript example](#react-hyperscript-example)

<!-- /MarkdownTOC -->


<a id="customization-options"></a>
## Customization options

Customization options can be used side by side:

1. [Light and Dark](theming/light-and-dark.md)
1. [Style variables](theming/style-variables.md)
1. [Wrapper components](theming/wrapper-components.md)
1. [Global theme file](theming/global-theme-file.md)
1. [Custom CSS](theming/custom-css.md)



<a id="the-quickest-way-to-create-a-custom-blue-button"></a>
## The quickest way to create a custom blue button

Read this first if you are just looking for a quick way to make a modification to a component.

Create custom CSS by passing a new CSS class and component [style variables](theming/style-variables.md).


<a id="mithril-example"></a>
### Mithril example

~~~javascript
import m from "mithril"
import { Button } from "polythene-mithril"
import { ButtonCSS } from "polythene-css"

ButtonCSS.addStyle(".blue-button", {
  color_light_background: "blue",
  color_light_text:       "white"
})

m(Button, {
  className: "blue-button",
  label: "Blue Button"
})
~~~ 


<a id="react-jsx-example"></a>
### React JSX example

~~~jsx
import React from "react"
import { Button } from "polythene-react"
import { ButtonCSS } from "polythene-css"

ButtonCSS.addStyle(".blue-button", {
  color_light_background: "blue",
  color_light_text:       "white"
})

<Button className="blue-button" label="Blue Button" />
~~~ 


<a id="react-hyperscript-example"></a>
### React hyperscript example

~~~javascript
import { renderer as h, Button } from "polythene-react"
import { ButtonCSS } from "polythene-css"

ButtonCSS.addStyle(".blue-button", {
  color_light_background: "blue",
  color_light_text:       "white"
})

h(Button, {
  className: "blue-button",
  label: "Blue Button"
})
~~~ 
