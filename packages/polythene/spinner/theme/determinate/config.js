var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import '../../../common/object.assign';
import common from '../../../config/config';
import defaultConfig from '../../../spinner/theme/common/config';

export default _extends({}, defaultConfig, {
    border_width_small: defaultConfig.size_small / defaultConfig.size_regular * 3,
    border_width_regular: 3,
    border_width_medium: defaultConfig.size_medium / defaultConfig.size_regular * 3,
    border_width_large: defaultConfig.size_large / defaultConfig.size_regular * 3,
    border_width_fab: defaultConfig.size_fab / defaultConfig.size_regular * 3,

    color_light: common.rgba(common.color_primary),
    color_dark: common.rgba(common.color_primary)
});