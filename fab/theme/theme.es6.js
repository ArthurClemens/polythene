import defaultConfig from 'polythene/fab/theme/config';
import {fab as appConfigFn} from 'polythene/config/custom';
import layout from 'polythene/fab/theme/layout';
import color from 'polythene/fab/theme/color';

const config = appConfigFn ? appConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-fab', layout(config), color(config));
