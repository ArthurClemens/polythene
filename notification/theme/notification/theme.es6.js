import defaultConfig from 'polythene/notification/theme/notification/config';
import {notification as appConfigFn} from 'polythene/config/custom';
import layout from 'polythene/notification/theme/notification/layout';
import color from 'polythene/notification/theme/notification/color';

const config = appConfigFn ? appConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-notification-notification', layout(config), color(config));
