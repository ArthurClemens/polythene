import defaultConfig from 'polythene/spinner/theme/common/config';
import {spinner as appConfigFn} from 'polythene/config/custom';
import layout from 'polythene/spinner/theme/common/layout';
import color from 'polythene/spinner/theme/common/color';

const config = appConfigFn ? appConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-spinner-default', layout(config), color(config));
