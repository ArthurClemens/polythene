import defaultConfig from 'polythene/spinner/theme/ios/config';
import {spinner as appConfigFn} from 'polythene/config/custom';
import layout from 'polythene/spinner/theme/ios/layout';
import color from 'polythene/spinner/theme/ios/color';

const config = appConfigFn ? appConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-spinner-ios', layout(config), color(config));
