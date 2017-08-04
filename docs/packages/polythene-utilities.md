# Utility functions

* **easing**: Easing functions
* **scrollTo**: Animated scroll to a position
* **Timer**: Simple start/stop/pause/resume timer
* **Layout classes**: Provides common and flexbox classes
* **Web font loader**: Loads one or more web fonts


## easing

Simple easing functions - inspired by http://gizma.com/easing/

Example:

~~~javascript
import { easing } from "polythene-utilities"

// percentage is some value between 0 and 1
const value = start + change * easing.easeInOutCubic(percentage)
~~~



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




## Layout classes

Provides common and flexbox classes. Note that these are extra and not required for Polythene apps.


### Usage

#### Classes

~~~javascript
import { addLayoutStyles } from "polythene-utilities"

addLayoutStyles()
~~~

#### Mithril example

~~~javascript
m(".layout.vertical", ...)
~~~

#### React JSX example

~~~javascript
<div className="layout vertical" />
~~~


### Class list

#### Common

~~~css
.pe-block
.pe-inline-block
.pe-hidden
.pe-relative
.pe-absolute
.pe-fit
.pe-fullbleed
~~~

#### Flex

~~~css
/* flex */
.flex
.flex.auto
.flex.auto-vertical
.flex.none
.flex.one
.flex.two
.flex.three
.flex.four
.flex.five
.flex.six
.flex.seven
.flex.eight
.flex.nine
.flex.ten
.flex.eleven
.flex.twelve

/* layout */
.layout
.layout.horizontal
.layout.horizontal.inline
.layout.vertical.inline
.layout.horizontal
.layout.horizontal.reverse
.layout.vertical
.layout.vertical.reverse
.layout.wrap
.layout.wrap.reverse

/* alignment in cross axis */
.layout.start
.layout.center,
.layout.center-center
.layout.end

/* alignment in main axis */
.layout.start-justified
.layout.center-justified
.layout.center-center
.layout.end-justified
.layout.around-justified
.layout.justified

/* self alignment */
.self-start
.self-center
.self-end
.self-stretch
~~~


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
  styler.add("pe-roboto", robotoStyles)
)
~~~

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

