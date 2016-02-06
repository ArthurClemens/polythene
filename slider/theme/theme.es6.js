import defaultConfig from 'polythene/slider/theme/config';
import customConfig from 'polythene/config/custom';
const customConfigFn = customConfig.slider;
import layout from 'polythene/slider/theme/layout';
import color from 'polythene/slider/theme/color';

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-slider', layout(config), color(config));
