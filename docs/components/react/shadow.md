[Back to Polythene Shadow main page](../shadow.md)

# Shadow component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
- [Appearance](#appearance)
  - [Styling](#styling)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Shadow options](../shadow.md)



<a id="usage"></a>
## Usage

Shadow has 5 depth levels, configured with option `shadowDepth`.

<a id="with-jsx"></a>
#### With JSX

<a href="https://jsfiddle.net/ArthurClemens/uej4sw3q/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~jsx
import React from "react"
import { Shadow } from "polythene-react"

<Shadow shadowDepth={2} />
~~~

<a id="with-hyperscript"></a>
#### With hyperscript

<a href="https://jsfiddle.net/ArthurClemens/ohuxgfef/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~javascript
import { renderer as h, Shadow } from "polythene-react"

h(Shadow, { shadowDepth: 2 })
~~~

To add a shadow to an element, the element must have the style `position: "relative"`. In this example the shadow is added to the outer div:

~~~jsx
<div className="outer" style={{ position: "relative" }}>
  <span>Some card</span>
  <Shadow shadowDepth={2} />
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
    h(Shadow, { shadowDepth: 2 })
  ]
)
~~~

To animated the shadow on change, use `animated`. Using a dynamic shadowDepth value in the component state:

~~~jsx
import React, { Component } from "react";

class InteractiveShadow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shadowDepth: 1
    };
  }

  render() {
    // change the shadowDepth value, for instance after user interaction (left out here)
    return (<div>
      <Shadow shadowDepth={this.state.shadowDepth} />
    </div>)
  }
}
~~~



<a id="appearance"></a>
## Appearance

Below are examples how to change the shadow appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

~~~jsx
import { ShadowCSS } from "polythene-css"

ShadowCSS.addStyle(".themed-icon", {
  shadow_bottom_depth_1: "10px 10px 10px 0px rgba(45,58,112,.5)"
})

<Shadow className="themed-shadow" />
~~~

Depth can be set using a theme (replacing the component option):

~~~
ShadowCSS.addStyle(".themed-shadow", {
  shadow_depth: 3
})
~~~


<a id="styling"></a>
### Styling

<a id="css"></a>
#### CSS

Change CSS using the [Shadow CSS classes](../../../packages/polythene-css-classes/shadow.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/shadow"
~~~

