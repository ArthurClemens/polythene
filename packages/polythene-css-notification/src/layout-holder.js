import { vars } from "polythene-theme";
import { flex } from "polythene-core-css";

export default (selector) => [{
  [selector]: [
    flex.layoutCenterCenter,
    {
      // assumes position relative
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      pointerEvents: "none",
      justifyContent: "flex-start", // For IE11

      ".pe-multiple--screen": {
        position: "fixed",
        zIndex: vars.z_notification,
      }
    }
  ],
  ":not(.pe-notification--container) .pe-multiple--container": {
    position: "absolute",
  }
}];
