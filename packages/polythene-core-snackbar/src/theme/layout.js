import { vars } from "polythene-theme";

const tabletStyle = componentVars => ({
  width: "100%",
  minWidth: componentVars.tablet_min_width + "px",
  maxWidth: componentVars.tablet_max_width + "px",
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  borderTopLeftRadius: vars.unit_block_border_radius + "px",
  borderTopRightRadius: vars.unit_block_border_radius + "px",

  ".pe-notification--horizontal": {
    " .pe-notification__title": {
      paddingRight: "30px"
    }
  }
});

export default (selector, componentVars) => [{
  [selector]: {
    minHeight: componentVars.min_height
  },

  ["@media (min-width: " + vars.breakpoint_small_handset_landscape + "px)"]: {
    [selector]: tabletStyle(componentVars)
  }
}];
