import { vars } from "polythene-theme";
import { vars as selectionControlVars } from "polythene-core-selection-control";
import { vars as iconButtonVars } from "polythene-core-icon-button";

const rgba = (colorStr, opacity = 1) =>
  `rgba(${colorStr}, ${opacity})`;

export default Object.assign(
  {},
  selectionControlVars,
  {
    general_styles:  true,

    animation_duration:                 vars.animation_duration,
    hit_area_padding:                   (vars.grid_unit_icon_button - vars.unit_icon_size) / 2, // 12
    icon_button_padding:                iconButtonVars.padding,
    padding:                            vars.grid_unit_component,
    thumb_size:                         20,
    track_height:                       14,
    track_length:                       36,

    color_light_thumb_on:               rgba(vars.color_primary),
    color_light_thumb_off:              "#f1f1f1",
    color_light_thumb_disabled:         "#eee",
    color_light_wash_on:                rgba(vars.color_primary, vars.blend_light_background_active),
    color_light_wash_off:               iconButtonVars.color_light_wash,

    color_light_track_on:               rgba(vars.color_primary_faded),
    color_light_track_on_opacity:       .55,
    color_light_track_off:              rgba(vars.color_light_foreground, vars.blend_light_text_regular),
    color_light_track_off_opacity:      .55,
    color_light_track_disabled:         rgba(vars.color_light_foreground, vars.blend_light_background_disabled),
    color_light_track_disabled_opacity: 1,

    // icon color may be set in theme; default "currentcolor"
    // color_light_icon_on:                   "currentcolor",
    // color_light_icon_off:                  "currentcolor",

    // color_light_focus_on and so on taken from selectionControlVars

    color_dark_thumb_on:                rgba(vars.color_primary),
    color_dark_thumb_off:               "#bdbdbd",
    color_dark_thumb_disabled:          "#555",
    color_dark_wash_on:                 rgba(vars.color_primary, vars.blend_dark_background_active),
    color_dark_wash_off:                iconButtonVars.color_dark_wash,

    color_dark_track_on:                rgba(vars.color_primary_faded, vars.blend_dark_text_tertiary), // or "#5a7f7c"
    color_dark_track_on_opacity:        9,
    color_dark_track_off:               "#717171",
    color_dark_track_off_opacity:       .55,
    color_dark_track_disabled:          "#717171",
    color_dark_track_disabled_opacity:  .3,

    // icon color may be set in theme; default "currentcolor"
    // color_dark_icon_on:                    "currentcolor"
    // color_dark_icon_off:                   "currentcolor"

    // color_dark_focus_on and so on taken from selectionControlVars
  }
);
