import defaultConfig from 'polythene/tabs/theme/config';
import {tabs as appConfigFn} from 'polythene/config/custom';
import layout from 'polythene/tabs/theme/layout';
import color from 'polythene/tabs/theme/color';

const config = appConfigFn ? appConfigFn(defaultConfig) : defaultConfig;

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
