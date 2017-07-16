[Back to Polythene Button main page](button.md)

# Button component for React



## Usage

### With JSX

~~~jsx
import React from "react"
import { Button } from "polythene-react"

// render component
<Button label="Button" />
~~~

Add an onclick event:

~~~jsx
<Button
  label="Button"
  events={{
    onClick: () => console.log("click")
  }}
/>
~~~

### With hyperscript

~~~javascript
import { renderer as h, Button } from "polythene-react"

h(Button, {
  label: "Button"
})
~~~

Add an onclick event:

~~~javascript
h(Button, {
  label: "Button",
  events: {
    onClick: () => console.log("click")
  }
})
~~~



## Links

Create a (non-router) link with option `url`:

~~~jsx
<Button url={{href: "some-url"}} />
~~~

or with hyperscript:

~~~javascript
h(Button, {
  url: { href: "some-url" }
})
~~~

### Router links

React Router is the most popular router library for React. Wrap the component in its `withRouter` HOC.

~~~jsx
import { withRouter } from "react-router-dom"

// render wrapped
withRouter(({ history }) => 
  <Button
    url={{
      href: "/some-route", // not required, but makes this a real link
      onClick: e => (e.preventDefault(), history.push("/some-route"))
    }}
  />
)
~~~

or with hyperscript:

~~~javascript
import { withRouter } from "react-router-dom"

withRouter(({ history }) => 
  h(Button, {
    url: {
      href: "/some-route",
      onClick: e => (e.preventDefault(), history.push("/some-route"))
    }
  })
)
~~~



## Options

[Button options](Button.md)



## Variations

* The hover effect can be hidden with `wash: false`.
* The ripple effect on click can be hidden with `ink: false`.
* Button contains no icon as this is not part of the Material Design guidelines; use [Icon Button](Button.md) instead



## Mobile and tap delay

To remove the tap delay on mobile devices it is advisable to use a library like [Fastclick](https://github.com/ftlabs/fastclick). But because Fastclick has an unresolved issue with tap events while scrolling on iOS, it is better to use the convenience wrapper provided in "polythene-utilities". This temporarily removes the Fastclick event when an element is being scrolled.

~~~javascript
import { addFastClick } from "polythene-fastclick"

addFastClick()
~~~



## Appearance

### Styling

Below are examples how to change the button appearance, either with a theme or with CSS.

You can find more information about theming in [Theme](Theme.md).

#### Themed component

~~~javascript
Button.theme(".bordered-button", {
  color_light_text:   "#673ab7",
  color_light_border: "#673ab7",
  color_dark_text:    "yellow",
  color_dark_border:  "yellow"
})

// render component
<Button
  label="Borders"
  className="bordered-button",
  borders={true}
/>
~~~

#### CSS

Change CSS using the CSS classes in `polythene-core-button/src/classes.js`

Class names can be imported with:

~~~javascript
import { classes } from "polythene-core-button";
~~~

#### Style

Some style attributes can be set using option `style`. For example:

~~~jsx
<Button
  backgroundColor="#EF6C00"
  color="#fff"
/>
~~~

### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


