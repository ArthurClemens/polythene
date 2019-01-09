import { filterSupportedAttributes, classForSize } from 'polythene-core';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

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

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var currentState = function currentState(attrs, state) {
  var checked = attrs.checked !== undefined ? attrs.checked : state.checked();
  var selectable = attrs.selectable !== undefined ? attrs.selectable(checked) : false;
  var inactive = attrs.disabled || !selectable;
  return {
    checked: checked,
    inactive: inactive
  };
};

var getInitialState = function getInitialState(vnode, createStream, _ref) {
  var k = _ref.keys;
  var attrs = vnode.attrs;
  var isChecked = attrs.defaultChecked !== undefined ? attrs.defaultChecked : attrs.checked || false;
  var checked = createStream(isChecked);

  var notifyChange = function notifyChange(e, isChecked) {
    if (attrs.onChange) {
      attrs.onChange({
        event: e,
        checked: isChecked,
        value: attrs.value
      });
    }
  };

  var onChange = function onChange(e) {
    var isChecked = e.currentTarget.checked;

    if (attrs.type === "radio") ; else {
      checked(isChecked);
    }

    notifyChange(e, isChecked);
  };

  var toggle = function toggle(e) {
    var newChecked = !checked();
    checked(newChecked);
    notifyChange(e, newChecked);
  };

  var viewControlClickHandler = attrs.events && attrs.events[k.onclick];
  var viewControlKeyDownHandler = attrs.events && attrs.events[k.onkeydown] ? attrs.events[k.onkeydown] : function (e) {
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
    checked: checked,
    toggle: toggle,
    onChange: onChange,
    viewControlClickHandler: viewControlClickHandler,
    viewControlKeyDownHandler: viewControlKeyDownHandler,
    redrawOnUpdate: createStream.merge([checked])
  };
};
var createProps = function createProps(vnode, _ref2) {
  var k = _ref2.keys;
  var attrs = vnode.attrs;
  var state = vnode.state;

  var _currentState = currentState(attrs, state),
      checked = _currentState.checked,
      inactive = _currentState.inactive;

  return _extends({}, filterSupportedAttributes(attrs), {
    className: [classes.component, attrs.instanceClass, // for instance pe-checkbox-control
    checked ? classes.on : classes.off, attrs.disabled ? classes.disabled : null, inactive ? classes.inactive : null, classForSize(classes, attrs.size), attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};
var createContent = function createContent(vnode, _ref3) {
  var h = _ref3.renderer,
      k = _ref3.keys,
      ViewControl = _ref3.ViewControl;
  var state = vnode.state;
  var attrs = vnode.attrs;

  var _currentState2 = currentState(attrs, state),
      checked = _currentState2.checked,
      inactive = _currentState2.inactive;

  return h("label", _extends({}, {
    className: classes.formLabel
  }, state.viewControlClickHandler && _defineProperty({}, k.onclick, function (e) {
    return e.preventDefault(), state.viewControlClickHandler(e);
  })), [h(ViewControl, _extends({}, attrs, {
    inactive: inactive,
    checked: checked,
    key: "control",
    events: _defineProperty({}, k.onkeydown, state.viewControlKeyDownHandler)
  })), attrs.label ? h(".".concat(classes.label), {
    key: "label"
  }, attrs.label) : null, h("input", _extends({}, attrs.events, {
    name: attrs.name,
    type: attrs.type,
    value: attrs.value,
    checked: checked
  }, attrs.disabled || inactive ? {
    disabled: "disabled"
  } : _defineProperty({}, k.onchange, state.onChange)))]);
};

var selectionControl = /*#__PURE__*/Object.freeze({
  getElement: getElement,
  getInitialState: getInitialState,
  createProps: createProps,
  createContent: createContent
});

var CONTENT = [{
  iconType: "iconOn",
  className: classes.buttonOn
}, {
  iconType: "iconOff",
  className: classes.buttonOff
}];
var getElement$1 = function getElement(vnode) {
  return vnode.attrs.element || ".".concat(classes.box);
};

var createIcon = function createIcon(h, iconType, attrs, className) {
  return (// if attrs.iconOn/attrs.iconOff is passed, use that icon options object and ignore size
    // otherwise create a new object
    _extends({}, {
      className: className,
      key: iconType
    }, attrs[iconType] ? attrs[iconType] : {
      svg: {
        content: h.trust(attrs.icons[iconType])
      }
    }, attrs.icon, attrs.size ? {
      size: attrs.size
    } : null)
  );
};

var createContent$1 = function createContent(vnode, _ref) {
  var h = _ref.renderer,
      Icon = _ref.Icon,
      IconButton = _ref.IconButton;
  var attrs = vnode.attrs;
  return h(IconButton, _extends({}, {
    element: "div",
    className: classes.button,
    content: CONTENT.map(function (o) {
      return h(Icon, createIcon(h, o.iconType, attrs, o.className));
    }),
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

export { selectionControl as coreSelectionControl, viewControl as coreViewControl };
