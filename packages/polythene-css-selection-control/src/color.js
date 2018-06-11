import { sel, createColor } from "polythene-core-css";

const generalFns = ({
  general_styles: selector => [
    sel(selector, {
      " .pe-control__box": {
        " .pe-control__button": {
          color: "inherit",
        },
        " .pe-control__button--on": {
          color: "inherit"
        },    
      }
    })
  ],
});

const tintFns = tint => ({
  ["color_" + tint + "_on"]: (selector, vars) => [
    sel(selector, {
      color: vars["color_" + tint + "_on"], // override by specifying "color"
    })
  ],
  ["color_" + tint + "_off"]: (selector, vars) => [
    sel(selector, {
      " .pe-control__button--off": {
        color: vars["color_" + tint + "_off"]
      } 
    })
  ],
  ["color_" + tint + "_disabled"]: (selector, vars) => [
    sel(selector, {
      ".pe-control--disabled": {
        " .pe-control__label": {
          color: vars["color_" + tint + "_disabled"]
        },
        " .pe-control__box": {
          " .pe-control__button--on, .pe-control__button--off": {
            color: vars["color_" + tint + "_disabled"]
          }
        }
      }
    })
  ],
  ["color_" + tint + "_label"]: (selector, vars) => [
    sel(selector, {
      " .pe-control__label": {
        color: vars["color_" + tint + "_label"]
      },
    })
  ],
  ["color_" + tint + "_on_icon"]: (selector, vars) => [
    sel(selector, {
      " .pe-control__box": {
        " .pe-control__button--on": {
          color: vars["color_" + tint + "_on_icon"]
        },
      }
    })
  ],
  ["color_" + tint + "_off_icon"]: (selector, vars) => [
    sel(selector, {
      " .pe-control__box": {
        " .pe-control__button--off": {
          color: vars["color_" + tint + "_off_icon"]
        }
      }
    })
  ],
  ["color_" + tint + "_focus_on"]: (selector, vars) => [
    sel(selector, {
      ".pe-control--on": {
        " .pe-button--focus .pe-button__focus": {
          backgroundColor: vars["color_" + tint + "_focus_on"]
        },
      },
    })
  ],
  ["color_" + tint + "_focus_off"]: (selector, vars) => [
    sel(selector, {
      ".pe-control--off": {
        " .pe-button--focus .pe-button__focus": {
          backgroundColor: vars["color_" + tint + "_focus_off"]
        },
      },
    })
  ],
  ["color_" + tint + "_focus_on_opacity"]: (selector, vars) => [
    sel(selector, {
      ".pe-control--on": {
        " .pe-button--focus .pe-button__focus": {
          opacity: vars["color_" + tint + "_focus_on_opacity"],
        },
      },
    })
  ],
  ["color_" + tint + "_focus_off_opacity"]: (selector, vars) => [
    sel(selector, {
      ".pe-control--off": {
        " .pe-button--focus .pe-button__focus": {
          opacity: vars["color_" + tint + "_focus_off_opacity"],
        },
      },
    })
  ],
  ["color_" + tint + "_on_label"]: (selector, vars) => [
    sel(selector, {
      ".pe-control--on": {
        " .pe-control__label": {
          color: vars["color_" + tint + "_on_label"]
        },
      },
    })
  ],
  ["color_" + tint + "_off_label"]: (selector, vars) => [
    sel(selector, {
      ".pe-control--off": {
        " .pe-control__label": {
          color: vars["color_" + tint + "_off_label"]
        },
      },
    })
  ],

});

const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));

export default createColor({
  varFns: { lightTintFns, darkTintFns }
});
