import defaultConfig from './config';
import customConfig from '../../config/custom';
var customConfigFn = customConfig.button;
import layout from './layout';
import color from './color';
import styler from '../../common/styler';

var config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

styler.add('pe-button-text', layout(config), color(config));