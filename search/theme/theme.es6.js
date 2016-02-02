import defaultConfig from 'polythene/search/theme/config';
import customConfig from 'polythene/config/custom';
const customConfigFn = customConfig.search;
import layout from 'polythene/search/theme/layout';
import color from 'polythene/search/theme/color';

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-search', layout(config), color(config));
