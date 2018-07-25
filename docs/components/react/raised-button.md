[Back to Polythene Raised Button main page](../raised-button.md)

# Raised Button component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Links](#links)
- [Appearance](#appearance)
  - [Styling](#styling)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Raised Button options](../raised-button.md)



<a id="usage"></a>
## Usage

<a id="with-jsx"></a>
#### With JSX

<a href="https://jsfiddle.net/ArthurClemens/sbtonwbf/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~jsx
import React from "react"
import { Button } from "polythene-react"

<Button raised label="Button" />
~~~

<a id="with-hyperscript"></a>
#### With hyperscript

<a href="https://jsfiddle.net/ArthurClemens/hL8wmrpL/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~javascript
import { Button } from "polythene-react"

h(Button, {
  raised: true,
  label: "Button"
})
~~~


<a id="links"></a>
### Links

See: [URLs and router links](../../handling-urls.md)



<a id="appearance"></a>
## Appearance


<a id="styling"></a>
### Styling

Below are examples how to change the raised button appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

~~~jsx
import { ButtonCSS } from "polythene-css"

ButtonCSS.addStyle(".themed-raised-button", {
  color_light_background: "#ff1744",
  color_light_text:       "#fff"
})

<Button
  raised
  label="Button"
  className="themed-raised-button"
/>
~~~

To create a hover effect:

~~~javascript
ButtonCSS.addStyle(".hover-button", {
  color_light_hover:            "#fff",
  color_light_hover_background: "#673ab7",
  animation_duration:           "100ms",
})

<Button
  raised
  label="Hover"
  className="hover-button"
/>
~~~

<a id="css"></a>
#### CSS

Change CSS using the [Raised Button CSS classes](../../../packages/polythene-css-classes/button.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/button"
~~~

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

~~~jsx
<Button
  raised
  style={{
    color: "#fff",
    backgroundColor: "#ef6c00"
  }}
/>
~~~


<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


