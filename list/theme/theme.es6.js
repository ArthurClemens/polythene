import defaultConfig from 'polythene/list/theme/config';
import {list as appConfigFn} from 'polythene/config/custom';
import layout from 'polythene/list/theme/layout';
import color from 'polythene/list/theme/color';

const config = appConfigFn ? appConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-list', layout(config), color(config));
