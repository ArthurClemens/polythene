import defaultConfig from './config';
import customConfig from '../../config/custom';
var customConfigFn = customConfig.slider;
import layout from './layout';
import color from './color';
import styler from '../../common/styler';

var config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

styler.add('pe-slider', layout(config), color(config));