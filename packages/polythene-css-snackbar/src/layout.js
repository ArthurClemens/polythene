import { vars } from "polythene-theme";

const tabletStyle = componentVars => ({
  " .pe-notification__content": {
    borderTopLeftRadius: vars.unit_block_border_radius + "px",
    borderTopRightRadius: vars.unit_block_border_radius + "px",
    minWidth: componentVars.min_width + "px",
    maxWidth: componentVars.max_width + "px",
  },
  ".pe-notification--horizontal": {
    " .pe-notification__title": {
      paddingRight: "30px"
    }
  }
});

export default (selector, componentVars) => [{
  [selector]: {
    width: "100%",
    opacity: 1,
    
    " .pe-notification__content": {
      width: "100%",
      margin: "0 auto",
      borderRadius: 0,      
    }
  },

  ["@media (min-width: " + vars.breakpoint_for_tablet_portrait_up + "px)"]: {
    [selector]: tabletStyle(componentVars)
  }
}];
