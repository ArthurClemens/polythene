import defaultConfig from 'polythene/shadow/theme/config';
import {shadow as appConfigFn} from 'polythene/config/custom';
import layout from 'polythene/shadow/theme/layout';
// Does not contain color styles

const config = appConfigFn ? appConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-shadow', layout(config));
