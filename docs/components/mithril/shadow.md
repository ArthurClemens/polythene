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

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGIgVgBYmBdEgMwEskYbQomALbI0AOgAWAFyHxi6KFMSLUIADzwuUANYACCeUQcAvAB0Q0qbhQB6G5nJSJAV3JgkI2GIDmXJ84AjMS4Iexg8KRgbbAQATydlRBtEAA9hbF4bDg8YMTBw811DeDNSKVjeCUREKXMAPlMoRrUyci5sKV0YN1LLazsHfzcPZVzffyCQsIiomPh4qqgkmClMKHxMeGgkuYXEgFohPwMeaLiEpcPjtvh9lbWNraWxACsYerUbVvapBqaoFoUH5dHrmPowWz2RwuYaITxjY6BYKhTDhGqzc6LZardabbZneYXRD7fIYwlYknhO44x7bV7vEB1T7fDp-Zr4LgAN10XHwpUoEFqjM+HM5dXkeCQYCkIVgqiYKAAjIqmCAAL5EATCUQgenySCKZRSVQGla6YC6ADKEkw+AgAHddGrdMZdLsiQBuRqNU2dACCUC4QkwSnwLt0AAoAJQuurmxq6XS+rqrJTh4AJxNdG12+0AEUQHQkKF0iszaq9UETmcMUlcVYzVaznK4iHtJejsfjTazRRq9d0Qgj5jE2GJ3CkeSNiHIJOgSkU5iImd7iYt0HcXDA2g7MeMcfuSjEMBzDoLRfDEYjh8Qx9P+cLTl0AGpSzGAKS6ABsMY1K9X1D-qug7DiAopLro5gAMKaNug6IOYUbLj2wEgdatoOkQ3aoauaxBiGBAllI5DOIgyE4b2J4YQ+RYljed7UeeThAauapRixiasCxUaVr2arlpWFbelAyZ+tg2DppmLZtruXaAShQ4jpQ9piFAgoIcQujycBikgJgEGNjhBhGCWYJSFYEIDNCrjuHCow+IikyhO6FL4HCEBREcTg3DYADEXz3kuHG6Ks5DeDUpkgAA+gEWA6OYLEapBICWtUuibHAJYAAqYokugcBA5C6AAstcPC6PsVr3roblCBAiH-qwSH-rpYjKRB2mrq1MpSEgEHmExEiIeRXWgXkEBCDESyLsQLGmFIForBUiAlhaHIwBkmCxJF2SpBBu0pHmXCGNKsqRZA8DOEITQgE6TojcBdBEIqRAAExEAAzEQTCMKwYjBtg173oNXbBYmrVUbmQUocB81DuhuZYYtwOPhITrsTDq4Yzh2NY41zUKWN7WaZ1vbdX4fWaeYfr4ByUDeNm1EhRA6VVogIwzQTOljZAk3bDND2jSOkMOh1YMgSOYDTrOBoLkKgs4eYloTYgujs3ZM3i1zFHw-euPAU13H44LrXE1hpNZuTvUaVh1OBsGobDSxrW81NRoMVDs2Y+DEYBvhob61mgdNSbRMOqOxIbOQ2j7FI2xi5jVuU7bIB+w7BCRlHehx0s7EgNrZM8xNbuKB7otezhQ5pwR+CB4mwfa1xUBCf8Qj-RAziKBGdpgFd7vhVIACiHNSAAQrEACS+CgQKQpIboYnYDxErq6d0B8GgH0MCgH0AOzqpqICCCIqh5OE+rzkap8i46hluh5fhnX2WAypyiC8boASYNu3iUJ3+All8hwYBH8qhcG8NIEsAAOWg2AUgf3tLyJwJZFS0FoO+QSjQy6OlfNg7Cg4HC+CgLHCA2ASxMFgfA6szcsFjn2FnEhSxdB4Lvl-H+f91hzi2OQQBLAmAfwuoVQBmARGYKgCvKUMp16qEVB9FAtB1TsBAJoHQG9qBahPmgLyJw5AkFcHINA4JISd2wNobw40hA2G0TcAAAq9MQtAxAfSsWVeA-0tB6hIOUMcqgWTGjVKwNUQA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

Shadow has 5 depth levels, configured with option `shadowDepth`.

```javascript
import m from "mithril"
import { Shadow } from "polythene-mithril"

m(Shadow, { shadowDepth: 2 })
```

To add a shadow to an element, the element must have the style `position: "relative"`. In this example the shadow is added to the outer div:

```javascript
m(".outer",
  {
    style: { position: "relative" }
  },
  [
    m("span", "Some card"),
    m(Shadow, { shadowDepth: 2 })
  ]
)
```

To animated the shadow on change, use `animated`. Using a dynamic shadowDepth value from `vnode.state`:

```javascript
m(Shadow, {
  shadowDepth: vnode.state.shadowDepth,
  animated: true
})
```


<a id="appearance"></a>
## Appearance


<a id="styling"></a>
### Styling

Below are examples how to change the shadow appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

```javascript
import { ShadowCSS } from "polythene-css"

ShadowCSS.addStyle(".themed-shadow", {
  shadow_bottom_depth_1: "10px 10px 10px 0px rgba(45,58,112,.5)"
})

m(Shadow, {
  className: "themed-shadow"
})
```

Depth can be set using a theme (replacing the component option):

```
ShadowCSS.addStyle(".themed-shadow", {
  shadow_depth: 3
})
```

<a id="css"></a>
#### CSS

Change CSS using the [Shadow CSS classes](../../../packages/polythene-css-classes/shadow.js).

Class names can be imported with:

```javascript
import classes from "polythene-css-classes/shadow"
```


