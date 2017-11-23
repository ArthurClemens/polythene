# Utility functions

* **easing**: Easing functions
* **scrollTo**: Animated scroll to a position
* **Timer**: Simple start/stop/pause/resume timer
* **Web font loader**: Loads one or more web fonts

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" -->

- [easing](#easing)
- [scrollTo](#scrollto)
- [Timer](#timer)
- [Web font loader](#web-font-loader)
  - [How to prevent Flash of Unstyled Text](#how-to-prevent-flash-of-unstyled-text)

<!-- /MarkdownTOC -->

<a name="easing"></a>
## easing

Simple easing functions - inspired by http://gizma.com/easing/

Example:

~~~javascript
import { easing } from "polythene-utilities"

// percentage is some value between 0 and 1
const value = start + change * easing.easeInOutCubic(percentage)
~~~


<a name="scrollto"></a>
## scrollTo

Animated scroll to a position.

Signature:

~~~javascript
scrollTo({element, to, duration, direction}) => Promise
~~~

Options:

 * `element`: (HTML Element) Scrolling element
 * `to`: (Number) Position in pixels
 * `duration`: (Number) Scroll animation duration in seconds
 * `direction`: (String) "vertical" or "horizontal"
 * `easing`: (Function) Easing function (default: `easing.easeInOutCubic`)

Example:

~~~javascript
import { scrollTo, easing } from "polythene-utilities"

scrollTo({
   element: scrollingElement,
   to: 0,
   duration: .5,
   direction: "horizontal",
   easing: easing.easeOutCubic
}).then(() => {
   console.log("Done")
})
~~~



<a name="timer"></a>
## Timer

Simple start/stop/pause/resume timer.

Signature:

~~~javascript
new Timer(callback, duration)
~~~

Options:

* `callback`: (Function) Callback function to be called when the timer expires
* `duration`: (Number) Duration in seconds

Example:

~~~javascript
import { Timer } from "polythene-utilities"

const timer = new Timer(() => {
  hide()
}, timeoutSeconds)
// This starts the timer

timer.pause()
timer.resume()
timer.stop()
~~~



<a name="web-font-loader"></a>
## Web font loader

Wrapper around [webfontloader](https://github.com/typekit/webfontloader).

Loads one or more web fonts (multiple vendors). This is a simple script without loading state callbacks.

~~~javascript
import { addWebFont } from "polythene-utilities"
import { styler } from "polythene-core-css"

const robotoStyles = [{
  "html, body, button, input, select, textarea": {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif"
  }
}]

export const addRoboto = () => (
  addWebFont("google", "Roboto:400,500,700,400italic:latin"),
  styler.add("roboto-font", robotoStyles)
)
~~~

<a name="how-to-prevent-flash-of-unstyled-text"></a>
### How to prevent Flash of Unstyled Text

To prevent the [Flash of Unstyled Text (FOUT)](https://www.paulirish.com/2009/fighting-the-font-face-fout/), add these styles:

~~~css
body {
  opacity: 0
}
html.wf-active body {
  opacity: 1
}
~~~

Or with JavaScript using [styler](polythene-core-css.md):

~~~javascript
import { styler } from "polythene-core-css"

const foutStyles = [{
  "body": {
    opacity: 0
  },
  "html.wf-active body": {
    opacity: 1
  }
}]

styler.add("fout", foutStyles)
~~~

