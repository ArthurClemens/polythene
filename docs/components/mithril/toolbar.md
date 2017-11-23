[Back to Polythene Toolbar main page](../toolbar.md)

# Toolbar component for Mithril

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" -->

- [Options](#options)
- [Usage](#usage)
- [Appearance](#appearance)
  - [Title](#title)
  - [Shadow](#shadow)
  - [Styling](#styling)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->

<a name="options"></a>
## Options

[Toolbar options](../toolbar.md)


<a name="usage"></a>
## Usage

<a href="https://jsfiddle.net/ArthurClemens/t5hhcuxn/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~javascript
import m from "mithril"
import { Toolbar } from "polythene-mithril"

m(Toolbar, [
  // content elements
])
~~~

A Toolbar content consists of a list of elements. Some possibilities:

~~~
[title, icon]
[icon, title]
[icon, title + space, icon, icon]
~~~

To show a Toolbar with a label and 3 icon buttons:

~~~javascript
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
~~~


<a name="appearance"></a>
## Appearance

<a name="title"></a>
### Title

A ToolbarTitle can be inserted as Toolbar element as shown above.

A title can be indented or centered:

~~~javascript
m(ToolbarTitle,
  {
    text: "Title",
    center: true
  }
)
~~~

#### Preventing an unbalanced centered title

When the Toolbar contains one button at the left, and the title is centered, the result will look unbalanced because the title will be centered to the remaining space (at the right to the button).

Use a dummy placeholder at the right to bring back balance. For instance with an empty inactive IconButton:

~~~javascript
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
~~~

<a name="shadow"></a>
### Shadow

~~~javascript
import { Toolbar, Shadow } from "polythene-mithril"

const toolbarRow = [
  // buttons and title
]

m("div",
  { style: { position: "relative" } }, // because Shadow is positioned absolute
  [
    m(Toolbar, toolbarRow),
    m(Shadow)
  ])
})
~~~

<a name="styling"></a>
### Styling

Below are examples how to change the Toolbar appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

#### Themed component

~~~javascript
import { ToolbarCSS } from "polythene-css"

ToolbarCSS.addStyle(".themed-toolbar", {
  color_dark_background: "#00c853"
})

m(Toolbar, {
  className: "themed-toolbar"
})
~~~

#### CSS

Change CSS using the [Toolbar CSS classes](../../../packages/polythene-css-classes/toolbar.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/toolbar"
~~~

#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
m(Toolbar, {
  style: {
    backgroundColor: "#EF6C00",
    color: "#fff",
    height: "72px"
  }
})
~~~

<a name="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set




