import { filterSupportedAttributes } from "polythene-core";
import classes from "polythene-css-classes/textfield";

const DEFAULT_VALID_STATE = {
  invalid: false,
  message: undefined,
};

const ignoreEvent = (props, name) =>
  props.ignoreEvents && props.ignoreEvents.indexOf(name) !== -1;

export const _TextField = ({
  h,
  a,
  useState,
  useEffect,
  useRef,
  getRef,
  ...props
}) => {
  const defaultValue =
    props.defaultValue !== undefined && props.defaultValue !== null
      ? props.defaultValue.toString()
      : props.value !== undefined && props.value !== null
      ? props.value.toString()
      : "";

  const [domElement, setDomElement] = useState();
  const [isInvalid, setIsInvalid] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const inputElRef = useRef();
  const previousValueRef = useRef();
  const previousStatusRef = useRef();
  const isDirtyRef = useRef();
  const hasFocusRef = useRef();
  const isTouchedRef = useRef();
  const errorRef = useRef();
  const inputType = props.multiLine ? "textarea" : "input";
  const showErrorPlaceholder = !!(
    props.valid !== undefined ||
    props.validate ||
    props.min ||
    props.max ||
    props[a.minlength] ||
    props[a.maxlength] ||
    props.required ||
    props.pattern
  );

  const handleStateUpdate = ({ type, focus, value } = {}) => {
    if (!inputElRef.current) {
      return;
    }
    if (value !== undefined) {
      inputElRef.current.value = value;
    }
    if (focus !== undefined) {
      hasFocusRef.current = focus;
      if (focus) {
        inputElRef.current.focus();
      } else {
        inputElRef.current.blur();
      }
    }
    if (type === "input" && (props.validateOnInput || props.counter)) {
      isTouchedRef.current = inputElRef.current.value !== defaultValue;
    }
    if (type !== "input") {
      isTouchedRef.current = inputElRef.current.value !== defaultValue;
    }
    if (type === "onblur") {
      isTouchedRef.current = true;
    }
    isDirtyRef.current = inputElRef.current.value !== "";
    checkValidity();
    notifyState();
    if (previousValueRef.current !== inputElRef.current.value) {
      setValue(inputElRef.current.value); // force update
    }
  };

  const validateCustom = () => {
    if (!inputElRef.current) {
      return DEFAULT_VALID_STATE;
    }
    const validState = props.validate(inputElRef.current.value);
    return {
      invalid: validState && !validState.valid,
      message: validState && validState.error,
    };
  };

  const validateCounter = () => ({
    invalid: inputElRef.current.value.length > props.counter,
    message: props.error,
  });

  const validateHTML = () => ({
    invalid: !inputElRef.current.checkValidity(),
    message: props.error,
  });

  const getValidStatus = () => {
    let status = DEFAULT_VALID_STATE;

    // props.validateResetOnClear: reset validation when field is cleared
    if (
      isTouchedRef.current &&
      isInvalid &&
      inputElRef.current.value.length === 0 &&
      props.validateResetOnClear
    ) {
      isTouchedRef.current = false;
      setIsInvalid(false);
      errorRef.current = undefined;
    }
    if (props.counter) {
      status = validateCounter();
    }
    if (!status.invalid && inputElRef.current.checkValidity) {
      status = validateHTML();
    }
    if (!status.invalid && props.validate) {
      status = validateCustom();
    }
    return status;
  };

  const checkValidity = () => {
    // default
    const status =
      props.valid !== undefined
        ? {
            invalid: !props.valid,
            message: props.error,
          }
        : !isTouchedRef.current && !props.validateAtStart
        ? DEFAULT_VALID_STATE
        : getValidStatus();
    const previousInvalid = isInvalid;
    errorRef.current = status.message;
    if (status.invalid !== previousInvalid) {
      setIsInvalid(status.invalid);
    }
    if (!status.invalid) {
      errorRef.current = undefined;
    }
  };

  const notifyState = () => {
    if (props.onChange) {
      const validStatus = getValidStatus();
      const status = {
        focus: hasFocusRef.current,
        dirty: isDirtyRef.current,
        invalid: validStatus.invalid,
        error: validStatus.error,
        value: inputElRef.current.value,
      };
      if (
        JSON.stringify(status) !== JSON.stringify(previousStatusRef.current)
      ) {
        props.onChange({
          ...status,
          el: inputElRef.current,
          setInputState: (newState) => {
            const hasNewValue =
              newState.value !== undefined &&
              newState.value !== inputElRef.current.value;
            const hasNewFocus =
              newState.focus !== undefined &&
              newState.focus !== hasFocusRef.current;
            if (hasNewValue || hasNewFocus) {
              handleStateUpdate(newState);
            }
          },
        });
        previousStatusRef.current = status;
      }
    }
  };

  // State refs
  useEffect(() => {
    isDirtyRef.current = defaultValue !== "";
    hasFocusRef.current = false;
    isTouchedRef.current = false;
    errorRef.current = props.error;
  }, []);

  // Input DOM element
  useEffect(() => {
    if (!domElement) {
      return;
    }
    inputElRef.current = domElement.querySelector(inputType);
    inputElRef.current.value = defaultValue;
    handleStateUpdate();
    checkValidity(); // handle `validateAtStart`
    notifyState();
  }, [domElement]);

  // Handle value updates
  useEffect(() => {
    if (!inputElRef.current) {
      return;
    }
    const value =
      props.value !== undefined && props.value !== null
        ? props.value
        : inputElRef.current
        ? inputElRef.current.value
        : previousValueRef.current;
    const valueStr =
      value === undefined || value === null ? "" : value.toString();

    if (inputElRef.current && previousValueRef.current !== valueStr) {
      inputElRef.current.value = valueStr;
      previousValueRef.current = valueStr;
      handleStateUpdate({ type: "input" });
    }
  }, [inputElRef.current, props.value]);

  // Handle error state updates
  useEffect(() => {
    if (!inputElRef.current) {
      return;
    }
    checkValidity();
    notifyState();
  }, [props, inputElRef.current && inputElRef.current.value]);

  const componentProps = Object.assign(
    {},
    filterSupportedAttributes(props),
    props.testId && { "data-test-id": props.testId },
    getRef(
      (dom) =>
        dom && !domElement && (setDomElement(dom), props.ref && props.ref(dom))
    ),
    {
      className: [
        classes.component,
        isInvalid ? classes.stateInvalid : "",
        hasFocusRef.current ? classes.stateFocused : "",
        isDirtyRef.current ? classes.stateDirty : "",
        props.floatingLabel ? classes.hasFloatingLabel : "",
        props.disabled ? classes.stateDisabled : "",
        props.readonly ? classes.stateReadonly : "",
        props.dense ? classes.isDense : "",
        props.required ? classes.isRequired : "",
        props.fullWidth ? classes.hasFullWidth : "",
        props.counter ? classes.hasCounter : "",
        props.hideSpinner !== false && props.hideSpinner !== undefined
          ? classes.hideSpinner
          : "",
        props.hideClear !== false && props.hideClear !== undefined
          ? classes.hideClear
          : "",
        props.hideValidation ? classes.hideValidation : "",
        props.tone === "dark" ? "pe-dark-tone" : null,
        props.tone === "light" ? "pe-light-tone" : null,
        props.className || props[a.class],
      ].join(" "),
    }
  );

  const allProps = {
    ...props,
    ...props.domAttributes,
  };

  let errorMessage = props.error || errorRef.current;
  const type = allProps.multiLine
    ? null
    : !allProps.type || allProps.type === "submit" || allProps.type === "search"
    ? "text"
    : allProps.type;
  const showError = isInvalid && errorMessage !== undefined;
  const inactive = allProps.disabled || allProps[a.readonly];
  const requiredIndicator =
    allProps.required && allProps.requiredIndicator !== ""
      ? h(
          "span",
          {
            className: classes.requiredIndicator,
          },
          allProps.requiredIndicator || "*"
        )
      : null;
  const optionalIndicator =
    !allProps.required && allProps.optionalIndicator
      ? h(
          "span",
          {
            className: classes.optionalIndicator,
          },
          allProps.optionalIndicator
        )
      : null;
  const label = allProps.label
    ? [allProps.label, requiredIndicator, optionalIndicator]
    : null;
  const events = allProps.events || {};

  const componentContent = [
    h(
      "div",
      {
        className: classes.inputArea,
      },
      [
        label
          ? h(
              "label",
              {
                className: classes.label,
              },
              label
            )
          : null,
        h(
          inputType,
          Object.assign(
            {},
            {
              className: classes.input,
              disabled: allProps.disabled,
            },
            type ? { type } : null,
            allProps.name ? { name: allProps.name } : null,

            events,

            !ignoreEvent(allProps, a.onclick)
              ? {
                  [a.onclick]: (e) => {
                    if (inactive) {
                      return;
                    }
                    // in case the browser does not give the field focus,
                    // for instance when the user tapped to the current field off screen
                    handleStateUpdate({ focus: true });
                    events[a.onclick] && events[a.onclick](e);
                  },
                }
              : null,

            !ignoreEvent(allProps, a.onfocus)
              ? {
                  [a.onfocus]: (e) => {
                    if (inactive) {
                      return;
                    }
                    handleStateUpdate({ focus: true });

                    // set CSS class manually in case field gets focus but is off screen
                    // and no redraw is triggered
                    // at the next redraw `hasFocusRef.current` will be read and the focus class be set
                    // in the props.class statement
                    if (domElement) {
                      domElement.classList.add(classes.stateFocused);
                    }
                    events[a.onfocus] && events[a.onfocus](e);
                  },
                }
              : null,

            !ignoreEvent(allProps, a.onblur)
              ? {
                  [a.onblur]: (e) => {
                    handleStateUpdate({ type: "onblur", focus: false });
                    // same principle as onfocus
                    domElement.classList.remove(classes.stateFocused);
                    events[a.onblur] && events[a.onblur](e);
                  },
                }
              : null,

            !ignoreEvent(allProps, a.oninput)
              ? {
                  [a.oninput]: (e) => {
                    // default input event
                    // may be overwritten by props.events
                    handleStateUpdate({ type: "input" });
                    events[a.oninput] && events[a.oninput](e);
                  },
                }
              : null,

            !ignoreEvent(allProps, a.onkeydown)
              ? {
                  [a.onkeydown]: (e) => {
                    if (e.key === "Enter") {
                      isTouchedRef.current = true;
                    } else if (e.key === "Escape" || e.key === "Esc") {
                      handleStateUpdate({ focus: false });
                    }
                    events[a.onkeydown] && events[a.onkeydown](e);
                  },
                }
              : null,

            allProps.required !== undefined && !!allProps.required
              ? { required: true }
              : null,
            allProps[a.readonly] !== undefined && !!allProps[a.readonly]
              ? { [a.readonly]: true }
              : null,
            allProps.pattern !== undefined
              ? { pattern: allProps.pattern }
              : null,
            allProps[a.maxlength] !== undefined
              ? { [a.maxlength]: allProps[a.maxlength] }
              : null,
            allProps[a.minlength] !== undefined
              ? { [a.minlength]: allProps[a.minlength] }
              : null,
            allProps.max !== undefined ? { max: allProps.max } : null,
            allProps.min !== undefined ? { min: allProps.min } : null,
            allProps[a.autofocus] !== undefined
              ? { [a.autofocus]: allProps[a.autofocus] }
              : null,
            allProps[a.tabindex] !== undefined
              ? { [a.tabindex]: allProps[a.tabindex] }
              : null,
            allProps.rows !== undefined ? { rows: allProps.rows } : null,
            allProps.placeholder !== undefined
              ? { placeholder: allProps.placeholder }
              : null,
            allProps.domAttributes !== undefined
              ? { ...allProps.domAttributes }
              : null
          )
        ),
      ]
    ),
    allProps.counter
      ? h(
          "div",
          {
            className: classes.counter,
          },
          (value.length || 0) + " / " + allProps.counter
        )
      : null,
    allProps.help && !showError
      ? h(
          "div",
          {
            className: [
              classes.help,
              allProps.focusHelp ? classes.focusHelp : null,
            ].join(" "),
          },
          allProps.help
        )
      : null,
    showError
      ? h(
          "div",
          {
            className: classes.error,
          },
          errorMessage
        )
      : showErrorPlaceholder && !allProps.help
      ? h("div", {
          className: classes.errorPlaceholder,
        })
      : null,
  ];

  const content = [props.before, ...componentContent, props.after];

  return h(props.element || "div", componentProps, content);
};
