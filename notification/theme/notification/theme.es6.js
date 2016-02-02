import defaultConfig from 'polythene/notification/theme/notification/config';
import customConfig from 'polythene/config/custom';
const customConfigFn = customConfig.notification;
import layout from 'polythene/notification/theme/notification/layout';
import color from 'polythene/notification/theme/notification/color';

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-notification-notification', layout(config), color(config));
