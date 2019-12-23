// @ts-check

import { mixin, flex, sel, createLayout, createMarker } from "polythene-core-css";
import { fullScreen as fullScreenPane } from "polythene-css-dialog-pane";
import { sharedVarFns as shadowVarFns } from "polythene-css-shadow";
import { behaviorVars } from "./vars";

const minWidth = "320px";

/**
 * @param {string} selector 
 * @param {object} vars 
 */
const backdrop = (selector, vars) => // eslint-disable-line no-unused-vars
  sel(selector, {
    "&.pe-dialog-show-start, &.pe-dialog-show-end": {
      " .pe-dialog__backdrop": {
        display: "block",
        opacity: 1,
      }
    }
  });

const fullScreen = (selector, vars) => 
  sel(selector, [
    createMarker(vars, behaviorVars),
    {
      padding: 0,

      " .pe-dialog__content": {
        width: "100%", // for IE 11
      },
    },
    fullScreenPane(selector, vars)
  ]);

const modal = (selector, vars) =>
  sel(selector, [
    createMarker(vars, behaviorVars)
  ]);

const varFns = {
  /**
   * @param {string} selector
   * @param {object} vars 
   */
  general_styles: (selector, vars) => [
    sel(selector, [
      flex.layoutCenterCenter,
      {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: vars.z_index,
        height: "100%", // 100vh would make the dialog go beneath Mobile Safari toolbar        
        transitionProperty: "opacity,background-color,transform",

        ".pe-dialog--full-screen": fullScreen(selector, vars),
        ".pe-dialog--modal": modal(selector, vars),

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
            pointerEvents: "none",
          }
        ],

        ".pe-dialog--backdrop": backdrop(selector, vars),
      }
    ]),
    {
      ".pe-dialog__holder": {
        height: "100%",
        minWidth,
      },
    },
  ],
  animation_show_css: (selector, vars) => [
    sel(`${selector}-show-end`, [
      vars.animation_show_css
    ]),
    sel(`${selector}-hide-start`, [
      vars.animation_show_css
    ]),
  ],
  animation_hide_css: (selector, vars) => [
    sel(`${selector}-show-start`, [
      vars.animation_hide_css
    ]),
    sel(`${selector}-hide-end`, [
      vars.animation_hide_css
    ]),
  ],
  position: (selector, vars) => [
    sel(selector, {
      position: vars.position,
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
  border_radius: (selector, vars) => [
    !vars.full_screen && sel(selector, {
      " .pe-dialog__content": {
        borderTopLeftRadius: vars.border_radius + "px",
        borderTopRightRadius: vars.border_radius + "px",
        borderBottomLeftRadius: vars.border_radius + "px",
        borderBottomRightRadius: vars.border_radius + "px",
      },
    }),
  ],
  // Theme vars
  backdrop: (selector, vars) =>
    vars.backdrop && backdrop(selector, vars),
  full_screen: (selector, vars) =>
    vars.full_screen && fullScreen(selector, vars),
  modal: (selector, vars) =>
    vars.modal && modal(selector, vars),
  // shadow_depth:
  ...shadowVarFns
};

export default createLayout({ varFns });
