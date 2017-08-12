[Back to Polythene Slider main page](../slider.md)

# Slider component for React


## Options

[Slider options](../slider.md)


## Usage

A Slider with default settings (a range of 0 to 100, default value 0, step size 1):

#### With JSX

<a href="https://jsfiddle.net/ArthurClemens/6crka9hy/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~jsx
import React from "react"
import { Slider } from "polythene-react"

<Slider />
~~~

#### With hyperscript

<a href="https://jsfiddle.net/ArthurClemens/ekht8sef/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~javascript
import { renderer as h, Slider } from "polythene-react"

h(Slider)
~~~

Options to create a Slider with a range of 0 to 50 and a step size of 10 (step count of 6 including min and max), and a default value of 10:

~~~javascript
{
  min: 0,
  max: 50,
  defaultValue: 10,
  step: 10
}
~~~

To add tick marks and pins:

~~~javascript
{
  min: 0,
  max: 50,
  defaultValue: 10,
  step: 10,
  ticks: true,
  pin: true
}
~~~

### Reading and setting the slider value

See also [Handling state](../handling-state.md).

To read the Slider value, use `onChange`:

~~~javascript
{
  onChange: ({ value }) => this.setState({ value })
}
~~~

To set the Slider value, use option `value`:

~~~javascript
{
  onChange: ({ value }) => this.setState({ value })
  value: this.state.value
}
~~~




## Appearance

### Icons

To place an icon next to the Slider, use the option `before`:

#### With JSX

~~~jsx
import React from "react"
import { Slider, Icon, SVG } from "polythene-react"

const volumeIconSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>

<Slider
  before={
    <Icon><SVG>{volumeIconSVG}</SVG></Icon>
  }
/>
~~~

#### With hyperscript

~~~javascript
import { renderer as h, Slider, Icon } from "polythene-react"

const volumeIconSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z\"/></svg>"

h(Slider, {
  before: h(Icon, {
    svg: h.trust(volumeIconSVG)
  })
})
~~~

### Styling

Below are examples how to change the Slider appearance, either with a theme or with CSS.

You can find more information about theming in [Theming](../theming.md).

#### Themed component

~~~javascript
Slider.theme(".themed-slider", {
  color_light_track_active:   "#82b1ff",
  color_light_track_inactive: "#c5cae9",
  color_light_track_value:    "#f50057",
  color_light_thumb_on:       "#f50057"
})

<Slider className="themed-slider" />
~~~

#### CSS

Change CSS using the CSS classes in `polythene-core-slider/src/classes.js`

Class names can be imported with:

~~~javascript
import { classes } from "polythene-core-slider"
~~~

#### Style

Some style attributes can be set using option `style`. For example:

~~~jsx
<Slider
  style={{
    color: "red"
  }}
/>
~~~

### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


