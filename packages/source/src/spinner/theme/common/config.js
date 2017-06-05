import { appConfig as cfg } from "polythene-theme";

const rgba = cfg.rgba;

export default {
    size_small: 24,
    size_regular: 32,
    size_medium: 40,
    size_large: 48,
    size_fab: 56,

    color_light_raised_background: rgba(cfg.color_light_background),
    // also use light background with dark theme
    color_dark_raised_background: rgba(cfg.color_light_background)
};
