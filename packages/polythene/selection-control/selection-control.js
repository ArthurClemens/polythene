var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import '../common/object.assign';
import m from 'mithril';
import './theme/theme';

var CSS_CLASSES = {
    block: 'pe-control',
    label: 'pe-control__label',
    input: 'pe-control__input',
    box: 'pe-control__box',
    on: 'pe-control--on',
    off: 'pe-control--off',
    disabled: 'pe-control--disabled',
    inactive: 'pe-control--inactive',
    small: 'pe-control--small',
    regular: 'pe-control--regular',
    medium: 'pe-control--medium',
    large: 'pe-control--large'
};

var typeClasses = {
    small: CSS_CLASSES.small,
    regular: CSS_CLASSES.regular,
    medium: CSS_CLASSES.medium,
    large: CSS_CLASSES.large
};

var classForType = function classForType() {
    var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'regular';

    return typeClasses[mode];
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (typeof opts.checked === 'function') {
        ctrl.setChecked(opts.checked());
    }
    var checked = ctrl.checked();
    var selectable = opts.selectable(checked);
    var inactive = opts.disabled || !selectable;
    var tag = opts.tag || 'div';
    var name = opts.name || '';
    var props = _extends({}, {
        class: [CSS_CLASSES.block, opts.defaultClass, checked ? CSS_CLASSES.on : CSS_CLASSES.off, opts.disabled ? CSS_CLASSES.disabled : null, inactive ? CSS_CLASSES.inactive : null, classForType(opts.size), opts.class].join(' '),
        id: opts.id || '',
        config: function config(el, inited, context, vdom) {
            if (inited) {
                return;
            }
            if (opts.config) {
                opts.config(el, inited, context, vdom);
            }
        }
    }, opts.events ? opts.events : null);
    var content = [m('input', {
        class: CSS_CLASSES.input,
        name: name,
        value: ctrl.value(),
        type: opts.type, // set by checkbox / radio-button
        tabindex: -1, // set in selectionView / icon-button
        checked: checked,
        config: function config(el, inited) {
            if (inited) return;
            ctrl.setInputEl(el);
        }
    }), m('label', _extends({}, {
        class: CSS_CLASSES.label,
        tabindex: -1 }, inactive ? null : {
        onclick: function onclick() {
            return ctrl.toggle();
        }
    }), [opts.selectionView ? opts.selectionView(checked, opts) : null, opts.label ? m('span', opts.label) : null])];
    return m(tag, props, [opts.before, content, opts.after]);
};

var component = {
    controller: function controller() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        // Because this module also supports radio buttons (paired control elements)
        // we won't keep a separate 'checked' value but instead keep the checked value
        // as a HTMLElement checked state.
        var defaultChecked = false;
        var _value = opts.value || '1';
        var inputEl = void 0;

        var setInputElChecked = function setInputElChecked(isChecked) {
            if (inputEl) {
                inputEl.checked = isChecked;
            }
        };

        var getOptsChecked = function getOptsChecked() {
            if (typeof opts.checked === 'function') {
                var v = opts.checked();
                return v !== undefined ? v : defaultChecked;
            } else {
                return opts.checked !== undefined ? opts.checked : defaultChecked;
            }
        };

        var setInputEl = function setInputEl(el) {
            inputEl = el;
            setInputElChecked(getOptsChecked());
        };

        var setChecked = function setChecked(isChecked) {
            setInputElChecked(isChecked);
            if (opts.getState) {
                opts.getState({
                    checked: inputEl ? inputEl.checked : getOptsChecked(),
                    value: _value,
                    el: inputEl
                });
            }
        };

        var toggle = function toggle() {
            return setChecked(!inputEl.checked);
        };

        return {
            setInputEl: setInputEl,
            setChecked: setChecked,
            checked: function checked() {
                return inputEl ? inputEl.checked : getOptsChecked();
            },
            toggle: toggle,
            value: function value() {
                return _value;
            }
        };
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView(ctrl, opts);
    }
};

export default component;