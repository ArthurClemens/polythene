import defaultConfig from 'polythene/button/theme/config';
import customConfig from 'polythene/config/custom';
const customConfigFn = customConfig.button;
import layout from 'polythene/button/theme/layout';
import color from 'polythene/button/theme/color';

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-button-text', layout(config), color(config));
