import { filterSupportedAttributes } from 'polythene-core';

var classes = {
  component: "pe-textfield",
  // elements
  counter: "pe-textfield__counter",
  error: "pe-textfield__error",
  errorPlaceholder: "pe-textfield__error-placeholder",
  focusHelp: "pe-textfield__help-focus",
  help: "pe-textfield__help",
  input: "pe-textfield__input",
  inputArea: "pe-textfield__input-area",
  label: "pe-textfield__label",
  optionalIndicator: "pe-textfield__optional-indicator",
  requiredIndicator: "pe-textfield__required-indicator",
  // states
  hasCounter: "pe-textfield--counter",
  hasFloatingLabel: "pe-textfield--floating-label",
  hasFullWidth: "pe-textfield--full-width",
  hideClear: "pe-textfield--hide-clear",
  hideSpinner: "pe-textfield--hide-spinner",
  hideValidation: "pe-textfield--hide-validation",
  isDense: "pe-textfield--dense",
  isRequired: "pe-textfield--required",
  stateDirty: "pe-textfield--dirty",
  stateDisabled: "pe-textfield--disabled",
  stateFocused: "pe-textfield--focused",
  stateInvalid: "pe-textfield--invalid",
  stateReadonly: "pe-textfield--readonly"
};

const getElement = vnode => vnode.attrs.element || "div";
const DEFAULT_VALID_STATE = {
  invalid: false,
  message: undefined
};

const validateCustom = (state, attrs) => {
  const el = state.inputEl();

  if (!el) {
    return DEFAULT_VALID_STATE;
  }

  const validState = attrs.validate(state.inputEl().value);
  return {
    invalid: validState && !validState.valid,
    message: validState && validState.error
  };
};

const validateCounter = (state, attrs) => ({
  invalid: state.inputEl().value.length > attrs.counter,
  message: attrs.error
});

const validateHTML = (state, attrs) => ({
  invalid: !state.inputEl().checkValidity(),
  message: attrs.error
});

const getValidStatus = (state, attrs) => {
  let status = DEFAULT_VALID_STATE; // attrs.validateResetOnClear: reset validation when field is cleared

  if (state.isTouched() && state.isInvalid() && state.inputEl().value.length === 0 && attrs.validateResetOnClear) {
    state.isTouched(false);
    state.isInvalid(false);
    state.error(undefined);
  }

  if (!status.invalid && attrs.counter) {
    status = validateCounter(state, attrs);
  }

  if (!status.invalid && state.inputEl() && state.inputEl().checkValidity) {
    status = validateHTML(state, attrs);
  }

  if (!status.invalid && attrs.validate) {
    status = validateCustom(state, attrs);
  }

  return status;
};

const checkValidity = vnode => {
  const state = vnode.state;
  const attrs = vnode.attrs; // default

  const status = attrs.valid !== undefined ? {
    invalid: !attrs.valid,
    message: attrs.error
  } : !state.isTouched() && !attrs.validateAtStart ? DEFAULT_VALID_STATE : getValidStatus(state, attrs);
  const previousInvalid = state.isInvalid();
  state.error(status.message);

  if (status.invalid !== previousInvalid) {
    state.isInvalid(status.invalid);
  }

  if (!status.invalid) {
    state.error(undefined);
  }
};

const notifyState = vnode => {
  const state = vnode.state;
  const attrs = vnode.attrs;

  if (attrs.onChange) {
    const status = getValidStatus(state, attrs);
    attrs.onChange({
      focus: state.hasFocus(),
      dirty: state.isDirty(),
      el: state.inputEl(),
      invalid: status.invalid,
      error: status.error,
      value: state.inputEl().value,
      setInputState: newState => {
        const hasNewValue = newState.value !== undefined && newState.value !== state.inputEl().value;
        const hasNewFocus = newState.focus !== undefined && newState.focus !== state.hasFocus();

        if (hasNewValue || hasNewFocus) {
          state.setInputState(Object.assign({}, newState, {
            vnode
          }));
        }
      }
    });
  }
};

const ignoreEvent = (attrs, name) => attrs.ignoreEvents && attrs.ignoreEvents.indexOf(name) !== -1;

const getInitialState = (vnode, createStream, {
  keys: k
}) => {
  const attrs = vnode.attrs;
  const defaultValue = attrs.defaultValue !== undefined && attrs.defaultValue !== null ? attrs.defaultValue.toString() : attrs.value !== undefined && attrs.value !== null ? attrs.value.toString() : "";
  const el = createStream(null);
  const inputEl = createStream(null);
  const setInputState = createStream({});
  const error = createStream(attrs.error);
  const hasFocus = createStream(false);
  const isTouched = createStream(false); // true when any change is made

  const isDirty = createStream(defaultValue !== ""); // true for any input

  const isInvalid = createStream(false);
  const previousValue = createStream(undefined);
  const didSetFocusTime = 0;
  const showErrorPlaceholder = !!(attrs.valid !== undefined || attrs.validate || attrs.min || attrs.max || attrs[k.minlength] || attrs[k.maxlength] || attrs.required || attrs.pattern);
  return {
    defaultValue,
    didSetFocusTime,
    el,
    error,
    hasFocus,
    inputEl,
    isDirty,
    isInvalid,
    isTouched,
    previousValue,
    setInputState,
    showErrorPlaceholder,
    redrawOnUpdate: createStream.merge([inputEl, isInvalid, isDirty])
  };
};
const onMount = vnode => {
  if (!vnode.dom) {
    return;
  }

  const dom = vnode.dom;
  const state = vnode.state;
  const attrs = vnode.attrs;
  state.el(dom);
  const inputType = attrs.multiLine ? "textarea" : "input";
  const inputEl = dom.querySelector(inputType);
  vnode.state.inputEl(inputEl);
  state.inputEl().value = state.defaultValue;
  state.setInputState.map(({
    vnode,
    type,
    focus,
    value
  }) => {
    if (vnode) {
      value !== undefined ? state.inputEl().value = value : null;
      focus !== undefined && (state.hasFocus(focus), focus ? state.inputEl().focus() : state.inputEl().blur());
      type === "input" && (attrs.validateOnInput || attrs.counter) && state.isTouched(state.inputEl().value !== state.defaultValue);
      type !== "input" && state.isTouched(state.inputEl().value !== state.defaultValue);
      type === "onblur" && state.isTouched(true);
      state.isDirty(state.inputEl().value !== "");
      checkValidity(vnode);
      notifyState(vnode);
      state.previousValue(state.inputEl().value);
    }
  });
  notifyState(vnode);
};
const onUpdate = vnode => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  checkValidity(vnode);
  const inputEl = state.inputEl();
  const value = attrs.value !== undefined && attrs.value !== null ? attrs.value : inputEl ? inputEl.value : state.previousValue();
  const valueStr = value === undefined || value === null ? "" : value.toString();

  if (inputEl && state.previousValue() !== valueStr) {
    inputEl.value = valueStr;
    state.previousValue(valueStr);
    state.setInputState({
      vnode,
      type: "input"
    });
  }
};
const createProps = (vnode, {
  keys: k
}) => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  const isInvalid = state.isInvalid();
  return Object.assign({}, filterSupportedAttributes(attrs), {
    className: [classes.component, isInvalid ? classes.stateInvalid : "", state.hasFocus() ? classes.stateFocused : "", state.isDirty() ? classes.stateDirty : "", attrs.floatingLabel ? classes.hasFloatingLabel : "", attrs.disabled ? classes.stateDisabled : "", attrs.readonly ? classes.stateReadonly : "", attrs.dense ? classes.isDense : "", attrs.required ? classes.isRequired : "", attrs.fullWidth ? classes.hasFullWidth : "", attrs.counter ? classes.hasCounter : "", attrs.hideSpinner !== false && attrs.hideSpinner !== undefined ? classes.hideSpinner : "", attrs.hideClear !== false && attrs.hideClear !== undefined ? classes.hideClear : "", attrs.hideValidation ? classes.hideValidation : "", attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};
const createContent = (vnode, {
  renderer: h,
  keys: k
}) => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  const inputEl = state.inputEl();
  let error = attrs.error || state.error();
  const isInvalid = state.isInvalid();
  const inputType = attrs.multiLine ? "textarea" : "input";
  const type = attrs.multiLine ? null : !attrs.type || attrs.type === "submit" || attrs.type === "search" ? "text" : attrs.type;
  const showError = isInvalid && error !== undefined;
  const inactive = attrs.disabled || attrs[k.readonly];
  const requiredIndicator = attrs.required && attrs.requiredIndicator !== "" ? h("span", {
    key: "required",
    className: classes.requiredIndicator
  }, attrs.requiredIndicator || "*") : null;
  const optionalIndicator = !attrs.required && attrs.optionalIndicator ? h("span", {
    key: "optional",
    className: classes.optionalIndicator
  }, attrs.optionalIndicator) : null;
  const label = attrs.label ? [attrs.label, requiredIndicator, optionalIndicator] : null;
  return [h("div", {
    className: classes.inputArea,
    key: "input-area"
  }, [label ? h("label", {
    key: "label",
    className: classes.label
  }, label) : null, h(inputType, Object.assign({}, {
    key: "input",
    className: classes.input,
    disabled: attrs.disabled
  }, type ? {
    type
  } : null, attrs.name ? {
    name: attrs.name
  } : null, !ignoreEvent(attrs, k.onclick) ? {
    [k.onclick]: () => {
      if (inactive) {
        return;
      } // in case the browser does not give the field focus,
      // for instance when the user tapped to the current field off screen


      state.setInputState({
        vnode,
        focus: true
      });
      notifyState(vnode);
    }
  } : null, !ignoreEvent(attrs, k.onfocus) ? {
    [k.onfocus]: () => {
      if (inactive) {
        return;
      }

      state.setInputState({
        vnode,
        focus: true
      }); // set CSS class manually in case field gets focus but is off screen
      // and no redraw is triggered
      // at the next redraw state.hasFocus() will be read and the focus class be set
      // in the props.class statement

      if (state.el()) {
        state.el().classList.add(classes.stateFocused);
      }

      notifyState(vnode);
    }
  } : null, !ignoreEvent(attrs, k.onblur) ? {
    [k.onblur]: () => {
      state.setInputState({
        vnode,
        type: "onblur",
        focus: false
      }); // same principle as onfocus

      state.el().classList.remove(classes.stateFocused);
    }
  } : null, !ignoreEvent(attrs, k.oninput) ? {
    [k.oninput]: () => {
      // default input event
      // may be overwritten by attrs.events
      state.setInputState({
        vnode,
        type: "input"
      });
    }
  } : null, !ignoreEvent(attrs, k.onkeydown) ? {
    [k.onkeydown]: e => {
      if (e.key === "Enter") {
        state.isTouched(true);
      } else if (e.key === "Escape" || e.key === "Esc") {
        state.setInputState({
          vnode,
          focus: false
        });
      }
    }
  } : null, attrs.events ? attrs.events : null, // NOTE: may overwrite oninput
  attrs.required !== undefined && !!attrs.required ? {
    required: true
  } : null, attrs[k.readonly] !== undefined && !!attrs[k.readonly] ? {
    [k.readonly]: true
  } : null, attrs.pattern !== undefined ? {
    pattern: attrs.pattern
  } : null, attrs[k.maxlength] !== undefined ? {
    [k.maxlength]: attrs[k.maxlength]
  } : null, attrs[k.minlength] !== undefined ? {
    [k.minlength]: attrs[k.minlength]
  } : null, attrs.max !== undefined ? {
    max: attrs.max
  } : null, attrs.min !== undefined ? {
    min: attrs.min
  } : null, attrs[k.autofocus] !== undefined ? {
    [k.autofocus]: attrs[k.autofocus]
  } : null, attrs[k.tabindex] !== undefined ? {
    [k.tabindex]: attrs[k.tabindex]
  } : null, attrs.rows !== undefined ? {
    rows: attrs.rows
  } : null))]), attrs.counter ? h("div", {
    key: "counter",
    className: classes.counter
  }, (inputEl && inputEl.value.length || 0) + " / " + attrs.counter) : null, attrs.help && !showError ? h("div", {
    key: "help",
    className: [classes.help, attrs.focusHelp ? classes.focusHelp : null].join(" ")
  }, attrs.help) : null, showError ? h("div", {
    key: "error",
    className: classes.error
  }, error) : state.showErrorPlaceholder && !attrs.help ? h("div", {
    key: "error-placeholder",
    className: classes.errorPlaceholder
  }) : null];
};

var textfield = /*#__PURE__*/Object.freeze({
  getElement: getElement,
  getInitialState: getInitialState,
  onMount: onMount,
  onUpdate: onUpdate,
  createProps: createProps,
  createContent: createContent
});

export { textfield as coreTextField };
