var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import '../common/object.assign';
import m from 'mithril';
import textfield from '../textfield/textfield';
import './theme';

var CSS_CLASSES = {
    block: 'pe-search',
    content: 'pe-search__content',
    searchInset: 'pe-search--inset',
    searchFullwidth: 'pe-search--fullwidth'
};

var mapButtonState = function mapButtonState() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (state.focus && state.dirty) {
        return 'focus_dirty';
    } else if (state.focus) {
        return 'focus';
    } else if (state.dirty) {
        return 'dirty';
    }
    return 'none';
};

var typeClasses = {
    inset: CSS_CLASSES.searchInset,
    fullwidth: CSS_CLASSES.searchFullwidth
};

var classForType = function classForType() {
    var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'inset';

    return typeClasses[mode];
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tag = opts.tag || 'div';
    var props = _extends({}, {
        class: [CSS_CLASSES.block, classForType(opts.type), opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    }, opts.events ? opts.events : null);
    var state = mapButtonState(ctrl.state());
    var buttons = (opts.buttons || {})[state] || {};
    var textfieldOpts = opts.textfield || {};
    var content = m('div', {
        class: CSS_CLASSES.content
    }, [buttons.before ? buttons.before : null, m(textfield, _extends({}, textfieldOpts, {
        getState: function getState(state) {
            ctrl.state(state);
            if (textfieldOpts.getState) {
                textfieldOpts.getState(state);
            }
        }
    })), buttons.after ? buttons.after : null]);
    return m(tag, props, [opts.before, content, opts.after]);
};

var component = {
    controller: function controller() {
        var state = m.prop();
        return {
            state: state
        };
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView(ctrl, opts);
    }
};

export default component;