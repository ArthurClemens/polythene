import defaultConfig from 'polythene/card/theme/config';
import customConfig from 'polythene/config/custom';
const customConfigFn = customConfig.card;
import layout from 'polythene/card/theme/layout';
import color from 'polythene/card/theme/color';

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-card', layout(config), color(config));
