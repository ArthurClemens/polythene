import defaultConfig from 'polythene/textfield/theme/config';
import customConfig from 'polythene/config/custom';
const customConfigFn = customConfig.textfield;
import layout from 'polythene/textfield/theme/layout';
import color from 'polythene/textfield/theme/color';

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-textfield', layout(config), color(config));
