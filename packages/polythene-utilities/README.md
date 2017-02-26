# Utility functions

* `easing`: Easing functions
* `scrollTo`: Animated scroll to a position
* `Timer`: Simple start/stop/pause/resume timer


## easing

Simple easing functions - inspired from http://gizma.com/easing/

Example:

~~~javascript
import { easing } from "polythene-utilities";

// ...
const val = start + change * easing.easeInOutCubic(percentage);
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
import { scrollTo, easing } from "polythene-utilities";

scrollTo({
   element: scrollingElement,
   to: 0,
   duration: .5,
   direction: "horizontal",
   easing: easing.easeOutCubic
}).then(() => {
   console.log("Done")
});
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
import { Timer } from "polythene-utilities";

const timer = new Timer(() => {
  hide();
}, timeoutSeconds);
// This starts the timer

timer.pause();
timer.resume();
timer.stop();
~~~

