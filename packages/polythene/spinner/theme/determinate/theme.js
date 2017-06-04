import defaultConfig from './config';
var customConfigFn = undefined;
import layout from './layout';
import color from './color';
import styler from '../../../common/styler';

var config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

styler.add('pe-spinner-determinate', layout(config), color(config));