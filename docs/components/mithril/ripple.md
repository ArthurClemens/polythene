[Back to Polythene Ripple main page](../ripple.md)

# Ripple component for Mithril

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

<a href="https://flems.io/#0=N4IgzgxgTg9gNnEAuA2gBgDRoLoZAMwEs4BTMZFUAOwEMBbE5EAOgAsAXOxPCGK9kvyYAeOISoBrAASsoJfAF4AOiA7sADmCQB6bTSjtWAVygRSDKmGYBzQoaMAjZoRh6wYEuzDb18AJ6GgiTaJAAe9Oqk3vjmVhDuKlJycMrg7H5RrCSeKgB8SlQFwpBQhOrsUmCmqWqaOnoGxqbmgla29k4ubh5ePv6BVMFg7DRUACY0cHzBvnABWYMAtHR2ssR9cwMky6ulcIvDoxNTg8wAVmB5wtolZez5hVTF0HeV1Sq1Wrr69s0kFm1Vo5nK4aO5PN5ZvMgjcRuNJtMNtClvFIf0FttUQc4cdpudLiBctdbuUHkUxoQAG5SQhjVKwGDsK7aCmU3IgPAeUgQdguSxMAAsSAAjMKBSAAL4Yaj0RhIFgXDkgXj8QTsJgq4ZSYBSABKZUiJCkEqkCikUK2AG4CpqKjr9epDQBhADKLuNpvN6KCrpd1seDudbuYNDGYxd6VIAAoVMxAgwxotSo7SCoMNqClIpLwplAAPpiawcJBSFQAYnw+GFAHYBQKVAUJQBKf1ZrM2vhagCCjs9wAKSnYlMIJAA7iWo03TbkpChM6XODGWLBR8wqIySGnZ-P24uVDQt-2qG2F4PZPISx92Bovg1fmZ-q0bEDOq4LRjFmN-jBvCtDHttDLbRk0NNMdxPKQRigaxPEvEA8wcOBRgkBtCgqNspVLEAXWyKRJjAGASwABW9QYpHwGAoCkABZXZiCkRY9QNUgpC-OgYBUJtwOwJsMHAugl2YFctznY820HATY15dhUw5LCnU7dgoBocQSDGKQoy-fAaCMOB2C4kBePArNJJYXg6F8QZ+CE5jNzk4y2wEwNSC4sST1ck8eL4typFMoSYFHETwIkwTpNk9MVAAOUZbNFOU1Sxk47yIN8wTzMstUbJTOyIp8k8nNs9MjxS3cjCoW14sGMYSyUoxNzyjCPIgpqsy8-jBOEuTRJPEKpLscL5LVEgoCShy-PS6ZrJAgaHJMqNnJIIrZoXCAhqgGqoDq5bmwclqpDany-M69NuvEvcWDCnKsIjH4pBgdQaAgOw-FGhrxpgCzJvYLLQPshq5oWpb-oXQ4DAAeQep70hLZgAFZtr2rM9oO-KOoCoKfN6i7+qulQABETBoXk+FelL3s+qzvum3HgYK7KgZKhcxkJ4mqBLABmZg0AR3buKMw60cCrrgvOuMca3FRqN03lfv5sm0o+jKptsiXafmwqM2BiTpcIDa6uSkrB2Z5TWZLYU4Z5hrkblxzBYxnrRcuiXsMjNTSYg8mlaplW-sZunDQZw2vCg9gIce56SzQZhqwNxnhgyEgS2Kxm2xzSi4IrfAAE4AA40G5kBlqzCVLZS63Y9S2Nju3THHfF+yQAAFSyBN03UYawEIYY1XTQR1IIsR1LkRLDIrubYwmymfpmtXAc1xnBzMMEwEi2U4PjNSkx9seIL7sOob8M2uZ3k926gTvu-4PX6sZnarb5g3sEbf0CjoZh2LK9hNJgCAjAsb6YLsAAKItH4AAIT8AASTGEuBkTJR5SB7OoFsBQlRchIDyPk5B5Q52rEgNAkppQgFoAwJgzBURKhVAIIQ8pyGKy+tPI0ydfCd1NkkEgSFeSUhIK2KQDhHoSGsLAMq1UpCZ3wLwrIhAizsBLHndQoReGjlpIYM2+cACk-oS5UDQRwjBrNsEgAAGz4MlLgEAYhJDYMoMQ2UTA-xrG4CAEwiB5SfHqGVdQgi6F0G0A4vYAABAATFzZg7M-F0TgO-cQ+IlTpHbkwEk6oJTYAlEAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

Append a ripple to any HTML element (which requires to have style `position: relative` and a size):

```javascript
import m from "mithril"
import { Ripple } from "polythene-mithril"

m(".relative-with-size",
  m(Ripple)
)
```

Use option `after` to append a Ripple to a Polythene component:

```javascript
import m from "mithril"
import { Ripple, ListTile } from "polythene-mithril"

m(ListTile, {
  title: "Title",
  after: m(Ripple)
})
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

m(Ripple, {
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

```javascript
m(Ripple, {
  style: {
    color: "#2196F3"
  }
})
```


<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


