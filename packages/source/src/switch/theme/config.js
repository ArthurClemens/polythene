import '../../common/object.assign';
import selectionControlConfig from '../../selection-control/theme/config'; // Note the generic config
import iconButtonConfig from '../../icon-button/theme/config';
import common from '../../config/config';

const rgba = common.rgba;
const hit_area_padding = (common.grid_unit_icon_button - common.unit_icon_size) / 2; // 12

const config = Object.assign({}, selectionControlConfig, {
    track_height: 14,
    track_length: 36,
    thumb_size: 20,
    padding: 1 * common.grid_unit_component,
    icon_button_padding: iconButtonConfig.padding,
    hit_area_padding,

    animation_duration: '.18s',

    color_light_thumb_on: rgba(common.color_primary),
    color_light_thumb_off: '#f1f1f1',
    color_light_thumb_disabled: '#bdbdbd',

    color_light_track_on: rgba(common.color_primary_faded),
    color_light_track_on_opacity: .55,
    color_light_track_off: rgba(common.color_light_foreground, common.blend_light_text_regular),
    color_light_track_off_opacity: .55,
    color_light_track_disabled: rgba(common.color_light_foreground, common.blend_light_background_disabled),
    color_light_track_disabled_opacity: 1,

    // color_light_focus_on and so on taken from selectionControlConfig

    color_dark_thumb_on: rgba(common.color_primary), // or '#80cbc4'
    color_dark_thumb_off: '#bdbdbd',
    color_dark_thumb_disabled: '#555',

    color_dark_track_on: rgba(common.color_primary_faded, common.blend_dark_text_tertiary), // or '#5a7f7c'
    color_dark_track_on_opacity: .9,
    color_dark_track_off: '#717171',
    color_dark_track_off_opacity: .55,
    color_dark_track_disabled: '#717171',
    color_dark_track_disabled_opacity: .3

    // color_dark_focus_on and so on taken from selectionControlConfig
});

export default config;
