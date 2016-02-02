import defaultConfig from 'polythene/spinner/theme/determinate/config';
const customConfigFn = undefined;
import layout from 'polythene/spinner/theme/determinate/layout';
import color from 'polythene/spinner/theme/determinate/color';

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-spinner-determinate', layout(config), color(config));
