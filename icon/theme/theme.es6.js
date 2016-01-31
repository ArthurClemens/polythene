import defaultConfig from 'polythene/icon/theme/config';
import {headerPanel as appConfigFn} from 'polythene/config/custom';
import layout from 'polythene/icon/theme/layout';
// Does not contain color styles

const config = appConfigFn ? appConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-icon', layout(config));
