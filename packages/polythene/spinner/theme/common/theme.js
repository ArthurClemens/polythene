import defaultConfig from './config';
import customConfig from '../../../config/custom';
var customConfigFn = customConfig.spinner;
import layout from './layout';
import color from './color';
import styler from '../../../common/styler';

var config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

styler.add('pe-spinner-default', layout(config), color(config));