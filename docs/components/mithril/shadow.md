[Back to Polythene Shadow main page](../shadow.md)

# Shadow component for Mithril


## Options

[Shadow options](../shadow.md)


## Usage

<a href="https://jsfiddle.net/ArthurClemens/87wjreeu/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

Shadow has 5 depth levels, configured with option `z`.

~~~javascript
import m from "mithril"
import { Shadow } from "polythene-mithril"

m(Shadow, { z: 2 })
~~~

To add a shadow to an element, the element must have the style `position: "relative"`. In this example the shadow is added to the outer div:

~~~javascript
m(".outer",
  {
    style: { position: "relative" }
  },
  [
    m("span", "Some card"),
    m(Shadow, { z: 2 })
  ]
)
~~~

To animated the shadow on change, use `animated`. Using a dynamic z value from `vnode.state`:

~~~javascript
m(Shadow, {
  z: vnode.state.z,
  animated: true
})
~~~


