import 'polythene/common/object.assign';
import common from 'polythene/config/config';
import buttonConfig from 'polythene/button/theme/config';

const padding = (common.grid_unit_icon_button - common.unit_icon_size) / 2; // 12
const padding_compact = (common.grid_unit_icon_button - common.unit_icon_size) / 3; // 8

export default Object.assign({}, buttonConfig, {
    padding,
    padding_compact,

    color_light_wash_opacity: common.blend_light_background_hover_medium,
    color_light_flat_normal_text: common.rgba(common.color_light_foreground, common.blend_light_text_secondary),

    color_dark_wash_opacity: common.blend_dark_background_hover_medium,
    color_dark_flat_normal_text: common.rgba(common.color_dark_foreground, common.blend_dark_text_secondary)
});
