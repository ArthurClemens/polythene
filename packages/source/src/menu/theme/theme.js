import defaultConfig from './config';
import customConfig from '../../config/custom';
const customConfigFn = customConfig.menu;
import layout from './layout';
import color from './color';
import styler from '../../common/styler';

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;


styler.add('pe-menu', layout(config), color(config));
