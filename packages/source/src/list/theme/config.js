import common from '../../config/config';

const rgba = common.rgba;

export default {
    padding: common.grid_unit_component,
    padding_compact: common.grid_unit_component / 2,
    border_width_stacked: 1,
    border_width_bordered: 1,

    color_light_border: rgba(common.color_light_foreground, common.blend_light_border_light),
    color_dark_border: rgba(common.color_dark_foreground, common.blend_dark_border_light)
};
