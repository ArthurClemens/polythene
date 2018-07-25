[Back to Polythene Checkbox main page](../checkbox.md)

# Checkbox component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Reading and setting the checked state](#reading-and-setting-the-checked-state)
- [Appearance](#appearance)
  - [Styling](#styling)
  - [Icons](#icons)
  - [RTL \(right-to-left\) support](#rtl-right-to-left-support)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Checkbox options](../checkbox.md)



<a id="usage"></a>
## Usage

<a id="with-jsx"></a>
#### With JSX

<a href="https://jsfiddle.net/ArthurClemens/hp6ksg2m/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~jsx
import React from "react"
import { Checkbox } from "polythene-react"

<Checkbox 
  defaultChecked
  label="Label"
  value="100"
/>
~~~

<a id="with-hyperscript"></a>
#### With hyperscript

<a href="https://jsfiddle.net/ArthurClemens/g07snvox/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~javascript
import { renderer as h, Checkbox } from "polythene-react"

h(Checkbox, {
  defaultChecked: true,
  label: "Label"
  value: "100"
})
~~~


<a id="reading-and-setting-the-checked-state"></a>
### Reading and setting the checked state

See also [Handling state](../../handling-state.md).

To read the checked state, use `onChange`:

<a id="with-jsx-1"></a>
#### With JSX

~~~jsx
<Checkbox 
  onChange={
    newState => this.setState({ checked: newState.checked })
  }
  checked={this.state.checked}
/>
~~~

<a id="with-hyperscript-1"></a>
#### With hyperscript

~~~javascript
h(Checkbox, {
  onChange: newState => this.setState({ checked: newState.checked }),
  checked: this.state.checked
})
~~~

<a id="example-managing-mutating-state"></a>
#### Example managing mutating state

In this example we show a simple form with a checkbox to accept the Terms and Conditions, and some other button (for instance in a details dialog) that also sets that checkbox:

~~~jsx
import React, { Component } from "react"
import { Button, Checkbox } from "polythene-react"

class SimpleForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    }
    this.setCheckedState = this.setCheckedState.bind(this)
    this.toggleState = this.toggleState.bind(this)
  }

  setCheckedState(newState) {
    this.setState({ checked: newState.checked })
  }

  toggleState() {
    this.setState({ checked: !this.state.checked })
  }

  render() {
    return <div>
      <Checkbox
        label="Label"
        onChange={this.setCheckedState}
        checked={this.state.checked}
      />
      <div
        style={{
          marginTop: "1rem"
        }}
      >
        <Button
          raised
          label="Toggle"
          events={{
            onClick: this.toggleState
          }}
        />
      </div>
    </div>
  }
}

export default SimpleForm
~~~



<a id="appearance"></a>
## Appearance


<a id="styling"></a>
### Styling

Below are examples how to change the Checkbox appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

~~~javascript
import { CheckboxCSS } from "polythene-css"

CheckboxCSS.addStyle(".themed-checkbox", {
  color_light_on:    "#2196F3",
  color_light_off:   "#2196F3",
  color_light_label: "#2196F3"
})

<Checkbox className="themed-checkbox" />
~~~

<a id="css"></a>
#### CSS

Change CSS using the [Checkbox CSS classes](../../../packages/polythene-css-classes/checkbox.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/checkbox"
~~~

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

~~~jsx
<Checkbox
  style={{
    color: "#2196F3"
  }}
/>
~~~


<a id="icons"></a>
### Icons

To use alternative icons, use options `iconOn` and `iconOff`:

~~~jsx
const iconStarOutlineSVG = <svg width="24" height="24" viewBox="0 0 24.00 24.00" enableBackground="new 0 0 24.00 24.00"><path fill="#000000" fillOpacity="1" strokeWidth="0.2" strokeLinejoin="round" d="M 11.9994,15.3943L 8.2364,17.6643L 9.2314,13.3833L 5.9094,10.5053L 10.2894,10.1293L 11.9994,6.09327L 13.7094,10.1293L 18.0894,10.5053L 14.7674,13.3833L 15.7624,17.6643M 21.9994,9.24227L 14.8084,8.62526L 11.9994,1.99827L 9.1904,8.62526L 1.9994,9.24227L 7.4544,13.9693L 5.8194,20.9983L 11.9994,17.2703L 18.1794,20.9983L 16.5444,13.9693L 21.9994,9.24227 Z "/></svg>
const iconStarFilledSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>

<Checkbox
  label="Label"
  iconOff={{ svg: { content: iconStarOutlineSVG } }}
  iconOn={{ svg: { content: iconStarFilledSVG } }}
/>
~~~

<a id="rtl-right-to-left-support"></a>
### RTL (right-to-left) support

The direction of the checkbox icon and label is reversed when the Checkbox is contained within an element that either:

* has attribute `dir="rtl"`
* has className `pe-rtl`

<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


