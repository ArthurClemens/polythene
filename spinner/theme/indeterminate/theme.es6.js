import defaultConfig from 'polythene/spinner/theme/indeterminate/config';
const customConfigFn = undefined;
import layout from 'polythene/spinner/theme/indeterminate/layout';
import color from 'polythene/spinner/theme/indeterminate/color';

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-spinner-indeterminate', layout(config), color(config));
