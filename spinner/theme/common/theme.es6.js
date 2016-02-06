import defaultConfig from 'polythene/spinner/theme/common/config';
import customConfig from 'polythene/config/custom';
const customConfigFn = customConfig.spinner;
import layout from 'polythene/spinner/theme/common/layout';
import color from 'polythene/spinner/theme/common/color';

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-spinner-default', layout(config), color(config));
