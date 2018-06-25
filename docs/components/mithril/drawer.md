[Back to Polythene Drawer main page](../drawer.md)

# Drawer component for Mithril

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Invoking a Drawer](#invoking-a-drawer)
  - [Variations](#variations)
- [Appearance](#appearance)
  - [Navigation style](#navigation-style)
  - [Styling](#styling)
  - [RTL \(right-to-left\) support](#rtl-right-to-left-support)
  - [Dark or light tone](#dark-or-light-tone)
  - [Transitions](#transitions)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Drawer options](../drawer.md)



<a id="usage"></a>
## Usage

<a href="https://jsfiddle.net/ArthurClemens/srtye3sm/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

To show a Drawer as permanent side menu:

~~~javascript
import m from "mithril"
import { Drawer, List } from "polythene-drawer"

const navigationList = m(List, {
  tiles: [] // see Try Out example
})

m(Drawer, {
  content: navigationList,
  permanent: true
})
~~~


<a id="invoking-a-drawer"></a>
### Invoking a Drawer

A Drawer is composed from a Dialog, so it shares many options and behaviors, but invoking a drawer is different from calling a dialog. Because drawers may be used more locally then dialogs, showing and hiding a drawer involves managing a `show` state locally (for example in a component state).

Maintaining the show state gives you the control when the drawer may be closed (for example to create a persistent drawer).

Important: to keep local state in sync with the drawer component, you almost always need to add option `didHide`. This callback function notifies when the drawer has closed, so the local `show` state can be reset to `false`.

Using local state:

~~~javascript
import m from "mithril"
import { Drawer, List, ListTile, RaisedButton } from "polythene-drawer"

const navigationList = navItemClick =>
  m(List, {
    tiles: [] // see Try Out example
  })

const AppDrawer = {
  oninit: vnode => {
    vnode.state.show = false
  },
  view: ({ state }) => {
    const navItemClick = () => state.show = false
    return [
      // For simplicity use a regular button to show the drawer
      // usually this would be the app bar's menu button
      m(RaisedButton, {
        label: "Show",
        events: {
          onclick: () => state.show = true
        }
      }),
      m(Drawer, {
        content: navigationList(navItemClick),
        fixed: true, // global drawer on top of everything
        backdrop: true,
        show: state.show,
        didHide: () => state.show = false // sync state with component
      })
    ]
  }
}
~~~


<a id="variations"></a>
### Variations

<a id="cover-animation"></a>
#### Cover animation

"Cover" is the default animation. It places the drawer on a higher surface elevation.

A cover is often used together with:

* `backdrop: true` - to show a tinted backdrop
* `modal: true` - to prevent clicking on the background (technically: the touch layer, which does not have a color)
* `z` - a number between 0 and 5 to set the shadow depth; 1 is a good default value

<a id="globalfixed-drawer"></a>
#### Global/fixed drawer

A cover drawer that should appear on top of all other content (except for dialogs and notifications), can still be created at a deeper level than the root component by giving it a CSS style `position:fixed`:

* `fixed: true`


<a id="push-animation"></a>
#### Push animation

A push animation pushes the content next to the drawer away. It places the drawer on the same surface elevation as the content.

To make the drawer actually push the content, the drawer must be placed next to the content - for example in a flex container.

Push options:

* `push: true`
* `border: true` - to demarcate the drawer from the content


<a id="mini-variant"></a>
#### Mini variant

The mini drawer initially hides most of the navigation except for a strip of icons, then reveals the full menu when expanding.

This assumes you have a navigation list with icons as "front".

Use option:

* `mini: true`


<a id="permanent-menu"></a>
#### Permanent menu

Use the drawer as a permanent (not animating) menu with:

* `permanent: true`

By default this creates a side menu with a height of 100%. Either use:

* `floating: true` - to display the drawer as a "floating" block (instead of full height)
* `border: true` - to demarcate the drawer from the content


<a id="place-the-drawer-at-the-rightopposite-side"></a>
#### Place the drawer at the right/opposite side

To open the drawer at the opposite side, use:

* `anchor: "end"`



<a id="appearance"></a>
## Appearance


<a id="navigation-style"></a>
### Navigation style

To create a "navigation style" list, pass option `navigation: true` to [List Tile](./list-tile.md) elements.



<a id="styling"></a>
### Styling

Below are examples how to change the Drawer appearance, either with a theme or with CSS.

You can find more information about theming in [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

~~~javascript
import { DrawerCSS } from "polythene-css"

DrawerCSS.addStyle(".themed-drawer", {
  color_light_background:          "rgba(69, 45, 157, 1)",
  color_light_text:                "#fff",
  color_light_backdrop_background: "rgba(69, 45, 157, .5)"
})

m(Drawer, {
  className: "themed-drawer",
  // ...
})
~~~

<a id="css"></a>
#### CSS

Change CSS using the [Drawer CSS classes](../../../packages/polythene-css-classes/drawer.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/drawer"
~~~

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
m(Drawer, {
  style: {
    backgroundColor: "#EF6C00",
    color:           "#fff"
  }
})
~~~

<a id="rtl-right-to-left-support"></a>
### RTL (right-to-left) support

The direction of Drawer content and animations are reversed when the Drawer is contained within an element that either:

* has attribute `dir="rtl"`
* has className `pe-rtl`


<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set

<a id="transitions"></a>
### Transitions

See [Transitions](../../transitions.md)

