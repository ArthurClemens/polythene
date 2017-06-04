import defaultConfig from '../../card/theme/config';
import customConfig from '../../config/custom';
var customConfigFn = customConfig.card;
import layout from '../../card/theme/layout';
import color from '../../card/theme/color';
import styler from '../../common/styler';

var config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;
styler.add('pe-card', layout(config), color(config));