[Back to Polythene Button main page](../button.md)

# Button component for Mithril

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Links](#links)
  - [Events](#events)
  - [Variations](#variations)
  - [A row of buttons](#a-row-of-buttons)
- [Appearance](#appearance)
  - [Styling](#styling)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Button options](../button.md)


<a id="usage"></a>
## Usage

<a href="https://jsfiddle.net/ArthurClemens/5d5xfoxs/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~javascript
import m from "mithril"
import { Button } from "polythene-mithril"

m(Button, {
  label: "Button"
})
~~~


<a id="links"></a>
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



<a id="events"></a>
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


<a id="variations"></a>
### Variations

* The hover effect can be hidden with `wash: false`.
* The ripple effect on click can be hidden with `ink: false`.
* Button contains no icon as this is not part of the Material Design guidelines; use [Icon Button](../icon-button.md) instead.


<a id="a-row-of-buttons"></a>
### A row of buttons

When placed inside an element with classname `pe-button-row`, buttons will get a side margin to set them apart. The row element itself will have an negative side margin so that the first button still lines up properly.


<a id="appearance"></a>
## Appearance


<a id="styling"></a>
### Styling

Below are examples how to change the Button appearance, either with a theme or with CSS.

You can find more information about theming in [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

~~~javascript
import { ButtonCSS } from "polythene-css"

ButtonCSS.addStyle(".bordered-button", {
  color_light_text:   "#673ab7",
  color_light_border: "#673ab7",
  color_dark_text:    "yellow",
  color_dark_border:  "yellow"
})

m(Button, {
  label: "Borders",
  className: "bordered-button",
  border: true
})
~~~

<a id="css"></a>
#### CSS

Change CSS using the [Button CSS classes](../../../packages/polythene-css-classes/button.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/button"
~~~

<a id="style"></a>
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


<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


