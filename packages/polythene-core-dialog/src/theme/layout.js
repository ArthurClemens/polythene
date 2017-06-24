import { vars } from "polythene-theme";
import { flex } from "polythene-core-css";

export default (selector, componentVars) => [{
  [selector]: [
    flex.layoutCenterCenter,
    {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: vars.z_dialog,
      height: "100%", // 100vh would make the dialog go beneath Mobile Safari toolbar
      padding: componentVars.padding + "px 40px",

      ".pe-dialog--fullscreen": {
        padding: 0,

        // dialog-content styles: see dialog pane
      },

      " .pe-dialog__content": {
        position: "relative",
        borderRadius: componentVars.border_radius + "px",
      }
    }
  ],
  // " body.pe-dialog--open": {
  //   overflow: "hidden",
  //   left: 0,
  //   "-webkit-overflow-scrolling": "touch",
  //   top: 0,
  //   width: "100%"
  // }
}];
