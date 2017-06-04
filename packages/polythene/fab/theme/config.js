import common from '../../config/config';

var rgba = common.rgba;

export default {
    size_regular: 7 * common.grid_unit_component,
    size_mini: 5 * common.grid_unit_component,
    padding_regular: 2 * common.grid_unit_component,

    color_light_background: rgba(common.color_primary),
    color_light_text: rgba(common.color_primary_foreground),

    color_dark_background: rgba(common.color_primary),
    color_dark_text: rgba(common.color_primary_foreground)
};