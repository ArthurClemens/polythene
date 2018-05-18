import { flex } from "polythene-core-css";
import { vars as themeVars } from "polythene-theme";

const sel = (selector, o) => ({
  [selector]: o
});

const varFns = {
  general_styles: selector => [
    sel(selector, [
      flex.layoutCenterCenter,
      {
        
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: themeVars.z_dialog,
        height: "100%", // 100vh would make the dialog go beneath Mobile Safari toolbar        
        transitionProperty: "all",

        ".pe-dialog--full-screen": {
          padding: 0,

          " .pe-dialog__content": {
            width: "100%", // for IE11
          }
        },

        " .pe-dialog__content": {
          position: "relative",
          transitionProperty: "all",
        },

        " .pe-dialog__backdrop": {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }, 
      }
    ]),
    {
      ".pe-dialog__holder": {
        height: "100%"
      },
    }
  ],
  animation_hide_css: (selector, vars) => [
    sel(selector, [
      vars.animation_hide_css
    ]),
  ],
  position: (selector, vars) => [
    sel(selector, {
      position: vars.position,
    }),
  ],
  padding_vertical: (selector, vars) => [
    sel(selector, {
      paddingTop: vars.padding_vertical + "px",
      paddingBottom: vars.padding_vertical + "px",
    }),
  ],
  padding_horizontal: (selector, vars) => [
    sel(selector, {
      paddingLeft: vars.padding_horizontal + "px",
      paddingRight: vars.padding_horizontal + "px",
    }),
  ],
  animation_delay: (selector, vars) => [
    sel(selector, {
      transitionDelay: vars.animation_delay,
    }),
  ],
  animation_duration: (selector, vars) => [
    sel(selector, {
      transitionDuration: vars.animation_duration,
    }),
  ],
  animation_timing_function: (selector, vars) => [
    sel(selector, {
      transitionTimingFunction: vars.animation_timing_function,
    }),
  ],
  animation_show_css: (selector, vars) => [
    sel(selector, {
      ".pe-dialog--visible": vars.animation_show_css,
    }),
  ],
  border_radius: (selector, vars) => [
    sel(selector, {
      " .pe-dialog__content": {
        borderRadius: vars.border_radius + "px",
      },
    }),
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
