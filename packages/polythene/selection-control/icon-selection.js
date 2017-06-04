var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Helper function for checkbox and radio button
import '../common/object.assign';
import m from 'mithril';
import icon from '../icon/icon';
import iconButton from '../icon-button/icon-button';

var CSS_CLASSES = {
    box: 'pe-control__box',
    button: 'pe-control__button',
    buttonOn: 'pe-control__button--on',
    buttonOff: 'pe-control__button--off'
};

var createIcon = function createIcon(onOffType, opts) {
    // if opts.iconOn/Off is passed, use that icon options object and ignore size
    // otherwise create a new object
    return _extends({}, opts[onOffType] ? opts[onOffType] : {
        msvg: opts.theme[onOffType]
    }, {
        class: opts.class
    }, opts.icon, opts.size ? {
        type: opts.size
    } : null);
};

var createSelection = function createSelection(checked, opts) {
    var selectable = opts.selectable(checked);
    return m('div', {
        class: CSS_CLASSES.box
    }, m(iconButton, _extends({}, {
        tag: 'div',
        class: CSS_CLASSES.button,
        content: [m(icon, createIcon('iconOn', _extends({}, {
            class: CSS_CLASSES.buttonOn
        }, opts))), m(icon, createIcon('iconOff', _extends({}, {
            class: CSS_CLASSES.buttonOff
        }, opts)))],
        ripple: {
            center: true
        },
        disabled: opts.disabled,
        inactive: !selectable
    }, opts.iconButton)));
};

export default createSelection;