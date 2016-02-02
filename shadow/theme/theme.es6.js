import defaultConfig from 'polythene/shadow/theme/config';
import customConfig from 'polythene/config/custom';
const customConfigFn = customConfig.shadow;
import layout from 'polythene/shadow/theme/layout';
// Does not contain color styles

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-shadow', layout(config));
