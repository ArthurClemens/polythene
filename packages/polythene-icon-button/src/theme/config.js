import { appConfig } from "polythene-config";
import { buttonConfig } from "polythene-button";

const padding = (appConfig.grid_unit_icon_button - appConfig.unit_icon_size) / 2; // 12
const padding_compact = (appConfig.grid_unit_icon_button - appConfig.unit_icon_size) / 3; // 8

export default Object.assign(
  {},
  buttonConfig,
  {
    padding,
    padding_compact,

    color_light_wash_opacity: appConfig.blend_light_background_hover_medium,
    color_light_focus_opacity: appConfig.blend_light_background_hover_medium,
    color_light_flat_normal_text: appConfig.rgba(appConfig.color_light_foreground, appConfig.blend_light_text_secondary),

    color_dark_wash_opacity: appConfig.blend_dark_background_hover_medium,
    color_dark_focus_opacity: appConfig.blend_dark_background_hover_medium,
    color_dark_flat_normal_text: appConfig.rgba(appConfig.color_dark_foreground, appConfig.blend_dark_text_secondary)
  }
);
