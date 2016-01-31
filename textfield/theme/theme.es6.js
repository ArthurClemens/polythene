import defaultConfig from 'polythene/textfield/theme/config';
import {menu as appConfigFn} from 'polythene/config/custom';
import layout from 'polythene/textfield/theme/layout';
import color from 'polythene/textfield/theme/color';

const config = appConfigFn ? appConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-textfield', layout(config), color(config));
