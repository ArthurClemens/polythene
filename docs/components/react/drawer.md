[Back to Polythene Drawer main page](../drawer.md)

# Drawer component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" -->

- [Options](#options)
- [Usage](#usage)
  - [Invoking a Drawer](#invoking-a-drawer)
  - [Variations](#variations)
- [Appearance](#appearance)
  - [Navigation style](#navigation-style)
  - [Styling](#styling)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->

<a name="options"></a>
## Options

[Drawer options](../drawer.md)


<a name="usage"></a>
## Usage

<a href="https://jsfiddle.net/ArthurClemens/25tL4aqr/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

To show a Drawer as permanent side menu:

~~~javascript
import React from "react"
import { Dialog, List } from "polythene-react"

const NavigationList = () =>
  <List>
    {/* see Try Out example */}
  </List
})

<Drawer permanent> 
  <NavigationList />
</Drawer>
~~~

<a name="invoking-a-drawer"></a>
### Invoking a Drawer

A Drawer is composed from a Dialog, so it shares many options and behaviors, but invoking a drawer is different from calling a dialog. Because drawers may be used more locally then dialogs, showing and hiding a drawer involves managing a `show` state locally (for example in a component state).

Maintaining the show state gives you the control when the drawer may be closed (for example to create a persistent drawer).

Important: to keep local state in sync with the drawer component, you almost always need to add option `didHide`. This callback function notifies when the drawer has closed, so the local `show` state can be reset to `false`.

Using local state:

~~~javascript
import React from "react"
import { Drawer, List, ListTile, RaisedButton } from "polythene-react"

const NavigationList = ({ navItemClick }) =>
  <List>
    {/* see Try Out example */}
  </List
})

class AppDrawer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  render() {
    return (
      <div>
        <RaisedButton
          label="Show"
          events={{
            onClick: () => this.setState({ show: true })
          }}
        />
        <Drawer
          show={this.state.show}
          didHide={() => this.setState({ show: false })}
        >
          <NavigationList
            navItemClick={() => this.setState({ show: false })}
          />
        </Drawer>
      </div>
    )
  }
}
~~~

<a name="variations"></a>
### Variations

#### Cover animation

"Cover" is the default animation. It places the drawer on a higher surface elevation.

A cover is often used together with:

* `backdrop` - to show a tinted backdrop
* `modal` - to prevent clicking on the background (technically: the touch layer, which does not have a color)
* `z={n}` - a number between 0 and 5 to set the shadow depth; 1 is a good default value

#### Global/fixed drawer

A cover drawer that should appear on top of all other content (except for dialogs and notifications), can still be created at a deeper level than the root component by giving it a CSS style `position:fixed`:

* `fixed`


#### Push animation

A push animation pushes the content next to the drawer away. It places the drawer on the same surface elevation as the content.

To make the drawer actually push the content, the drawer must be placed next to the content - for example in a flex container.

Push options:

* `push`
* `border` - to demarcate the drawer from the content


#### Mini variant

The mini drawer initially hides most of the navigation except for a strip of icons, then reveals the full menu when expanding.

This assumes you have a navigation list with icons as "front".

Use the same options as push, and add:

* `mini`


#### Permanent menu

Use the drawer as a permanent (not animating) menu with:

* `permanent`

By default this creates a side menu with a height of 100%. Either use:

* `floating` - to display the drawer as a "floating" block (instead of full height)
* `border` - to demarcate the drawer from the content


#### Place the drawer at the right/opposite side

To open the drawer at the opposite side, use:

* `anchor="end"`


#### RTL (right-to-left) support

Drawer content and animations are reversed when the drawer is placed in a container that either:

* has attribute `dir="rtl"`
* has className `pe-rtl`


<a name="appearance"></a>
## Appearance

<a name="navigation-style"></a>
### Navigation style

To create a "navigation style" list, pass option `navigation` to [List Tile](./list-tile.md) elements.


<a name="styling"></a>
### Styling

Below are examples how to change the Drawer appearance, either with a theme or with CSS.

You can find more information about theming in [Theming](../../theming.md).

#### Themed component

~~~javascript
import { DrawerCSS } from "polythene-css"

DrawerCSS.addStyle(".themed-drawer", {
  color_light_background:          "rgba(69, 45, 157, 1)",
  color_light_text:                "#fff",
  color_light_backdrop_background: "rgba(69, 45, 157, .5)"
})

<Drawer
  className="themed-drawer"
  // ...
>
~~~

#### CSS

Change CSS using the [Drawer CSS classes](../../../packages/polythene-css-classes/drawer.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/drawer"
~~~

#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
<Drawer
  style={{
    backgroundColor: "#EF6C00",
    color:           "#fff"
  }}
>
~~~

<a name="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set

