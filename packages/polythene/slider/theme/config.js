import { appConfig as cfg } from "polythene-theme";

var rgba = cfg.rgba;
var lightForeground = cfg.color_light_foreground;
var darkForeground = cfg.color_dark_foreground;
var activeColor = cfg.color_primary; // or override in CSS by setting 'color' property on '.pe-slider'

var thumb_size = 12;
var thumb_touch_size = Math.max(40, thumb_size);
var thumb_border_width = 2;
var active_thumb_scale = 3 / 2;
var disabled_thumb_scale = 2 / 3;
var active_pin_thumb_scale = 2 / 6;
var largestThumbSize = active_thumb_scale * thumb_size;
var largestElement = Math.max(thumb_touch_size, largestThumbSize);
var height = Math.max(52, largestThumbSize);
var side_spacing = Math.max(10, largestElement / 2 - thumb_size / 2);
var horizontal_layout_side_spacing = side_spacing + 4; // optimization for horizontal layout

export default {
    height: height,
    side_spacing: side_spacing,
    horizontal_layout_side_spacing: horizontal_layout_side_spacing,
    thumb_size: thumb_size,
    thumb_touch_size: thumb_touch_size,
    track_height: height,
    bar_height: 2,
    thumb_border_width: thumb_border_width,
    active_thumb_scale: active_thumb_scale,
    animation_duration: cfg.animation_duration,
    disabled_thumb_scale: disabled_thumb_scale,
    active_pin_thumb_scale: active_pin_thumb_scale,

    step_width: 2,
    pin_height: 32,
    pin_width: 26,
    pin_font_size: 10,

    color_light_track_active: rgba(lightForeground, .38),
    color_light_track_inactive: rgba(lightForeground, .26),
    color_light_track_value: rgba(activeColor),
    color_light_thumb_off: rgba(lightForeground, .26),
    color_light_thumb_off_focus: rgba(lightForeground),
    color_light_thumb_off_focus_opacity: .08,
    color_light_thumb_on: rgba(activeColor),
    color_light_thumb_on_focus_opacity: .11,
    color_light_tick: rgba(lightForeground, 1),
    color_light_icon: cfg.rgba(cfg.color_light_foreground, cfg.blend_light_text_secondary),
    color_light_disabled_icon: cfg.rgba(cfg.color_light_foreground, cfg.blend_light_text_disabled),
    color_light_label: cfg.rgba(cfg.color_light_foreground, cfg.blend_light_text_secondary),
    color_light_disabled_label: cfg.rgba(cfg.color_light_foreground, cfg.blend_light_text_disabled),

    color_dark_track_active: rgba(darkForeground, 0.3),
    color_dark_track_inactive: rgba(darkForeground, 0.2),
    color_dark_track_value: rgba(activeColor),
    color_dark_thumb_off: rgba(darkForeground, 0.2),
    color_dark_thumb_off_focus: rgba(darkForeground),
    color_dark_thumb_off_focus_opacity: .08,
    color_dark_thumb_on: rgba(activeColor),
    color_dark_thumb_on_focus_opacity: .11,
    color_dark_tick: rgba(darkForeground, 1),
    color_dark_icon: cfg.rgba(cfg.color_dark_foreground, cfg.blend_dark_text_secondary),
    color_dark_disabled_icon: cfg.rgba(cfg.color_dark_foreground, cfg.blend_dark_text_disabled),
    color_dark_label: cfg.rgba(cfg.color_dark_foreground, cfg.blend_dark_text_secondary),
    color_dark_disabled_label: cfg.rgba(cfg.color_dark_foreground, cfg.blend_dark_text_disabled)
};