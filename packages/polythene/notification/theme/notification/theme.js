import defaultConfig from './config';
import customConfig from '../../../config/custom';
var customConfigFn = customConfig.notification;
import layout from './layout';
import color from './color';
import styler from '../../../common/styler';

var config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

styler.add('pe-notification-notification', layout(config), color(config));