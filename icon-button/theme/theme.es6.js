import defaultConfig from 'polythene/icon-button/theme/config';
import {iconButton as appConfigFn} from 'polythene/config/custom';
import layout from 'polythene/icon-button/theme/layout';
import color from 'polythene/icon-button/theme/color';

const config = appConfigFn ? appConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-icon-button', layout(config), color(config));
