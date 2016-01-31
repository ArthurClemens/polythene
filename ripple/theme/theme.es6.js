import defaultConfig from 'polythene/ripple/theme/config';
import {ripple as appConfigFn} from 'polythene/config/custom';
import layout from 'polythene/ripple/theme/layout';
// Does not contain color styles

const config = appConfigFn ? appConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-ripple', layout(config));
