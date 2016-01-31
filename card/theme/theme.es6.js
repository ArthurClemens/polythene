import defaultConfig from 'polythene/card/theme/config';
import {card as appConfigFn} from 'polythene/config/custom';
import layout from 'polythene/card/theme/layout';
import color from 'polythene/card/theme/color';

const config = appConfigFn ? appConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-card', layout(config), color(config));
