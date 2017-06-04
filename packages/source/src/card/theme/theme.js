import defaultConfig from '../../card/theme/config';
import customConfig from '../../config/custom';
const customConfigFn = customConfig.card;
import layout from '../../card/theme/layout';
import color from '../../card/theme/color';
import styler from '../../common/styler';

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;
styler.add('pe-card', layout(config), color(config));
