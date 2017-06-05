var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import '../common/object.assign';
import m from 'mithril';
import './theme';

var startEventType = window.PointerEvent ? 'pointerdown' : 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch ? 'touchstart' : 'mousedown';

var CSS_CLASSES = {
    block: 'pe-textfield',
    inputArea: 'pe-textfield__input-area',
    input: 'pe-textfield__input',
    label: 'pe-textfield__label',
    counter: 'pe-textfield__counter',
    help: 'pe-textfield__help',
    focusHelp: 'pe-textfield__help-focus',
    error: 'pe-textfield__error',
    errorPlaceholder: 'pe-textfield__error-placeholder',
    stateFocused: 'pe-textfield--focused',
    stateDisabled: 'pe-textfield--disabled',
    stateReadonly: 'pe-textfield--readonly',
    stateInvalid: 'pe-textfield--invalid',
    stateDirty: 'pe-textfield--dirty',
    hasFloatingLabel: 'pe-textfield--floating-label',
    isDense: 'pe-textfield--dense',
    isRequired: 'pe-textfield--required',
    hideRequiredChar: 'pe-textfield--no-char',
    hasFullWidth: 'pe-textfield--full-width',
    hasCounter: 'pe-textfield--counter',
    hideSpinner: 'pe-textfield--hide-spinner',
    hideClear: 'pe-textfield--hide-clear',
    hideValidation: 'pe-textfield--hide-validation'
};

var validateCustom = function validateCustom(ctrl, opts) {
    var state = opts.validate(ctrl.value);
    return {
        invalid: state && !state.valid,
        message: state && state.error
    };
};

var validateCounter = function validateCounter(ctrl, opts) {
    return {
        invalid: ctrl.value.length > opts.counter,
        message: opts.error
    };
};

var validateHTML = function validateHTML(ctrl, opts) {
    return {
        invalid: !ctrl.inputEl().checkValidity(),
        message: opts.error
    };
};

var getValidStatus = function getValidStatus(ctrl, opts) {
    var status = {
        invalid: false,
        message: undefined
    };

    // validateResetOnClear: reset validation when field is cleared
    if (ctrl.touched && ctrl.isInvalid && ctrl.value.length === 0 && opts.validateResetOnClear) {
        ctrl.touched = false;
        ctrl.isInvalid = false;
        ctrl.error = undefined;
    }

    if (!status.invalid && opts.counter) {
        status = validateCounter(ctrl, opts);
    }
    if (!status.invalid && ctrl.inputEl() && ctrl.inputEl().checkValidity) {
        status = validateHTML(ctrl, opts);
    }
    if (!status.invalid && opts.validate) {
        status = validateCustom(ctrl, opts);
    }
    return status;
};

var checkValidity = function checkValidity(ctrl, opts) {
    // default
    var status = !ctrl.touched && !opts.validateAtStart ? {
        invalid: false,
        message: undefined
    } : getValidStatus(ctrl, opts);
    var previousInvalid = ctrl.isInvalid;
    ctrl.error = status.message;
    ctrl.isInvalid = status.invalid;
    if (status.invalid !== previousInvalid) {
        setTimeout(m.redraw, 0);
    }

    if (!status.invalid) {
        ctrl.error = undefined;
    }
};

// dirty = contains text
var checkDirty = function checkDirty(ctrl) {
    ctrl.isDirty = ctrl.value.toString().length > 0;
};

var updateState = function updateState(ctrl, opts) {
    checkValidity(ctrl, opts);
    checkDirty(ctrl);
};

var notifyState = function notifyState(ctrl, opts) {
    if (opts.getState) {
        // get status directly without updating controller
        var status = getValidStatus(ctrl, opts);
        opts.getState({
            focus: ctrl.focus(),
            dirty: ctrl.isDirty,
            value: ctrl.value,
            el: ctrl.inputEl(),
            invalid: status.invalid,
            error: status.error
        });
    }
};

var ignoreEvent = function ignoreEvent(opts, name) {
    return opts.ignoreEvents && opts.ignoreEvents.indexOf(name) !== -1;
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // Early state update to prevent a flash (which would happen if the update is done in config)
    updateState(ctrl, opts);

    var isInvalid = ctrl.isInvalid;
    var tag = opts.tag || 'div';
    var type = !opts.type || opts.type === 'submit' || opts.type === 'search' ? 'text' : opts.type;
    var inputTag = opts.multiline ? 'textarea' : 'input';
    var showError = isInvalid && ctrl.error;
    var validates = opts.validate || opts.min || opts.max || opts.minlength || opts.required || opts.pattern;
    var inactive = opts.disabled || opts.readonly;

    if (opts.focus && !ctrl.focus() && !inactive) {
        ctrl.focus(true);
        if (ctrl.inputEl()) {
            ctrl.inputEl().focus();
        }
    }

    // Only update from outside if the field is not being edited
    if (typeof opts.value === 'function' && ctrl.inputEl() && !ctrl.focus() && !inactive) {
        var value = opts.value();
        ctrl.value = value;
        ctrl.touched = true;
        updateState(ctrl, opts);
        notifyState(ctrl, opts);
        ctrl.inputEl().value = value;
    }

    var props = {
        class: [CSS_CLASSES.block, isInvalid ? CSS_CLASSES.stateInvalid : '', ctrl.focus() ? CSS_CLASSES.stateFocused : '', opts.floatingLabel ? CSS_CLASSES.hasFloatingLabel : '', opts.disabled ? CSS_CLASSES.stateDisabled : '', opts.readonly ? CSS_CLASSES.stateReadonly : '', ctrl.isDirty ? CSS_CLASSES.stateDirty : '', opts.dense ? CSS_CLASSES.isDense : '', opts.required ? CSS_CLASSES.isRequired : '', opts.fullWidth ? CSS_CLASSES.hasFullWidth : '', opts.counter ? CSS_CLASSES.hasCounter : '', opts.hideSpinner !== false ? CSS_CLASSES.hideSpinner : '', opts.hideClear !== false ? CSS_CLASSES.hideClear : '', opts.hideValidation ? CSS_CLASSES.hideValidation : '', opts.hideRequiredMark ? CSS_CLASSES.hideRequiredChar : '', opts.class].join(' '),
        id: opts.id || '',
        config: function config(el, inited, context, vdom) {
            if (inited) {
                return;
            }
            if (opts.config) {
                opts.config(el, inited, context, vdom);
            }
            ctrl.el = el;
            if (!inactive) {
                updateState(ctrl, opts);
            }
        }
    };

    var content = [m('div', {
        class: CSS_CLASSES.inputArea
    }, [opts.label ? m('label', _defineProperty({
        class: CSS_CLASSES.label
    }, 'on' + startEventType, function () {
        if (!inactive) {
            setTimeout(function () {
                ctrl.inputEl().focus();
            }, 0);
        }
    }), opts.label) : null, m(inputTag, _extends({}, {
        class: CSS_CLASSES.input,
        type: type,
        name: opts.name || '',
        disabled: opts.disabled
    }, !ignoreEvent(opts, 'onclick') ? {
        onclick: function onclick() {
            if (inactive) {
                return;
            }
            // in case the browser does not give the field focus,
            // for instance when the user tapped to the current field off screen
            ctrl.focus(true);
            notifyState(ctrl, opts);
        }
    } : null, !ignoreEvent(opts, 'onfocus') ? {
        onfocus: function onfocus() {
            if (inactive) {
                return;
            }
            ctrl.focus(true);
            // set CSS class manually in case field gets focus but is off screen
            // and no redraw is triggered
            // at the next redraw ctrl.focus() will be read and the focus class be set
            // in the props.class statement
            if (ctrl.el) {
                ctrl.el.classList.add(CSS_CLASSES.stateFocused);
            }
            notifyState(ctrl, opts);
        }
    } : null, !ignoreEvent(opts, 'oninput') ? {
        oninput: function oninput(e) {
            // default input event
            // may be overwritten by opts.events
            ctrl.value = e.target.value;
            // Don't set ctrl.touched to true to prevent error messages popping up while typing
            if (opts.validateOnInput) {
                ctrl.touched = true;
            }
            updateState(ctrl, opts);
            notifyState(ctrl, opts);
            if (opts.oninput) {
                opts.oninput(ctrl.value, e);
            }
        }
    } : null, !ignoreEvent(opts, "onblur") ? {
        onblur: function onblur(e) {
            ctrl.focus(false);
            ctrl.touched = true;
            ctrl.value = e.target.value;
            updateState(ctrl, opts);
            notifyState(ctrl, opts);
            // same principle as onfocus
            if (ctrl.el) {
                ctrl.el.classList.remove(CSS_CLASSES.stateFocused);
            }
        }
    } : null, !ignoreEvent(opts, 'onkeydown') ? {
        onkeydown: function onkeydown(e) {
            if (e.which === 13) {
                // ENTER
                ctrl.touched = true;
                updateState(ctrl, opts);
                notifyState(ctrl, opts);
            } else if (e.which === 27) {
                // ESCAPE
                ctrl.inputEl().blur(e);
            } else if (e.which === 9) {
                // TAB
                // Update after the blur event when TAB is used to leave the field and no other field will get focus.
                // Safari only needs 1 tick, but Chrome needs more than 150ms to create a distinctive new redraw event.
                // But we also may have buttons that change place (search field), a large timeout works better in general.
                setTimeout(function () {
                    m.redraw();
                    setTimeout(m.redraw, 250);
                }, 1);
            }
        }
    } : null, {
        config: function config(el, inited) {
            if (inited) {
                return;
            }
            ctrl.inputEl(el);
            el.value = ctrl.value;
            notifyState(ctrl, opts);
        }
    }, opts.events ? opts.events : null, // NOTE: may overwrite oninput
    opts.readonly !== undefined ? { readonly: true } : null, opts.pattern !== undefined ? { pattern: opts.pattern } : null, opts.maxlength !== undefined ? { maxlength: opts.maxlength } : null, opts.minlength !== undefined ? { minlength: opts.minlength } : null, opts.max !== undefined ? { max: opts.max } : null, opts.min !== undefined ? { min: opts.min } : null, opts.autofocus !== undefined ? { autofocus: opts.autofocus } : null, opts.required !== undefined ? { required: opts.required } : null, opts.tabindex !== undefined ? { tabindex: opts.tabindex } : null, opts.rows !== undefined ? { rows: opts.rows } : null))]), opts.counter ? m('div', { class: CSS_CLASSES.counter }, ctrl.value.length + ' / ' + opts.counter) : null, opts.help && !showError ? m('div', {
        class: [CSS_CLASSES.help, opts.focusHelp ? CSS_CLASSES.focusHelp : ''].join(' ')
    }, opts.help) : null, showError ? m('div', { class: CSS_CLASSES.error }, ctrl.error) : validates && !opts.help ? m('div', { class: CSS_CLASSES.errorPlaceholder }) : null];
    return m(tag, props, [opts.before, content, opts.after]);
};

var component = {
    controller: function controller() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var value = void 0,
            isInvalid = false,
            touched = false,
            // true when any change is made
        error = opts.error || '',
            el = void 0,
            inputEl = m.prop(),
            hasFocus = opts.focus || false;

        if (typeof opts.value === 'function') {
            var v = opts.value();
            value = v !== undefined ? v : '';
        } else {
            value = opts.value !== undefined ? opts.value : '';
        }
        if (value !== '') {
            touched = true;
        }

        var focus = function focus(state) {
            // read
            if (state === undefined) {
                return hasFocus;
            }
            // write
            hasFocus = state;
        };

        return {
            value: value,
            error: error,
            el: el,
            inputEl: inputEl,
            focus: focus,
            isInvalid: isInvalid,
            touched: touched
        };
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView(ctrl, opts);
    }
};

export default component;