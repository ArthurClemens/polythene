import { mixin, sel } from "polythene-core-css";
import { vars as themeVars } from "polythene-theme";

const varFns = {
  general_styles: selector => [
    sel(selector, {
      userSelect: "none",
      "-moz-user-select": "none",
      display: "inline-block",
      position: "relative",
      outline: "none",
      cursor: "pointer",
      padding: 0,
      border: "none",

      " .pe-button__content": {
        position: "relative",
        borderRadius: "50%",
      },

      " .pe-button__wash, .pe-button__focus": [
        mixin.fit(),
        {
          borderRadius: "inherit",
        }
      ],

      " .pe-ripple": {
        borderRadius: "inherit"
      },

      " .pe-button__wash": {
        transition: "background-color " + themeVars.animation_duration + " ease-in-out",
        borderRadius: "inherit",
        pointerEvents: "none",
        backgroundColor: "transparent"
      }
    })
  ],
  padding_regular: (selector, vars) => [
    sel(selector, {
      " .pe-button__content": {
        padding: vars.padding_regular + "px",
      },
    })
  ],
  size_regular: (selector, vars) => [
    sel(selector, {
      " .pe-button__content": {
        width: vars.size_regular + "px",
        height: vars.size_regular + "px",
      },
    })
  ],
  size_mini: (selector, vars) => [
    sel(selector, {
      ".pe-fab--mini": {
        " .pe-button__content": {
          width: vars.size_mini + "px",
          height: vars.size_mini + "px",
          padding: ((vars.size_mini - themeVars.unit_icon_size) / 2) + "px"
        }
      },
    })
  ],
};

export default (selector, componentVars, customVars) => {
  const allVars = {...componentVars, ...customVars};
  const currentVars = customVars
    ? customVars
    : allVars;
  return Object.keys(currentVars).map(v => (
    varFns[v] !== undefined 
      ? varFns[v](selector, allVars)
      : null
  )).filter(s => s);
};
