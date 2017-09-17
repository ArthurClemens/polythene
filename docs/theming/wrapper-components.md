[Back to Theme main page](../theming.md)

# Wrapper components

A wrapper component - also Higher Order Component - takes a component and returns a new component. The new component contains custom settings or behaviour.

Let's say we want to create a flat, bordered secondary button:


## Mithril example

~~~javascript
// secondary-button.js
import m from "mithril"
import { Button } from "polythene-mithril"
import { ButtonCSS } from "polythene-css"

export const SecondaryButton = {
  view: vnode =>
    m(Button, Object.assign(
      {},
      vnode.attrs, // pass on other options
      {
        className: "secondary-button",
        borders: true
      }
    ))
}

// Create CSS for this component:
ButtonCSS.addStyle(".secondary-button", {
  color_light_border:     "#ddd",
  color_light_background: "#fff"
})
~~~

To use the new component:

~~~javascript
// app.js
import { SecondaryButton } from "./secondary-button"

m(SecondaryButton, {
  label: "Help"
})
~~~


## React JSX example

~~~jsx
// secondary-button.js
import { Button } from "polythene-react"
import { ButtonCSS } from "polythene-css"

export const SecondaryButton = props =>
  <Button className="secondary-button" borders {...props} />

// Create CSS for this component:
ButtonCSS.addStyle(".secondary-button", {
  color_light_border:     "#ddd",
  color_light_background: "#fff"
})
~~~

To use the new component:

~~~jsx
// app.js
import { SecondaryButton } from "./secondary-button"

<SecondaryButton label="Help" />
~~~
