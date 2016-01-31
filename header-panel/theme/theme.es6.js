import defaultConfig from 'polythene/header-panel/theme/config';
import {headerPanel as appConfigFn} from 'polythene/config/custom';
import layout from 'polythene/header-panel/theme/layout';
// Does not contain color styles

const config = appConfigFn ? appConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-header-panel', layout(config));
