import { appConfig as cfg } from "polythene-theme";

export default {
    sizes: [1, 1.5, 2, 3, 4, 5, 6, 7],
    min_size: 1.5,
    max_size_small_screen: 5,
    size_factor: cfg.grid_unit_menu,
    border_radius: cfg.unit_block_border_radius,

    color_light_background: cfg.rgba(cfg.color_light_background),
    color_dark_background: cfg.rgba(cfg.color_dark_background)
};