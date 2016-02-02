import defaultConfig from 'polythene/list/theme/config';
import customConfig from 'polythene/config/custom';
const customConfigFn = customConfig.list;
import layout from 'polythene/list/theme/layout';
import color from 'polythene/list/theme/color';

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-list', layout(config), color(config));
