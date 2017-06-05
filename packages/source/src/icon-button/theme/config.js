import '../../common/object.assign';
import { appConfig as cfg } from "polythene-theme";

const padding = (cfg.grid_unit_icon_button - cfg.unit_icon_size) / 2; // 12
const padding_compact = (cfg.grid_unit_icon_button - cfg.unit_icon_size) / 3; // 8

export default {
  padding,
  padding_compact,

  color_light_wash_opacity: cfg.blend_light_background_hover_medium,
  color_light_focus_opacity: cfg.blend_light_background_hover_medium,
  color_light_flat_normal_text: cfg.rgba(cfg.color_light_foreground, cfg.blend_light_text_secondary),

  color_dark_wash_opacity: cfg.blend_dark_background_hover_medium,
  color_dark_focus_opacity: cfg.blend_dark_background_hover_medium,
  color_dark_flat_normal_text: cfg.rgba(cfg.color_dark_foreground, cfg.blend_dark_text_secondary)
};
