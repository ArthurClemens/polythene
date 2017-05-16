[Back to Polythene Shadow main page](Shadow.md)

# Shadow component for Mithril



## Usage

Shadow has 5 depth levels, configured with option `z`.

~~~javascript
import m from "mithril"
import { Shadow } from "polythene-mithril"

// render component
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

To animated the shadow on change, use `animated`. Using the component state from `vnode.state`:

~~~javascript
m(Shadow, {
  z: vnode.state.z,
  animated: true
})
~~~


## Options

[Shadow options](Shadow.md)

