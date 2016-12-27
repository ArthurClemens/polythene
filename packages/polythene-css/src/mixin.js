// Mixins for j2c

import defaults from "./defaults";

// Creates j2c vendor key string from vendor list
// mixin.vendorize({"user-select": "none"}, defaults.prefixes_user_select)
const vendorize = (what, prefixes) => {
  const vendorsSel = prefixes.map((v) => ("_" + v + "$")).join("");
  return {
    [vendorsSel]: what
  };
};

// Centers an item absolutely within relative parent
// mixin.fit()
const fit = (offset = 0) => {
  const offsetPx = offset + "px";
  return {
    position: "absolute",
    top: offsetPx,
    right: offsetPx,
    bottom: offsetPx,
    left: offsetPx
  };
};

// Optional font smoothing
// mixin.fontSmoothing()
const fontSmoothing = (smoothing = true) => {
  if (smoothing) {
    return {
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale"
    };
  } else {
    return {
      "-webkit-font-smoothing": "subpixel-antialiased",
      "-moz-osx-font-smoothing": "auto"
    };
  }
};

// Breaks off a line with ...
// unless lines is "none"
// mixin.ellipsis(1, 16) // max 1 line, 16px high
// mixin.ellipsis(2, 1.3, "em") // max 2 lines, 2.6em high
const ellipsis = (lines, lineHeight, unit = "px") => {
  if (lines === "none") {
    return {
      "text-overflow": "initial",
      overflow: "initial",
      display: "block",
      height: "auto"
    };
  }
  return Object.assign(
    {}, {
      overflow: "hidden",
      "text-overflow": "ellipsis",
      "text-rendering": "auto" // Samsung Android
    },
    (lines !== undefined) ? {
      "-webkit-line-clamp": lines,
      "-webkit-box-orient": "vertical",
      display: "-webkit-box"
    } : null,
    (lineHeight !== undefined) ? {
      "max-height": (lines * lineHeight) + unit
    } : null
  );
};

// Clears float
// mixin.clearfix()
const clearfix = () => ({
  "&:after": {
    content: "\"\"",
    display: "table",
    clear: "both"
  }
});


// Creates a very thin line
// disabled, does not work in Chrome
// mixin.hairline()
const hairline = () => ({});

// const hairline = (which) => ({
//     [`${which}-width`]: "1px",
//
//     " html.pe-hairlines &": {
//         [`${which}-width`]: "0.5px"
//     }
// });

// Test if browser handles 0.5px borders
// and add class pe-hairlines if so
// if (window.devicePixelRatio && devicePixelRatio >= 2) {
//     const el = document.createElement("div");
//     el.style.border = ".5px solid transparent";
//     document.body.appendChild(el);
//     if (el.offsetHeight === 1) {
//         document.querySelector("html").classList.add("pe-hairlines");
//     }
//     document.body.removeChild(el);
// }

// Creates sticky headers in a scrollable list
// Does not work in Chrome: http://caniuse.com/#feat=css-sticky
// mixin.sticky()
const sticky = (zIndex = 1) => ([{
  position: "-webkit-sticky"
}, {
  position: "-moz-sticky"
}, {
  position: "-o-sticky"
}, {
  position: "-ms-sticky"
}, {
  position: "sticky"
}, {
  top: 0,
  "z-index": zIndex
}]);

// Polythene utility function to generate style objects with scopes
// Used in theme files
const createStyles = (common, fn) => {
  if (Array.isArray(common)) {
    return common.map((o) => {
      for (let scope in o) {
        return {
          [scope]: fn(o[scope])
        };
      }
    });
  } else {
    return fn(common);
  }
};

// Creats a transition with presets
// mixin.defaultTransition("opacity", defaults.animation_duration)
const defaultTransition = (properties = "all", duration = defaults.animation_duration, curve = defaults.animation_curve_default) => {
  return [
    vendorize({
      "transition-delay": 0
    }, defaults.prefixes_transition),
    vendorize({
      "transition-duration": duration
    }, defaults.prefixes_transition),
    vendorize({
      "transition-timing-function": curve
    }, defaults.prefixes_transition),
    vendorize({
      "transition-property": properties
    }, defaults.prefixes_transition),
  ];
};

export default {
  clearfix,
  createStyles,
  defaultTransition,
  ellipsis,
  fit,
  fontSmoothing,
  hairline,
  sticky,
  vendorize
};

