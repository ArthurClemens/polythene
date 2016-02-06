import defaultConfig from 'polythene/icon/theme/config';
import customConfig from 'polythene/config/custom';
const customConfigFn = customConfig.icon;
import layout from 'polythene/icon/theme/layout';
// Does not contain color styles

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-icon', layout(config));
