import defaultConfig from 'polythene/tabs/theme/config';
import customConfig from 'polythene/config/custom';
const customConfigFn = customConfig.tabs;
import layout from 'polythene/tabs/theme/layout';
import color from 'polythene/tabs/theme/color';

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-tabs', layout(config), color(config));

// default icons
import arrowBackward from 'polythene/tabs/theme/chevron-left';
import arrowForward from 'polythene/tabs/theme/chevron-right';

export default {
    arrowBackward: {
        msvg: arrowBackward
    },
    arrowForward: {
        msvg: arrowForward
    }
};
