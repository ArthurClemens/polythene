import defaultConfig from 'polythene/header-panel/theme/config';
import customConfig from 'polythene/config/custom';
const customConfigFn = customConfig['header-panel'];
import layout from 'polythene/header-panel/theme/layout';
// Does not contain color styles

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-header-panel', layout(config));
