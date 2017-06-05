function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { appConfig } from "polythene-theme";
import mixin from '../../common/mixin';

var shadowDirective = function shadowDirective(dir) {
    return mixin.vendorize({
        'box-shadow': dir
    }, appConfig.prefixes_box_shadow);
};

var createStyles = function createStyles(config) {
    return [{
        '.pe-shadow': [mixin.fit(), {
            'border-radius': 'inherit',
            'pointer-events': 'none',

            ' .pe-shadow__bottom, .pe-shadow__top': [mixin.fit(), {
                'border-radius': 'inherit'
            }],

            '&.pe-shadow--animated': {
                ' .pe-shadow__bottom, .pe-shadow__top': mixin.vendorize({
                    'transition': config.transition
                }, appConfig.prefixes_transition)
            }
        }, [1, 2, 3, 4, 5].map(function (index) {
            var _ref;

            return _ref = {}, _defineProperty(_ref, ' .pe-shadow__top.pe-shadow--z-' + index, shadowDirective(config['shadow-top-z-' + index])), _defineProperty(_ref, ' .pe-shadow__bottom.pe-shadow--z-' + index, shadowDirective(config['shadow-bottom-z-' + index])), _ref;
        })]
    }];
};

export default (function (config) {
    return mixin.createStyles(config, createStyles);
});