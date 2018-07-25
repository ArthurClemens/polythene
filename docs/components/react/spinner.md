[Back to Polythene Spinner main page](../spinner.md)

# Spinner component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Displaying the Spinner](#displaying-the-spinner)
  - [Show](#show)
  - [Progress spinner](#progress-spinner)
- [Appearance](#appearance)
  - [Single color](#single-color)
  - [Styling](#styling)
  - [Dark or light tone](#dark-or-light-tone)
  - [Transitions](#transitions)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Spinner options](../spinner.md)



<a id="usage"></a>
## Usage

A typical Material Design (indeterminate) spinner:

~~~javascript
import { MaterialDesignSpinner as Spinner } from "polythene-react"
~~~

A typical iOS (indeterminate) spinner:

~~~javascript
import { IOSSpinner as Spinner } from "polythene-react"
~~~

A Material Design determinate spinner:

~~~javascript
import { MaterialDesignProgressSpinner as Spinner } from "polythene-react"
~~~


<a id="displaying-the-spinner"></a>
### Displaying the Spinner

<a id="with-jsx"></a>
#### With JSX

~~~jsx
import React from "react"
import { MaterialDesignSpinner as Spinner } from "polythene-react"

<Spinner show />
~~~

<a id="with-hyperscript"></a>
#### With hyperscript

<a href="https://jsfiddle.net/ArthurClemens/j74x8b9w/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~javascript
import { renderer as h, MaterialDesignSpinner as Spinner } from "polythene-react"

h(Spinner, { show: true })
~~~


<a id="show"></a>
### Show

By default the Spinner is hidden. To show the spinner, either:

* Set option `show` to true
* Set option `permanent` to true (for testing and demos)


<a id="progress-spinner"></a>
### Progress spinner

To show a spinner "filling" a progress circle:

<a id="with-jsx-1"></a>
#### With JSX

~~~jsx
import React from "react"
import { MaterialDesignSpinner as Spinner } from "polythene-react"

<Spinner show percentage={this.state.percentage} />
~~~

<a id="with-hyperscript-1"></a>
#### With hyperscript

~~~javascript
import { renderer as h, MaterialDesignProgressSpinner as Spinner } from "polythene-react"

h(Spinner,
  {
    show: true,
    percentage: this.state.percentage
  }
)
~~~

The progress spinner draws a circle between 0 and 360 degrees. The completeness is set with `percentage`, with a range between `0.0` and `1.0`. This value would normally be set by a progress function, for instance a loader.

For demonstration purposes, this can be emulated with a "step" function that updates the percentage until 1.0 is reached:

<a id="with-hyperscript-2"></a>
#### With hyperscript

~~~javascript
import { Component } from "react"
import { renderer as h, MaterialDesignProgressSpinner as Spinner, Button, Slider } from "polythene-react"

const STEP_DURATION = 2000

export default class extends Component {

  constructor(props) {
    super(props)
    this.state = {
      percentage: 0
    }
    this.step = this.step.bind(this)
    this.updatePercentage = this.updatePercentage.bind(this)
  }

  componentDidMount() {
    this._mounted = true
  }

  componentWillUnmount() {
    this._mounted = false
  }

  updatePercentage(percentage) {
    if (this._mounted) {
      this.setState({ percentage })
    }
  }

  step(timestamp) {
    if (!this._start) {
      this._start = timestamp
    }
    const progress = timestamp - this._start
    this.setState({
      percentage: Math.min(1, 1.0 / STEP_DURATION * progress)
    })
    if (progress <= STEP_DURATION) {
      window.requestAnimationFrame(this.step)
    }
  }

  render() {
    const percentage = this.state.percentage
    return h("div", [
      h("div",
        {
          style: {
            display: "flex",
            width: "100%",
            margin: "0 0 20px 0"
          }
        },
        h(Slider, {
          min: 0,
          max: 1,
          step: 0,
          value: percentage,
          permanent: true,
          onChange: ({ value }) => this.updatePercentage(value),
          style: {
            display: "flex",
            alignItems: "center"
          },
          after: h(Spinner, Object.assign(
            {},
            {
              show: true,
              percentage,
              class: "self-center"
            }
          ))
        })
      ),
      h(Button, {
        raised: true,
        label: "Run",
        events: {
          onClick: () => (
            this._start = null,
            window.requestAnimationFrame(this.step)
          )
        }
      })
    ])
  }
}
~~~



<a id="appearance"></a>
## Appearance


<a id="single-color"></a>
### Single color

For MaterialDesignSpinner and MaterialDesignProgressSpinner.

Use option `singleColor` to use only one color (by default the primary color).


<a id="styling"></a>
### Styling

Below are examples how to change the Spinner appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

~~~javascript
import { SpinnerCSS } from "polythene-css"

SpinnerCSS.addStyle(".themed-spinner", {
  color_light_background: "#2196F3",
  border_radius:          0
})

<Spinner className="themed-spinner" />
~~~

<a id="css"></a>
#### CSS

Change CSS using the CSS classes:

* [Base Spinner CSS classes](../../../packages/polythene-css-classes/base-spinner.js)
* [iOS Spinner CSS classes](../../../packages/polythene-css-classes/ios-spinner.js)
* [Material Design Spinner CSS classes](../../../packages/polythene-css-classes/material-design-spinner.js)
* [Material Design Progress Spinner CSS classes](../../../packages/polythene-css-classes/material-design-progress-spinner.js)

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/ios-spinner"

// etcetera
~~~

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

~~~jsx
<Spinner
  style={{
    color: "red"
  }}
/>
~~~


<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


<a id="transitions"></a>
### Transitions

See [Transitions](../../transitions.md)




