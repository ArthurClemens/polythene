import { vars as defaultVars } from "polythene-theme";
import { flex } from "polythene-core-css";

const sel = (selector, o) => ({
  [selector]: o
});

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
