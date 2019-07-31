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


<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGI2gXRIDMBLJGG0KTAW2RoAdAAsALn3jF0UMYlmoQAHnhsoAawAEI8ohYBeADohxY3CgD0FzOTEiAruTBIBsIQHM2d+wCMhbCGsYPDEYC2wEAE87eUQLRAAPfmxOCxYXGCEwYONNXXgjUjFIzhFERDFjAD5DKCUycjZsMU0YJ0LTcysbbycXeUzPbz8AoJCwiPhosqg4mDFMKHxMeGg4yenYgFpdTDAxcKiY2Z3EPbEt+cXl1dmhACsYaqULBqaxGrq35tb2406YJZrLYHH1EK5Bl4HCNAphghUJkcZnMFksVmtDlNjogttlEVjkbjgpdUTc1g8niAqi9vh9arUlPg2AA3TRsfCFSgQSpUl5M5lVaR4JD7AKwRQAZhQtBAAF8iDx+IIQBTpJBZPIxIp1fNNMBNAAlJopRCaWWafSaDbYgDctR1LX1RuwJoAwgBld1mi1WpGxD3uu1QWrOt2eoSYfD4d3FJAACmMQhiAnwO2NSGMRD1tU0mkgq3IAH1VO5xChNMYAMQsFgARgA7AAWRvGWqygCUQft0F1bHV7oAagBxH31ZnuTQAd3ZdkKACYWyBtIg2KWxPPF5pmWxEJOAEIQBKFWiaE8LzQL57YTB2TQc4wAWVrc80DaEc-rABlawAOIS-i9a3gLZayEAA2RstnrIRaAlT85xfABOd9G2A6Da0QrZwNrb8XyQ-9EM0P8wIlC9NGQhd4AAViERswM0RshHrOCaJ-PDawAL2MCxqVeccqi7KAHU0ABBF0fTjdsLSqCsoFzRkWU+XN5P5PMsGCAA5JVOQgSdNCgblEGqHNlPkzBtF0Ax-jEMxAW6EFHGccEBg8KFfH8QJrUJfBwQgMJdn2CxKwsRoXQzJcFnIdwKkKQsfCwDRqndcpNBWOBywABT9WZNBYCByENM59k0LZDXTU0fL4CAXkwJTlL5RSTJUlk1LhGAtIEHTJ2MuTTM0BTWWcNqOsQQoxC8cKqldHsxHITA1AITQ4x8lhMHseAxHbBqBSa+rVKGzTtOMSA+AiWZZDycqer6+rQyQTQeN2+SLH5Ornte3aBtaw7OuMShuqpJ7+v29T2qOkBxrESaNO5PMZrmhb8G2t69pag6wd+9BTrWC7QpNa6bv6u7TXsIT4fm2Z8AelH3sa3raZ2+ngbR0GRq6gnTK+9G2eMSHJtdTVEHIZGga51nwZOs7NUusKjMBpnOeJvNBYKx6Ff6l66c5zXGc5kHhvB-6OdRwbxcxvm5aqGMek0CBrzALxIhF9WxYNzHJZxlo8cmoH5KVq5bAAeXtx39GAIQqPNNWbud7WPqZ12ftGv7dON5rTbd5OIYmy2ABFHBvMVY76xOMazj3zq9q75cJonyrvAvxugMOJRgqOaY1+O461k3vrL9ma5L-Wk7GnPqgfdbxpNYu9ZZzPCgr6Xvct3269lzQ+EntgG7mpuoDD0DI+p0WdZRmfmYzkeU4BjvS557OoctmMSgIc-077+-F9x6uO79q71dMvMF+Yd9T5nyuWKsNZEI-loLQXIspZSr1zAHMQwc9ih2ALQJiiCAHHxdqfT6BCE7D37tfNOF8P7gwttUAAKmUFMWZsBCxgGweYmoszyCpnAVQVNdBIyITHEhn8IDY0rjLfGg8Y7EyQZoThaCHbFAPm3GR3MqH0IIGmWWrZcG5iYeQFhbDZCr2jiXAR9UzHOxDEVMQudA4PiELoJYQsEy9SUGJbA1MiAmXwBAMA9hXBiA8BUAAov0WQe5IgAEl8AJhAFyHk7ZaidjVCI7AHAhaKB8JgHwiApAkGFIgUUPZFBgR-CgWsMp5SKgEIoLIwQUkagUMIL+gTl7Zl6hEFhe9yz5ELsyRAQZcxZLAOodwlBSb4HLNWGsgzlyrjLERWg2AEizOnPgOw5YKm0AAKRBhwUKXJhS95cDQGBaUcpmAgFUBoE51BqnKgCoEny-TVjYACaqEgjgpBoABECUm2BRlZBESFaxFh-H4BBecIQzzcl23eY8aQxQmGKFpHKBUIBeA1LQI8rYPi+DQsQC8uFmoPkgC+YoX5Vh-mApOpC-YuLgXgrpRcPFBKiVvJJQikgSLlSotlIwWUQA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

Append a ripple to any HTML element (which requires to have style `position: relative` and a size):

```jsx
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
```

Use option `after` to append a Ripple to a Polythene component:

```jsx
import React from "react"
import { Ripple, ListTile } from "polythene-react"

<ListTile
  title="Title"
  after={<Ripple/>}
/>
```


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

```javascript
import { RippleCSS } from "polythene-css"

RippleCSS.addStyle(".themed-ripple", {
  color_light:   "#F44336"
})

h(Ripple, {
  className: "themed-ripple"
})
```

<a id="css"></a>
#### CSS

Change CSS using the [Ripple CSS classes](../../../packages/polythene-css-classes/ripple.js).

Class names can be imported with:

```javascript
import classes from "polythene-css-classes/ripple"
```
By default the inherited `color` from the parent element is used. It can be changed with CSS:

```css
.pe-ripple {
  color: green;
}
```

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

```jsx
<Ripple
  style={{
    color: "#2196F3"
  }}
/>
```


<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


