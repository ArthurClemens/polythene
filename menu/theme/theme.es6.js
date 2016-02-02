import defaultConfig from 'polythene/menu/theme/config';
import customConfig from 'polythene/config/custom';
const customConfigFn = customConfig.menu;
import layout from 'polythene/menu/theme/layout';
import color from 'polythene/menu/theme/color';

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-menu', layout(config), color(config));
