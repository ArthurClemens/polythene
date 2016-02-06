import defaultConfig from 'polythene/switch/theme/config';
import customConfig from 'polythene/config/custom';
const customConfigFn = customConfig.switch;
import layout from 'polythene/switch/theme/layout';
import color from 'polythene/switch/theme/color';

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-switch', layout(config), color(config));
