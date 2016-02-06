import defaultConfig from 'polythene/toolbar/theme/config';
import customConfig from 'polythene/config/custom';
const customConfigFn = customConfig.toolbar;
import layout from 'polythene/toolbar/theme/layout';
import color from 'polythene/toolbar/theme/color';

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-toolbar', layout(config), color(config));
