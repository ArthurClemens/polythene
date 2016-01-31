import defaultConfig from 'polythene/search/theme/config';
import {menu as appConfigFn} from 'polythene/config/custom';
import layout from 'polythene/search/theme/layout';
import color from 'polythene/search/theme/color';

const config = appConfigFn ? appConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-search', layout(config), color(config));
