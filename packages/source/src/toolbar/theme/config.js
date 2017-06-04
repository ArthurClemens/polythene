import common from '../../config/config';

const margin_side = 2 * common.grid_unit_component - 12; // (buttonSize - iconSize) / 2 = (48 - 24) / 2
const height_desktop = common.grid_unit_component * 8; // 64
const height_mobile_portrait = common.grid_unit_component * 7; // 56
const height_mobile_landscape = common.grid_unit_component * 6; // 48

export default {
    margin_side,
    indent: common.unit_indent,
    transition_duration: common.animation_duration,
    font_size: common.font_size_title,
    line_height: common.line_height,

    height_desktop,
    height_mobile_portrait,
    height_mobile_landscape,

    height_normal: height_desktop,
    height_medium_tall: 2 * height_desktop,
    height_tall: 3 * height_desktop,
    height_narrow: height_mobile_portrait,
    height_narrow_medium_tall: 112,
    height_narrow_tall: 168,

    color_light_text: common.rgba(common.color_light_foreground, common.blend_light_text_primary),
    color_dark_text: common.rgba(common.color_dark_foreground, common.blend_dark_text_primary)
};
