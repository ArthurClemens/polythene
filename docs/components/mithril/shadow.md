[Back to Polythene Shadow main page](../shadow.md)

# Shadow component for Mithril

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
- [Appearance](#appearance)
  - [Styling](#styling)
    - [Themed component](#themed-component)
    - [CSS](#css)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Shadow options](../shadow.md)



<a id="usage"></a>
## Usage

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGIgdgYA4BdEgMwEskYbQomALbI0AOgAWAFyHxi6KFMSLUIADzwuUANYACCeUQcAvAB0Q0qbhQB6G5nJSJAV3JgkI2GIDmXJ84AjMS4Iexg8KRgbbAQATydlRBtEAA9hbF4bDg8YMTBw811DeDNSKVjeCUREKXMAPlMoRrUyci5sKV0YN1LLazsHfzcPZVzffyCQsIiomPh4qqgkmClMKHxMeGgkuYXEgFohPwMeaLiEpcPjtvh9lbWNraWxACsYerUbVvapBqaoFoUH5dHrmPowWz2RwuYaITxjY6BYKhTDhGqzc6LZardabbZneYXRD7fIYwlYknhO44x7bV7vEB1T7fDp-Zr4LgAN10XHwpUoEFqjM+HM5dXkeCQYCkIVgqgALCgAIxK+UgAC+RAEwlEIHp8kgimUUlUhpWumAugAyhJMPgIAB3XTq3TGXS7IkAbkajTNnQAglAuEJMEp8K7dAAKACUrrqFsaul0fq6qyUEeAiaTXVt9odABFEB0JChdEqs+rvVAk1nDFJXNXM9Xs5yuIgHaWY3GE83s0Uag3dEJI+YxNhidwpHljYhyCToEpFOYiFm+0nLdB3FwwNpO7HjPH7koxDBc47C8WI5HI0fECezwWi05dABqMuxgCkugAbLHNau12oAC1yHEcQFFZddHMABhTQdyHRBzGjFdexA0CbTtR0iB7NC1zWYNQwIUspHIZxEBQ3C+1PTDH2LUtb3vGiLycYC13VaNWKTVhWOjKs+3VCsq0rH0oBTf1sGwDMs1bds927IDUOHUdKAdMQoEFRDiF0BSQKUkBMEgptcIMIxSzBKQrAhAZoVcdw4VGHxEUmUIPQpfA4QgKIjicG4bAAYi+B9l043RVnIbwajMkAAH0AiwHRzFYzUoJAK1ql0TY4FLAAFTFEl0DgIHIXQAFlrh4XR9mtB9dHcoQICQgDWGQgC9LEFTIJ0tc2plKQkEg8xmIkJCKO6sC8ggIQYiWJdiFY0wpEtFYKkQUtLQ5GAMkwWIouyVJIL2lJ8y4QxpVlKLIHgZwhCaEBnWdUaQLoIglSIAAmIgAGYiHlIgAFZWDEENsBvB8hu7EKkza6i82C1CQIW4cMLzbClrBp8JGdDj4bXbHcLx3GmpaxTxo6rSur7Hq-H6rTzH9fAOSgbwcxo0KIAy6tEBGWbid08bICm7ZZsesbRxhx1Osh0DRzAGc50NRchRF3DzCtSbEF0Ln7NmqXecopGHwJkDmp4omRbasnsIp7Mqb6zTsLpoMQzDEbWLagXpuNRjYbmnGocjQMCLDI3sxD5rzdJx0x2JDZyG0fYpG2SWcdtmmHZAQPnYIKNY70ROlg4kA9cp-nJs9xRvYl33cOHTPCPwEOkzDvXuKgYT-iEIGIGcRRI3tMBrq9iKpAAUW5qQACFYgASXwMCBSFZDdHE7BeIlLWzugPg0E+v6UE+hgNS1EBBBEVQ8nCA0F2Nc-xadIz3U8vxzv7LAZU5RA+N0AJMB3bxKB7vgUsfkOCgK-lULg3hpClmYLQbAKQv4Ol5E4UsSpaC0A-EJRolcnRvhwThIcDhfBQAThAbApZ5RwIQTWNu2Dxz7FzqQpYuh8EPx-n-AB6x5xbHIMA+U-Cv6XSKsAzAoisFQHXlKGUW9VBKk+igWgGp2AgE0Dobe1BtRnzQN5E48AAACSwUgmhIK4OQaBwSQh7tgbQ3gJpCBsDom4ei3piFoK4-YbgxDfgceVeAQMtD6hIOUccqgWQmnVKwdUQA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

Shadow has 5 depth levels, configured with option `shadowDepth`.

~~~javascript
import m from "mithril"
import { Shadow } from "polythene-mithril"

m(Shadow, { shadowDepth: 2 })
~~~

To add a shadow to an element, the element must have the style `position: "relative"`. In this example the shadow is added to the outer div:

~~~javascript
m(".outer",
  {
    style: { position: "relative" }
  },
  [
    m("span", "Some card"),
    m(Shadow, { shadowDepth: 2 })
  ]
)
~~~

To animated the shadow on change, use `animated`. Using a dynamic shadowDepth value from `vnode.state`:

~~~javascript
m(Shadow, {
  shadowDepth: vnode.state.shadowDepth,
  animated: true
})
~~~


<a id="appearance"></a>
## Appearance


<a id="styling"></a>
### Styling

Below are examples how to change the shadow appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

~~~javascript
import { ShadowCSS } from "polythene-css"

ShadowCSS.addStyle(".themed-shadow", {
  shadow_bottom_depth_1: "10px 10px 10px 0px rgba(45,58,112,.5)"
})

m(Shadow, {
  className: "themed-shadow"
})
~~~

Depth can be set using a theme (replacing the component option):

~~~
ShadowCSS.addStyle(".themed-shadow", {
  shadow_depth: 3
})
~~~

<a id="css"></a>
#### CSS

Change CSS using the [Shadow CSS classes](../../../packages/polythene-css-classes/shadow.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/shadow"
~~~


