import common from '../../config/config';

var rgba = common.rgba;

export default {
    border_radius: common.unit_block_border_radius,
    padding: 3 * common.grid_unit_component,
    header_bottom: 20,
    header_height: 60,
    footer_height: 52,

    color_light_content_background: rgba(common.color_light_background),
    color_light_title_text: rgba(common.color_light_foreground, common.blend_light_text_primary),
    color_light_body_text: rgba(common.color_light_foreground, common.blend_light_text_regular),
    color_light_body_border: rgba(common.color_light_foreground, common.blend_light_border_light),
    color_light_backdrop_background: 'rgba(0, 0, 0, .4)',

    color_dark_content_background: rgba(common.color_dark_background),
    color_dark_title_text: rgba(common.color_dark_foreground, common.blend_dark_text_primary),
    color_dark_body_text: rgba(common.color_dark_foreground, common.blend_dark_text_regular),
    color_dark_body_border: rgba(common.color_dark_foreground, common.blend_dark_border_light),
    color_dark_backdrop_background: 'rgba(0, 0, 0, .5)'
};