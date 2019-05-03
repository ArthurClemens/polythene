import { filterSupportedAttributes, classForSize } from "polythene-core";
import classes from "polythene-css-classes/selection-control";

export const _SelectionControl = ({ h, a, useState, ViewControl, ...props }) => {
  const defaultChecked = props.defaultChecked !== undefined
    ? props.defaultChecked
    : props.checked || false;
  const [previousIsChecked, setIsChecked] = useState(defaultChecked);

  const isChecked = props.checked !== undefined
    ? props.checked
    : previousIsChecked;
  const selectable = props.selectable !== undefined
    ? props.selectable(isChecked)
    : false;
  const inactive = props.disabled || !selectable;

  const notifyChange = (e, isChecked) => {
    if (props.onChange) {
      props.onChange({
        event: e,
        checked: isChecked,
        value: props.value
      });
    } 
  };

  const onChange = e => {
    let isChecked = e.currentTarget.checked;
    if (props.type === "radio") {
      // do not set directly
    } else {
      setIsChecked(isChecked);
    }
    notifyChange(e, isChecked);
  };

  const toggle = e => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    notifyChange(e, newChecked);
  };

  const viewControlClickHandler = props.events && props.events[a.onclick];
  const viewControlKeyDownHandler = props.events && props.events[a.onkeydown]
    ? props.events[a.onkeydown]
    : e => {
      if (e.key === "Enter" || e.keyCode === 32) {
        e.preventDefault();
        if (viewControlClickHandler) {
          viewControlClickHandler(e);
        } else {
          toggle(e);
        }
      }
    };

  const componentProps = Object.assign(
    {},
    filterSupportedAttributes(props),
    props.testId && { "data-test-id": props.testId },
    {
      className: [
        classes.component,
        props.instanceClass, // for instance pe-checkbox-control
        isChecked ? classes.on : classes.off,
        props.disabled ? classes.disabled : null,
        inactive ? classes.inactive : null,
        classForSize(classes, props.size),
        props.tone === "dark" ? "pe-dark-tone" : null,
        props.tone === "light" ? "pe-light-tone" : null,
        props.className || props[a.class],
      ].join(" ")
    }
  );

  const content = h("label",
    Object.assign(
      {},
      {
        className: classes.formLabel,
      },
      viewControlClickHandler && {
        [a.onclick]: e => (
          e.preventDefault(),
          viewControlClickHandler(e)
        )
      }
    ),
    [
      props.before,
      h(ViewControl, Object.assign(
        {},
        props,
        {
          inactive,
          checked: isChecked,
          key: "control",
          events: {
            // Only use key down event; click events are handled by input element
            [a.onkeydown]: viewControlKeyDownHandler
          }
        }
      )),
      props.label
        ? h(`.${classes.label}`,
          { key: "label" },
          props.label
        )
        : null,
      h("input", Object.assign(
        {},
        props.events,
        {
          name: props.name,
          type: props.type,
          value: props.value,
          checked: isChecked
        },
        props.disabled || inactive
          ? { disabled: "disabled" }
          : {
            [a.onchange]: onChange
          }
      )),
      props.after,
    ]
  );
  return h(props.element || "div", componentProps, content);
};
