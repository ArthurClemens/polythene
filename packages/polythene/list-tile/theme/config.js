import common from '../../config/config';

var rgba = common.rgba;

// SPECS
// heights:
// single line: 48
// single line, dense: 40
// single line, with icon: 48
// single line, with icon, dense: 40
// single line, with avatar: 56
// single line, with avatar, dense: 48
// two-line: 72
// two-line, dense: 60
// three-line: 88
// three-line, dense: 76


var single_height = 48;
var padding = 8;
var single_with_icon_height = 56;

export default {
    single_height: single_height,
    single_line_height: single_height - 2 * padding - (2 * 5 + 1),
    single_with_icon_height: single_with_icon_height,
    single_with_icon_line_height: single_with_icon_height - 2 * padding - (2 * 5 + 1),
    padding: 13,
    compact_padding: 9,
    subtitle_line_count: 1,
    has_subtitle_padding: 15,
    high_subtitle_line_count: 2,
    has_high_subtitle_padding: 13,
    front_item_width: 72,
    side_padding: 2 * common.grid_unit_component,
    font_size_title: 16,
    font_size_subtitle: 14,
    line_height_subtitle: 20,
    font_size_list_header: 14,
    font_size_small: 12,

    color_light_title: rgba(common.color_light_foreground, common.blend_light_text_primary),
    color_light_subtitle: rgba(common.color_light_foreground, common.blend_light_text_secondary),
    color_light_info: rgba(common.color_light_foreground, common.blend_light_text_tertiary),
    color_light_text_disabled: rgba(common.color_light_foreground, common.blend_light_text_disabled),
    color_light_list_header: rgba(common.color_light_foreground, common.blend_light_text_tertiary),
    color_light_background_hover: rgba(common.color_light_foreground, common.blend_light_background_hover),
    color_light_background_selected: rgba(common.color_light_foreground, common.blend_light_background_hover),

    color_dark_title: rgba(common.color_dark_foreground, common.blend_dark_text_primary),
    color_dark_subtitle: rgba(common.color_dark_foreground, common.blend_dark_text_secondary),
    color_dark_info: rgba(common.color_dark_foreground, common.blend_dark_text_tertiary),
    color_dark_text_disabled: rgba(common.color_dark_foreground, common.blend_dark_text_disabled),
    color_dark_list_header: rgba(common.color_dark_foreground, common.blend_dark_text_tertiary),
    color_dark_background_hover: rgba(common.color_dark_foreground, common.blend_dark_background_hover),
    color_dark_background_selected: rgba(common.color_dark_foreground, common.blend_dark_background_hover)
};