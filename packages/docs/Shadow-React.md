[Back to Polythene Shadow main page](Shadow.md)

# Shadow component for React



## Usage

Shadow has 5 depth levels, configured with option `z`.

### With JSX

~~~jsx
import React from "react"
import { Shadow } from "polythene-react"

// render component
<Shadow z={2} />
~~~

### With hyperscript

~~~javascript
import { renderer as h, Shadow } from "polythene-react"

// render component
h(Shadow, { z: 2 })
~~~


To add a shadow to an element, the element must have the style `position: "relative"`. In this example the shadow is added to the outer div:

~~~jsx
<div className="outer" style={{position: "relative"}}>
  <span>Some card</span>
  <Shadow z={2} />
</div>
~~~

or with hyperscript:

~~~javascript
h(".outer",
  {
    style: { position: "relative" }
  },
  [
    h("span", "Some card"),
    h(Shadow, { z: 2 })
  ]
)
~~~

To animated the shadow on change, use `animated`. Using the component state:

~~~jsx
import React, { Component } from "react";

class InteractiveShadow extends Component {

  constructor() {
    super(...arguments);
    this.state = {
      z: 1
    };
  }

  render() {
    // change the z value, for instance after user interaction (left out here)
    return (<div>
      <Shadow z={this.state.z} />
    </div>)
  }
}
~~~



## Options

[Shadow options](Shadow.md)

