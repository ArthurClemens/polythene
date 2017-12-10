import { vars } from "polythene-theme";
import { flex } from "polythene-core-css";

export default (selector) => [{
  [selector]: [
    flex.layoutCenterCenter,
    {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: vars.z_notification,
      pointerEvents: "none",

      ".pe-multiple--screen": {
        position: "fixed",
        justifyContent: "flex-start", // For IE 11
      }
    }
  ],
  ":not(.pe-notification--container) .pe-multiple--container": {
    position: "absolute",
  }
}];
