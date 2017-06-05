var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import '../../common/object.assign';
import selectionControlConfig from '../../selection-control/theme/config'; // Note the generic config
import iconButtonConfig from '../../icon-button/theme/config';
import { appConfig as cfg } from "polythene-theme";

var rgba = cfg.rgba;
var hit_area_padding = (cfg.grid_unit_icon_button - cfg.unit_icon_size) / 2; // 12

var config = _extends({}, selectionControlConfig, {
    track_height: 14,
    track_length: 36,
    thumb_size: 20,
    padding: 1 * cfg.grid_unit_component,
    icon_button_padding: iconButtonConfig.padding,
    hit_area_padding: hit_area_padding,

    animation_duration: '.18s',

    color_light_thumb_on: rgba(cfg.color_primary),
    color_light_thumb_off: '#f1f1f1',
    color_light_thumb_disabled: '#bdbdbd',

    color_light_track_on: rgba(cfg.color_primary_faded),
    color_light_track_on_opacity: .55,
    color_light_track_off: rgba(cfg.color_light_foreground, cfg.blend_light_text_regular),
    color_light_track_off_opacity: .55,
    color_light_track_disabled: rgba(cfg.color_light_foreground, cfg.blend_light_background_disabled),
    color_light_track_disabled_opacity: 1,

    // color_light_focus_on and so on taken from selectionControlConfig

    color_dark_thumb_on: rgba(cfg.color_primary), // or '#80cbc4'
    color_dark_thumb_off: '#bdbdbd',
    color_dark_thumb_disabled: '#555',

    color_dark_track_on: rgba(cfg.color_primary_faded, cfg.blend_dark_text_tertiary), // or '#5a7f7c'
    color_dark_track_on_opacity: .9,
    color_dark_track_off: '#717171',
    color_dark_track_off_opacity: .55,
    color_dark_track_disabled: '#717171',
    color_dark_track_disabled_opacity: .3

    // color_dark_focus_on and so on taken from selectionControlConfig
});

export default config;