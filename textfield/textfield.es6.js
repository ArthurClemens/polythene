import 'polythene/common/object.assign';
import m from 'mithril';
import 'polythene/textfield/theme/theme';

const startEventType = window.PointerEvent ? 'pointerdown' : (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) ? 'touchstart' : 'mousedown';

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

    if (opts.validate) {
        status = validateCustom(ctrl, opts);
    }
    if (!status.invalid && opts.counter) {
        status = validateCounter(ctrl, opts);
    }
    if (!status.invalid && ctrl.inputEl() && ctrl.inputEl().checkValidity) {
        status = validateHTML(ctrl, opts);
    }
    return status;
};

const checkValidity = (ctrl, opts) => {
    if (!ctrl.touched && !opts.validateAtStart) {
        return;
    }

    // default
    const status = getValidStatus(ctrl, opts);

    const previousInvalid = ctrl.isInvalid;
    if (status.invalid !== previousInvalid) {
        ctrl.isInvalid = status.invalid;
        ctrl.error = status.message;
        m.redraw();
    }
};

// dirty = contains text
const checkDirty = (ctrl) => {
    ctrl.isDirty = (ctrl.value.length > 0);
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

const createView = (ctrl, opts = {}) => {
    // Early state update to prevent a flash (which would happen if the update is done in config)
    updateState(ctrl, opts);

    const isInvalid = ctrl.isInvalid;
    const tag = opts.tag || 'div';
    const type = (!opts.type || opts.type === 'submit' || opts.type === 'search') ? 'text' : opts.type;
    const inputTag = opts.multiline ? 'textarea' : 'input';
    const showError = isInvalid && ctrl.error;
    const validates = opts.validate || opts.min || opts.max || opts.minlength || opts.required;

    if (opts.focus && !ctrl.focus()) {
        ctrl.focus(true);
        if (ctrl.inputEl()) {
            ctrl.inputEl().focus();
        }
    }

    // Only update from outside if the field is not being edited
    if (typeof opts.value === 'function' && ctrl.inputEl() && !ctrl.focus()) {
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
                    if (!opts.disabled) {
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
                    onclick: () => {
                        // in case the browser does not give the field focus,
                        // for instance when the user tapped to the current field off screen
                        ctrl.focus(true);
                        notifyState(ctrl, opts);
                    },
                    onfocus: () => {
                        ctrl.focus(true);
                        // set CSS class manually in case field gets focus but is off screen
                        // and no redraw is triggered
                        // at the next redraw ctrl.focus() will be read and the focus class be set
                        // in the props.class statement
                        if (ctrl.el) {
                            ctrl.el.classList.add(CSS_CLASSES.stateFocused);
                        }
                        notifyState(ctrl, opts);
                    },
                    // onblur defined in config
                    oninput: (e) => {
                        // default input event
                        // may be overwritten by opts.events
                        ctrl.value = e.target.value;
                        // Don't set ctrl.touched to true to prevent error messages popping up while typing
                        updateState(ctrl, opts);
                        notifyState(ctrl, opts);
                        if (opts.oninput) {
                            opts.oninput(ctrl.value, e);
                        }
                    },
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
                    },
                    oninvalid: (e) => (e.preventDefault()),
                    config: (el, inited, context) => {
                        if (inited) {
                            return;
                        }
                        ctrl.inputEl(el);
                        el.value = ctrl.value;
                        notifyState(ctrl, opts);
                        // use event delegation for the blur event
                        // so that click events bubble up
                        // http://www.quirksmode.org/blog/archives/2008/04/delegating_the.html
                        el.addEventListener('blur', onBlur, true);
                        context.onunload = function() {
                            el.removeEventListener('blur', onBlur, true);
                        };
                    },
                    name: opts.name || '',
                    disabled: opts.disabled
                },
                opts.events ? opts.events : null, // NOTE: may overwrite oninput
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

        const onMouseDown = (e) => {
            if (e.target !== inputEl()) {
                inputEl().blur(e);
            }
        };

        const focus = (state) => {
            // read
            if (state === undefined) {
                return hasFocus;
            }
            // write
            hasFocus = state;
            if (hasFocus) {
                document.body.addEventListener(startEventType, onMouseDown);
            } else {
                document.body.removeEventListener(startEventType, onMouseDown);
            }
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
