[Back to Polythene Slider main page](../slider.md)

# Slider component for Mithril


## Options

[Slider options](../slider.md)


## Usage

<a href="https://jsfiddle.net/ArthurClemens/nL12sq4x/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

A Slider with default settings (a range of 0 to 100, default value 0, step size 1):

~~~javascript
import m from "mithril"
import { Slider } from "polythene-mithril"

m(Slider)
~~~

Options to create a Slider with a range of 0 to 50 and a step size of 10 (step count of 6 including min and max), and a default value of 10:

~~~javascript
{
  min: 0,
  max: 50,
  defaultValue: 10,
  stepSize: 10
}
~~~

To add tick marks and pins:

~~~javascript
{
  min: 0,
  max: 50,
  defaultValue: 10,
  stepSize: 10,
  ticks: true,
  pin: true
}
~~~

### Reading and setting the slider value

See also [Handling state](../../handling-state.md).

To read the slider value, use `onChange`:

~~~javascript
m(Slider, {
  onChange: ({ value }) => vnode.state.value = value
})
~~~

To set the slider value, use option `value`:

~~~javascript
m(Slider, {
  onChange: ({ value }) => vnode.state.value = value,
  value: vnode.state.value
})
~~~


## Appearance

### Icons

To place an icon next to the Slider, use the option `before`:

~~~javascript
import { Slider, Icon } from "polythene-mithril"

const volumeIconSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z\"/></svg>"

m(Slider, {
  before: m(Icon, {
    svg: { content: m.trust(volumeIconSVG) }
  })
})
~~~

### Styling

Below are examples how to change the Slider appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

#### Themed component

~~~javascript
import { SliderCSS } from "polythene-css"

SliderCSS.addStyle(".themed-slider", {
  color_light_track_active:   "#82b1ff",
  color_light_track_inactive: "#c5cae9",
  color_light_track_value:    "#f50057",
  color_light_thumb_on:       "#f50057"
})

m(Slider, {
  className: "themed-slider"
})
~~~

#### CSS

Change CSS using the CSS classes in `polythene-core-slider/src/classes.js`

Class names can be imported with:

~~~javascript
import { classes } from "polythene-core-slider"
~~~

#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
m(Slider, {
  style: {
    color: "red"
  }
})
~~~

### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


