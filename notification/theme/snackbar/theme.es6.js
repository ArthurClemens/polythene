import defaultConfig from 'polythene/notification/theme/snackbar/config';
import {snackbar as appConfigFn} from 'polythene/config/custom';
import layout from 'polythene/notification/theme/snackbar/layout';
import color from 'polythene/notification/theme/snackbar/color';

const config = appConfigFn ? appConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-notification-snackbar', layout(config), color(config));
