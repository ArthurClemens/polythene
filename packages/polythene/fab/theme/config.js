import { appConfig as cfg } from "polythene-theme";

var rgba = cfg.rgba;

export default {
    size_regular: 7 * cfg.grid_unit_component,
    size_mini: 5 * cfg.grid_unit_component,
    padding_regular: 2 * cfg.grid_unit_component,

    color_light_background: rgba(cfg.color_primary),
    color_light_text: rgba(cfg.color_primary_foreground),

    color_dark_background: rgba(cfg.color_primary),
    color_dark_text: rgba(cfg.color_primary_foreground)
};