import defaultConfig from './config';
import customConfig from '../../config/custom';
var customConfigFn = customConfig.list;
import layout from './layout';
import color from './color';
import styler from '../../common/styler';

var config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

styler.add('pe-list', layout(config), color(config));