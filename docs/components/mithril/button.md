[Back to Polythene Button main page](../button.md)

# Button component for Mithril


## Options

[Button options](../button.md)


## Usage

~~~javascript
import m from "mithril"
import { Button } from "polythene-mithril"

m(Button, {
  label: "Button"
})
~~~

<a href="https://jsfiddle.net/ArthurClemens/5d5xfoxs/" target="_blank"><img src="http://arthurclemens.github.io/assets/polythene/docs/online-example.gif" height="36" /></a>


### Links

Add a route URL:

~~~javascript
m(Button, {
  label: "Button",
  url: {
    href: "/index",
    oncreate: m.route.link
  }
})
~~~

See also: [URLs and router links](../../handling-urls.md)


### Events

Add an onclick event:

~~~javascript
m(Button, {
  label: "Button",
  events: {
    onclick: () => console.log("click")
  }
})
~~~

### Variations

* The hover effect can be hidden with `wash: false`.
* The ripple effect on click can be hidden with `ink: false`.
* Button contains no icon as this is not part of the Material Design guidelines; use [Icon Button](../icon-button.md) instead.

### Mobile and tap delay

To remove the tap delay on mobile devices it is advisable to use a library like [Fastclick](https://github.com/ftlabs/fastclick). But because Fastclick has an unresolved issue with tap events while scrolling on iOS, it is better to use the convenience wrapper provided in "polythene-utilities". This temporarily removes the Fastclick event when an element is being scrolled.

~~~javascript
import { addFastClick } from "polythene-fastclick"

addFastClick()
~~~


## Appearance

### Styling

Below are examples how to change the Button appearance, either with a theme or with CSS.

You can find more information about theming in [Theming](../../theming.md).

#### Themed component

~~~javascript
Button.theme(".bordered-button", {
  color_light_text:   "#673ab7",
  color_light_border: "#673ab7",
  color_dark_text:    "yellow",
  color_dark_border:  "yellow"
})

m(Button, {
  label: "Borders",
  className: "bordered-button",
  borders: true
})
~~~

#### CSS

Change CSS using the CSS classes in `polythene-core-button/src/classes.js`

Class names can be imported with:

~~~javascript
import { classes } from "polythene-core-button";
~~~

#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
m(Button, {
  style: {
    backgroundColor: "#EF6C00",
    color:           "#fff"
  }
})
~~~

### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


