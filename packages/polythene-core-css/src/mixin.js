// @ts-check

/**
 * @typedef {object} StyleObject 
 */

/**
 * Centers an item absolutely within relative parent.
 * @param {number} [offset=0] 
 * @returns {StyleObject}
 */
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

/**
 * Breaks off a line with ... unless lines is "none"
 * @param {number|"none"} lines 
 * @param {number} lineHeight 
 * @param {string} [unit=px]
 * @example
 * // max 1 line, 16px high
 * mixin.ellipsis(1, 16)
 * @example 
 * // max 2 lines, 2.6em high
 * mixin.ellipsis(2, 1.3, "em")
 * @returns {StyleObject} 
 */
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
  return [
    {
      "@supports (-webkit-line-clamp: 2)":
        lines !== undefined
          ? {
            "-webkit-line-clamp": lines,
            "-webkit-box-orient": "vertical",
            display: "-webkit-box",
            wordBreak: "break-word",
          }
          : undefined
    },
    {
      overflow: "hidden",
      textOverflow: "ellipsis",
      textRendering: "auto", // Samsung Android
      ...(lineHeight !== undefined
        ? { maxHeight: (lines * lineHeight) + unit }
        : undefined
      ),
      ...(lineHeight === 1
        ? { wordWrap: "nowrap" }
        : undefined
      )
    }
  ];
};

/**
 * Clears float.
 * @returns {StyleObject} 
 */
const clearfix = () => ({
  "&:after": {
    content: "\"\"",
    display: "table",
    clear: "both"
  }
});

/**
 * Creates sticky headers in a scrollable list.
 * Does not work in IE 11, Edge < 16.
 * @param {number} [zIndex=1] 
 * @returns {StyleObject} 
 */
const sticky = (zIndex = 1) => ({
  position: "sticky",
  top: 0,
  zIndex: zIndex
});

/**
 * Creates a transition with presets
 * @param {string} [properties=all]
 * @param {string} [duration=".18s"] 
 * @param {string} [curve=ease-out] 
 * @example
 * mixin.defaultTransition("opacity", vars.animation_duration)
 * @returns {StyleObject} 
 */
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
  sticky,
};
