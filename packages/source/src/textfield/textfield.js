import '../common/object.assign';
import m from 'mithril';
import './theme/theme';

const startEventType = window.PointerEvent ? 'pointerdown' : (('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch) ? 'touchstart' : 'mousedown';

const CSS_CLASSES = {
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

const validateCustom = (ctrl, opts) => {
    const state = opts.validate(ctrl.value);
    return {
        invalid: (state && !state.valid),
        message: (state && state.error)
    };
};

const validateCounter = (ctrl, opts) => {
    return {
        invalid: (ctrl.value.length > opts.counter),
        message: opts.error
    };
};

const validateHTML = (ctrl, opts) => {
    return {
        invalid: !ctrl.inputEl().checkValidity(),
        message: opts.error
    };
};

const getValidStatus = (ctrl, opts) => {
    let status = {
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

const checkValidity = (ctrl, opts) => {
    // default
    const status = (!ctrl.touched && !opts.validateAtStart)
        ? {
            invalid: false,
            message: undefined
        }
        : getValidStatus(ctrl, opts);
    const previousInvalid = ctrl.isInvalid;
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
const checkDirty = (ctrl) => {
    ctrl.isDirty = (ctrl.value.toString().length > 0);
};

const updateState = (ctrl, opts) => {
    checkValidity(ctrl, opts);
    checkDirty(ctrl);
};

const notifyState = (ctrl, opts) => {
    if (opts.getState) {
        // get status directly without updating controller
        const status = getValidStatus(ctrl, opts);
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

const ignoreEvent = (opts, name) => (opts.ignoreEvents && opts.ignoreEvents.indexOf(name) !== -1);

const createView = (ctrl, opts = {}) => {
    // Early state update to prevent a flash (which would happen if the update is done in config)
    updateState(ctrl, opts);

    const isInvalid = ctrl.isInvalid;
    const tag = opts.tag || 'div';
    const type = (!opts.type || opts.type === 'submit' || opts.type === 'search') ? 'text' : opts.type;
    const inputTag = opts.multiline ? 'textarea' : 'input';
    const showError = isInvalid && ctrl.error;
    const validates = opts.validate || opts.min || opts.max || opts.minlength || opts.required || opts.pattern;
    const inactive = opts.disabled || opts.readonly;

    if (opts.focus && !ctrl.focus() && !inactive) {
        ctrl.focus(true);
        if (ctrl.inputEl()) {
            ctrl.inputEl().focus();
        }
    }

    // Only update from outside if the field is not being edited
    if (typeof opts.value === 'function' && ctrl.inputEl() && !ctrl.focus() && !inactive) {
        const value = opts.value();
        ctrl.value = value;
        ctrl.touched = true;
        updateState(ctrl, opts);
        notifyState(ctrl, opts);
        ctrl.inputEl().value = value;
    }

    const onBlur = (e) => {
        ctrl.focus(false);
        ctrl.touched = true;
        ctrl.value = e.target.value;
        updateState(ctrl, opts);
        notifyState(ctrl, opts);
        // same principle as onfocus
        ctrl.el.classList.remove(CSS_CLASSES.stateFocused);
    };

    const props = {
        class: [
            CSS_CLASSES.block,
            (isInvalid ? CSS_CLASSES.stateInvalid : ''),
            (ctrl.focus() ? CSS_CLASSES.stateFocused : ''),
            (opts.floatingLabel ? CSS_CLASSES.hasFloatingLabel : ''),
            (opts.disabled ? CSS_CLASSES.stateDisabled : ''),
            (opts.readonly ? CSS_CLASSES.stateReadonly : ''),
            (ctrl.isDirty ? CSS_CLASSES.stateDirty : ''),
            (opts.dense ? CSS_CLASSES.isDense : ''),
            (opts.required ? CSS_CLASSES.isRequired : ''),
            (opts.fullWidth ? CSS_CLASSES.hasFullWidth : ''),
            (opts.counter ? CSS_CLASSES.hasCounter : ''),
            (opts.hideSpinner !== false ? CSS_CLASSES.hideSpinner : ''),
            (opts.hideClear !== false ? CSS_CLASSES.hideClear : ''),
            (opts.hideValidation ? CSS_CLASSES.hideValidation : ''),
            (opts.hideRequiredMark ? CSS_CLASSES.hideRequiredChar : ''),
            opts.class
        ].join(' '),
        id: opts.id || '',
        config: (el, inited, context, vdom) => {
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


    const content = [
        m('div', {
            class: CSS_CLASSES.inputArea
        }, [
            opts.label ? m('label', {
                class: CSS_CLASSES.label,
                // In IE10 the label catches click events on the field
                // the function causes the input to get focus

                ['on' + startEventType]: () => {
                    if (!inactive) {
                        setTimeout(() => {
                            ctrl.inputEl().focus();
                        }, 0);
                    }
                }
            }, opts.label) : null,
            m(inputTag, Object.assign(
                {},
                {
                    class: CSS_CLASSES.input,
                    type,
                    name: opts.name || '',
                    disabled: opts.disabled
                },

                (!ignoreEvent(opts, 'onclick'))
                    ? {
                        onclick: () => {
                            if (inactive) {
                                return;
                            }
                            // in case the browser does not give the field focus,
                            // for instance when the user tapped to the current field off screen
                            ctrl.focus(true);
                            notifyState(ctrl, opts);
                        }
                    }
                    : null,

                (!ignoreEvent(opts, 'onfocus'))
                    ? {
                        onfocus: () => {
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
                    }
                    : null,
                    
                // onblur defined in config

                (!ignoreEvent(opts, 'oninput'))
                    ? {
                        oninput: (e) => {
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
                    }
                    : null,

                (!ignoreEvent(opts, 'onkeydown'))
                    ? {
                        onkeydown: (e) => {
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
                                setTimeout(() => {
                                    m.redraw();
                                    setTimeout(m.redraw, 250);
                                }, 1);
                            }
                        }
                    }
                    : null,

                {
                    config: (el, inited, context) => {
                        if (inited) {
                            return;
                        }
                        ctrl.inputEl(el);
                        el.value = ctrl.value;
                        notifyState(ctrl, opts);
                        if (!inactive) {
                            if (!ignoreEvent(opts, 'onblur')) {
                                // use event delegation for the blur event
                                // so that click events bubble up
                                // http://www.quirksmode.org/blog/archives/2008/04/delegating_the.html
                                el.addEventListener('blur', onBlur, true);
                                context.onunload = function() {
                                    el.removeEventListener('blur', onBlur, true);
                                };
                            }
                        }
                    }
                },
                opts.events ? opts.events : null, // NOTE: may overwrite oninput
                (opts.readonly !== undefined) ? {readonly: true} : null,
                (opts.pattern !== undefined) ? {pattern: opts.pattern} : null,
                (opts.maxlength !== undefined) ? {maxlength: opts.maxlength} : null,
                (opts.minlength !== undefined) ? {minlength: opts.minlength} : null,
                (opts.max !== undefined) ? {max: opts.max} : null,
                (opts.min !== undefined) ? {min: opts.min} : null,
                (opts.autofocus !== undefined) ? {autofocus: opts.autofocus} : null,
                (opts.required !== undefined) ? {required: opts.required} : null,
                (opts.tabindex !== undefined) ? {tabindex: opts.tabindex} : null,
                (opts.rows !== undefined) ? {rows: opts.rows} : null
            ))
        ]),
        opts.counter ? m('div', {class: CSS_CLASSES.counter}, ctrl.value.length + ' / ' + opts.counter) : null,
        (opts.help && !showError) ? m('div', {
            class: [CSS_CLASSES.help, opts.focusHelp ? CSS_CLASSES.focusHelp : ''].join(' ')
        }, opts.help) : null,
        showError
            ? m('div', {class: CSS_CLASSES.error}, ctrl.error)
            : (validates && !opts.help)
                ? m('div', {class: CSS_CLASSES.errorPlaceholder})
                : null
    ];
    return m(tag, props, [opts.before, content, opts.after]);
};

const component = {
    controller: (opts = {}) => {
        let value,
            isInvalid = false,
            touched = false, // true when any change is made
            error = opts.error || '',
            el,
            inputEl = m.prop(),
            hasFocus = opts.focus || false;

        if (typeof opts.value === 'function') {
            const v = opts.value();
            value = (v !== undefined) ? v : '';
        } else {
            value = (opts.value !== undefined) ? opts.value : '';
        }
        if (value !== '') {
            touched = true;
        }

        const focus = (state) => {
            // read
            if (state === undefined) {
                return hasFocus;
            }
            // write
            hasFocus = state;
        };

        return {
            value,
            error,
            el,
            inputEl,
            focus,
            isInvalid,
            touched
        };
    },
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
