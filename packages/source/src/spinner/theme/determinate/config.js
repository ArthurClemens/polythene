import '../../../common/object.assign';
import { appConfig as cfg } from "polythene-theme";
import defaultConfig from '../common/config';

export default Object.assign({}, defaultConfig, {
    border_width_small: defaultConfig.size_small / defaultConfig.size_regular * 3,
    border_width_regular: 3,
    border_width_medium: defaultConfig.size_medium / defaultConfig.size_regular * 3,
    border_width_large: defaultConfig.size_large / defaultConfig.size_regular * 3,
    border_width_fab: defaultConfig.size_fab / defaultConfig.size_regular * 3,

    color_light: cfg.rgba(cfg.color_primary),
    color_dark: cfg.rgba(cfg.color_primary)
});
