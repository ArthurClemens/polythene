'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

var _iconButton = require('polythene/icon-button/icon-button');

var _iconButton2 = _interopRequireDefault(_iconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Helper function for checkbox and radio button


var CSS_CLASSES = {
    box: 'pe-control__box',
    button: 'pe-control__button',
    buttonOn: 'pe-control__button--on',
    buttonOff: 'pe-control__button--off'
};

var createIcon = function createIcon(onOffType, opts) {
    // if opts.iconOn/Off is passed, use that icon options object and ignore size
    // otherwise create a new object
    return opts[onOffType] || Object.assign({
        msvg: opts.theme[onOffType]
    }, opts.icon, opts.size ? {
        type: opts.size
    } : null);
};

var createIconButton = function createIconButton(value, type, opts) {
    var icon = createIcon(type === 'on' ? 'iconOn' : 'iconOff', opts);
    var classNameOn = type === 'on' ? CSS_CLASSES.buttonOn : CSS_CLASSES.buttonOff;
    var classNameOff = type !== 'on' ? CSS_CLASSES.buttonOff : CSS_CLASSES.buttonOn;
    return _mithril2.default.component(_iconButton2.default, Object.assign({}, {
        tag: 'div',
        class: [CSS_CLASSES.button, value ? classNameOn : classNameOff].join(' '),
        icon: icon,
        disabled: opts.disabled
    }, opts.iconButton));
};

var createSelection = function createSelection(checked, opts) {
    return (0, _mithril2.default)('div', {
        class: CSS_CLASSES.box
    }, [createIconButton(checked, 'on', opts), createIconButton(checked, 'off', opts)]);
};

exports.default = createSelection;
module.exports = exports['default'];

//# sourceMappingURL=icon-selection.js.map