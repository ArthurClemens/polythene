function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import mixin from '../../common/mixin';

var style = function style(config, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty({}, scope + '.pe-list-tile', {
        ' .pe-list-tile__title': {
            color: config['color_' + tint + '_title']
        },

        '&.pe-list__header': {
            'background-color': 'inherit',

            ' .pe-list-tile__title': {
                color: config['color_' + tint + '_list_header']
            }
        },

        ' .pe-list-tile__content, .pe-list-tile__subtitle': {
            color: config['color_' + tint + '_subtitle']
        },

        '&.pe-list-tile--disabled': {
            '&, .pe-list-tile__title, .pe-list-tile__content, .pe-list-tile__subtitle': {
                color: config['color_' + tint + '_text_disabled']
            }
        },
        '&.pe-list-tile--selected': {
            'background-color': config['color_' + tint + '_background_selected']
        }
    })];
};

var noTouch = function noTouch(config, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty({}, scope + '.pe-list-tile', {
        '&:not(.pe-list__header):not(.pe-list-tile--disabled):hover': {
            'background-color': config['color_' + tint + '_background_hover']
        }
    })];
};

var createStyles = function createStyles(config) {
    return [style(config, 'light'), {
        'html.pe-no-touch': [noTouch(config, 'light', ' .pe-list--hoverable'), noTouch(config, 'light', ' .pe-list--hoverable ')]
    }, {
        '.pe-dark-theme': [
        // inside dark theme
        style(config, 'dark', ' '),
        // has dark theme
        style(config, 'dark', '&')]
    }, {
        'html.pe-no-touch .pe-dark-theme': [noTouch(config, 'dark', ' .pe-list-tile--hoverable'), noTouch(config, 'dark', '.pe-list--hoverable '), noTouch(config, 'dark', ' .pe-list--hoverable ')],
        'html.pe-no-touch .pe-list--hoverable .pe-dark-theme': noTouch(config, 'dark')
    }];
};

export default (function (config) {
    return mixin.createStyles(config, createStyles);
});