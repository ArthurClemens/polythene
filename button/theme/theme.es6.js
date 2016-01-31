import defaultConfig from 'polythene/button/theme/config';
import {button as appConfigFn} from 'polythene/config/custom';
import layout from 'polythene/button/theme/layout';
import color from 'polythene/button/theme/color';

const config = appConfigFn ? appConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-button-text', layout(config), color(config));
