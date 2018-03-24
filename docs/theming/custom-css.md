[Back to Theme main page](../theming.md)


# Custom CSS

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Using CSS styles](#using-css-styles)
- [Using CSS-in-JS](#using-css-in-js)
- [Writing CSS for wrapper components](#writing-css-for-wrapper-components)

<!-- /MarkdownTOC -->


Writing CSS gives you more options for styling, but requires some knowledge about the component's generated HTML structure. When a component structure would change in the future, the CSS style may no longer work, so use this method with caution.



<a id="using-css-styles"></a>
## Using CSS styles

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



<a id="using-css-in-js"></a>
## Using CSS-in-JS

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



<a id="writing-css-for-wrapper-components"></a>
## Writing CSS for wrapper components

When we add a class name to a wrapper component, we are adding that to the list of class names of the original component. For example with our example from [Wrapper components](wrapper-components.md), adding class "secondary-button" generates:

~~~html
class="pe-button pe-text-button pe-button--borders secondary-button"
~~~

So simply writing `.secondary-button {...}` won't work - we need to include base class `pe-button` to get the proper CSS specificity.

~~~javascript
const styles = [{
  ".pe-button.secondary-button .pe-button__content": {
    "background-color": "#fff",
    "border-color": "#ddd"
  }
}]
styler.add("secondary-button", styles)
~~~
