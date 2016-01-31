import defaultConfig from 'polythene/list-tile/theme/config';
import {listTile as appConfigFn} from 'polythene/config/custom';
import layout from 'polythene/list-tile/theme/layout';
import color from 'polythene/list-tile/theme/color';

const config = appConfigFn ? appConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-list-tile', layout(config), color(config));
