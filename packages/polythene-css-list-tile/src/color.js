import { sel, createColor } from "polythene-core-css";

const generalFns = ({
  general_styles: selector => [
    sel(selector, {
      ".pe-list-tile--header": {
        " .pe-list-tile__primary, pe-list-tile__secondary": {
          backgroundColor: "inherit"
        }
      },
      ":not(.pe-list-tile--disabled):not(.pe-list-tile--selected)": {
        " a.pe-list-tile__primary:focus, a.pe-list-tile__secondary:focus": {
          outline: "none",
          backgroundColor: "inherit"
        }
      },
      "&.pe-list-tile--sticky": {
        backgroundColor: "inherit"
      },
    })
  ],
});

const tintFns = tint => ({
  ["color_" + tint + "_title"]: (selector, vars) => [
    sel(selector, {
      color: vars["color_" + tint + "_title"],
    })
  ],
  ["color_" + tint + "_background"]: (selector, vars) => [
    sel(selector, {
      backgroundColor: vars["color_" + tint + "_background"],

      "&.pe-list-tile--sticky": {
        backgroundColor: vars["color_" + tint + "_background"]
      },
    })
  ],
  ["color_" + tint + "_list_header"]: (selector, vars) => [
    sel(selector, {
      ".pe-list-tile--header": {
        color: vars["color_" + tint + "_list_header"],
      },
    })
  ],
  ["color_" + tint + "_subtitle"]: (selector, vars) => [
    sel(selector, {
      " .pe-list-tile__subtitle": {
        color: vars["color_" + tint + "_subtitle"]
      },
    })
  ],
  ["color_" + tint + "_secondary"]: (selector, vars) => [
    sel(selector, {
      " .pe-list-tile__secondary": {
        color: vars["color_" + tint + "_secondary"]
      },
    })
  ],
  ["color_" + tint + "_front"]: (selector, vars) => [
    sel(selector, {
      " .pe-list-tile__content-front": {
        color: vars["color_" + tint + "_front"]
      },
    })
  ],
  ["color_" + tint + "_text_disabled"]: (selector, vars) => [
    sel(selector, {
      ".pe-list-tile--disabled": {
        "&, .pe-list-tile__title, .pe-list-tile__content, .pe-list-tile__subtitle": {
          color: vars["color_" + tint + "_text_disabled"]
        }
      },
    })
  ],
  ["color_" + tint + "_selected_background"]: (selector, vars) => [
    sel(selector, {
      ".pe-list-tile--selected": {
        " .pe-list-tile__primary, pe-list-tile__secondary": {
          backgroundColor: vars["color_" + tint + "_selected_background"]
        }
      },
    })
  ],
  ["color_" + tint + "_selected_text"]: (selector, vars) => [
    sel(selector, {
      ".pe-list-tile--selected": {
        "&, .pe-list-tile__title, .pe-list-tile__content, .pe-list-tile__subtitle": {
          color: vars["color_" + tint + "_selected_text"]
        }
      },
    })
  ],
  ["color_" + tint + "_highlight_background"]: (selector, vars) => [
    sel(selector, {
      ".pe-list-tile--highlight:not(.pe-list-tile--selected)": {
        " .pe-list-tile__primary, pe-list-tile__secondary": {
          backgroundColor: vars["color_" + tint + "_highlight_background"]
        }
      },
    })
  ],
  ["color_" + tint + "_focus_background"]: (selector, vars) => [
    sel(selector, {
      ":not(.pe-list-tile--disabled):not(.pe-list-tile--selected)": {
        " a.pe-list-tile__primary:focus, a.pe-list-tile__secondary:focus": {
          backgroundColor: vars["color_" + tint + "_focus_background"]
        }
      }
    })
  ],
});

const hoverTintFns = tint => ({
  ["color_" + tint + "_hover"]: (selector, vars) => [
    sel(selector, {
      ".pe-list-tile--hoverable:not(.pe-list-tile--selected)": {
        color: vars["color_" + tint + "_hover"],
      }
    })
  ],
  ["color_" + tint + "_hover_background"]: (selector, vars) => [
    sel(selector, {
      ".pe-list-tile--hoverable:not(.pe-list-tile--selected)": {
        " .pe-list-tile__primary, .pe-list-tile__secondary": {
          backgroundColor: vars["color_" + tint + "_hover_background"]
        },
      }
    })
  ],
  ["color_" + tint + "_hover_front"]: (selector, vars) => [
    sel(selector, {
      ".pe-list-tile--hoverable:not(.pe-list-tile--selected)": {
        " .pe-list-tile__primary .pe-list-tile__content-front": {
          color: vars["color_" + tint + "_hover_front"]
        },
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
