import '../../common/object.assign';
import common from '../../config/config';

var padding = (common.grid_unit_icon_button - common.unit_icon_size) / 2; // 12
var padding_compact = (common.grid_unit_icon_button - common.unit_icon_size) / 3; // 8

export default {
  padding: padding,
  padding_compact: padding_compact,

  color_light_wash_opacity: common.blend_light_background_hover_medium,
  color_light_focus_opacity: common.blend_light_background_hover_medium,
  color_light_flat_normal_text: common.rgba(common.color_light_foreground, common.blend_light_text_secondary),

  color_dark_wash_opacity: common.blend_dark_background_hover_medium,
  color_dark_focus_opacity: common.blend_dark_background_hover_medium,
  color_dark_flat_normal_text: common.rgba(common.color_dark_foreground, common.blend_dark_text_secondary)
};