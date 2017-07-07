import { vars } from "polythene-theme";
import { vars as notificationVars } from "polythene-core-notification";

const rgba = vars.rgba;

export default Object.assign(
  {},
  notificationVars,
  {
    border_radius:          0,
    tablet_min_width:       288,
    tablet_max_width:       568,
    min_height:             0,
    
    color_dark_background:  rgba(vars.color_dark_background)
  }
);
