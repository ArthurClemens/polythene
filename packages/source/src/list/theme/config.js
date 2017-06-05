import { appConfig as cfg } from "polythene-theme";

const rgba = cfg.rgba;

export default {
    padding: cfg.grid_unit_component,
    padding_compact: cfg.grid_unit_component / 2,
    border_width_stacked: 1,
    border_width_bordered: 1,

    color_light_border: rgba(cfg.color_light_foreground, cfg.blend_light_border_light),
    color_dark_border: rgba(cfg.color_dark_foreground, cfg.blend_dark_border_light)
};
