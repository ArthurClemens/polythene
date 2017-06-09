import m from 'mithril';
import { filterSupportedAttributes, prop, touchStartEvent } from 'polythene-core';
import { mixin, styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';

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

var rgba = vars.rgba;
var line_height_input = 20;
var input_padding_v = 7;

var vars$1 = {
  vertical_spacing_top: 6, // 8 minus natural label height padding (1)
  vertical_spacing_bottom: 7, // 8 minus natural label height padding (1)
  input_focus_border_width: 2,
  input_focus_border_animation_duration: vars.animation_duration,

  floating_label_vertical_spacing_top: 30, // 16 + 8 + 8 minus natural label height padding (2)
  floating_label_vertical_spacing_bottom: 7, // 8 minus natural label height padding (1)
  floating_label_top: 14,
  floating_label_animation_duration: ".12s",

  input_padding_h: 0,
  input_padding_v: input_padding_v,
  input_border_width: 1,
  margin_top_error_message: 6,
  font_size_input: 16,
  font_size_error: 12,
  font_size_floating_label: 12,

  line_height_input: line_height_input,

  dense_floating_label_vertical_spacing_top: 23, // 12 + 8 + 4 minus natural label height padding (1)
  dense_floating_label_vertical_spacing_bottom: 4, // 8 minus natural label height padding (1)
  dense_floating_label_top: 10,
  dense_font_size_input: 13,
  dense_font_size_floating_label: 13,

  full_width_input_padding_h: 20,
  full_width_input_padding_v: 18, // 20 minus natural label height padding (2)

  dense_full_width_input_padding_h: 16,
  dense_full_width_input_padding_v: 15, // 16 minus natural label height padding (1)
  dense_full_width_font_size_input: 13,

  color_light_input_text: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_input_background: "transparent", // only used to "remove" autofill color
  color_light_highlight_text: rgba(vars.color_primary, vars.blend_light_text_primary),
  color_light_input_bottom_border: rgba(vars.color_light_foreground, vars.blend_light_border_light),
  color_light_input_error_text: rgba("221, 44, 0"),
  color_light_input_error_border: rgba("221, 44, 0"),
  color_light_input_placeholder: rgba(vars.color_light_foreground, vars.blend_light_text_tertiary),
  color_light_label_text: rgba(vars.color_light_foreground, vars.blend_light_text_tertiary),
  color_light_disabled_label_text: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
  color_light_readonly_label_text: rgba(vars.color_light_foreground, vars.blend_light_text_tertiary),
  color_light_help_text: rgba(vars.color_light_foreground, vars.blend_light_text_tertiary),
  color_light_required_symbol: rgba("221, 44, 0"),
  color_light_focus_border: rgba(vars.color_primary),
  color_light_counter_ok_border: rgba(vars.color_primary),

  color_dark_input_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  color_dark_input_background: "transparent", // only used to "remove" autofill color
  color_dark_highlight_text: rgba(vars.color_primary, vars.blend_dark_text_primary),
  color_dark_input_bottom_border: rgba(vars.color_dark_foreground, vars.blend_dark_border_light),
  color_dark_input_error_text: rgba("222, 50, 38"),
  color_dark_input_error_border: rgba("222, 50, 38"),
  color_dark_input_placeholder: rgba(vars.color_dark_foreground, vars.blend_dark_text_tertiary),
  color_dark_label_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_tertiary),
  color_dark_disabled_label_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
  color_dark_readonly_label_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_tertiary),
  color_dark_help_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_tertiary),
  color_dark_required_symbol: rgba("221, 44, 0"),
  color_dark_focus_border: rgba(vars.color_primary),
  color_dark_counter_ok_border: rgba(vars.color_primary)
};

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector, componentVars) {
  return [_defineProperty$1({}, selector, [mixin.clearfix(), {
    position: "relative",
    lineHeight: vars.line_height,
    display: "inline-block",
    boxSizing: "border-box",
    margin: 0,
    overflow: "visible", // Firefox needs this
    paddingBottom: componentVars.vertical_spacing_bottom + "px",
    width: "100%",
    maxWidth: "100%",

    " .pe-textfield__input-area": {
      position: "relative",
      paddingTop: componentVars.vertical_spacing_top + "px",

      "&:after": [mixin.defaultTransition("opacity", componentVars.input_focus_border_animation_duration), {
        position: "absolute",
        content: "\"\"",
        bottom: 0,
        left: 0,
        height: componentVars.input_focus_border_width + "px",
        width: "100%",
        opacity: 0
      }]
    },
    ".pe-textfield--focused .pe-textfield__input-area:after": {
      opacity: 1
    },

    " .pe-textfield__input": {
      display: "block",
      fontSize: componentVars.font_size_input + "px",
      lineHeight: componentVars.line_height_input + "px",
      width: "100%",
      background: "none",
      textAlign: "left",
      color: "inherit",
      borderWidth: componentVars.input_border_width + "px",
      borderStyle: "none none solid none",
      borderRadius: 0,
      margin: 0,
      padding: componentVars.input_padding_v + "px " + componentVars.input_padding_h + "px",

      // disable glow on textfield--invalid fields
      "&:textfield--invalid": {
        boxShadow: "none"
      },
      ":invalid": {
        boxShadow: "none"
      }
    },
    " textarea.pe-textfield__input": {
      margin: componentVars.input_padding_v + "px " + componentVars.input_padding_h + "px",
      padding: 0,
      display: "block"
    },

    // focus border
    " textfield__input:focus, &.pe-textfield--focused .pe-textfield__input": {
      "border-width": componentVars.input_border_width + "px",
      outline: "none"
    },

    " .pe-textfield__label": {
      position: "absolute",
      display: "block",
      top: componentVars.vertical_spacing_top + componentVars.input_padding_v + "px",
      bottom: 0,
      left: componentVars.input_padding_h + "px",
      right: componentVars.input_padding_h + "px",
      fontSize: componentVars.font_size_input + "px",
      lineHeight: componentVars.line_height_input + "px",
      pointerEvents: "none",
      whiteSpace: "nowrap",
      textAlign: "left",
      cursor: "text"
    },
    ".pe-textfield--dirty .pe-textfield__label": {
      visibility: "hidden"
    },

    "&:not(.pe-textfield--no-char)": {
      " .pe-textfield__required-indicator, .pe-textfield__optional-indicator": {
        padding: "0 0 0 .25em"
      }
    },

    ".pe-textfield--floating-label": {
      paddingBottom: componentVars.floating_label_vertical_spacing_bottom + "px",

      " .pe-textfield__input-area": {
        paddingTop: componentVars.floating_label_vertical_spacing_top + "px"
      },

      " .pe-textfield__label": [mixin.defaultTransition("all", componentVars.floating_label_animation_duration), {
        top: componentVars.floating_label_vertical_spacing_top + componentVars.input_padding_v + "px"
      }],

      ".pe-textfield--focused, &.pe-textfield--dirty": {
        " .pe-textfield__label": {
          fontSize: componentVars.font_size_floating_label + "px",
          top: componentVars.floating_label_top + "px",
          visibility: "visible"
        }
      },

      ".pe-textfield--dense": {
        fontSize: componentVars.dense_font_size_input + "px",
        paddingBottom: componentVars.dense_floating_label_vertical_spacing_bottom + "px",

        " .pe-textfield__input-area": {
          paddingTop: componentVars.dense_floating_label_vertical_spacing_top + "px"
        },

        " .pe-textfield__input": {
          fontSize: componentVars.dense_font_size_input + "px"
        },
        " .pe-textfield__label": {
          fontSize: componentVars.dense_font_size_input + "px",
          top: componentVars.dense_floating_label_vertical_spacing_top + componentVars.input_padding_v + "px"
        },

        ".pe-textfield--focused, &.pe-textfield--dirty": {
          " .pe-textfield__label": {
            fontSize: componentVars.dense_font_size_floating_label + "px",
            top: componentVars.dense_floating_label_top + "px"
          }
        }
      }
    },

    ".pe-textfield--disabled, &.pe-textfield--readonly": {
      " .pe-textfield__label": {
        cursor: "auto"
      },
      " .pe-textfield__input": {
        "border-bottom": "none"
      },
      " .pe-textfield__input-area:after": {
        opacity: 1,
        height: "1px",
        bottom: "-1px",
        backgroundPosition: "top",
        backgroundSize: "4px 1px",
        backgroundRepeat: "repeat-x"
      }
    },

    " .pe-textfield__error, .pe-textfield__error-placeholder, .pe-textfield__help, .pe-textfield__counter": {
      marginTop: componentVars.margin_top_error_message + "px",
      fontSize: componentVars.font_size_error + "px",
      lineHeight: vars.line_height,
      minHeight: componentVars.font_size_error * vars.line_height + "px"
    },

    " .pe-textfield__counter": {
      textAlign: "right",
      float: "right",
      padding: "0 0 0 16px"
    },

    " .pe-textfield__help-focus": [mixin.defaultTransition("opacity"), {
      opacity: 0
    }],
    ".pe-textfield--focused .pe-textfield__help-focus, &.pe-textfield--dirty .pe-textfield__help-focus": {
      opacity: 1
    },

    ".pe-textfield--hide-clear": {
      " .pe-textfield__input::-ms-clear": {
        display: "none"
      }
    },
    ".pe-textfield--hide-spinner": {
      " input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button": {
        "-webkit-appearance": "none",
        margin: 0
      },
      " input[type=number]": {
        "-moz-appearance": "textfield"
      }
    }
  }, {
    ".pe-textfield--full-width": {
      width: "100%",
      padding: 0,

      " .pe-textfield__input-area": {
        padding: 0
      },

      " .pe-textfield__input": {
        padding: componentVars.full_width_input_padding_v + "px " + componentVars.full_width_input_padding_h + "px"
      },

      " .pe-textfield__error, .pe-textfield__help, .pe-textfield__counter": {
        paddingLeft: componentVars.full_width_input_padding_h + "px",
        paddingRight: componentVars.full_width_input_padding_h + "px"
      },

      " .pe-textfield__label": {
        top: componentVars.full_width_input_padding_v + "px",
        left: componentVars.full_width_input_padding_h + "px",
        right: componentVars.full_width_input_padding_h + "px"
      },

      ".pe-textfield--dense": {
        " .pe-textfield__input": {
          fontSize: componentVars.dense_full_width_font_size_input + "px",
          padding: componentVars.dense_full_width_input_padding_v + "px " + componentVars.dense_full_width_input_padding_h + "px"
        },
        " .pe-textfield__label": {
          fontSize: componentVars.dense_full_width_font_size_input + "px",
          top: componentVars.dense_full_width_input_padding_v + "px",
          left: componentVars.dense_full_width_input_padding_h + "px",
          right: componentVars.dense_full_width_input_padding_h + "px"
        }
      }
    }
  }])];
});

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$2({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    // border color
    color: componentVars["color_" + tint + "_focus_border"], // override by specifying "color"

    " .pe-textfield__input-area": {
      color: "inherit",
      backgroundColor: componentVars["color_" + tint + "_input_background"],

      "&:after": {
        backgroundColor: "currentcolor"
      }
    },
    "&.pe-textfield--counter ": {
      " .pe-textfield__input-area:after": {
        backgroundColor: componentVars["color_" + tint + "_counter_ok_border"]
      }
    },

    " .pe-textfield__input": {
      color: componentVars["color_" + tint + "_input_text"],
      borderColor: componentVars["color_" + tint + "_input_bottom_border"]
    },

    " .pe-textfield__label": {
      color: componentVars["color_" + tint + "_label_text"]
    },

    "&.pe-textfield--disabled, &.pe-textfield--readonly": {
      " .pe-textfield__input-area:after": {
        backgroundColor: "transparent",
        backgroundImage: "linear-gradient(to right, " + componentVars["color_" + tint + "_disabled_label_text"] + " 20%, rgba(255, 255, 255, 0) 0%)"
      }
    },

    "&.pe-textfield--disabled": {
      " .pe-textfield__input, .pe-textfield__label": {
        color: componentVars["color_" + tint + "_disabled_label_text"]
      }
    },

    "&.pe-textfield--readonly": {
      " .pe-textfield__input, .pe-textfield__label": {
        color: componentVars["color_" + tint + "_readonly_label_text"]
      }
    },

    "&.pe-textfield--focused": {
      // note: not when textfield--dirty and not textfield--focused
      "&.pe-textfield--floating-label .pe-textfield__label": {
        color: componentVars["color_" + tint + "_highlight_text"]
      },

      "&.pe-textfield--required.pe-textfield--floating-label": {
        " .pe-textfield__required-indicator": {
          color: componentVars["color_" + tint + "_required_symbol"]
        }
      }
    },

    " .pe-textfield__help, .pe-textfield__counter": {
      color: componentVars["color_" + tint + "_help_text"]
    },

    "&.pe-textfield--invalid:not(.pe-textfield--hide-validation)": {
      " .pe-textfield__input": {
        borderColor: componentVars["color_" + tint + "_input_error_border"],
        boxShadow: "none"
      },
      " .pe-textfield__label": {
        color: componentVars["color_" + tint + "_input_error_text"]
      },
      " .pe-textfield__error, .pe-textfield__counter, .pe-textfield__help": {
        color: componentVars["color_" + tint + "_input_error_text"]
      },
      "&.pe-textfield--required .pe-textfield__label": {
        color: componentVars["color_" + tint + "_input_error_text"]
      },
      "&, &.pe-textfield--counter": {
        " .pe-textfield__input-area:after": {
          backgroundColor: componentVars["color_" + tint + "_input_error_border"]
        }
      }
    },

    " .pe-textfield__input:-webkit-autofill": {
      "-webkit-box-shadow": "0 0 0px 1000px " + componentVars["color_" + tint + "_input_background"] + " inset",
      color: componentVars["color_" + tint + "_input_text"] + " !important"
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = "." + classes.component;

var customTheme = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

styler.generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var validateCustom = function validateCustom(state, attrs) {
  var validState = attrs.validate(state.value);
  return {
    invalid: validState && !validState.valid,
    message: validState && validState.error
  };
};

var validateCounter = function validateCounter(state, attrs) {
  return {
    invalid: state.value.length > attrs.counter,
    message: attrs.error
  };
};

var validateHTML = function validateHTML(state, attrs) {
  return {
    invalid: !state.inputEl().checkValidity(),
    message: attrs.error
  };
};

var getValidStatus = function getValidStatus(state, attrs) {
  var status = {
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

var checkValidity = function checkValidity(state, attrs) {
  // default
  var status = !state.touched && !attrs.validateAtStart ? {
    invalid: false,
    message: undefined
  } : getValidStatus(state, attrs);
  var previousInvalid = state.isInvalid;
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
var checkDirty = function checkDirty(state) {
  return state.isDirty = state.value.toString().length > 0;
};

var updateState = function updateState(state, attrs) {
  return checkValidity(state, attrs), checkDirty(state);
};

var notifyState = function notifyState(state, attrs) {
  if (attrs.getState) {
    // get status directly without updating controller
    var status = getValidStatus(state, attrs);
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

var ignoreEvent = function ignoreEvent(attrs, name) {
  return attrs.ignoreEvents && attrs.ignoreEvents.indexOf(name) !== -1;
};

var view = function view(_ref) {
  var state = _ref.state,
      attrs = _ref.attrs;

  // Early state update to prevent a flash (which would happen if the update is done in oncreate)
  updateState(state, attrs);

  var inputEl = state.inputEl();
  var isInvalid = state.isInvalid;
  var element = attrs.element || "div";
  var inputType = attrs.multiline ? "textarea" : "input";
  var type = attrs.multiline ? null : !attrs.type || attrs.type === "submit" || attrs.type === "search" ? "text" : attrs.type;
  var showError = isInvalid && state.error;
  var validates = attrs.validate || attrs.min || attrs.max || attrs.minlength || attrs.required || attrs.pattern;
  var inactive = attrs.disabled || attrs.readonly;

  if (attrs.focus && !state.focus() && !inactive) {
    state.focus(true);
    if (inputEl) {
      inputEl.focus();
    }
  }

  // Only update from outside if the field is not being edited
  if (typeof attrs.value === "function" && inputEl && !state.focus() && !inactive) {
    var value = attrs.value().toString();
    state.value = value;
    state.touched = true;
    updateState(state, attrs);
    notifyState(state, attrs);
    inputEl.value = value;
  }

  var props = _extends({}, filterSupportedAttributes(attrs), {
    className: [classes.component, isInvalid ? classes.stateInvalid : "", state.focus() ? classes.stateFocused : "", attrs.floatingLabel ? classes.hasFloatingLabel : "", attrs.disabled ? classes.stateDisabled : "", attrs.readonly ? classes.stateReadonly : "", state.isDirty ? classes.stateDirty : "", attrs.dense ? classes.isDense : "", attrs.required ? classes.isRequired : "", attrs.fullWidth ? classes.hasFullWidth : "", attrs.counter ? classes.hasCounter : "", attrs.hideSpinner !== false ? classes.hideSpinner : "", attrs.hideClear !== false ? classes.hideClear : "", attrs.hideValidation ? classes.hideValidation : "", attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.class].join(" "),
    oncreate: function oncreate(_ref2) {
      var dom = _ref2.dom;

      state.el = dom;
      if (!inactive) {
        updateState(state, attrs);
      }
    }
  });

  var requiredIndicator = attrs.required && attrs.requiredIndicator !== "" ? m("span", { className: classes.requiredIndicator }, attrs.requiredIndicator || "*") : null;
  var optionalIndicator = !attrs.required && attrs.optionalIndicator ? m("span", { className: classes.optionalIndicator }, attrs.optionalIndicator) : null;
  var label = attrs.label ? [attrs.label, requiredIndicator, optionalIndicator] : null;

  var content = [m("div", {
    className: classes.inputArea
  }, [label ? m("label", _defineProperty({
    className: classes.label
  }, "on" + touchStartEvent, function () {
    if (!inactive) {
      setTimeout(function () {
        state.inputEl().focus();
      }, 0);
    }
  }), label) : null, m(inputType, _extends({}, {
    className: classes.input,
    disabled: attrs.disabled
  }, type ? { type: type } : null, attrs.name ? { name: attrs.name } : null, !ignoreEvent(attrs, "onclick") ? {
    onclick: function onclick() {
      if (inactive) {
        return;
      }
      // in case the browser does not give the field focus,
      // for instance when the user tapped to the current field off screen
      state.focus(true);
      notifyState(state, attrs);
    }
  } : null, !ignoreEvent(attrs, "onfocus") ? {
    onfocus: function onfocus() {
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
  } : null, !ignoreEvent(attrs, "onblur") ? {
    onblur: function onblur(e) {
      state.focus(false);
      state.touched = true;
      state.value = e.target.value;
      updateState(state, attrs);
      notifyState(state, attrs);
      // same principle as onfocus
      state.el.classList.remove(classes.stateFocused);
    }
  } : null, !ignoreEvent(attrs, "oninput") ? {
    oninput: function oninput(e) {
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
  } : null, !ignoreEvent(attrs, "onkeydown") ? {
    onkeydown: function onkeydown(e) {
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
        setTimeout(function () {
          m.redraw();
          setTimeout(m.redraw, 250);
        }, 1);
      }
    }
  } : null, {
    oncreate: function oncreate(_ref3) {
      var dom = _ref3.dom;

      state.inputEl(dom);
      state.inputEl().value = state.value;
      notifyState(state, attrs);
    }
  }, attrs.events ? attrs.events : null, // NOTE: may overwrite oninput
  attrs.readonly !== undefined ? { readonly: true } : null, attrs.pattern !== undefined ? { pattern: attrs.pattern } : null, attrs.maxlength !== undefined ? { maxlength: attrs.maxlength } : null, attrs.minlength !== undefined ? { minlength: attrs.minlength } : null, attrs.max !== undefined ? { max: attrs.max } : null, attrs.min !== undefined ? { min: attrs.min } : null, attrs.autofocus !== undefined ? { autofocus: attrs.autofocus } : null, attrs.required !== undefined ? { required: attrs.required } : null, attrs.tabindex !== undefined ? { tabindex: attrs.tabindex } : null, attrs.rows !== undefined ? { rows: attrs.rows } : null))]), attrs.counter ? m("div", { className: classes.counter }, state.value.length + " / " + attrs.counter) : null, attrs.help && !showError ? m("div", {
    className: [classes.help, attrs.focusHelp ? classes.focusHelp : ""].join(" ")
  }, attrs.help) : null, showError ? m("div", { className: classes.error }, state.error) : validates && !attrs.help ? m("div", { className: classes.errorPlaceholder }) : null];
  return m(element, props, [attrs.before, content, attrs.after]);
};

var textfield = {
  theme: customTheme, // accepts (selector, vars)
  oninit: function oninit(vnode) {
    var attrs = vnode.attrs;
    var value = void 0,
        isInvalid = false,
        touched = false,
        // true when any change is made
    error = attrs.error || "",
        el = void 0,
        inputEl = prop(),
        hasFocus = attrs.focus || false;

    if (typeof attrs.value === "function") {
      var v = attrs.value();
      value = v !== undefined ? v : "";
    } else {
      value = attrs.value !== undefined ? attrs.value : "";
    }
    if (value !== "") {
      touched = true;
    }

    var focus = function focus(focusState) {
      // read
      if (focusState === undefined) {
        return hasFocus;
      }
      // write
      hasFocus = focusState;
      if (focusState && inputEl()) {
        // Draw in next tick, to prevent getting an immediate onblur
        // Explicit setting of focus needed for most browsers other than Safari
        setTimeout(function () {
          return inputEl() && inputEl().focus && inputEl().focus();
        }, 0);
      }
    };

    vnode.state = _extends(vnode.state, {
      value: value,
      error: error,
      el: el,
      inputEl: inputEl,
      focus: focus,
      isInvalid: isInvalid,
      touched: touched
    });
  },
  view: view
};

export { classes, vars$1 as vars };export default textfield;
