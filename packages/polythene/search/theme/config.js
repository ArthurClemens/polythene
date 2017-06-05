import { appConfig as cfg } from "polythene-theme";

var rgba = cfg.rgba;

var insetSideMargin = 8;

var line_height_input = 20;
var font_size_input = 20;

var inset_height = 48;
var inset_input_indent = 16;
var inset_input_right_padding = 0;
var inset_border_radius = cfg.unit_block_border_radius;

var fullwidth_side_margin = 0;
var fullwidth_height = 56;
var fullwidth_side_padding = insetSideMargin;
var fullwidth_input_right_padding = 0;
var fullwidth_border_radius = 0;

export default {
    font_size_input: font_size_input,
    line_height_input: line_height_input,

    inset_height: inset_height,
    inset_input_indent: inset_input_indent,
    inset_input_right_padding: inset_input_right_padding,
    inset_border_radius: inset_border_radius,

    fullwidth_height: fullwidth_height,
    fullwidth_side_margin: fullwidth_side_margin,
    fullwidth_side_padding: fullwidth_side_padding,
    fullwidth_input_right_padding: fullwidth_input_right_padding,
    fullwidth_border_radius: fullwidth_border_radius,

    color_light_label_text: rgba(cfg.color_light_foreground, cfg.blend_light_text_disabled),
    color_light_background: rgba(cfg.color_light_background),

    color_dark_label_text: rgba(cfg.color_dark_foreground, cfg.blend_dark_text_disabled),
    color_dark_background: rgba(cfg.color_dark_background)
};