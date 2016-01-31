import defaultConfig from 'polythene/switch/theme/config';
import {checkbox as appConfigFn} from 'polythene/config/custom';
import layout from 'polythene/switch/theme/layout';
import color from 'polythene/switch/theme/color';

const config = appConfigFn ? appConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-switch', layout(config), color(config));
