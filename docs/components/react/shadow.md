[Back to Polythene Shadow main page](../shadow.md)

# Shadow component for React


## Options

[Shadow options](../shadow.md)


## Usage

Shadow has 5 depth levels, configured with option `z`.

#### With JSX

~~~jsx
import React from "react"
import { Shadow } from "polythene-react"

<Shadow z={2} />
~~~

#### With hyperscript

~~~javascript
import { renderer as h, Shadow } from "polythene-react"

h(Shadow, { z: 2 })
~~~

To add a shadow to an element, the element must have the style `position: "relative"`. In this example the shadow is added to the outer div:

~~~jsx
<div className="outer" style={{ position: "relative" }}>
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

To animated the shadow on change, use `animated`. Using a dynamic z value in the component state:

~~~jsx
import React, { Component } from "react";

class InteractiveShadow extends Component {

  constructor(props) {
    super(props);
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


