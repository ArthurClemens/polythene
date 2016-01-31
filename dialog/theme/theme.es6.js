import defaultConfig from 'polythene/dialog/theme/config';
import {dialog as appConfigFn} from 'polythene/config/custom';
import layout from 'polythene/dialog/theme/layout';
import color from 'polythene/dialog/theme/color';

const config = appConfigFn ? appConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-dialog', layout(config), color(config));
