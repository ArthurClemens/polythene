import { vars } from "polythene-theme";
import { flex } from "polythene-css";

export default (selector) => [{
  [selector]: [
    flex.layoutCenterCenter,
    {
      top: "auto",
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: vars.z_notification,
      pointerEvents: "none",

      ".pe-multiple--screen": {
        position: "fixed",
      },
      ".pe-multiple--container": {
        position: "absolute",
      }
    }
  ]
}];
