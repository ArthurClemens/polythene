import common from '../../../config/config';
var rgba = common.rgba;

export default {
    size_small: 24,
    size_regular: 32,
    size_medium: 40,
    size_large: 48,
    size_fab: 56,

    color_light_raised_background: rgba(common.color_light_background),
    // also use light background with dark theme
    color_dark_raised_background: rgba(common.color_light_background)
};