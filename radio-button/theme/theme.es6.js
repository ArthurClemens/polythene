import defaultConfig from 'polythene/radio-button/theme/config';
import customConfig from 'polythene/config/custom';
const customConfigFn = customConfig['radio-button'];
import layout from 'polythene/radio-button/theme/layout';
import color from 'polythene/radio-button/theme/color';

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-radio-button', layout(config), color(config));

// default icons
import iconOff from 'polythene/radio-button/theme/icon-off';
import iconOn from 'polythene/radio-button/theme/icon-on';

export default {
    iconOff,
    iconOn
};
