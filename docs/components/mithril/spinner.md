[Back to Polythene Spinner main page](../spinner.md)

# Spinner component for Mithril

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Show](#show)
  - [Progress spinner](#progress-spinner)
- [Appearance](#appearance)
  - [Single color](#single-color)
  - [Styling](#styling)
    - [Themed component](#themed-component)
    - [CSS](#css)
    - [Style](#style)
  - [Dark or light tone](#dark-or-light-tone)
  - [Transitions](#transitions)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Spinner options](../spinner.md)



<a id="usage"></a>
## Usage

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGI2gXRIDMBLJGG0KTAW2RoAdAAsALn3jF0UMYlmoQAHnhsoAawAEI8ohYBeADohxY3CgD0FzOTEiAruTBIBsIQHM2d+wCMhbCGsYPDEYC2wEAE87eUQLRAAPfmxOCxYXGCEwYONNXXgjUjFIzhFERDFjAD5DKFqlMnI2bDFNGCdC03MrG28nF3lMz28-AKCQsIj4aLKoOJgxTCh8THhoOKmZ2IBaPi8dDnComLnd-ab4bYWllbW5oQArGGqlC0bmsRq6qAaKD7aOsYujBLNZbA5+ohXEN9r5-IFMMEKpNjrN5otlqt1kdpidENtsijcWiCcErhjbutHs8QFVXu8Wl96vg2AA3TRsfCFSgQSq014s1lVaR4JBgMQBWCKAAsKAAjHLpSAAL5EHj8QQganSSCyeRiRS6haaYCaACymDkTVWABFEDA2O4oABlbBqObkIjmy2Ia3wO0Op0ABUo7l0wVd7t9XoAkgB5Z2RqAer0AJUwbDw+AAQvYxGJoF7nap8L7NMrNPpNJs8QBuWpG1qmi1Wti2+2Ol1u5O+gDCifLlerqNi-ed9e+Ld9bf9HadSY9Y6EmHw+GdxSQAApjEIYgJ8Fdux7jF7gLVNJpIGtyAB9VTucQ3uUoTTGADELBYcoA7NLpSfz0vBAIFve9HwAJhfd9PwATgADloWgAKgC8rxAu9HUfABmKCQDfMAAFYFQANnA5DUOA0DMLEG9ZVfPDYIQpDiFqZUAEoJwbaBjWdAAVABRIMbxtABVVMAEFePjAA5IdwMQ2hOKgRtNGdEQIAAdxDCAw3tGAh03NjKyqE1AJU645CHM8UIvNpFlsF8oHseB4CIQCLwWRBsBfCUBGuPhsGM0ybNsjkWE0TcAEILMQIRrlsIyYri+zWirXz7UWAKJ1CijYFabBQ3DfS0rYPzMsC7Y7J9ZLemynKkuwX0wH1TB3EQIcWxEIQ9igTc5UQr1+toIRaE0CxVIEoTRIkqS41kgAqatCr0jj3NsvghF0fByEwDTDLq0K2HCzcCp0orNCUCbBOEsTJJkozrJy2yNLUfBNM2xAAEd7Ay8SoFKy1JQAMR2gRNySzzsFWkLbOVNbVTWxqnBatqXyQmzlSUi9dDERwUMe2zWTYRANJfTdTUtMRyH09igoJ0KVKR5rZFa9qqwapqUcQA7bJxvHND4bcQEFE9NGoNbQsF4wRZYmGnvpp7bIWEpEBfBXFdslkYBSTBIlw9JEnIjWcpe-A7FwoaAFIjeN9abE8KBcNG0b5OwBJNGYiXFbhuWcoR33Jc3YtOWjYLbYvHq0bcgOcr4TAEhfIbo-DuyvJfSnqeXf647kfBNAAfk0frNCjr2ntZVYfpfJmueT8PoF7EQllRiLTQr+AfvLIz9BMjnkZZtqh3bn669t5WkDVsvFa1nW9fog2Eht8PVk7GM5D4EF6OZq1jCn0L-ZTzAWCtF9BanP0A07bTdIjI9Q-V42YHU0nNCpke95ymuB9V6tOe-sai4DQ-gzLAwRcKihYASfUvol62yWADXO6d8yZ3gTnAgmgAA+GDNAsFWHgUe4d7DYBWHIG0jhAbQCQVTTIRCSGIDITtCU0BMHYKci5AhGt2Ify4THNiHDbIZ0yE-TSqZ7BQFzPmZhAAyKRAtNzpkzAQCRBYoCng-lgHwiB4C4VEXUWWttECsn1JvB+T1oDODYGAdQZNu4mW3DHJ6EMUpDjYa5YBz1XrvV0N9X62cKFQBBhqcGiw5DJS8mxdxESHHlinjwp6jBob70ApjViSkVLiWwIFKsBMiYkxsUFcWMMpZakoBpIQUBeSIFFoUp6xTMCi1MdoXQLBcLAlBL0CEzgoSDA8LCUYgQawklLHwCAYQ9h2AuBYN8bw77kFgbZeybUxC4RvD4LAGhd6+1VPRZ05RNB4IgC+IMI45g4JAuac4HBNCVQXGWYZEBjBRNCgkghxTNqaWqV7N5EoxBIFFsYc+M5NCXydG0WZjz+FvMgAFdYsh5kR03IC9sgYuxRk9GHY2SM45zFkD5cgP1YlPJykSi8Ly1pvNKZ8323yvB-OIDsjc6CkXwGBXOFC2s0VegdFAdwSAgLXghV8oWWQIAwpxXyfhCLmUgtRT2dFjSLxYqWPqPF79onct5YgXslFVWIElUrRlk9okUWvLhD8LB4KIU2bbH2nCSW2XtWSopwrKX0pqbHYVPy6VemMLxMo+5vStlWKylFYK0WCupcK6FERxXwrkdKtltz5UfyVeK3V+rUKgJgNJDUuE9wEEPOGkAhKvaOr4eSl1Hy3VCp3F6qp9KAU+j9CGzsS0zp6TDXKiNtSo2ipjfqONgs1KaWvkVNR6rn66OUZQ1++KqkxzicStaTrA47ldV6d1q6tR1v+SAZlLbQWnRvvpDlcqvSoJ9PgbtHqdzRthRKqeQ7n6jr0uOuBfjEGzrVbbWhPoGH+JfEIf8C77UXjLa8ytGkqU9trbS+tPqQBsATKpcFIBy2RtvX2+9g7NzxkTLMt9mLfTYpVV+vVhL+HgYrWuqtG6a3brg7upDzoUOcryBmLMXosDkDaterdIqxUDv0YrQWeGk2EY1qm0jb9yPRJ2oo-A6aP4OgAF4-2MNx3jxaQOluXeh-jpShCNW2Cscg6htgqPg2Leju5GMNr3U2oFMrO0egiqZrQlmIlochb2wTcLhM9oTSi8TGLJPEeVbisjJbfZUZsowVJtRagbRGWIsQm43pgHsK4MQHgKj8QGLIbMkQYz4CFjyPkfDNAZKhrWEUWjEDiklFwNA4FnzSiwiqNUIBeACEUFkYIOpoByAUGgFUzAQCqA0M16g6petoHGQceAAABOYCQDQkEcFINAbSrBiOwOodwAmLALYuEt8CI0RrbCcEIYix3LnwG6mobUJBiiNUUAyA0ypGDKiAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

A typical Material Design (indeterminate) spinner:

~~~javascript
import { MaterialDesignSpinner as Spinner } from "polythene-mithril"
~~~

A typical iOS (indeterminate) spinner:

~~~javascript
import { IOSSpinner as Spinner } from "polythene-mithril"
~~~

A Material Design determinate spinner:

~~~javascript
import { MaterialDesignProgressSpinner as Spinner } from "polythene-mithril"
~~~

Display the Spinner:

~~~javascript
m(Spinner, { show: true })
~~~


<a id="show"></a>
### Show

By default the Spinner is hidden. To show the spinner, either:

* Set option `show` to true
* Set option `permanent` to true (for testing and demos)


<a id="progress-spinner"></a>
### Progress spinner

To show a spinner "filling" a progress circle:

~~~javascript
import { MaterialDesignProgressSpinner as Spinner } from "polythene-mithril"

m(Spinner,
  {
    show: true,
    percentage: vnode.state.percentage
  }
)
~~~

The progress spinner draws a circle between 0 and 360 degrees. The completeness is set with `percentage`, with a range between `0.0` and `1.0`. This value would normally be set by a progress function, for instance a loader.

For demonstration purposes, this can be emulated with a "step" function that updates the percentage until 1.0 is reached:

~~~javascript
import m from "mithril"
import stream from "mithril/stream"
import { MaterialDesignProgressSpinner as Spinner, Button } from "polythene-mithril"

const STEP_DURATION = 2000

const Test = {
  oninit: vnode => {
    const start = stream(null)
    const percentage = stream(0)
    const step = timestamp => {
      if (!start()) start(timestamp)
      const progress = timestamp - start()
      percentage(Math.min(1, 1.0 / STEP_DURATION * progress))
      m.redraw()
      if (progress < STEP_DURATION) {
        window.requestAnimationFrame(step)
      }
    }
    vnode.state = {
      start,
      step,
      percentage
    }
  },
  view: ({ state }) => {
    const percentage = state.percentage()
    return [
      m(Spinner, {
        show: true,
        percentage
      }),
      m(Button, {
        raised: true,
        label: "Run",
        events: {
          onclick: () => (
            state.start(null),
            window.requestAnimationFrame(state.step)
          )
        }
      })
    ]
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
import { MaterialDesignSpinnerCSS } from "polythene-css"

MaterialDesignSpinnerCSS.addStyle(".themed-spinner", {
  color_light_background: "#2196F3",
  border_radius:          0
})

m(Spinner, {
  className: "themed-spinner"
})
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

~~~javascript
m(MaterialDesignProgressSpinner, {
  style: {
    color: "red"
  }
})
~~~


<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


<a id="transitions"></a>
### Transitions

See [Transitions](../../transitions.md)


