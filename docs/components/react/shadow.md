[Back to Polythene Shadow main page](../shadow.md)

# Shadow component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" -->

- [Options](#options)
- [Usage](#usage)
- [Appearance](#appearance)
  - [Styling](#styling)

<!-- /MarkdownTOC -->

<a name="options"></a>
## Options

[Shadow options](../shadow.md)


<a name="usage"></a>
## Usage

Shadow has 5 depth levels, configured with option `z`.

#### With JSX

<a href="https://jsfiddle.net/ArthurClemens/uej4sw3q/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~jsx
import React from "react"
import { Shadow } from "polythene-react"

<Shadow z={2} />
~~~

#### With hyperscript

<a href="https://jsfiddle.net/ArthurClemens/ohuxgfef/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

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


<a name="appearance"></a>
## Appearance

<a name="styling"></a>
### Styling

#### CSS

Change CSS using the [Shadow CSS classes](../../../packages/polythene-css-classes/shadow.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/shadow"
~~~

