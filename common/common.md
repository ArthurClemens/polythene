# Common

The "common" directory contains a couple of number of reusable scripts:

* `easing`: Easing functions
* `mixin`: CSS mixin functions; see below
* `multiple`: Helper module to manage multiple items of the same component type
* `object.assign`: Polyfill
* `scroll-to`: Animated scroll to a position
* `styler`: Wrapper around j2c to add styles to the head
* `timer`: Simple start/stop/pause/resume timer
* `transition`: Generic show/hide transition module
* `validation-helper`: Function to enhance validated forms; only submit form when all fields are valid, on submit jump to the next invalid field
* `webfontloader`: Loads one or more webfonts (multiple vendors) through Google's webfont loader; see below


## CSS mixins

One of the mixin functions is `vendorize` that can be used to generate vendor prefixes. This is a utility wrapper around the j2c syntax `_o$_ms$_moz$_webkit$: {foo: "bar"}`.

~~~javascript
import config from 'polythene/config/config';
import mixin from 'polythene/common/mixin';

const styles = [{
    ' .dropShadow': [
        mixin.vendorize({'transition': 'opacity 0.25s'}, config.prefixes_transition),
        mixin.vendorize({'transform': 'translate3d(0,0,0)'}, config.prefixes_transform),
        mixin.vendorize({'box-shadow': 'inset 0px 5px 6px -3px rgba(0, 0, 0, 0.4)'}, config.prefixes_box_shadow),
        {
            // rest of style
        }
    ]
}];
~~~


### Webfont loader

Loads one or more webfonts (multiple vendors) through Google's webfont loader. This is a simple script; no callback functionality is implemented.

Usage:

~~~javascript
import webfontLoader from 'polythene/common/webfontloader';
webfontLoader.add('google', 'Roboto:400,500,700,400italic:latin');
webfontLoader.add('google', 'Raleway:400,500,600:latin');
~~~
