# Utility functions

* `easing`: Easing functions
* `FastClick`: eliminates the 300ms delay on mobile
* `scrollTo`: Animated scroll to a position
* `Timer`: Simple start/stop/pause/resume timer
* `Layout classes`: Provides common and flexbox classes



## easing

Simple easing functions - inspired from http://gizma.com/easing/

Example:

~~~javascript
import { easing } from "polythene-utilities";

// ...
const val = start + change * easing.easeInOutCubic(percentage);
~~~



# FastClick

Wrapper around FT Lab's [FastClick](https://github.com/ftlabs/fastclick).

> FastClick is a simple, easy-to-use library for eliminating the 300ms delay between a physical tap and the firing of a click event on mobile browsers. The aim is to make your application feel less laggy and more responsive while avoiding any interference with your current logic.

Because FastClick has an unresolved issue with tap events while scrolling on iOS, it is better to use the convenience wrapper provided by this component. This temporarily removes the FastClick event when an element is being scrolled.


## Usage

To simply add FastClick to your app:

~~~javascript
import { addFastClick } "polythene-utilities";

addFastClick();
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




## Layout classes

Provides common and flexbox classes. Note that these are extra and not required for Polythene apps.


### Usage

#### Classes

~~~javascript
import { addLayoutStyles } frmo "polythene-utilities";

addLayoutStyles();
~~~

Use in Mithril elements:

~~~javascript
m(".layout.vertical", ...)
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

