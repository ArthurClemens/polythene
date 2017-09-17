import { vars } from "polythene-theme";

const iconSizesPx = (size = vars.unit_icon_size) => ({
  width:  size + "px",
  height: size + "px"
});

export default (selector, componentVars) => [{
  [selector]: {
    display: "inline-block",
    verticalAlign: "middle",
    backgroundRepeat: "no-repeat",
    position: "relative",
    fontSize: 0,
    lineHeight: 0,

    ".pe-icon--avatar img": {
      border: "none",
      borderRadius: "50%",
      width: "inherit",
      height: "inherit"
    },

    " img": {
      height: "inherit"
    },

    " .pe-svg, .pe-svg > div": { /* React creates an additional div when wrapping an SVG */
      width: "inherit",
      height: "inherit"
    },

    ".pe-icon--small":   iconSizesPx(componentVars.size_small),
    ".pe-icon--regular": iconSizesPx(componentVars.size_regular),
    ".pe-icon--medium":  iconSizesPx(componentVars.size_medium),
    ".pe-icon--large":   iconSizesPx(componentVars.size_large)
  }
}];
