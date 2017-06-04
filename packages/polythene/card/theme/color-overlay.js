function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    " .pe-card__overlay__content": {
      backgroundColor: componentVars["color_" + tint + "_overlay_background"]
    }
  })];
};

export default (function (selector, componentVars) {
  return [style([".pe-dark-theme", ".pe-dark-theme "], selector, componentVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-theme", ".pe-light-theme "], selector, componentVars, "light")];
});