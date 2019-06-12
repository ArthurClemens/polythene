[Back to Theme main page](../theming.md)

# Wrapper components

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Mithril example](#mithril-example)
- [React JSX example](#react-jsx-example)

<!-- /MarkdownTOC -->

A wrapper component - also Higher Order Component - takes a regular component and returns a modified version, one that sets predefined behavior or styles. For example, we can create a SecondaryButton component by taking a Button and adding typical "secondary button" styles.


<a id="mithril-example"></a>
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
        border: true
      }
    ))
}

// Create CSS for this component:
ButtonCSS.addStyle(".secondary-button", {
  color_light_border:     "#ddd",
  color_light_background: "#fff"
})
~~~

~~~javascript
// app.js
import { SecondaryButton } from "./secondary-button"

m(SecondaryButton, {
  label: "Help"
})
~~~



<a id="react-jsx-example"></a>
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

~~~jsx
// app.js
import { SecondaryButton } from "./secondary-button"

<SecondaryButton label="Help" />
~~~
