import defaultConfig from 'polythene/notification/theme/snackbar/config';
import customConfig from 'polythene/config/custom';
const customConfigFn = customConfig.snackbar;
import layout from 'polythene/notification/theme/snackbar/layout';
import color from 'polythene/notification/theme/snackbar/color';

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-notification-snackbar', layout(config), color(config));
