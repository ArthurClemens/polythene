function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, type, tint) {
  var normalBorder = componentVars["color_" + tint + "_" + type + "_border"] || "transparent";
  var activeBorder = componentVars["color_" + tint + "_" + type + "_active_border"] || normalBorder;
  var disabledBorder = componentVars["color_" + tint + "_" + type + "_disabled_border"] || normalBorder;
  return [_defineProperty({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    "&, &:link, &:visited": {
      color: componentVars["color_" + tint + "_" + type + "_text"]
    },

    " .pe-button__content": {
      backgroundColor: componentVars["color_" + tint + "_" + type + "_background"],
      borderColor: normalBorder
    },

    ".pe-button--disabled": {
      color: componentVars["color_" + tint + "_" + type + "_disabled_text"],

      " .pe-button__content": {
        backgroundColor: componentVars["color_" + tint + "_" + type + "_disabled_background"],
        borderColor: disabledBorder
      }
    },

    ".pe-button--selected": {
      " .pe-button__content": {
        backgroundColor: componentVars["color_" + tint + "_" + type + "_active_background"],
        borderColor: activeBorder
      },
      " .pe-button__focus": {
        opacity: 1,
        backgroundColor: componentVars["color_" + tint + "_" + type + "_focus_background"]
      }
    },

    ".pe-button--focus": {
      " .pe-button__focus": {
        opacity: 1,
        backgroundColor: componentVars["color_" + tint + "_" + type + "_focus_background"]
      }
    }
  })];
};

var noTouchStyle = function noTouchStyle(scopes, selector, componentVars, type, tint) {
  var normalBorder = componentVars["color_" + tint + "_" + type + "_border"] || "transparent";
  var hoverBorder = componentVars["color_" + tint + "_" + type + "_border"] || normalBorder;
  return [_defineProperty({}, scopes.map(function (s) {
    return s + selector + ":hover";
  }).join(","), {
    ":not(.pe-button--selected):not(.pe-button--inactive) .pe-button__wash": {
      backgroundColor: componentVars["color_" + tint + "_" + type + "_hover_background"],
      borderColor: hoverBorder
    }
  })];
};

export default (function (selector, componentVars) {
  return [style([".pe-dark-theme", ".pe-dark-theme "], selector, componentVars, "raised", "dark"), // has/inside dark tone
  style(["", ".pe-light-theme", ".pe-light-theme "], selector, componentVars, "raised", "light"), // normal, has/inside light tone
  noTouchStyle(["html.pe-no-touch .pe-dark-theme "], selector, componentVars, "raised", "dark"), // inside dark tone
  noTouchStyle(["html.pe-no-touch ", "html.pe-no-touch .pe-light-theme "], selector, componentVars, "raised", "light")];
});