import common from 'polythene/config/config';
const rgba = common.rgba;

export default {
    size_small: 24,
    size: 32,
    size_medium: 40,
    size_large: 48,
    size_fab: 56,

    floating_padding: (common.grid_unit_icon_button - common.unit_icon_size) / 2, // 12

    color_light_raised_background: rgba(common.color_light_background),
    // also use light background with dark theme
    color_dark_raised_background: rgba(common.color_light_background)
};
