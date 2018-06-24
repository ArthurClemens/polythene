import { mixin, flex, sel, createLayout } from "polythene-core-css";
import { vars as themeVars } from "polythene-theme";
import { fullScreen } from "polythene-css-dialog-pane";

const minWidth = "320px";

const backdrop = selector =>
  sel(selector, {
    ".pe-dialog--visible .pe-dialog__backdrop": {
      display: "block",
      opacity: 1,
    }
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
        transitionProperty: "opacity,background-color",

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

        " .pe-dialog__backdrop": [
          mixin.defaultTransition("all"), // animation duration is set in component options
          {
            position: "absolute",
            opacity: 0,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "none",
          }
        ],

        ".pe-dialog--backdrop": backdrop(selector),
      }
    ]),
    {
      ".pe-dialog__holder": {
        height: "100%",
        minWidth,
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
    !vars.full_screen && sel(selector, {
      paddingTop: vars.padding_vertical + "px",
      paddingBottom: vars.padding_vertical + "px",
    }),
  ],
  padding_horizontal: (selector, vars) => [
    !vars.full_screen && sel(selector, {
      paddingLeft: vars.padding_horizontal + "px",
      paddingRight: vars.padding_horizontal + "px",
    }),
  ],
  animation_delay: (selector, vars) => [
    sel(selector, {
      "&, .pe-dialog__content": {
        transitionDelay: vars.animation_delay,
      }
    }),
  ],
  animation_duration: (selector, vars) => [
    sel(selector, {
      "&, .pe-dialog__content": {
        transitionDuration: vars.animation_duration,
      }
    }),
  ],
  animation_timing_function: (selector, vars) => [
    sel(selector, {
      "&, .pe-dialog__content": {
        transitionTimingFunction: vars.animation_timing_function,
      }
    }),
  ],
  animation_show_css: (selector, vars) => [
    sel(selector, {
      ".pe-dialog--visible": vars.animation_show_css,
    }),
  ],
  border_radius: (selector, vars) => [
    !vars.full_screen && sel(selector, {
      " .pe-dialog__content": {
        borderRadius: vars.border_radius + "px",
      },
    }),
  ],
  full_screen: (selector, vars) => [
    vars.full_screen && fullScreen(selector)
  ],
  backdrop: (selector, vars) => [
    vars.backdrop && backdrop(selector)
  ],
};

export default createLayout({ varFns });
