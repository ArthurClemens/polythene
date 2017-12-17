import { vars } from "polythene-theme";

const tabletStyle = componentVars => ({
  width: "100%",
  minWidth: componentVars.min_width + "px",
  maxWidth: componentVars.max_width + "px",
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

  ["@media (min-width: " + vars.breakpoint_for_tablet_landscape_up + "px)"]: {
    [selector]: tabletStyle(componentVars)
  }
}];
