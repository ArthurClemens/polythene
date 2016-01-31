import defaultConfig from 'polythene/slider/theme/config';
import {slider as appConfigFn} from 'polythene/config/custom';
import layout from 'polythene/slider/theme/layout';
import color from 'polythene/slider/theme/color';

const config = appConfigFn ? appConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-slider', layout(config), color(config));
