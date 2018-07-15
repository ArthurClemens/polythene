# Utility functions

* **easing**: Easing functions
* **scrollTo**: Animated scroll to a position
* **Timer**: Simple start/stop/pause/resume timer
* **Web font loader**: Loads one or more web fonts

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [easing](#easing)
- [scrollTo](#scrollto)
- [Timer](#timer)
- [Web font loader](#web-font-loader)
  - [Function `addWebFont`](#function-addwebfont)
  - [Loading callbacks](#loading-callbacks)
  - [How to prevent Flash of Unstyled Text](#how-to-prevent-flash-of-unstyled-text)

<!-- /MarkdownTOC -->


<a id="easing"></a>
## easing

Simple easing functions - inspired by http://gizma.com/easing/

Example:

~~~javascript
import { easing } from "polythene-utilities"

// percentage is some value between 0 and 1
const value = start + change * easing.easeInOutCubic(percentage)
~~~



<a id="scrollto"></a>
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
 * `easing`: (Function) Name of easing function (default: `easing.easeInOutCubic`)

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




<a id="timer"></a>
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




<a id="web-font-loader"></a>
## Web font loader

Wrapper around [webfontloader](https://github.com/typekit/webfontloader).

Loads one or more web fonts (optionally from multiple vendors). Works with Google Webfonts and Typekit.

~~~javascript
import { addWebFont } from "polythene-utilities"

addWebFont("google", {
  families: ["Roboto:400,500,700,400italic:latin"]
})
~~~

For use with Typekit:

~~~javascript
import { addWebFont } from "polythene-utilities"

addWebFont("typekit", {
  id: "my-kit-id"
})
~~~

<a id="function-addwebfont"></a>
### Function `addWebFont`

~~~javascript
addWebFont(vendor, config)
~~~

| **Option**   | **Required** | **Type** | **Description** |
| ------------ | ------------ | -------- | --------------- |
| **vendor**   | required     | String   | Vendor name (or any other unique identifier) |
| **config**   | required     | Object   | Configuration object to pass `families`, `id`, `text` |



<a id="loading-callbacks"></a>
### Loading callbacks

To receive a callback when a font loading state has changed, subscribe to `webfontloader` events:

~~~javascript
import { addWebFont } from "polythene-utilities"
import { subscribe, unsubscribe } from "polythene-core"

const handleFontEvent = event => {
  if (event.name === "active") {
    // ...
  }
}

subscribe("webfontloader", handleFontEvent)

// To unsubscribe, pass the same function as with subscribe
// unsubscribe("webfontloader", handleFontEvent)

addWebFont("google", {
  families: ["Roboto:400,500,700,400italic:latin"]
})
~~~

#### webfontloader events

~~~
{ name: "loading",      vendor, family, config }
{ name: "active",       vendor, family, config }
{ name: "inactive"      vendor, family, config }
{ name: "fontloading",  vendor, family, config, familyName, fvd }
{ name: "fontactive",   vendor, family, config, familyName, fvd }
{ name: "fontinactive", vendor, family, config, familyName, fvd }
~~~

See [webfontloader documentation](https://github.com/typekit/webfontloader) for more details.


<a id="how-to-prevent-flash-of-unstyled-text"></a>
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

