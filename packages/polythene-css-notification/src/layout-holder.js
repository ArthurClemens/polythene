// @ts-check

import { vars as defaultVars } from "polythene-theme";
import { flex, sel, createLayout } from "polythene-core-css";

const varFns = {
  general_styles: selector => [
    sel(selector, [
      flex.layoutCenterCenter,
      {
        // assumes position relative
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        pointerEvents: "none",
        justifyContent: "flex-start", // For IE 11

        ".pe-multiple--screen": {
          position: "fixed",
          zIndex: defaultVars.z_notification,
        }
      }
    ]),
    {
      ":not(.pe-notification--container) .pe-multiple--container": {
        position: "absolute",
      }
    }
  ],
};

export default createLayout({
  varFns,
});
