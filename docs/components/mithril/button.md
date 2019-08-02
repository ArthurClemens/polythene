[Back to Polythene Button main page](../button.md)

# Button component for Mithril

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Links](#links)
  - [Events](#events)
  - [A row of buttons](#a-row-of-buttons)
  - [Toggle buttons, split buttons](#toggle-buttons-split-buttons)
- [Appearance](#appearance)
  - [Variations](#variations)
  - [Styling](#styling)
    - [Themed component](#themed-component)
    - [CSS](#css)
    - [Style](#style)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Button options](../button.md)


<a id="usage"></a>
## Usage

<a href="https://flems.io/#0=N4IgzgxgTg9gNnEAuA2gBgDRoLoZAMwEs4BTMZFUAOwEMBbE5EAOgAsAXOxPCGK9kvyYAeOISoBrAASsoJfAF4AOiA7sADmCQB6bTSjtWAVygRSDKmGYBzQoaMAjZoRh6wYEuzDb18AJ6GgiTaJAAe9Oqk3vjmVhDuKlJycMrg7H5RrCSeKgB8SlQFwpBQhOrsUmCmqWqaOnoGxqbmgla29k4ubh5ePv6BVMFg7DRUACY0cHzBvnABWYMAtHR2ssR9cwMky6ulcIvDoxNTg8wAVmB5wtolZez5hVTF0HeV1Sq1Wrr69s0kFm1Vo5nK4aO5PN5ZvMgjcRuNJtMNtClvFIf0FttUQc4cdpudLiBctdbuUHkUxoQAG5SQhjVKwGDsK7aCmU3IgPAeUgQdguSxMAAsSAAjMKBSAAL4Yaj0RhIFgXDkgXj8QTsJgq4ZSYBSABCRnY7D4UglUgUUihWwA3AVNRUdfrDXwAMIAZVdJrNFvRQTdrptj0dRqofuYNDGY1d6VIAAoVMxAgwxosHAbgyoMNqClIpLwplAAPpiawcAsCULsJA56s5lQAYnwjYz2dz8BgheLpYcNAgEmssCM4yr9cbwoA7AKBc2qDm8+2CxMoBIy2FKzWayOmxyW3PC4vl93e-2YIOxlWpPWIABWUUANgATCoChKAJQB218LVBvgAJRgAHcvWAFtKUIEh-yrGMdRoQ0oC0bUkhoQgPDGTMzDBMAADlZVNV8zVyC9CiZTg4xAVlp3XLMZ0o3M4Aw7CGCrFAVFgf8M1o+jZWwc4YHEUiLxAF8WxrKVhOrZjqMougY2-KhM2AySaJzOiHBIOBhxAWSKJo18MDEmtpNk+T9JolS1I0zCYCkf8wVYbSlJzGywFYKt8EmDw9MUpSoCQlDPKU3STJzQy0z4YyvNMmhVPUgTLJpSR7Ic8QJFc9ySH8hycx85CSFQoKTRfDKpJk0K5KozLlKi8yBIAEWQqLSDGRKlIpMAGtyqt2CgIx0vymtsr8-LAoi4KSqdMqFIqqQzJilRXTUkgeVy5qaK5RaBDPKQup6oqHIG3LdpEwr8pC8bwqmmaNIASVoHkqRg3KpHwdspHvAlDpo8Qe15SkHqre8Pso-a8pGgrAakU7g3OirLoEqMMmW7dQZrYYEarSapqkQ8+wHcZnTbKANIbfAAE4AA40DQFalN3InKapkA+urUTkerYHweGpTIbC8qYaq2aQAAFSyJNqfXdD3AYkgNMTXKU1KsX+t8g6huO0HuYmpnYZUZ0jGGGA6CSMpIhIRWjfUE30aZnNBDGAB5dQezsPwq2FcGa3UEg4OQgR+E67retZnNUdIK2g+rWmBOJ8nKafcOJSZlnMvZkzOerJR2GwMShKoCUAw3Kg7SkABBC2gIKDPQPAyCX3wqQJIM0jmFY5gqEZU2OXrsSM+klQaHYjHa2I2R5A0z56h+JozH+VobCBTpXEtDFFjGf4YG8FZDD2bQ620VNxrFkYoGsTwNILBw6ISxmiJEzM5uyKR3JgKsAAUfUGJ6XoAWV2YgpEWPUpUpCrzoDAFQOcazYDVo3WSf5-zQOrBrOB8kOKS1lBpT2K99ASEWMGDuYMxJIIAig4G-seoEMUkQ-8JDlabW2ulVBWF0ECUwfuXB0xEivhbFnXO74qB0GYKAwc7AYxjBgBAIwFh2A2E8AAURaPwXUfgrpjFIgyJkglMyl3UG+AoSo1p3U-EwMcaAkBXklNKEAtAGBMGYKiJUKpfbqnlM3ACUhmCYP3sGDx2xyzsHluNXmdB9C2CoFWW86hQhSDJpEgMCcqD6IWoY-k8oADMSA0CSlwCAMQkhyCoBlDY+Um81jcBACYRA8px66EHOoPsdiDbaBKXsAAAveZgaBmCpKab-OAgjxD4iVOkT2TASTqglNgCUQA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

```javascript
import m from "mithril"
import { Button } from "polythene-mithril"

m(Button, {
  label: "Button"
})
```


<a id="links"></a>
### Links

Add a route URL.

For Mithril 2.x:

```javascript
m(Button, {
  label: "Button",
  element: m.route.Link,
  url: {
    href: "/index",
  }
})
```

For Mithril 1.x:

```javascript
m(Button, {
  label: "Button",
  url: {
    href: "/index",
    oncreate: m.route.link
  }
})
```

See also: [URLs and router links](../../handling-urls.md)



<a id="events"></a>
### Events

Add an onclick event:

```javascript
m(Button, {
  label: "Button",
  events: {
    onclick: () => console.log("click")
  }
})
```


<a id="a-row-of-buttons"></a>
### A row of buttons

When placed inside an element with classname `pe-button-row`, buttons will get a side margin to set them apart. The row element itself will have an negative side margin so that the first button still lines up properly.


<a id="toggle-buttons-split-buttons"></a>
### Toggle buttons, split buttons

Place a Button inside a [Button Group](./button-group.md) to create a tightly aligned group of buttons.


<a id="appearance"></a>
## Appearance


<a id="variations"></a>
### Variations

* Create a Contained Button appearance with `contained: true`
* Create a Raised Button appearance with `raised: true`
* Add a border with `border: true`
* The hover effect can be hidden with `wash: false`
* Special hover effects can be created with a theme, see below
* The ripple effect on click can be hidden with `ink: false`
* (To be updated for specs MD 2) Button contains no icon as this is not part of the Material Design guidelines; use [Icon Button](../icon-button.md) instead (which can contain a label)
* Add a dropdown icon with `dropdown: true`
* Create a wide button with `extraWide: true`
* Create a high label with `highLabel: true`


<a id="styling"></a>
### Styling

Below are examples how to change the Button appearance, either with a theme or with CSS.

You can find more information about theming in [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

```javascript
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
```

To create a hover effect:

```javascript
ButtonCSS.addStyle(".hover-button", {
  color_light_hover:            "#fff",
  color_light_hover_background: "#673ab7",
  animation_duration:           "100ms",
})

m(Button, {
  label: "Hover",
  className: "hover-button"
})
```


<a id="css"></a>
#### CSS

Change CSS using the [Button CSS classes](../../../packages/polythene-css-classes/button.js).

Class names can be imported with:

```javascript
import classes from "polythene-css-classes/button"
```

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

```javascript
m(Button, {
  style: {
    backgroundColor: "#EF6C00",
    color:           "#fff"
  }
})
```


<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


