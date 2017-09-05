
const style = (scopes, selector, componentVars, tint) => [{
  [scopes.map(s => s + selector).join(",")]: {
    color: "inherit",
    
    " svg": {
      color: "inherit",

      " path, rect, circle, polygon": {
        "&:not([fill=none])": {
          fill: componentVars["color_" + tint] || "currentcolor"
        }
      }
    }
  }
}];

export default (selector, componentVars) => [
  style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light"), // normal, has/inside light tone
];
