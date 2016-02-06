import defaultConfig from 'polythene/spinner/theme/ios/config';
const customConfigFn = undefined;
import layout from 'polythene/spinner/theme/ios/layout';
import color from 'polythene/spinner/theme/ios/color';

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-spinner-ios', layout(config), color(config));
