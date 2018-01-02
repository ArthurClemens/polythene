import { vars } from "polythene-theme";
import { vars as notificationVars } from "polythene-core-notification";

const rgba = (colorStr, opacity = 1) =>
  `rgba(${colorStr}, ${opacity})`;

export default Object.assign(
  {},
  notificationVars,
  {
    border_radius:   0,
    min_width:       288,
    max_width:       568,
    min_height:      0,
    
    color_dark_background: rgba(vars.color_dark_background)
  }
);
