(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-css-base-spinner'), require('polythene-theme'), require('polythene-core-css')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-css-base-spinner', 'polythene-theme', 'polythene-core-css'], factory) :
  (factory((global.polythene = {}),global['polythene-css-base-spinner'],global['polythene-theme'],global['polythene-core-css']));
}(this, (function (exports,polytheneCssBaseSpinner,polytheneTheme,polytheneCoreCss) { 'use strict';

  var classes = {
    component: "pe-md-spinner",
    // elements
    animation: "pe-md-spinner__animation",
    circle: "pe-md-spinner__circle",
    circleClipper: "pe-md-spinner__circle-clipper",
    circleClipperLeft: "pe-md-spinner__circle-clipper-left",
    circleClipperRight: "pe-md-spinner__circle-clipper-right",
    gapPatch: "pe-md-spinner__gap-patch",
    layer: "pe-md-spinner__layer",
    layerN: "pe-md-spinner__layer-"
  };

  /*
  Styling derived from https://github.com/PolymerElements/paper-spinner

  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  const generalFns = {
    general_styles: selector => [polytheneCoreCss.sel(selector, {
      " .pe-md-spinner__layer": {
        borderColor: "currentcolor"
      }
    })]
  };

  const tintFns = tint => ({
    ["color_" + tint + "_single"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      color: vars["color_" + tint + "_single"]
    })],
    ["color_" + tint + "_1"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ":not(.pe-spinner--single-color)": {
        " .pe-md-spinner__layer-1": {
          borderColor: vars["color_" + tint + "_1"]
        }
      }
    })],
    ["color_" + tint + "_2"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ":not(.pe-spinner--single-color)": {
        " .pe-md-spinner__layer-2": {
          borderColor: vars["color_" + tint + "_2"]
        }
      }
    })],
    ["color_" + tint + "_3"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ":not(.pe-spinner--single-color)": {
        " .pe-md-spinner__layer-3": {
          borderColor: vars["color_" + tint + "_3"]
        }
      }
    })],
    ["color_" + tint + "_4"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ":not(.pe-spinner--single-color)": {
        " .pe-md-spinner__layer-4": {
          borderColor: vars["color_" + tint + "_4"]
        }
      }
    })]
  });

  const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
  const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));
  var color = polytheneCoreCss.createColor({
    varFns: {
      lightTintFns,
      darkTintFns
    },
    superColor: polytheneCssBaseSpinner.color
  });

  /*
  Styling derived from https://github.com/PolymerElements/paper-spinner

  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  const OPACITY_MIN = 0;
  const OPACITY_MAX = .99;
  const CURVE_INFINITE = "cubic-bezier(0.4, 0.0, 0.2, 1) infinite both";

  const kfRotate = () => ({
    " to": {
      transform: "rotate(360deg)"
    }
  });

  const kfLeftSpin = () => kfSpin(1);

  const kfRightSpin = () => kfSpin(-1);

  const kfSpin = direction => ({
    " from": {
      "transform": "rotate(" + direction * 130 + "deg)"
    },
    " 50%": {
      "transform": "rotate(" + direction * -5 + "deg)"
    },
    " to": {
      "transform": "rotate(" + direction * 130 + "deg)"
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

  const kfFillUnfillRotate = arcSize => ({
    " 12.5%": {
      transform: "rotate(" + 0.5 * arcSize + "deg)"
    },
    " 25%": {
      transform: "rotate(" + 1.0 * arcSize + "deg)"
    },
    " 37.5%": {
      transform: "rotate(" + 1.5 * arcSize + "deg)"
    },
    " 50%": {
      transform: "rotate(" + 2.0 * arcSize + "deg)"
    },
    " 62.5%": {
      transform: "rotate(" + 2.5 * arcSize + "deg)"
    },
    " 75%": {
      transform: "rotate(" + 3.0 * arcSize + "deg)"
    },
    " 87.5%": {
      transform: "rotate(" + 3.5 * arcSize + "deg)"
    },
    " to": {
      transform: "rotate(" + 4.0 * arcSize + "deg)"
    }
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
    }
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

  const layerAnimation = (vars, num) => ({
    [".pe-md-spinner__layer-" + num]: {
      animation: "mdSpinnerFillUnfillRotate " + 4 * vars.arc_time + "s " + CURVE_INFINITE + ",  mdSpinnerLayer" + num + "FadeInOut " + 4 * vars.arc_time + "s " + CURVE_INFINITE
    }
  });

  const varFns = {
    general_styles: (selector, vars) => [polytheneCoreCss.sel(selector, {
      "@keyframes mdSpinnerRotate": kfRotate(),
      "@keyframes mdSpinnerRightSpin": kfRightSpin(),
      "@keyframes mdSpinnerLeftSpin": kfLeftSpin(),
      "@keyframes mdSpinnerFadeOut": kfFadeOut(),
      "@keyframes mdSpinnerLayer1FadeInOut": kfLayer1FadeInOut(),
      "@keyframes mdSpinnerLayer2FadeInOut": kfLayer2FadeInOut(),
      "@keyframes mdSpinnerLayer3FadeInOut": kfLayer3FadeInOut(),
      "@keyframes mdSpinnerLayer4FadeInOut": kfLayer4FadeInOut(),
      " .pe-md-spinner__animation": {
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
      " .pe-md-spinner__circle": [polytheneCoreCss.mixin.fit(), {
        animation: "none",
        boxSizing: "border-box",
        height: "100%",
        borderStyle: "solid",
        borderColor: "inherit",
        borderRadius: "50%",
        borderBottomColor: "transparent !important"
      }],
      " .pe-md-spinner__circle-clipper-left .pe-md-spinner__circle": {
        transform: "rotate(129deg)",
        borderRightColor: "transparent !important"
      },
      " .pe-md-spinner__circle-clipper-right .pe-md-spinner__circle": {
        transform: "rotate(-129deg)",
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
      " .pe-md-spinner__layer": [[1, 2, 3, 4].map(num => layerAnimation(vars, num)), {
        position: "absolute",
        width: "100%",
        height: "100%",
        whiteSpace: "nowrap"
      }]
    })],
    rotation_duration: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-md-spinner__animation": {
        animation: "mdSpinnerRotate " + vars.rotation_duration + "s linear infinite"
      }
    })],
    border_width_small: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-spinner--small": {
        " .pe-md-spinner__circle": {
          borderWidth: vars.border_width_small + "px"
        }
      }
    })],
    border_width_regular: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-spinner--regular": {
        " .pe-md-spinner__circle": {
          borderWidth: vars.border_width_regular + "px"
        }
      }
    })],
    border_width_medium: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-spinner--medium": {
        " .pe-md-spinner__circle": {
          borderWidth: vars.border_width_medium + "px"
        }
      }
    })],
    border_width_large: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-spinner--large": {
        " .pe-md-spinner__circle": {
          borderWidth: vars.border_width_large + "px"
        }
      }
    })],
    border_width_fab: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-spinner--fab": {
        " .pe-md-spinner__circle": {
          borderWidth: vars.border_width_fab + "px"
        }
      }
    })],
    arc_size: (selector, vars) => [polytheneCoreCss.sel(selector, {
      "@keyframes mdSpinnerFillUnfillRotate": kfFillUnfillRotate(vars.arc_size)
    })],
    arc_time: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-md-spinner__circle-clipper-left .pe-md-spinner__circle": {
        animation: "mdSpinnerLeftSpin " + vars.arc_time + "s " + CURVE_INFINITE
      },
      " .pe-md-spinner__circle-clipper-right .pe-md-spinner__circle": {
        animation: "mdSpinnerRightSpin " + vars.arc_time + "s " + CURVE_INFINITE
      },
      " .pe-md-spinner__layer": {
        animation: "mdSpinnerFillUnfillRotate " + 4 * vars.arc_time + "s " + CURVE_INFINITE
      }
    })]
  };
  var layout = polytheneCoreCss.createLayout({
    varFns,
    superLayout: polytheneCssBaseSpinner.layout
  });

  /*
  Styling derived from https://github.com/PolymerElements/paper-spinner

  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  const arc_size = 270; // degrees - amount of circle the arc takes up

  const arc_time = 1.333; // s - time it takes to expand and contract arc

  const arc_start_degrees = 360 / 5 * 3; // degrees - how much the start location of the arc should rotate each time, 216 gives us a 5 pointed star shape (it"s 360/5 * 3). For a 7 pointed star, we might do 360/7 * 3 = 154.286.

  const rotation_duration = 360 * arc_time / (arc_start_degrees + (360 - arc_size)); // 1.568s

  const blue400 = "#42a5f5";
  const red500 = "#f44336";
  const yellow600 = "#fdd835";
  const green500 = "#4caf50";
  var vars = {
    general_styles: true,
    arc_size,
    arc_start_degrees,
    arc_time,
    border_width_fab: polytheneCssBaseSpinner.vars.size_fab / polytheneCssBaseSpinner.vars.size_regular * 3,
    border_width_large: polytheneCssBaseSpinner.vars.size_large / polytheneCssBaseSpinner.vars.size_regular * 3,
    border_width_medium: polytheneCssBaseSpinner.vars.size_medium / polytheneCssBaseSpinner.vars.size_regular * 3,
    border_width_regular: 3,
    border_width_small: polytheneCssBaseSpinner.vars.size_small / polytheneCssBaseSpinner.vars.size_regular * 3,
    rotation_duration,
    color_light_single: polytheneCoreCss.rgba(polytheneTheme.vars.color_primary),
    color_light_1: blue400,
    color_light_2: red500,
    color_light_3: yellow600,
    color_light_4: green500,
    color_dark_single: polytheneCoreCss.rgba(polytheneTheme.vars.color_primary),
    color_dark_1: blue400,
    color_dark_2: red500,
    color_dark_3: yellow600,
    color_dark_4: green500
  };

  const fns = [layout, color];
  const selector = `.${classes.component}`;
  const addStyle = polytheneCoreCss.styler.createAddStyle(selector, fns, vars);
  const getStyle = polytheneCoreCss.styler.createGetStyle(selector, fns, vars);
  polytheneCoreCss.styler.addStyle({
    selectors: [selector],
    fns,
    vars
  });

  exports.addStyle = addStyle;
  exports.color = color;
  exports.getStyle = getStyle;
  exports.layout = layout;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-material-design-spinner.js.map
