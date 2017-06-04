import defaultConfig from './config';
import customConfig from '../../../config/custom';
const customConfigFn = customConfig.snackbar;
import layout from './layout';
import color from './color';
import styler from '../../../common/styler';

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

styler.add('pe-notification-snackbar', layout(config), color(config));
