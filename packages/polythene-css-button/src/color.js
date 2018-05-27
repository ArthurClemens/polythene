import { sel, createColor } from "polythene-core-css";

const generalFns = ({
  general_styles: selector => [
    sel(selector, {
      ".pe-button--focus, &.pe-button--selected": {
        " .pe-button__focus": {
          opacity: 1
        }
      },
    })
  ],
});

const tintFns = tint => ({

  // Text

  ["color_" + tint + "_text"]: (selector, vars) => [
    sel(selector, {
      ":not(.pe-button--disabled)": {
        "&, &:link, &:visited": {
          color: vars["color_" + tint + "_text"]
        },
      }
    })
  ],
  ["color_" + tint + "_disabled_text"]: (selector, vars) => [
    sel(selector, {
      ".pe-button--disabled": {
        color: vars["color_" + tint + "_disabled_text"],
      },
    })
  ],

  // Background

  ["color_" + tint + "_background"]: (selector, vars) => [
    sel(selector, {
      ":not(.pe-button--disabled)": {
        " .pe-button__content": {
          backgroundColor: vars["color_" + tint + "_background"],
        },
      }
    })
  ],
  ["color_" + tint + "_focus_background"]: (selector, vars) => [
    sel(selector, {
      " .pe-button__focus": {
        backgroundColor: vars["color_" + tint + "_focus_background"]
      },
    })
  ],
  ["color_" + tint + "_active_background"]: (selector, vars) => [
    sel(selector, {
      ".pe-button--selected": {
        " .pe-button__content": {
          backgroundColor: vars["color_" + tint + "_active_background"]
        }
      },
    })
  ],
  ["color_" + tint + "_disabled_background"]: (selector, vars) => [
    sel(selector, {
      ".pe-button--disabled": {
        " .pe-button__content": {
          backgroundColor: vars["color_" + tint + "_disabled_background"],
        }
      },
    })
  ],

  // Borders

  ["color_" + tint + "_border"]: (selector, vars) => [
    sel(selector, {
      ".pe-button--border:not(.pe-button--disabled)": {
        " .pe-button__content": {
          borderColor: vars["color_" + tint + "_border"],
        },
      }
    })
  ],

  ["color_" + tint + "_active_border"]: (selector, vars) => [
    sel(selector, {
      ".pe-button--border.pe-button--selected": {
        " .pe-button__content": {
          borderColor: vars["color_" + tint + "_active_border"],
        }
      },
    })
  ],
  ["color_" + tint + "_disabled_border"]: (selector, vars) => [
    sel(selector, {
      ".pe-button--border.pe-button--disabled": {
        " .pe-button__content": {
          borderColor: vars["color_" + tint + "_disabled_border"],
        }
      },
    })
  ],

  // Icon

  ["color_" + tint + "_icon"]: (selector, vars) => [
    sel(selector, {
      " .pe-button__dropdown": {
        color: vars["color_" + tint + "_icon"]
      },
    })
  ],

  // Separator

  ["color_" + tint + "_separator"]: (selector, vars) => [
    sel(selector, {
      ".pe-button--separator-start": {
        " .pe-button__content": {
          borderColor: vars["color_" + tint + "_separator"]
        }
      }
    })
  ]

});

const hoverTintFns = tint => ({

  ["color_" + tint + "_hover"]: (selector, vars) => [
    sel(selector, {
      color: vars["color_" + tint + "_hover"],
    })
  ],

  ["color_" + tint + "_hover_border"]: (selector, vars) => [
    sel(selector, {
      " .pe-button__content": {
        borderColor: vars["color_" + tint + "_hover_border"],
      },
    })
  ],

  ["color_" + tint + "_wash_background"]: (selector, vars) => [
    sel(selector, {
      " .pe-button__wash": {
        backgroundColor: vars["color_" + tint + "_wash_background"]
      },
    })
  ],

  ["color_" + tint + "_hover_background"]: (selector, vars) => [
    sel(selector, {
      " .pe-button__content": {
        backgroundColor: vars["color_" + tint + "_hover_background"]
      },
    })
  ],

  ["color_" + tint + "_hover_icon"]: (selector, vars) => [
    sel(selector, {
      " .pe-button__dropdown": {
        color: vars["color_" + tint + "_hover_icon"],
      }
    })
  ],

});

const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));

const lightTintHoverFns = hoverTintFns("light");
const darkTintHoverFns = hoverTintFns("dark");

export default createColor({
  varFns: { lightTintFns, darkTintFns, lightTintHoverFns, darkTintHoverFns }
});
