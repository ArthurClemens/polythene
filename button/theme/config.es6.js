import common from 'polythene/config/config';

const rgba = common.rgba;

const touch_height = common.unit_touch_height;
const height = 36;

export default {
    margin_h: common.grid_unit,
    border_radius: common.unit_item_border_radius,
    font_size: 14,
    font_weight: 500,
    outer_padding_v: (touch_height - height) / 2,
    padding_h: 2 * common.grid_unit,
    padding_v: 11,
    min_width: 8 * common.grid_unit_component,
    text_transform: 'uppercase',
    border_width: 0, // no border in MD, but used to correctly set the height when a theme does set a border

    color_light_flat_normal_background: 'transparent',
    color_light_flat_normal_text: rgba(common.color_light_foreground, common.blend_light_text_primary),
    color_light_flat_hover_background: rgba(common.color_light_foreground, common.blend_light_background_hover),
    color_light_flat_active_background: rgba(common.color_light_foreground, common.blend_light_background_active),
    color_light_flat_disabled_background: 'transparent',
    color_light_flat_disabled_text: rgba(common.color_light_foreground, common.blend_light_text_disabled),

    // border colors  may be set in theme; disabled by default
    // color_light_flat_normal_border: 'transparent',
    // color_light_flat_hover_border: 'transparent',
    // color_light_flat_active_border: 'transparent',
    // color_light_flat_disabled_border: 'transparent',

    color_light_raised_normal_background: '#E0E0E0',
    color_light_raised_normal_text: rgba(common.color_light_foreground, common.blend_light_text_primary),
    color_light_raised_hover_background: 'transparent',
    color_light_raised_active_background: rgba(common.color_light_foreground, common.blend_light_background_hover), // same as hover
    color_light_raised_disabled_background: rgba(common.color_light_foreground, common.blend_light_background_disabled),
    color_light_raised_disabled_text: rgba(common.color_light_foreground, common.blend_light_text_disabled),

    color_dark_flat_normal_background: 'transparent',
    color_dark_flat_normal_text: rgba(common.color_dark_foreground, common.blend_dark_text_primary),
    color_dark_flat_hover_background: rgba(common.color_dark_foreground, common.blend_dark_background_hover),
    color_dark_flat_active_background: rgba(common.color_dark_foreground, common.blend_dark_background_active),
    color_dark_flat_disabled_background: 'transparent',
    color_dark_flat_disabled_text: rgba(common.color_dark_foreground, common.blend_dark_text_disabled),

    // border colors  may be set in theme; disabled by default
    // color_dark_flat_normal_border: 'transparent',
    // color_dark_flat_hover_border: 'transparent',
    // color_dark_flat_active_border: 'transparent',
    // color_dark_flat_disabled_border: 'transparent',

    color_dark_raised_normal_background: rgba(common.color_primary),
    color_dark_raised_normal_text: rgba(common.color_dark_foreground, common.blend_dark_text_primary),
    color_dark_raised_hover_background: common.color_primary_active,
    color_dark_raised_active_background: common.color_primary_dark,
    color_dark_raised_disabled_background: rgba(common.color_dark_foreground, common.blend_dark_background_disabled),
    color_dark_raised_disabled_text: rgba(common.color_dark_foreground, common.blend_dark_text_disabled)
};
