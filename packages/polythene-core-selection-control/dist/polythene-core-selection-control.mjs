import { filterSupportedAttributes, classForSize } from 'polythene-core';

var classes = {
  component: "pe-control",
  // elements
  formLabel: "pe-control__form-label",
  input: "pe-control__input",
  label: "pe-control__label",
  // states
  disabled: "pe-control--disabled",
  inactive: "pe-control--inactive",
  large: "pe-control--large",
  medium: "pe-control--medium",
  off: "pe-control--off",
  on: "pe-control--on",
  regular: "pe-control--regular",
  small: "pe-control--small",
  // control view elements
  box: "pe-control__box",
  button: "pe-control__button",
  // control view states
  buttonOff: "pe-control__button--off",
  buttonOn: "pe-control__button--on"
};

const getElement = vnode => vnode.attrs.element || "div";

const currentState = (attrs, state) => {
  const checked = attrs.checked !== undefined ? attrs.checked : state.checked();
  const selectable = attrs.selectable !== undefined ? attrs.selectable(checked) : false;
  const inactive = attrs.disabled || !selectable;
  return {
    checked,
    inactive
  };
};

const getInitialState = (vnode, createStream, {
  keys: k
}) => {
  const attrs = vnode.attrs;
  const isChecked = attrs.defaultChecked !== undefined ? attrs.defaultChecked : attrs.checked || false;
  const checked = createStream(isChecked);

  const notifyChange = (e, isChecked) => {
    if (attrs.onChange) {
      attrs.onChange({
        event: e,
        checked: isChecked,
        value: attrs.value
      });
    }
  };

  const onChange = e => {
    let isChecked = e.currentTarget.checked;

    if (attrs.type === "radio") ; else {
      checked(isChecked);
    }

    notifyChange(e, isChecked);
  };

  const toggle = e => {
    const newChecked = !checked();
    checked(newChecked);
    notifyChange(e, newChecked);
  };

  const viewControlClickHandler = attrs.events && attrs.events[k.onclick];
  const viewControlKeyDownHandler = attrs.events && attrs.events[k.onkeydown] ? attrs.events[k.onkeydown] : e => {
    if (e.key === "Enter" || e.keyCode === 32) {
      e.preventDefault();

      if (viewControlClickHandler) {
        viewControlClickHandler(e);
      } else {
        toggle(e);
      }
    }
  };
  return {
    checked,
    toggle,
    onChange,
    viewControlClickHandler,
    viewControlKeyDownHandler,
    redrawOnUpdate: createStream.merge([checked])
  };
};
const createProps = (vnode, {
  keys: k
}) => {
  const attrs = vnode.attrs;
  const state = vnode.state;
  const {
    checked,
    inactive
  } = currentState(attrs, state);
  return Object.assign({}, filterSupportedAttributes(attrs), {
    className: [classes.component, attrs.instanceClass, // for instance pe-checkbox-control
    checked ? classes.on : classes.off, attrs.disabled ? classes.disabled : null, inactive ? classes.inactive : null, classForSize(classes, attrs.size), attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};
const createContent = (vnode, {
  renderer: h,
  keys: k,
  ViewControl
}) => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  const {
    checked,
    inactive
  } = currentState(attrs, state);
  return h("label", Object.assign({}, {
    className: classes.formLabel
  }, state.viewControlClickHandler && {
    [k.onclick]: e => (e.preventDefault(), state.viewControlClickHandler(e))
  }), [h(ViewControl, Object.assign({}, attrs, {
    inactive,
    checked,
    key: "control",
    events: {
      // Only use key down event; click events are handled by input element
      [k.onkeydown]: state.viewControlKeyDownHandler
    }
  })), attrs.label ? h(`.${classes.label}`, {
    key: "label"
  }, attrs.label) : null, h("input", Object.assign({}, attrs.events, {
    name: attrs.name,
    type: attrs.type,
    value: attrs.value,
    checked
  }, attrs.disabled || inactive ? {
    disabled: "disabled"
  } : {
    [k.onchange]: state.onChange
  }))]);
};

var selectionControl = /*#__PURE__*/Object.freeze({
  getElement: getElement,
  getInitialState: getInitialState,
  createProps: createProps,
  createContent: createContent
});

const CONTENT = [{
  iconType: "iconOn",
  className: classes.buttonOn
}, {
  iconType: "iconOff",
  className: classes.buttonOff
}];
const getElement$1 = vnode => vnode.attrs.element || `.${classes.box}`;

const createIcon = (h, iconType, attrs, className) => // if attrs.iconOn/attrs.iconOff is passed, use that icon options object and ignore size
// otherwise create a new object
Object.assign({}, {
  className,
  key: iconType
}, attrs[iconType] ? attrs[iconType] : {
  svg: {
    content: h.trust(attrs.icons[iconType])
  }
}, attrs.icon, attrs.size ? {
  size: attrs.size
} : null);

const createContent$1 = (vnode, {
  renderer: h,
  Icon,
  IconButton
}) => {
  const attrs = vnode.attrs;
  return h(IconButton, Object.assign({}, {
    element: "div",
    key: attrs.key,
    className: classes.button,
    content: CONTENT.map(o => h(Icon, createIcon(h, o.iconType, attrs, o.className))),
    ripple: {
      center: true
    },
    disabled: attrs.disabled,
    events: attrs.events,
    inactive: attrs.inactive
  }, attrs.iconButton // for example for hover behaviour
  ));
};

var viewControl = /*#__PURE__*/Object.freeze({
  getElement: getElement$1,
  createContent: createContent$1
});

export { selectionControl as coreSelectionControl, viewControl };
