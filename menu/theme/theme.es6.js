import defaultConfig from 'polythene/menu/theme/config';
import {menu as appConfigFn} from 'polythene/config/custom';
import layout from 'polythene/menu/theme/layout';
import color from 'polythene/menu/theme/color';

const config = appConfigFn ? appConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-menu', layout(config), color(config));
