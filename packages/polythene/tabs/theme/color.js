function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import mixin from '../../common/mixin';

var style = function style(config, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty({}, scope + '.pe-tabs', {
        ' .pe-tabs__tab.pe-button--selected': {
            color: config['color_' + tint + '_selected_text'],

            ' .pe-button__content': {
                background: config['color_' + tint + '_selected_background']
            }
        },
        ' .pe-tabs__tab:not(.pe-button--selected) .pe-icon': {
            color: config['color_' + tint + '_icon']
        },
        ' .pe-tabs__indicator': {
            'background-color': config['color_' + tint + '_tab_indicator']
        }
    })];
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