import defaultConfig from 'polythene/fab/theme/config';
import customConfig from 'polythene/config/custom';
const customConfigFn = customConfig.fab;
import layout from 'polythene/fab/theme/layout';
import color from 'polythene/fab/theme/color';

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-fab', layout(config), color(config));
