[Back to Polythene Icon Button main page](../icon-button.md)

# Icon Button component for Mithril

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Links](#links)
  - [Label](#label)
- [Appearance](#appearance)
  - [Interactivity](#interactivity)
  - [Size](#size)
  - [Styling](#styling)
    - [Themed component](#themed-component)
    - [CSS](#css)
    - [Style](#style)
  - [RTL (right-to-left) support](#rtl-right-to-left-support)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Icon Button options](../icon-button.md)



<a id="usage"></a>
## Usage

<a href="https://flems.io/#0=N4IgzgxgTg9gNnEAuA2gBgDRoLoZAMwEs4BTMZFUAOwEMBbE5EAOgAsAXOxPCGK9kvyYAeOISoBrAASsoJfAF4AOiA7sADmCQB6bTSjtWAVygRSDKmGYBzQoaMAjZoRh6wYEuzDb18AJ6GgiTaJAAe9Oqk3vjmVhDuKlJycMrg7H5RrCSeKgB8SlQFwpBQhOrsUmCmqWqaOnoGxqbmgla29k4ubh5ePv6BVMFg7DRUACY0cHzBvnABWYMAtHR2ssR9cwMky6ulcIvDoxNTg8wAVmB5wtolZez5hVTF0HeV1Sq1Wrr69s0kFm1Vo5nK4aO5PN5ZvMgjcRuNJtMNtClvFIf0FttUQc4cdpudLiBctdbuUHkUxoQAG5SQhjVKwGDsK7aCmU3IgPAeUgQdguSxMAAsSAAjMKBSAAL4Yaj0RhIFgXDkgXj8QTsJgq4ZSYBSACSKoAQkZ2Ow+FIJVIFFIoVsANwFTUVHX6vhGk18ADCAGUvebLdb0UFvV77Y8XVQ3aaqMHmDQxmMvelSAAKFTMQIMMaLQgqxYOY1RlQYbUFKTWuMUqjWJBl2t1+tl4UANgwpakvCmUAA+mJrBwaw36yoAMT4MdFtsdmDd3scLsOGgQCTWWBGcY1kdj4UAdgFAonVDLU+7EygEnni+Xq-XZZHEAArKKmwAmA8SgCUoYdfC1Ob4XoANQAcX9FRikpawpAAd1pQxlCUFRn33BCQBkEhCD7dh4MQ5DEkpQgSCgg0YFCbCQDQKQKKQqQkIQq51BoQwpDpOiQAAWWFZ8pB3Zhn23AAZYUAA5mGEmjhX2YVmCbAVFm3Zg0AAZn458uIATl4gV9nk4U1MWaThUErj1NEtSpBEptFJoqQNKQuB72YAUmykAVmG3ZSHKE4zhQAL1Y7QiRuCD8hAUM62-SwKgAQXUdR-WAAolHYfDCJrZN30tXIpBQNskroVMWFgKDmCoRkSCLbK21vTgCpoCqEsPWskqS2R5A3VQTTqb5GhMMx-laGwgU6VwbQxRYxn+GBvBWQw9m0YdtD-Kg8wLPgD0HKQRigaxPHa+c4FGCQVESipaylKQVC9bIpEmMAYBrAAFQNBikfBpykNjdmIKRFj1FUpEjM0JroGAVHfKqpGwd9W0ast8rTIqKpy2GLpqtNeXYUgKsuwgfLIMGYYbeGWF4OhfEGfhsZR6qcvAOhJjgbGQDkawjAOqAmczQgjDoJn2Z2lRsGYen1GTMBcZITKIaJ5Nw0Bqhiwaja6yWmsleV6rxbxmGko1sswAgtX2z4AR+BrOh0ygIxhmTJbAKAjKJWlwcnep+sP2dstwbdqRvbrKHCdrYnmERjlKpRvKCvTOwsbDlQPRgMnFyZEBoed4PSfJtUqY2-K5dWhWSx92tM+Tmt2CtkhA421Wi71ypDe1Y3VTNqQLYr632FtlV7cdz2zv7j2fb92sA4h4PQ+LZHwrRlgMdj4sVDYmBrcl1gYEpEgOdT6ug6jzPpkpuPi7zw0C8V-uyygsFWHLyvd4bWv1Y1g3qyblVTfYc3Lc77v-2Avuxcyyuw2kPQcI8yxjxRhPGAUEkYQ0jujGO5U44gA9J3ROSQyiRElsmCAaot7gx3unfeics5H0XifWWZ93SF2foOUosVSBq0viXAhUA75GHKkA80D96xP1YfrRuOoP5qm-h3G2dsAHmlYSAl2EC6wKKgXWGBcCw7TyarPaOmMUGLxAImDIJAxgExIWmA+FMU6UNztQ105867K2GIYlhPCkrHnaqOfAakhJoDQMdHhUpWECJ4UIt+IiTZiLbj-SRPdpFyNAYPBRtYlFp2gVHSe4cZ7B3nroi6IAAAqWRMwmLdhnMhh9LEXSofnWhF8eFmDBGAAAcrKdqGYjHZlzPmWh61lZBPrq-I2ojW7tyttE-+DsZH+ISZ7ZJu9VHMHUNsU8EhFhRhyRo6qWTkFMy9BLMAUhkzLM2tMIhKSZZmLKRYnOQ52C0zAPTBATMWZs30JzIx3NeaoP5igoWIsxYSyljw0+tian2I1n0vWSUtZVxOv04RzdP7iNGV3KREy4nK3RQ2MB4CZkQ2UZDAoEovxUAtiDNcXcxgwAgDzNUNhPAAFEWj8ANH4XUYwCoMhTtDKQMV1CfgKEqLkJAeR8nIPKYUaA1JIDQJKaUIBaAMCYMwVESohnqnlJKXAIAxCSDFZQeVsomAzTWNwEAJhEDyk+PUNc6hlzKsTtoY1ewAACz4FLMEUo6r6cBhbiHxEqdIiymAknVBKbAEogA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

Icon Button takes an icon options object:

```javascript
import m from "mithril"
import { IconButton } from "polythene-mithril"

const starsSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>"

m(IconButton, {
  icon: { svg: { content: m.trust(starsSVG) } }
})
```

See [Icon](Icon.md) for more Icon options.

Alternatively, pass an Icon as child:

```javascript
import m from "mithril"
import { Icon, IconButton, SVG } from "polythene-mithril"

const starsSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>"

const StarIcon = m(Icon,
  m(SVG, m.trust(starsSVG))
)

m(IconButton, StarIcon)
```


<a id="links"></a>
### Links

See: [URLs and router links](../../handling-urls.md)


<a id="label"></a>
### Label

The Material Design specs do not specifically show a label with Icon Buttons, but Checkboxes with a custom icon provide the example how they should look like.

```javascript
m(IconButton, {
  icon: { svg: { content: m.trust(starsSVG) } },
  label: "Label"
})
```


<a id="appearance"></a>
## Appearance

Pass [Button](../button.md) options to change the behaviour and appearance - see some examples below.



<a id="interactivity"></a>
### Interactivity

Disable hover and ripple effects:

```javascript
m(IconButton, {
  icon: { svg: { content: m.trust(starsSVG) } },
  wash: false,
  ink: false
})
```

Alternatively, use `inactive`:

```javascript
m(IconButton, {
  icon: { svg: { content: m.trust(starsSVG) } },
  inactive: true
})
```


<a id="size"></a>
### Size

`compact` creates reduced padding:

```javascript
m(IconButton, {
  icon: { svg: { content: m.trust(starsSVG) } },
  compact: true
})
```


<a id="styling"></a>
### Styling

Below are examples how to change the icon button appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

```javascript
import { IconButtonCSS } from "polythene-css"

IconButtonCSS.addStyle(".themed-icon-button", {
  padding:                24,
  color_light_background: "purple",
  color_dark_background:  "orange",
  color_light:            "white"
})

m(IconButton, {
  className: "themed-icon-button"
})
```

To create a hover effect:

```javascript
IconButtonCSS.addStyle(".hover-icon-button", {
  color_light_hover:            "#fff",
  color_light_label_hover:      "#673ab7",
  color_light_hover_background: "#673ab7",
  animation_duration:           "100ms",
})

m(IconButton, {
  className: "hover-icon-button"
})
```


<a id="css"></a>
#### CSS

Change CSS using the [Icon Button CSS classes](../../../packages/polythene-css-classes/icon-button.js).

Class names can be imported with:

```javascript
import classes from "polythene-css-classes/icon-button"
```

The icon color is set with the CSS (text) `color` attribute of the parent element. For example:

```css
.pe-button-icon {
  color: red;
}
```

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

```javascript
m(IconButton, {
  style: {
    color: "#FFCCBC",
    backgroundColor: "#4E342E"
  }
})
```

<a id="rtl-right-to-left-support"></a>
### RTL (right-to-left) support

The direction of the Icon Button is flipped when:

* it is contained within an element that either has attribute `dir="rtl"` or has className `pe-rtl`
* has className `pe-rtl--flip`

<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


