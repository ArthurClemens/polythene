import defaultConfig from 'polythene/icon-button/theme/config';
import customConfig from 'polythene/config/custom';
const customConfigFn = customConfig['icon-button'];
import layout from 'polythene/icon-button/theme/layout';
import color from 'polythene/icon-button/theme/color';

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-icon-button', layout(config), color(config));
