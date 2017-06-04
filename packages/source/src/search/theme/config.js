import common from '../../config/config';

const rgba = common.rgba;

const insetSideMargin = 8;

const line_height_input = 20;
const font_size_input = 20;

const inset_height = 48;
const inset_input_indent = 16;
const inset_input_right_padding = 0;
const inset_border_radius = common.unit_block_border_radius;

const fullwidth_side_margin = 0;
const fullwidth_height = 56;
const fullwidth_side_padding = insetSideMargin;
const fullwidth_input_right_padding = 0;
const fullwidth_border_radius = 0;

export default {
    font_size_input,
    line_height_input,

    inset_height,
    inset_input_indent,
    inset_input_right_padding,
    inset_border_radius,

    fullwidth_height,
    fullwidth_side_margin,
    fullwidth_side_padding,
    fullwidth_input_right_padding,
    fullwidth_border_radius,

    color_light_label_text: rgba(common.color_light_foreground, common.blend_light_text_disabled),
    color_light_background: rgba(common.color_light_background),

    color_dark_label_text: rgba(common.color_dark_foreground, common.blend_dark_text_disabled),
    color_dark_background: rgba(common.color_dark_background)
};
