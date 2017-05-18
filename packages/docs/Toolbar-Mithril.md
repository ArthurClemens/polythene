[Back to Polythene Toolbar main page](Toolbar.md)

# Toolbar component for Mithril



## Usage

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
import { Toolbar, IconButton } from "polythene-mithril"

const iconMenuSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"/></svg>"
const iconRefreshSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z\"/></svg>"
const iconAddSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>"

const iconMenu = m.trust(iconMenuSVG)
const iconRefresh = m.trust(iconRefreshSVG)
const iconAdd = m.trust(iconAddSVG)

const toolbarButton = svg => m(IconButton, {
  icon: { svg }
})

// render component
m(Toolbar, [
  toolbarButton(iconMenu),
  m("span", "Title"), // will use available horizontal space
  toolbarButton(iconRefresh),
  toolbarButton(iconAdd)
])
~~~



## Options

[Toolbar options](Toolbar.md)



## Appearance

### Title

A Toolbar title can be inserted as toolbar element as shown above.

To create an indented title, use `indentedTitle`:

~~~javascript
import { CoreToolbar } from "polythene-core-toolbar";
import { IconButton } from "polythene-mithril"

m("div",
  { className: CoreToolbar.classes.indentedTitle },
  "Indented title"
)
~~~

This positions the title as if it would be next to an icon.

### Shadow

~~~javascript
import { Toolbar, Shadow } from "polythene-mithril"

const toolbarRow = [
  // buttons and title
]

m("div",
  { style: { position: "relative" } },
  [
    m(Toolbar, toolbarRow),
    m(Shadow)
  ])
})
~~~

### Styling

Below are examples how to change the Toolbar appearance, either with a theme or with CSS.

You can find more information about theming in [Theme](Theme.md).

#### Themed component

~~~javascript
Toolbar.theme(".themed-toolbar", {
  color_dark_background: "#00c853"
})

m(Toolbar, {
  className: "themed-toolbar",
  // ... other options
})
~~~

#### CSS

Change CSS using the CSS classes in `polythene-core-toolbar/src/classes.js`

Class names can be imported with:

~~~javascript
import { CoreToolbar } from "polythene-core-toolbar";

// CoreToolbar.classes
~~~

#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
m(Toolbar, {
  style: {
    backgroundColor: "#EF6C00",
    color: "#fff",
    height: "72px"
  },
  // ... other options
})
~~~

### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


