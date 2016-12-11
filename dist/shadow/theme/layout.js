'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _config = require('../../config/config');

var _config2 = _interopRequireDefault(_config);

var _mixin = require('../../common/mixin');

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var shadowDirective = function shadowDirective(dir) {
    return _mixin2.default.vendorize({
        'box-shadow': dir
    }, _config2.default.prefixes_box_shadow);
};

var createStyles = function createStyles(config) {
    return [{
        '.pe-shadow': [_mixin2.default.fit(), {
            'border-radius': 'inherit',
            'pointer-events': 'none',

            ' .pe-shadow__bottom, .pe-shadow__top': [_mixin2.default.fit(), {
                'border-radius': 'inherit'
            }],

            '&.pe-shadow--animated': {
                ' .pe-shadow__bottom, .pe-shadow__top': _mixin2.default.vendorize({
                    'transition': config.transition
                }, _config2.default.prefixes_transition)
            }
        }, [1, 2, 3, 4, 5].map(function (index) {
            var _ref;

            return _ref = {}, (0, _defineProperty3.default)(_ref, ' .pe-shadow__top.pe-shadow--z-' + index, shadowDirective(config['shadow-top-z-' + index])), (0, _defineProperty3.default)(_ref, ' .pe-shadow__bottom.pe-shadow--z-' + index, shadowDirective(config['shadow-bottom-z-' + index])), _ref;
        })]
    }];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};

module.exports = exports['default'];
//# sourceMappingURL=layout.js.map