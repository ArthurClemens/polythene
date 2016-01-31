import defaultConfig from 'polythene/spinner/theme/determinate/config';
import {spinner as appConfigFn} from 'polythene/config/custom';
import layout from 'polythene/spinner/theme/determinate/layout';
import color from 'polythene/spinner/theme/determinate/color';

const config = appConfigFn ? appConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-spinner-determinate', layout(config), color(config));
