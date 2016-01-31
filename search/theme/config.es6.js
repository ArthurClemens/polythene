import 'polythene/common/object.assign';
import common from 'polythene/config/config';

const rgba = common.rgba;

const insetSideMargin = 8;

const line_height_input = 20;
const font_size_input = 20;

const inset_height = 48;
const inset_input_padding_v = ((inset_height - line_height_input) / 2);
const inset_side_padding = (2 * common.grid_unit_component - 12) - insetSideMargin; // make text align with toolbar label
const inset_input_indent = 16;
const inset_input_right_padding = 0;
const inset_border_radius = common.unit_block_border_radius;

const fullwidth_side_margin = 0;
const fullwidth_height = 56;
const fullwidth_input_padding_v = ((fullwidth_height - line_height_input) / 2);
const fullwidth_side_padding = insetSideMargin;
const fullwidth_input_indent = (common.unit_indent - fullwidth_side_padding) - common.grid_unit_icon_button;
const fullwidth_input_right_padding = 0;
const fullwidth_border_radius = 0;

export default {
    font_size_input,
    line_height_input,

    inset_height,
    inset_input_padding_v,
    inset_side_padding,
    inset_input_indent,
    inset_input_right_padding,
    inset_border_radius,

    fullwidth_height,
    fullwidth_side_margin,
    fullwidth_input_padding_v,
    fullwidth_side_padding,
    fullwidth_input_indent,
    fullwidth_input_right_padding,
    fullwidth_border_radius,

    color_light_label_text: rgba(common.color_light_foreground, common.blend_light_text_disabled),
    color_light_background: rgba(common.color_light_background),

    color_dark_label_text: rgba(common.color_dark_foreground, common.blend_dark_text_disabled),
    color_dark_background: rgba(common.color_dark_background)
};
