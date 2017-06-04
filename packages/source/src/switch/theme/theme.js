import defaultConfig from './config';
import customConfig from '../../config/custom';
const customConfigFn = customConfig.switch;
import layout from './layout';
import color from './color';
import styler from '../../common/styler';

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

styler.add('pe-switch', layout(config), color(config));
