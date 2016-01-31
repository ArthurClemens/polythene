import defaultConfig from 'polythene/radio-button/theme/config';
import {checkbox as appConfigFn} from 'polythene/config/custom';
import layout from 'polythene/radio-button/theme/layout';
import color from 'polythene/radio-button/theme/color';

const config = appConfigFn ? appConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-radio-button', layout(config), color(config));

// default icons
import iconOff from 'polythene/radio-button/theme/icon-off';
import iconOn from 'polythene/radio-button/theme/icon-on';

export default {
    iconOff,
    iconOn
};
