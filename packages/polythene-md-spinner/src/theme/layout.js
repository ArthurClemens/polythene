/*
Derived from https://github.com/PolymerElements/paper-spinner

@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { mixin } from "polythene-css";

const OPACITY_MIN = 0;
const OPACITY_MAX = .99;
const CURVE_INFINITE = "cubic-bezier(0.4, 0.0, 0.2, 1) infinite both";

const kfRotate = () => ({
  " to": {
    transform: "rotate(360deg)"
  }
});

const kfLeftSpin = () => (kfSpin(1));
const kfRightSpin = () => (kfSpin(-1));

const kfSpin = (direction) => ({
  " from": {
    "transform": "rotate(" + (direction * 130) + "deg)"
  },
  " 50%": {
    "transform": "rotate(" + (direction * -5) + "deg)"
  },
  " to": {
    "transform": "rotate(" + (direction * 130) + "deg)"
  }
});

const kfFadeOut = () => ({
  " from": {
    opacity: OPACITY_MAX
  },
  " to": {
    opacity: OPACITY_MIN
  }
});

const kfFillUnfillRotate = (config) => ({
  " 12.5%": {
    transform: "rotate(" + (0.5 * config.arc_size) + "deg)"
  },
  " 25%": {
    transform: "rotate(" + (1.0 * config.arc_size) + "deg)"
  },
  " 37.5%": {
    transform: "rotate(" + (1.5 * config.arc_size) + "deg)"
  },
  " 50%": {
    transform: "rotate(" + (2.0 * config.arc_size) + "deg)"
  },
  " 62.5%": {
    transform: "rotate(" + (2.5 * config.arc_size) + "deg)"
  },
  " 75%": {
    transform: "rotate(" + (3.0 * config.arc_size) + "deg)"
  },
  " 87.5%": {
    transform: "rotate(" + (3.5 * config.arc_size) + "deg)"
  },
  " to": {
    transform: "rotate(" + (4.0 * config.arc_size) + "deg)"
  },
});

/**
 * HACK: Even though the intention is to have the current .pe-md-spinner__layer at
 * `opacity: 1`, we set it to `opacity: 0.99` instead since this forces Chrome
 * to do proper subpixel rendering for the elements being animated. This is
 * especially visible in Chrome 39 on Ubuntu 14.04. See:
 *
 * - https://github.com/Polymer/paper-spinner/issues/9
 * - https://code.google.com/p/chromium/issues/detail?id=436255
 */
const kfLayer1FadeInOut = () => ({
  " from": {
    opacity: OPACITY_MAX
  },
  " 25%": {
    opacity: OPACITY_MAX
  },
  " 26%": {
    opacity: OPACITY_MIN
  },
  " 89%": {
    opacity: OPACITY_MIN
  },
  " 90%": {
    opacity: OPACITY_MAX
  },
  " 100%": {
    opacity: OPACITY_MAX
  },
});

const kfLayer2FadeInOut = () => ({
  " from": {
    opacity: OPACITY_MIN
  },
  " 15%": {
    opacity: OPACITY_MIN
  },
  " 25%": {
    opacity: OPACITY_MAX
  },
  " 50%": {
    opacity: OPACITY_MAX
  },
  " 51%": {
    opacity: OPACITY_MIN
  }
});

const kfLayer3FadeInOut = () => ({
  " from": {
    opacity: OPACITY_MIN
  },
  " 40%": {
    opacity: OPACITY_MIN
  },
  " 50%": {
    opacity: OPACITY_MAX
  },
  " 75%": {
    opacity: OPACITY_MAX
  },
  " 76%": {
    opacity: OPACITY_MIN
  }
});

const kfLayer4FadeInOut = () => ({
  " from": {
    opacity: OPACITY_MIN
  },
  " 65%": {
    opacity: OPACITY_MIN
  },
  " 75%": {
    opacity: OPACITY_MAX
  },
  " 90%": {
    opacity: OPACITY_MAX
  },
  " 100%": {
    opacity: OPACITY_MIN
  }
});

const layerAnimation = (config, num) => ({
  ["&.pe-md-spinner__layer-" + num]: {
    animation: "mdSpinnerFillUnfillRotate " + 4 * config.arc_time + "s " + CURVE_INFINITE + ",  mdSpinnerLayer" + num + "FadeInOut " + 4 * config.arc_time + "s " + CURVE_INFINITE
  }
});

export default (selector, componentVars) => [{
  [selector]: {
    " .pe-md-spinner__animation": {
      animation: "mdSpinnerRotate " + componentVars.rotation_duration + "s linear infinite",
      position: "relative",
      width: "100%",
      height: "100%",

      /* The spinner does not have any contents that would have to be
      * flipped if the direction changes. Always use ltr so that the
      * style works out correctly in both cases. */
      direction: "ltr"
    },

    /**
    * Patch the gap that appear between the two adjacent div.pe-md-spinner__circle-clipper while the
    * spinner is rotating (appears on Chrome 38, Safari 7.1, and IE 11).
    *
    * Update: the gap no longer appears on Chrome when .pe-md-spinner__layer"s opacity is 0.99,
    * but still does on Safari and IE.
    */
    " .pe-md-spinner__gap-patch": {
      position: "absolute",
      boxSizing: "border-box",
      top: 0,
      left: "45%",
      width: "10%",
      height: "100%",
      overflow: "hidden",
      borderColor: "inherit"
    },

    " .pe-md-spinner__gap-patch .pe-md-spinner__circle": {
      width: "1000%",
      left: "-450%"
    },

    " .pe-md-spinner__circle-clipper": {
      display: "inline-block",
      fontSize: 0,
      lineHeight: 0,
      position: "relative",
      width: "50%",
      height: "100%",
      overflow: "hidden",
      borderColor: "inherit"
    },

    " .pe-md-spinner__circle-clipper .pe-md-spinner__circle": {
      width: "200%"
    },

    " .pe-md-spinner__circle": [
      mixin.fit(),
      {
        animation: "none",
        boxSizing: "border-box",
        height: "100%",
        borderStyle: "solid",
        borderColor: "inherit",
        borderRadius: "50%",
        borderBottomColor: "transparent !important"
      }
    ],

    "&": ["small", "regular", "medium", "large", "fab"].map(size => ({
      ["&.pe-spinner--" + size]: {
        " .pe-md-spinner__circle": {
          borderWidth: componentVars["border_width_" + size] + "px"
        }
      }
    })),

    " .pe-md-spinner__circle-clipper-left .pe-md-spinner__circle": {
      transform: "rotate(129deg)",
      animation: "mdSpinnerLeftSpin " + componentVars.arc_time + "s " + CURVE_INFINITE,
      borderRightColor: "transparent !important"
    },

    " .pe-md-spinner__circle-clipper-right .pe-md-spinner__circle": {
      transform: "rotate(-129deg)",
      animation: "mdSpinnerRightSpin " + componentVars.arc_time + "s " + CURVE_INFINITE,
      left: "-100%",
      borderLeftColor: "transparent !important"
    },

    /**
    * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):
    *
    * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn"t
    * guarantee that the animation will start _exactly_ after that value. So we avoid using
    * animation-delay and instead set custom keyframes for each color (as redundant as it
    * seems).
    *
    * We write out each animation in full (instead of separating animation-name,
    * animation-duration, etc.) because under the polyfill, Safari does not recognize those
    * specific properties properly, treats them as -webkit-animation, and overrides the
    * other animation rules. See https://github.com/Polymer/platform/issues/53.
    */
    " .pe-md-spinner__layer": [
      [1,2,3,4].map(num => layerAnimation(componentVars, num)),
      {
        animation: "mdSpinnerFillUnfillRotate " + 4 * componentVars.arc_time + "s " + CURVE_INFINITE,
        position: "absolute",
        width: "100%",
        height: "100%",
        whiteSpace: "nowrap"
      }
    ],

    "@keyframes mdSpinnerRotate": kfRotate(),
    "@keyframes mdSpinnerRightSpin": kfRightSpin(),
    "@keyframes mdSpinnerLeftSpin": kfLeftSpin(),
    "@keyframes mdSpinnerFadeOut": kfFadeOut(),
    "@keyframes mdSpinnerFillUnfillRotate": kfFillUnfillRotate(componentVars),
    "@keyframes mdSpinnerLayer1FadeInOut": kfLayer1FadeInOut(),
    "@keyframes mdSpinnerLayer2FadeInOut": kfLayer2FadeInOut(),
    "@keyframes mdSpinnerLayer3FadeInOut": kfLayer3FadeInOut(),
    "@keyframes mdSpinnerLayer4FadeInOut": kfLayer4FadeInOut()
  }
}];
