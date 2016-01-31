import defaultConfig from 'polythene/checkbox/theme/config';
import {checkbox as appConfigFn} from 'polythene/config/custom';
import layout from 'polythene/checkbox/theme/layout';
import color from 'polythene/checkbox/theme/color';

const config = appConfigFn ? appConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-checkbox', layout(config), color(config));

// default icons
import iconOff from 'polythene/checkbox/theme/icon-off';
import iconOn from 'polythene/checkbox/theme/icon-on';

export default {
    iconOff,
    iconOn
};
