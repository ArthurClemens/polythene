[Back to Polythene Toolbar main page](../toolbar.md)

# Toolbar component for React


## Options

[Toolbar options](../toolbar.md)


## Usage

#### With JSX

<a href="https://jsfiddle.net/ArthurClemens/rgmzx6jr/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~jsx
import React from "react"
import { Toolbar } from "polythene-react"

<Toolbar>...</Toolbar>
~~~

A Toolbar content consists of a list of elements. Some possibilities:

~~~
[title, icon]
[icon, title]
[icon, title + space, icon, icon]
~~~

To show a Toolbar with a label and 3 icon buttons:

~~~jsx
import { Toolbar, IconButton } from "polythene-react"

const iconMenuSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
const iconRefreshSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>
const iconAddSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>

const ToolbarButton = ({ svg }) =>
  <IconButton icon={{svg}} />

<Toolbar>
  <ToolbarButton key="menu" svg={iconMenuSVG} />
  <span key="title">Title</span>
  <ToolbarButton key="refresh" svg={iconRefreshSVG} />
  <ToolbarButton key="add" svg={iconAddSVG} />
</Toolbar>
~~~

#### With hyperscript

<a href="https://jsfiddle.net/ArthurClemens/dg9f6day/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~javascript
import { renderer as h, Toolbar } from "polythene-react"

h(Toolbar, [
  // content elements
])
~~~

To show a Toolbar with a label and 3 icon buttons:

~~~javascript
import { renderer as h, Toolbar, IconButton } from "polythene-react"

// note the quoted SVG strings:
const iconMenuSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"/></svg>"
const iconRefreshSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z\"/></svg>"
const iconAddSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>"

const iconMenu = h.trust(iconMenuSVG)
const iconRefresh = h.trust(iconRefreshSVG)
const iconAdd = h.trust(iconAddSVG)

const toolbarButton = (key, svg) => h(IconButton, {
  key,
  icon: { svg }
})

const toolbarRow = [
  toolbarButton("menu", trustedIconMenu),
  h("span", { key: "title" }, "Title"),
  toolbarButton("refresh", trustedIconRefresh),
  toolbarButton("add", trustedIconAddSVG)
]

h(Toolbar, toolbarRow)
~~~


## Appearance

### Title

A Toolbar title can be inserted as toolbar element as shown above.

To create an indented title, use `indentedTitle`. This positions the title as if it would be next to an icon.

~~~jsx
import { IconButton } from "polythene-react"
import { classes as toolbarClasses } from "polythene-core-toolbar"

<div className={toolbarClasses.indentedTitle}>
  Indented title
</div>
~~~


### Shadow

~~~jsx
import { Toolbar, Shadow } from "polythene-react"

<div style={{ position: "relative" }}>
  <Toolbar>
    ...
  </Toolbar>
  <Shadow />
</div>
~~~

### Styling

Below are examples how to change the Toolbar appearance, either with a theme or with CSS.

You can find more information about theming in [Theming](../theming.md).

#### Themed component

~~~jsx
Toolbar.theme(".themed-toolbar", {
  color_dark_background: "#00c853"
})

<Toolbar className="themed-toolbar">...</Toolbar>
~~~

#### CSS

Change CSS using the CSS classes in `polythene-core-toolbar/src/classes.js`

Class names can be imported with:

~~~javascript
import { classes } from "polythene-core-toolbar"
~~~

#### Style

Some style attributes can be set using option `style`. For example:

~~~jsx
<Toolbar 
  style={{
    backgroundColor: "#EF6C00",
    color: "#fff",
    height: "72px"
  }}
/>
~~~

### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set




