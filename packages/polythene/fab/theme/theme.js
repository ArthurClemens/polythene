import defaultConfig from './config';
import customConfig from '../../config/custom';
var customConfigFn = customConfig.fab;
import layout from './layout';
import color from './color';
import styler from '../../common/styler';

var config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

styler.add('pe-fab', layout(config), color(config));