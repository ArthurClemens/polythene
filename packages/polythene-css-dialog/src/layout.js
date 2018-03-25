import { vars } from "polythene-theme";
import { flex } from "polythene-core-css";

export default (selector, componentVars) => [{
  ".pe-dialog__holder": {
    height: "100%"
  },
  [selector]: [
    flex.layoutCenterCenter,
    componentVars.animation_hide_css,
    {
      position: componentVars.position,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: vars.z_dialog,
      height: "100%", // 100vh would make the dialog go beneath Mobile Safari toolbar
      padding: componentVars.padding_vertical + "px " + componentVars.padding_horizontal + "px",

      transitionDelay: componentVars.animation_delay,
      transitionDuration: componentVars.animation_duration,
      transitionTimingFunction: componentVars.animation_timing_function,
      transitionProperty: "all",

      ".pe-dialog--visible": [
        componentVars.animation_show_css,
      ],

      ".pe-dialog--full-screen": {
        padding: 0,

        " .pe-dialog__content": {
          width: "100%", // for IE11
        }

        // dialog-content styles: see dialog pane
      },

      " .pe-dialog__content": {
        position: "relative",
        transitionProperty: "all",
        borderRadius: componentVars.border_radius + "px",
      },

      " .pe-dialog__backdrop": [
        {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }
      ], 
    }
  ],
  
  // The idea is to prevent scrolling of the background, but
  // Mobile Safari won't let that,
  // and Windows browsers will show a jump to the right because the scrollbar disappears.
  // So in all *something* gets broken when trying this.

  // " body.pe-dialog--open": {
  //   overflow: "hidden",
  //   left: 0,
  //   "-webkit-overflow-scrolling": "touch",
  //   top: 0,
  //   width: "100%"
  // }
}];
