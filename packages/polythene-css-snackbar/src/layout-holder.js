import { vars } from "polythene-theme";
import { flex } from "polythene-core-css";

export default (selector) => [{
  [selector]: [
    flex.layoutCenterCenter,
    {
      position: "fixed",
      top: "auto",
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: vars.z_notification,
      pointerEvents: "none",
      justifyContent: "flex-start", // For IE11
      width: "100%",
    }
  ],

  [`.pe-notification--container ${selector}`]: {
    position: "relative"
  }

}];
