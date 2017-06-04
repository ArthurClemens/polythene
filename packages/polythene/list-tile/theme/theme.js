import defaultConfig from './config';
import customConfig from '../../config/custom';
var customConfigFn = customConfig['list-tile'];
import layout from './layout';
import color from './color';
import styler from '../../common/styler';

var config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

styler.add('pe-list-tile', layout(config), color(config));