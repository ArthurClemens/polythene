import defaultConfig from 'polythene/checkbox/theme/config';
import customConfig from 'polythene/config/custom';
const customConfigFn = customConfig.checkbox;
import layout from 'polythene/checkbox/theme/layout';
import color from 'polythene/checkbox/theme/color';

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-checkbox', layout(config), color(config));

// default icons
import iconOff from 'polythene/checkbox/theme/icon-off';
import iconOn from 'polythene/checkbox/theme/icon-on';

export default {
    iconOff,
    iconOn
};
