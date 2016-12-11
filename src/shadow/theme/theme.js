import defaultConfig from './config';
import customConfig from '../../config/custom';
const customConfigFn = customConfig.shadow;
import layout from './layout';
// Does not contain color styles

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

import styler from '../../common/styler';
styler.add('pe-shadow', layout(config));
