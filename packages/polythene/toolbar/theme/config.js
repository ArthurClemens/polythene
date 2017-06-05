import { appConfig as cfg } from "polythene-theme";

var margin_side = 2 * cfg.grid_unit_component - 12; // (buttonSize - iconSize) / 2 = (48 - 24) / 2
var height_desktop = cfg.grid_unit_component * 8; // 64
var height_mobile_portrait = cfg.grid_unit_component * 7; // 56
var height_mobile_landscape = cfg.grid_unit_component * 6; // 48

export default {
    margin_side: margin_side,
    indent: cfg.unit_indent,
    transition_duration: cfg.animation_duration,
    font_size: cfg.font_size_title,
    line_height: cfg.line_height,

    height_desktop: height_desktop,
    height_mobile_portrait: height_mobile_portrait,
    height_mobile_landscape: height_mobile_landscape,

    height_normal: height_desktop,
    height_medium_tall: 2 * height_desktop,
    height_tall: 3 * height_desktop,
    height_narrow: height_mobile_portrait,
    height_narrow_medium_tall: 112,
    height_narrow_tall: 168,

    color_light_text: cfg.rgba(cfg.color_light_foreground, cfg.blend_light_text_primary),
    color_dark_text: cfg.rgba(cfg.color_dark_foreground, cfg.blend_dark_text_primary)
};