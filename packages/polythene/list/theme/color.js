function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import mixin from '../../common/mixin';

var style = function style(config, tint) {
    var _ref;

    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [(_ref = {}, _defineProperty(_ref, scope + '.pe-list', {
        '&.pe-list--borders': {
            ' .pe-list-tile:not(.pe-list__header)': {
                '&:not(:last-child)': {
                    'border-color': config['color_' + tint + '_border']
                }
            }
        },

        '&.pe-list--borders-indented': {
            ' .pe-list-tile:not(.pe-list__header)': {
                ' .pe-list-tile__content:not(.pe-list-tile__content--front)': {
                    'border-color': config['color_' + tint + '_border']
                }
            }
        }
    }), _defineProperty(_ref, ' .pe-list + .pe-list', {
        'border-color': config['color_' + tint + '_border']
    }), _ref)];
};

var createStyles = function createStyles(config) {
    return [style(config, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style(config, 'dark', ' '),
        // has dark theme
        style(config, 'dark', '&')]
    }];
};

export default (function (config) {
    return mixin.createStyles(config, createStyles);
});