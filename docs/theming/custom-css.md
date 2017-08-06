[Back to Theme main page](../theming.md)

# Custom CSS

Writing CSS gives you more options for styling, but requires some knowledge about the component's generated HTML structure. When a component structure would change in the future, the CSS style may no longer work, so use this method with caution.


## 1. Using CSS styles

You can load extra styles as a CSS file and attach that to the head, or use your bundler / module loader's preferred method.

All components have a `className` attribute. For example:

~~~javascript
m(Button, {
  className: "send-button",
  label: "Send"
})
~~~

To set this button's background color: 

~~~css
.send-button .pe-button__content {
  background-color: #FF1744;
  color: white;
}
~~~

Note: to change a style of the component's base class, you must add the base className:

~~~css
.pe-button.submit-button {
  color: #444;
}
~~~


## 2. Using Javascript-to-CSS

Polythene uses [j2c](http://j2c.py.gy) to write styles directly to the head of the page. A Polythene j2c style object looks like this:

~~~javascript
[{
  ".send-button .pe-button__content": {
    "background-color": "#FF1744",
    color: "white"
  }
}]
~~~

Package `polythene-core-css` contains `styler` that takes the list of style objects to create the CSS.

For example:

~~~javascript
import { styler } from "polythene-core-css"

const buttonStyles = [
  {
    ".send-button .pe-button__content": {
      "background-color": "#FF1744",
      color: "white"
    },
    ".info-button .pe-button__content": {
      "background-color": "#2196f3",
      color: "white"
    }
  }
]

styler.add("app-buttons", buttonStyles)
~~~

The first property passed to styler is the style element id.

Note that using Javascript for styling makes it very simple to create your own mixins:

~~~javascript
const colors = {
  send: "#FF1744",
  info: "#2196f3"
}
const makeButton = name => ({
// v note the extra space to indicate a child element
  " .pe-button__content": {
    "background-color": colors[name],
    color: "white"
  }
})
const buttonStyles = [
  {
    ".send-button": makeButton("send"),
    ".info-button": makeButton("info")
  }
]

styler.add("app-buttons", buttonStyles)
~~~


## Writing CSS for wrapper components

Also wrapper components can be styled with CSS.

We only need to take care of the CSS specificity level; using the same "secondary-button" example, the generated component class list becomes:

~~~html
class="pe-button pe-text-button pe-button--borders secondary-button"
~~~

So simply writing `.secondary-button {...}` won't work - we need to include base class `pe-button` in the new style to get the proper specificity level.

~~~javascript
// secondary-button.js
import m from "mithril"
import { Button } from "polythene-mithril"
import { styler } from "polythene-core-css"

const styles = [{
  ".pe-button.secondary-button .pe-button__content": {
    "background-color": "#fff",
    "border-color": "#ddd"
  }
}]
styler.add("secondary-button", styles)

export const SecondaryButton = {
  view: vnode => m(Button, Object.assign(
    {},
    vnode.attrs,
    {
      className: "secondary-button",
      borders: true,
    }
  ))
}

// app.js
import { SecondaryButton } from "./secondary-button"

m(SecondaryButton, {
  label: "Help"
})
~~~


