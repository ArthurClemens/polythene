import m from "mithril";
import { filterSupportedAttributes, prop } from "polythene-core";
import { touchStartEvent } from "polythene-core";
import { customTheme } from "./theme";
import classes from "./classes";

const validateCustom = (state, attrs) => {
  const validState = attrs.validate(state.value);
  return {
    invalid: (validState && !validState.valid),
    message: (validState && validState.error)
  };
};

const validateCounter = (state, attrs) => ({
  invalid: state.value.length > attrs.counter,
  message: attrs.error
});

const validateHTML = (state, attrs) => ({
  invalid: !state.inputEl().checkValidity(),
  message: attrs.error
});

const getValidStatus = (state, attrs) => {
  let status = {
    invalid: false,
    message: undefined
  };

  // validateResetOnClear: reset validation when field is cleared
  if (state.touched && state.isInvalid && state.value.length === 0 && attrs.validateResetOnClear) {
    state.touched = false;
    state.isInvalid = false;
    state.error = undefined;
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

const checkValidity = (state, attrs) => {
  // default
  const status = (!state.touched && !attrs.validateAtStart)
    ? {
      invalid: false,
      message: undefined
    }
    : getValidStatus(state, attrs);
  const previousInvalid = state.isInvalid;
  state.error = status.message;
  state.isInvalid = status.invalid;
  if (status.invalid !== previousInvalid) {
    setTimeout(m.redraw, 0);
  }
  if (!status.invalid) {
    state.error = undefined;
  }
};

// dirty = contains text
const checkDirty = state =>
  state.isDirty = state.value.toString().length > 0;

const updateState = (state, attrs) => (
  checkValidity(state, attrs),
  checkDirty(state)
);

const notifyState = (state, attrs) => {
  if (attrs.getState) {
    // get status directly without updating controller
    const status = getValidStatus(state, attrs);
    attrs.getState({
      focus: state.focus(),
      dirty: state.isDirty,
      value: state.value,
      el: state.inputEl(),
      invalid: status.invalid,
      error: status.error
    });
  }
};

const ignoreEvent = (attrs, name) => (attrs.ignoreEvents && attrs.ignoreEvents.indexOf(name) !== -1);

const view = ({state, attrs}) => {
  // Early state update to prevent a flash (which would happen if the update is done in oncreate)
  updateState(state, attrs);

  const inputEl = state.inputEl();
  const isInvalid = state.isInvalid;
  const element = attrs.element || "div";
  const inputType = attrs.multiline ? "textarea" : "input";
  const type = attrs.multiline
    ? null
    : (!attrs.type || attrs.type === "submit" || attrs.type === "search") ? "text" : attrs.type;
  const showError = isInvalid && state.error;
  const validates = attrs.validate || attrs.min || attrs.max || attrs.minlength || attrs.required || attrs.pattern;
  const inactive = attrs.disabled || attrs.readonly;

  if (attrs.focus && !state.focus() && !inactive) {
    state.focus(true);
    if (inputEl) {
      inputEl.focus();
    }
  }

  // Only update from outside if the field is not being edited
  if (typeof attrs.value === "function" && inputEl && !state.focus() && !inactive) {
    const value = attrs.value().toString();
    state.value = value;
    state.touched = true;
    updateState(state, attrs);
    notifyState(state, attrs);
    inputEl.value = value;
  }

  const props = Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      className: [
        classes.component,
        isInvalid ? classes.stateInvalid : "",
        state.focus() ? classes.stateFocused : "",
        attrs.floatingLabel ? classes.hasFloatingLabel : "",
        attrs.disabled ? classes.stateDisabled : "",
        attrs.readonly ? classes.stateReadonly : "",
        state.isDirty ? classes.stateDirty : "",
        attrs.dense ? classes.isDense : "",
        attrs.required ? classes.isRequired : "",
        attrs.fullWidth ? classes.hasFullWidth : "",
        attrs.counter ? classes.hasCounter : "",
        attrs.hideSpinner !== false ? classes.hideSpinner : "",
        attrs.hideClear !== false ? classes.hideClear : "",
        attrs.hideValidation ? classes.hideValidation : "",
        attrs.tone === "dark" ? "pe-dark-tone" : null,
        attrs.tone === "light" ? "pe-light-tone" : null,
        attrs.class
      ].join(" "),
      oncreate: ({ dom }) => {
        state.el = dom;
        if (!inactive) {
          updateState(state, attrs);
        }
      }
    }
  );

  const requiredIndicator = attrs.required && attrs.requiredIndicator !== ""
    ? m("span", { className: classes.requiredIndicator }, attrs.requiredIndicator || "*")
    : null;
  const optionalIndicator = !attrs.required && attrs.optionalIndicator
    ? m("span", { className: classes.optionalIndicator }, attrs.optionalIndicator)
    : null;
  const label = attrs.label
    ? [attrs.label, requiredIndicator, optionalIndicator]
    : null;

  const content = [
    m("div", {
      className: classes.inputArea
    }, [
      label ? m("label", {
        className: classes.label,
        // In IE10 the label catches click events on the field
        // the function causes the input to get focus

        ["on" + touchStartEvent]: () => {
          if (!inactive) {
            setTimeout(() => {
              state.inputEl().focus();
            }, 0);
          }
        }
      }, label) : null,
      m(inputType, Object.assign(
        {},
        {
          className: classes.input,
          disabled: attrs.disabled
        },
        type ? { type } : null,
        attrs.name 
          ? { name: attrs.name }
          : null,
        !ignoreEvent(attrs, "onclick")
          ? {
            onclick: () => {
              if (inactive) {
                return;
              }
              // in case the browser does not give the field focus,
              // for instance when the user tapped to the current field off screen
              state.focus(true);
              notifyState(state, attrs);
            }
          }
          : null,

        !ignoreEvent(attrs, "onfocus")
          ? {
            onfocus: () => {
              if (inactive) {
                return;
              }
              state.focus(true);
              // set CSS class manually in case field gets focus but is off screen
              // and no redraw is triggered
              // at the next redraw state.focus() will be read and the focus class be set
              // in the props.class statement
              if (state.el) {
                state.el.classList.add(classes.stateFocused);
              }
              notifyState(state, attrs);
            }
          }
          : null,
            
        !ignoreEvent(attrs, "onblur")
            ? {
              onblur: e => {
                state.focus(false);
                state.touched = true;
                state.value = e.target.value;
                updateState(state, attrs);
                notifyState(state, attrs);
                // same principle as onfocus
                state.el.classList.remove(classes.stateFocused);
              }
            }
            : null,

        !ignoreEvent(attrs, "oninput")
            ? {
              oninput: e => {
                // default input event
                // may be overwritten by attrs.events
                state.value = e.target.value;
                // Don"t set state.touched to true to prevent error messages popping up while typing
                if (attrs.validateOnInput) {
                  state.touched = true;
                }
                updateState(state, attrs);
                notifyState(state, attrs);
                if (attrs.oninput) {
                  attrs.oninput(state.value, e);
                }
              }
            }
            : null,

        !ignoreEvent(attrs, "onkeydown")
            ? {
              onkeydown: e => {
                if (e.which === 13) {
                  // ENTER
                  state.touched = true;
                  updateState(state, attrs);
                  notifyState(state, attrs);
                } else if (e.which === 27) {
                  // ESCAPE
                  state.inputEl().blur(e);
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
          oncreate: ({ dom }) => {
            state.inputEl(dom);
            state.inputEl().value = state.value;
            notifyState(state, attrs);
          }
        },
        attrs.events ? attrs.events : null, // NOTE: may overwrite oninput
        attrs.readonly !== undefined ?  { readonly: true } : null,
        attrs.pattern !== undefined ?   { pattern: attrs.pattern } : null,
        attrs.maxlength !== undefined ? { maxlength: attrs.maxlength } : null,
        attrs.minlength !== undefined ? { minlength: attrs.minlength } : null,
        attrs.max !== undefined ?       { max: attrs.max } : null,
        attrs.min !== undefined ?       { min: attrs.min } : null,
        attrs.autofocus !== undefined ? { autofocus: attrs.autofocus } : null,
        attrs.required !== undefined ?  { required: attrs.required } : null,
        attrs.tabindex !== undefined ?  { tabindex: attrs.tabindex } : null,
        attrs.rows !== undefined ?      { rows: attrs.rows } : null
      ))
    ]),
    attrs.counter ? m("div", { className: classes.counter }, state.value.length + " / " + attrs.counter) : null,
    attrs.help && !showError
      ? m("div", {
        className: [classes.help, attrs.focusHelp ? classes.focusHelp : ""].join(" ")
      }, attrs.help)
      : null,
    showError
      ? m("div", { className: classes.error }, state.error)
      : (validates && !attrs.help)
        ? m("div", { className: classes.errorPlaceholder })
        : null
  ];
  return m(element, props, [attrs.before, content, attrs.after]);
};

export default {
  theme: customTheme, // accepts (selector, vars)
  oninit: vnode => {
    const attrs = vnode.attrs;
    let value,
      isInvalid = false,
      touched =   false, // true when any change is made
      error =     attrs.error || "",
      el,
      inputEl =   prop(),
      hasFocus =  attrs.focus || false;

    if (typeof attrs.value === "function") {
      const v = attrs.value();
      value = v !== undefined ? v : "";
    } else {
      value = attrs.value !== undefined ? attrs.value : "";
    }
    if (value !== "") {
      touched = true;
    }

    const focus = focusState => {
      // read
      if (focusState === undefined) {
        return hasFocus;
      }
      // write
      hasFocus = focusState;
      if (focusState && inputEl()) {
        // Draw in next tick, to prevent getting an immediate onblur
        // Explicit setting of focus needed for most browsers other than Safari
        setTimeout(() => inputEl() && inputEl().focus && inputEl().focus(), 0);
      }
    };

    vnode.state = Object.assign(
      vnode.state,
      {
        value,
        error,
        el,
        inputEl,
        focus,
        isInvalid,
        touched
      }
    );
  },
  view
};

