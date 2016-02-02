import defaultConfig from 'polythene/list-tile/theme/config';
import customConfig from 'polythene/config/custom';
const customConfigFn = customConfig['list-tile'];
import layout from 'polythene/list-tile/theme/layout';
import color from 'polythene/list-tile/theme/color';

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-list-tile', layout(config), color(config));
