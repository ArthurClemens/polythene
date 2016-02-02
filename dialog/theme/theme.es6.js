import defaultConfig from 'polythene/dialog/theme/config';
import customConfig from 'polythene/config/custom';
const customConfigFn = customConfig.dialog;
import layout from 'polythene/dialog/theme/layout';
import color from 'polythene/dialog/theme/color';

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-dialog', layout(config), color(config));
