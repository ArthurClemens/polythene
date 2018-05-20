import { vars as defaultVars } from "polythene-theme";
import { flex, sel } from "polythene-core-css";

const varFns = {
  general_styles: selector => [
    sel(selector, [
      flex.layoutCenterCenter,
      {
        position: "fixed",
        top: "auto",
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: defaultVars.z_notification,
        pointerEvents: "none",
        justifyContent: "flex-start", // For IE11
        width: "100%",
      }
    ]),
    {
      [`.pe-notification--container ${selector}`]: {
        position: "relative"
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
