// Mixins for j2c

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
      textOverflow: "initial",
      overflow: "initial",
      display: "block",
      height: "auto",
      maxHeight: "none",
      whiteSpace: "normal",
    };
  }
  return Object.assign(
    {},
    {
      overflow: "hidden",
      textOverflow: "ellipsis",
      textRendering: "auto" // Samsung Android
    },
    lines !== undefined
      ? {
        "-webkit-line-clamp": lines,
        "-webkit-box-orient": "vertical",
        display: "-webkit-box"
      }
      : null,
    lineHeight !== undefined
      ? {
        maxHeight: (lines * lineHeight) + unit
      }
      : null
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

// Creates sticky headers in a scrollable list
// Does not work in Chrome: http://caniuse.com/#feat=css-sticky
// mixin.sticky()
const sticky = (zIndex = 1) => ({
  position: "sticky",
  top: 0,
  zIndex: zIndex
});

// Creats a transition with presets
// mixin.defaultTransition("opacity", vars.animation_duration)
const defaultTransition = (properties = "all", duration = ".18s", curve = "ease-out") => ({
  transitionDelay: "0ms",
  transitionDuration: duration,
  transitionTimingFunction: curve,
  transitionProperty: properties
});

export default {
  clearfix,
  defaultTransition,
  ellipsis,
  fit,
  fontSmoothing,
  sticky,
};

