[Back to Polythene Ripple main page](../ripple.md)

# Ripple component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
- [Variations](#variations)
- [Appearance](#appearance)
  - [Styling](#styling)
    - [Themed component](#themed-component)
    - [CSS](#css)
    - [Style](#style)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Ripple options](../ripple.md)



<a id="usage"></a>
## Usage


<a href="https://jsfiddle.net/ArthurClemens/brx9wdhv/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

Append a ripple to any HTML element (which requires to have style `position: relative` and a size):

~~~jsx
import React from "react"
import { Ripple } from "polythene-react"

<div
  style={{
    position: "relative",
    width: "400px",
    height: "200px"
  }}
/>
  <Ripple />  
</div>
~~~

Use option `after` to append a Ripple to a Polythene component:

~~~jsx
import React from "react"
import { Ripple, ListTile } from "polythene-react"

<ListTile
  title="Title"
  after={<Ripple/>}
/>
~~~


<a id="variations"></a>
## Variations

Create multiple simultaneous ripples with option `multi`.



<a id="appearance"></a>
## Appearance


<a id="styling"></a>
### Styling

Below are examples how to change the Ripple appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

~~~javascript
import { RippleCSS } from "polythene-css"

RippleCSS.addStyle(".themed-ripple", {
  color_light:   "#F44336"
})

h(Ripple, {
  className: "themed-ripple"
})
~~~

<a id="css"></a>
#### CSS

Change CSS using the [Ripple CSS classes](../../../packages/polythene-css-classes/ripple.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/ripple"
~~~
By default the inherited `color` from the parent element is used. It can be changed with CSS:

~~~css
.pe-ripple {
  color: green;
}
~~~

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

~~~jsx
<Ripple
  style={{
    color: "#2196F3"
  }}
/>
~~~


<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


