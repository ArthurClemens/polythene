import defaultConfig from 'polythene/toolbar/theme/config';
import {toolbar as appConfigFn} from 'polythene/config/custom';
import layout from 'polythene/toolbar/theme/layout';
import color from 'polythene/toolbar/theme/color';

const config = appConfigFn ? appConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-toolbar', layout(config), color(config));
