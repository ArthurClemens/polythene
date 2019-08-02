[Back to Polythene Toolbar main page](../toolbar.md)

# Toolbar component for Mithril

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
- [Appearance](#appearance)
  - [Title](#title)
    - [Preventing an unbalanced centered title](#preventing-an-unbalanced-centered-title)
  - [Action links](#action-links)
  - [Shadow](#shadow)
  - [Styling](#styling)
    - [Themed component](#themed-component)
    - [CSS](#css)
    - [Style](#style)
  - [RTL (right-to-left) support](#rtl-right-to-left-support)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Toolbar options](../toolbar.md)



<a id="usage"></a>
## Usage

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGIgVgE4AWAXRIDMBLJGG0FEwBbZGgB0ACwAuw+MXRRpiJahAAeeNygBrAASTyiTgF4AOiBnTcKAPS3M5aZICu5MElGxxAc27OXACNxbggHGDxpGFtsBABPZxVEW0QADxFsPltOTxhxMAiLPSN4c1JpOL5JRERpCwA+Mygm9TJybmxpPRh3Mqsbe0cA908VPL8A4NDwyOjY+ATqqGSYaUwofEx4aGT5xaSAWmF-Q14Y+MTlo5P2+APV9c3t5fEAKxgG9Vs2julG5qgrQov26vQs-RgdgcTlcI0QXnGJyCITCmAitTmFyWKzWGy2O3OC0uiAOBUxROxpIi91xTx2bw+IHqXx+nX+LXw3AAbnpuPgypQIHUmV9OVz6go8EgwNJQrA1CwUABGJUsEAAXyIghEYhADIUkCUKmkakNqz0wD0ABUIAhAo4iNbbfB7eQrf4kI6AJKGgBCLmk0mgenVehMej2xIA3E0zV1LTa7Y4AMIAZVTIbDEaxSTTqZjAMTLpT6fEmHw+FTFSQAAoLOJEqJ8Acg0nyBZHcAmno9JBtuQAPpaHwyAf2sA6HyUFwbFB6CwAYlotDAAA4GABmDvd3sICCDzbkHRjzATqcQGf4OfzkBLlfrrcgJrqgCUBdj0HN3ENAFkVC5UwANQAcSzCxWi5Hw9AAdz5ZxzDMCwACYWEQopqm4EdpAQ5DUMQkA9C5bhEGg30IFSHCQFoPRqJQvQULQkVsEwZw9H5Rifw3PQlVXSQeK5A4kIACQ3LkkIAL2EWgDgYPjVwE4TRIkqSDgAdjEuTAIANhE8TGNsZlvkgxoQALONeUNAAlYwjBgSQgNA8NwJgSCYLgyRKIY-CDEQTCZE8vCiiIkiyIoxjqNolh6MCpiWMkNjKJ-JVVPELSGD0LTxA3BhkyVTKkL0FhxCYbiiqQpVCu4gqWDAA4ipYArpJSpgSo3cQGFXNTipK1cYDahhVL0Vc9GanqwDa1SuOozLVxYQT2vSlLJoOLTJHm2hV1q8RVwKpCso3A42toKK5oYVL0rmtqNwq6StPmrSmBWlaYD2h6VoylawCVVKtJovQ2tVVKSrKgrvtU1cABklS4lVJFUwCWDuPbsvorKGD0-CDJZYyLDMz8um-aAAEEKwcsCNBcqDYPweDGK89DfKwgLGMI4jSPIyiIui6LGOZZjWPY-CkpK6G1q0rlVsEgSdIYBTJC0wDZKQiX5bEjGLCxoyfBM98oHM1ti3If1A2DcNKbDdlZBrH1oGNoMoCIHczGkS1CagOdLXN0N1R3N8nb1-G9CJ7BsCzLsoB7YLoLnGsXwtvRqB3HthDrPVKGg8QoCFRAOwTpOez0FOLEwXPw4L8uDCMTg53BQMBmhYYPHhMZfCRKYwkjSl8HhCBomOZxblsBdbAN11twjiuezWcgfFqGuQDHLBdAsfOe01G9UxqPQtjgOcAAUc2WPROH3PQfxuXg9AOJ02zYnuLBffO2BfR2J+T1PxHT3PE7fgui71WU0gkC5wsO6IBiBt4bAsp+B+r9J7-3yBAYQsRlhKHHpPd+RZXRwIwT2H+uDy6j0cHbaANZhANnIC4VYNY3Z-igABECL4X6rwwSnLBjgwGegtHoZQqRpDz3YeQNyrFMCEUQOQOIYiJFSMkVycRsj5EyKUXI6RKjJHPCgoA4BBFXw4IITw50roSFQDIRQqh0gaFWRsogOyDkmF6IIUQo2AZ7amOkJQ6hbsSaVkYY-X+k82AsJ7H4yeISC7PwcQgr+xA87+MLh-LROcYkWGTEg5iMpYEsIQZAZBOw0HECCfEwRDjy7O0tDk9J-CeGUIgZqQpeD6kFyccYtxHiLG0P-HY5hcT4E1kEZwxAnYeFpCqaAwxjhhHxVEWo5RiiZnzLmYs1RiiNE8I9EkkM3T9FT3Gc4k2JjyHuPMZY6A1lOC2Xsr4kpGDmkuNIYctpJyoDeK6Y0wJPS9BhPLl8vQET85RIgNBb+WSEnrJASAL0GxjQEDWeAzJcTslpLycKa5mDdmooLvgghzs2G7IGUM7Q3clBziOYM4ZfD56QqJcofAsLtGbIxYQ3ZLSHnHLdmci5XTGVNOZXcg5ZjPGGheb4t5hSfnBKflsv+H9omOixeXBBiTwXJmhUYWlSqQBSoVR-CpyL0GsL6eixp8qMHO3sBGLAYBECSAQN3IRQY9AQE4JwSIPDqjFD8l0GAfIIGBD5Y0nsAb4k2ygMYzsQbnbaFPLKORJKancvLm7D2u4jTEpvEUH2Hzy66KDbits+LuFWqNOQONLgyW8NGSAFVxaYUaoZUG25+zWlsqFaTEVWbflipYT8v5v8AVApiSa9+9YNWOgsFWSoBB4W9PrLq1BKLCl5sNhispjTnarEncm8ck5pwbFSf2eeC5nVMFXMuDNjS6kdqHTc3lTbWWCugHQhhwF7G5sNfm9ZQyK0CN2ZM7eszlmAYUUBgDwH1HQE0WCnRWrHG3tcfe9pVjzk2MuS+mDuDG3wYFYh4mba0Oio+eKz5krIkysBcChFoK4XJJAFaaoTZp0V0Rbk+d+renFMKaujtzsPBohgAAOR1PPRsBAWy7LY7B5Y89Dw6BXh2y9+jr2T0w-c7DTyn1crff0z93Dv03kEX+6ZSywOgdMws6Rqy605o7TstsLK1PsusbYq5Da4OqaOQ+55eGmEEdwURntMH+0UZnQAqDY6QCpkkOWcjmrrnMZQcaCT5clPSo4zZi0Qaex2Wi9BAAIogTokg5xKgTSGUrKXlNuf5R5nDUANMufS2ij94Cv0jJ-bfWCIizPGe6yBmZlmoP1sawYuzfLm2eY5ShzTw2VPVceV47zRGAmNPQ+E7tJH-lkYztgEkMmxPLGC0xqj2jwsDMgbSt2MA9A1hkwY5Yj9YsgtnUi1jBSPlLuwca1zo270Od-J0hr2yil4p05aPTYyOsnH-eZkzMPesmYG9RobQPZvjdq5N5zaHSuo4Q084V+GO3vL8+t3+vaezvPVLrchwgLxKBuxAMALgvDSF8LUAAoqMJQvo4henwKnQUwoX5BxDm+SUiBpSyk-GoVStBlRIQ1FqEAQhRBqHyBEA00BlCqDQBqDgIAtC6H4Cgag2oVdoH7qceQJA3DyDQBCKEM5sCTkQcIWwFvbgAAE9q0Cym7i+8BxDHCgPqEgFQdtqFZCadUbB1RAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

```javascript
import m from "mithril"
import { Toolbar } from "polythene-mithril"

m(Toolbar, [
  // content elements
])
```

A Toolbar content consists of a list of elements. Some possibilities:

```
[title, icon]
[icon, title]
[icon, title + space, icon, icon]
[icon, title + space, action link]
```

To show a Toolbar with a label and 3 icon buttons:

```javascript
import { Toolbar, ToolbarTitle, IconButton } from "polythene-mithril"

const iconMenuSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"/></svg>"
const iconRefreshSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z\"/></svg>"
const iconAddSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>"

const iconMenu = m.trust(iconMenuSVG)
const iconRefresh = m.trust(iconRefreshSVG)
const iconAdd = m.trust(iconAddSVG)

const toolbarButton = svg => m(IconButton, {
  icon: { svg }
})

m(Toolbar, [
  toolbarButton(iconMenu),
  m(ToolbarTitle, { text: "Title" }), // will take available horizontal space
  toolbarButton(iconRefresh),
  toolbarButton(iconAdd)
])
```



<a id="appearance"></a>
## Appearance


<a id="title"></a>
### Title

A ToolbarTitle can be inserted as Toolbar element as shown above.

A title can be indented or centered:

```javascript
m(ToolbarTitle,
  {
    text: "Title",
    center: true
  }
)
```

<a id="preventing-an-unbalanced-centered-title"></a>
#### Preventing an unbalanced centered title

When the Toolbar contains one button at the left, and the title is centered, the result will look unbalanced because the title will be centered to the remaining space (at the right to the button).

Use a dummy placeholder at the right to bring back balance. For instance with an empty inactive IconButton:

```javascript
m(Toolbar, [
  m(IconButton, {
    icon: { svg: { content: m.trust(iconMenuSVG) } }
  }),
  m(ToolbarTitle, { text: "Title", center: true }),
  m(IconButton, {
    inactive: true,
    icon: { content: "" }
  })
])
```


<a id="action-links"></a>
### Action links

Use class `pe-action`:

```javascript
m(Toolbar, [
  m(ToolbarTitle, { text: "Title" }),
  m(".pe-action",
    { href: "..." },
    "Save"
  )
])
```


<a id="shadow"></a>
### Shadow

```javascript
import { Toolbar } from "polythene-mithril"

const toolbarRow = [
  // buttons and title
]

m(Toolbar,
  { shadowDepth: 1 },
  toolbarRow
)
```


<a id="styling"></a>
### Styling

Below are examples how to change the Toolbar appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

```javascript
import { ToolbarCSS } from "polythene-css"

ToolbarCSS.addStyle(".themed-toolbar", {
  color_dark_background: "#00c853"
})

m(Toolbar, {
  className: "themed-toolbar"
})
```

<a id="css"></a>
#### CSS

Change CSS using the [Toolbar CSS classes](../../../packages/polythene-css-classes/toolbar.js).

Class names can be imported with:

```javascript
import classes from "polythene-css-classes/toolbar"
```

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

```javascript
m(Toolbar, {
  style: {
    backgroundColor: "#EF6C00",
    color: "#fff",
    height: "72px"
  }
})
```

<a id="rtl-right-to-left-support"></a>
### RTL (right-to-left) support

The direction of Toolbar content is reversed when the Toolbar is contained within an element that either:

* has attribute `dir="rtl"`
* has className `pe-rtl`

<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set




