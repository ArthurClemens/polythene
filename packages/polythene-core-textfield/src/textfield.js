import { filterSupportedAttributes, touchStartEvent } from "polythene-core";
import { customTheme } from "./theme";
import classes from "./classes";

export const getElement = vnode =>
  vnode.attrs.element || "div";

export const theme = customTheme;

const validateCustom = (state, attrs) => {
  const validState = attrs.validate(state.value());
  return {
    invalid: (validState && !validState.valid),
    message: (validState && validState.error)
  };
};

const validateCounter = (state, attrs) => ({
  invalid: state.value().length > attrs.counter,
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
  if (state.isTouched() && state.isInvalid() && state.value().length === 0 && attrs.validateResetOnClear) {
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
  const attrs = vnode.attrs;
  // default
  const status = (!state.isTouched() && !attrs.validateAtStart)
    ? {
      invalid: false,
      message: undefined
    }
    : getValidStatus(state, attrs);
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
  if (attrs.getState) {
    const status = getValidStatus(state, attrs);
    attrs.getState({
      focus:   state.hasFocus(),
      dirty:   state.isDirty(),
      value:   state.value(),
      el:      state.inputEl(),
      invalid: status.invalid,
      error:   status.error
    });
  }
};

const ignoreEvent = (attrs, name) =>
  attrs.ignoreEvents && attrs.ignoreEvents.indexOf(name) !== -1;

export const createProps = (vnode, { keys: k }) => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  const isInvalid = state.isInvalid();
  return Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      className: [
        classes.component,
        isInvalid                   ? classes.stateInvalid : "",
        state.hasFocus()            ? classes.stateFocused : "",
        state.isDirty()             ? classes.stateDirty : "",
        attrs.floatingLabel         ? classes.hasFloatingLabel : "",
        attrs.disabled              ? classes.stateDisabled : "",
        attrs.readonly              ? classes.stateReadonly : "",
        attrs.dense                 ? classes.isDense : "",
        attrs.required              ? classes.isRequired : "",
        attrs.fullWidth             ? classes.hasFullWidth : "",
        attrs.counter               ? classes.hasCounter : "",
        attrs.hideSpinner !== false ? classes.hideSpinner : "",
        attrs.hideClear !== false   ? classes.hideClear : "",
        attrs.hideValidation        ? classes.hideValidation : "",
        attrs.tone === "dark"       ? "pe-dark-tone" : null,
        attrs.tone === "light"      ? "pe-light-tone" : null,
        attrs.className || attrs[k.class],
      ].join(" ")
    }
  );
};

export const getInitialState = (vnode, createStream) => {
  const attrs = vnode.attrs;

  const defaultValue = typeof attrs.value === "function"
    ? attrs.value() !== undefined
      ? attrs.value()
      : ""
    : attrs.value !== undefined
      ? attrs.value
      : "";

  const el = createStream();
  const inputEl = createStream();
  const value = createStream(defaultValue);
  const setValue = createStream();
  const error = createStream(attrs.error);
  const hasFocus = createStream(attrs.focus || false);
  const setFocus = createStream();
  const isTouched = createStream(false); // true when any change is made
  const isDirty = createStream(defaultValue !== ""); // true for any input
  const isInvalid = createStream(false);

  return {
    el,
    error,
    hasFocus,
    inputEl,
    isDirty,
    isInvalid,
    isTouched,
    setFocus,
    setValue,
    value,
    redrawOnUpdate: createStream.merge([el, inputEl, isInvalid, isDirty])
  };
};

export const onMount = vnode => {
  const dom = vnode.dom;
  if (!dom) {
    return;
  }
  const state = vnode.state;
  const attrs = vnode.attrs;
  state.el(dom);
  const inputType = attrs.multiline ? "textarea" : "input";
  const inputEl = dom.querySelector(inputType);
  vnode.state.inputEl(inputEl);
  state.inputEl().value = state.value();

  state.setValue.map(({ value: newValue, type, focus }) => (
    state.value(newValue),
    focus !== undefined && state.setFocus(focus),
    type === "input" && (attrs.validateOnInput || attrs.counter) && state.isTouched(newValue !== ""),
    type !== "input" && state.isTouched(newValue !== ""),
    type === "onblur" && state.isTouched(true),
    state.isDirty(newValue !== ""),
    checkValidity(vnode),
    notifyState(vnode)
  ));

  state.setFocus.map(focusState => {
    state.hasFocus(focusState);
    if (focusState && state.inputEl()) {
      // Draw in next tick, to prevent getting an immediate onblur
      // Explicit setting of focus needed for most browsers other than Safari
      setTimeout(() => state.inputEl() && state.inputEl().focus && state.inputEl().focus(), 0);
    }
  });

  state.setValue({ value: state.value(), type: "input" });
};

export const createContent = (vnode, { renderer: h, keys: k }) => {
  const state = vnode.state;
  const attrs = vnode.attrs;

  const inputEl = state.inputEl();
  const isInvalid = state.isInvalid();
  const inputType = attrs.multiline ? "textarea" : "input";
  const type = attrs.multiline
    ? null
    : !attrs.type || attrs.type === "submit" || attrs.type === "search"
      ? "text"
      : attrs.type;
  const showError = isInvalid && state.error() !== undefined;
  const validates = attrs.validate || attrs.min || attrs.max || attrs[k.minlength] || attrs[k.maxlength] || attrs.required || attrs.pattern;
  const inactive = attrs.disabled || attrs[k.readonly];

  if (attrs.focus && !state.hasFocus() && !inactive) {
    state.setFocus(true);
  }

  // Only update from outside if the field is not being edited
  if (typeof attrs.value === "function" && inputEl && !state.hasFocus() && !inactive) {
    const value = attrs.value().toString();
    state.setValue({ value, type: "outside" });
    inputEl.value = value;
  }

  const requiredIndicator = attrs.required && attrs.requiredIndicator !== ""
    ? h("span",
      {
        key: "required",
        className: classes.requiredIndicator
      },
      attrs.requiredIndicator || "*"
    )
    : null;
  const optionalIndicator = !attrs.required && attrs.optionalIndicator
    ? h("span",
      {
        key: "optional",
        className: classes.optionalIndicator
      },
      attrs.optionalIndicator
    )
    : null;
  const label = attrs.label
    ? [attrs.label, requiredIndicator, optionalIndicator]
    : null;

  return [
    h("div", {
      className: classes.inputArea,
      key: "input-area"
    }, [
      label
        ? h("label",
          {
            key: "label",
            className: classes.label,
            // In IE10 the label catches click events on the field
            // the function causes the input to get focus

            [k["on" + touchStartEvent]]: () => {
              if (!inactive) {
                setTimeout(() => {
                  state.inputEl().focus();
                }, 0);
              }
            }
          },
        label)
        : null,
      h(inputType, Object.assign(
        {},
        {
          key: "input",
          className: classes.input,
          disabled: attrs.disabled
        },
        type ? { type } : null,
        attrs.name 
          ? { name: attrs.name }
          : null,

        !ignoreEvent(attrs, [k.onclick])
          ? {
            [k.onclick]: () => {
              if (inactive) {
                return;
              }
              // in case the browser does not give the field focus,
              // for instance when the user tapped to the current field off screen
              state.setFocus(true);
              notifyState(vnode);
            }
          }
          : null,

        !ignoreEvent(attrs, [k.onfocus])
          ? {
            [k.onfocus]: () => {
              if (inactive) {
                return;
              }
              state.setFocus(true);
              // set CSS class manually in case field gets focus but is off screen
              // and no redraw is triggered
              // at the next redraw state.hasFocus() will be read and the focus class be set
              // in the props.class statement
              if (state.el()) {
                state.el().classList.add(classes.stateFocused);
              }
              notifyState(vnode);
            }
          }
          : null,
            
        !ignoreEvent(attrs, [k.onblur])
          ? {
            [k.onblur]: e => {
              state.setValue({ value: e.target.value, type: "onblur", focus: false });
              // state.setFocus(false);
              // same principle as onfocus
              state.el().classList.remove(classes.stateFocused);
            }
          }
          : null,

        !ignoreEvent(attrs, [k.oninput])
          ? {
            [k.oninput]: e => {
              // default input event
              // may be overwritten by attrs.events
              state.setValue({ value: e.target.value, type: "input" });
              if (attrs.oninput) {
                attrs.oninput(state.value(), e);
              }
            }
          }
          : null,

        !ignoreEvent(attrs, [k.onkeydown])
          ? {
            [k.onkeydown]: e => {
              if (e.which === 13) {
                // ENTER
                state.isTouched(true);
              } else if (e.which === 27) {
                // ESCAPE
                state.inputEl().blur(e);
              } else if (e.which === 9) {
                // TAB
                // Update after the blur event when TAB is used to leave the field and no other field will get focus.
                // Safari only needs 1 tick, but Chrome needs more than 150ms to create a distinctive new redraw event.
                // But we also may have buttons that change place (search field), a large timeout works better in general.
                // setTimeout(() => {
                //   m.redraw();
                //   setTimeout(m.redraw, 250);
                // }, 1);
              }
            }
          }
          : null,

          attrs.events ? attrs.events : null, // NOTE: may overwrite oninput
          attrs[k.readonly] !== undefined ?  { [k.readonly]: true } : null,
          attrs.pattern !== undefined ?      { pattern: attrs.pattern } : null,
          attrs[k.maxlength] !== undefined ? { [k.maxlength]: attrs[k.maxlength] } : null,
          attrs[k.minlength] !== undefined ? { [k.minlength]: attrs[k.minlength] } : null,
          attrs.max !== undefined ?          { max: attrs.max } : null,
          attrs.min !== undefined ?          { min: attrs.min } : null,
          attrs[k.autofocus] !== undefined ? { [k.autofocus]: attrs[k.autofocus] } : null,
          attrs.required !== undefined ?     { required: attrs.required } : null,
          attrs[k.tabindex] !== undefined ?  { [k.tabindex]: attrs[k.tabindex] } : null,
          attrs.rows !== undefined ?         { rows: attrs.rows } : null
        )
      )
    ]),
    attrs.counter
      ? h("div",
        {
          key: "counter",
          className: classes.counter
        },
        state.value().length + " / " + attrs.counter
      )
      : null,
    attrs.help && !showError
      ? h("div",
        {
          key: "help",
          className: [
            classes.help,
            attrs.focusHelp ? classes.focusHelp : null
          ].join(" ")
        },
        attrs.help
      )
      : null,
    showError
      ? h("div",
        {
          key: "error",
          className: classes.error
        },
        state.error()
      )
      : validates && !attrs.help
        ? h("div",
          {
            key: "error-placeholder",
            className: classes.errorPlaceholder
          }
        )
        : null
  ];
};

