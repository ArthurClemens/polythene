[Back to Polythene Checkbox main page](../checkbox.md)

# Checkbox component for Mithril


## Options

[Checkbox options](../checkbox.md)


## Usage

<a href="https://jsfiddle.net/ArthurClemens/gcuc9mch/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~javascript
import m from "mithril"
import { Checkbox } from "polythene-mithril"

m(Checkbox, {
  defaultChecked: true,
  label: "Label"
  value: "100"
})
~~~


### Reading and setting the checked state

See also [Handling state](../../handling-state.md).

To read the checked state, use `onChange`: 

~~~javascript
m(Checkbox, {
  onChange: state => vnode.state.checked = state.checked
})
~~~

To set the checked state, use `checked`: 

~~~javascript
m(Checkbox, {
  onChange: state => vnode.state.checked = state.checked,
  checked: vnode.state.checked
})
~~~



#### Example managing mutating state

Polythene uses streams internally to manage state - they are a lightweight and versatile tool to store state values.

In this example we show a simple form with a checkbox to accept the Terms and Conditions, and some other button (for instance in a details dialog) that also sets that checkbox:

~~~javascript
import m from "mithril"
import { Checkbox, RaisedButton } from "polythene-mithril"
import stream from "mithril/stream"

const SimpleForm = {
  oninit: vnode => {
    const checked = stream(false)
    vnode.state = {
      checked
    }
  },
  view: vnode => {
    const state = vnode.state
    const checked = state.checked()
    return m("div", [
      m(Checkbox, {
        label: "I accept the Terms and Conditions",
        onChange: newState => state.checked(newState.checked),
        checked
      }),
      m(".dialog-pane",
        m(RaisedButton, {
          label: "Accept",
          events: {
            onclick: () => state.checked(true) // only sets to checked
          }
        })
      )
    ])
  }
}
~~~


## Appearance

### Styling

Below are examples how to change the Checkbox appearance, either with a theme or with CSS.

You can find more information about theming in [Theming](../theming.md).

#### Themed component

~~~javascript
Checkbox.theme(".themed-checkbox", {
  color_light_on:    "#2196F3",
  color_light_off:   "#2196F3",
  color_light_label: "#2196F3"
})

m(Checkbox, {
  className: "themed-checkbox"
})
~~~

#### CSS

Change CSS using the CSS classes in `polythene-core-checkbox/src/classes.js`

Class names can be imported with:

~~~javascript
import { classes } from "polythene-core-checkbox";
~~~

#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
m(Checkbox, {
  style: { color: "#2196F3" }
})
~~~

### Icons

To use alternative icons, use options `iconOn` and `iconOff`:

~~~javascript
const iconStarOutlineSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24.00 24.00\" enable-background=\"new 0 0 24.00 24.00\"><path fill=\"#000000\" fill-opacity=\"1\" stroke-width=\"0.2\" stroke-linejoin=\"round\" d=\"M 11.9994,15.3943L 8.2364,17.6643L 9.2314,13.3833L 5.9094,10.5053L 10.2894,10.1293L 11.9994,6.09327L 13.7094,10.1293L 18.0894,10.5053L 14.7674,13.3833L 15.7624,17.6643M 21.9994,9.24227L 14.8084,8.62526L 11.9994,1.99827L 9.1904,8.62526L 1.9994,9.24227L 7.4544,13.9693L 5.8194,20.9983L 11.9994,17.2703L 18.1794,20.9983L 16.5444,13.9693L 21.9994,9.24227 Z \"/></svg>";
const iconStarFilledSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/></svg>";

const trustedIconStarsOutline = m.trust(iconStarOutlineSVG);
const trustedIconStarFilled = m.trust(iconStarFilledSVG);

m(Checkbox, {
  iconOn: {
    svg: trustedIconStarFilled
  },
  iconOff: {
    svg: trustedIconStarsOutline
  }
});
~~~

### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


