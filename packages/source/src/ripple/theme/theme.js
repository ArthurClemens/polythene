import defaultConfig from './config';
import customConfig from '../../config/custom';
const customConfigFn = customConfig.ripple;
import layout from './layout';
// Does not contain color styles
import styler from '../../common/styler';

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

styler.add('pe-ripple', layout(config));
