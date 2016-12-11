'use strict';

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _custom = require('../../config/custom');

var _custom2 = _interopRequireDefault(_custom);

var _layout = require('./layout');

var _layout2 = _interopRequireDefault(_layout);

var _styler = require('../../common/styler');

var _styler2 = _interopRequireDefault(_styler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customConfigFn = _custom2.default.shadow;

// Does not contain color styles

var config = customConfigFn ? customConfigFn(_config2.default) : _config2.default;

_styler2.default.add('pe-shadow', (0, _layout2.default)(config));
//# sourceMappingURL=theme.js.map