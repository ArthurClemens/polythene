import h from 'react-hyperscript';
import { Component } from 'react';
import { button, ripple } from 'polythene-new-core';

var keys = {
  class: "className",
  formaction: "formAction",
  onblur: "onBlur",
  onclick: "onClick",
  onfocus: "onFocus",
  onkeydown: "onKeyDown",
  onkeyup: "onKeyUp",
  onmousedown: "onMouseDown",
  onmouseout: "onMouseOut",
  onmouseover: "onMouseOver",
  onmouseup: "onMouseUp",
  tabindex: "tabIndex"
};

var renderer = h;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var stateComponent = function stateComponent(_ref) {
  var createContent = _ref.createContent,
      createProps = _ref.createProps,
      element = _ref.element,
      _ref$onMount = _ref.onMount,
      onMount = _ref$onMount === undefined ? function () {} : _ref$onMount,
      _ref$onUnmount = _ref.onUnmount,
      onUnmount = _ref$onUnmount === undefined ? function () {} : _ref$onUnmount,
      _ref$state = _ref.state,
      state = _ref$state === undefined ? {} : _ref$state;


  return function (_Component) {
    _inherits(_class, _Component);

    function _class(props) {
      _classCallCheck(this, _class);

      var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

      _this.state = state;
      return _this;
    }

    _createClass(_class, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        onMount(this.createVirtualNode());
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        onUnmount(this.createVirtualNode());
      }
    }, {
      key: "createVirtualNode",
      value: function createVirtualNode() {
        return {
          state: this.state,
          attrs: this.props,
          children: this.props.children,
          dom: this.dom
        };
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var props = this.props;
        var vnode = this.createVirtualNode();
        var updateState = function updateState(attrs, value) {
          return _this2.setState(_defineProperty({}, attrs, value));
        };
        return renderer(props.element || element, _extends({}, createProps(vnode, { renderer: renderer, keys: keys, updateState: updateState }), { ref: function ref(dom) {
            return _this2.dom = dom;
          } }), [props.before, createContent(vnode, { renderer: renderer, keys: keys, updateState: updateState }), props.after]);
      }
    }]);

    return _class;
  }(Component);
};

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ripple$1 = stateComponent(_extends$2({}, ripple));

ripple$1.theme = ripple.theme;

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createProps = function createProps(vnode, args) {
  return button.createProps(vnode, _extends$1(args, { ripple: ripple$1 }));
};
var createContent = function createContent(vnode, args) {
  return button.createContent(vnode, _extends$1(args, { ripple: ripple$1 }));
};

var button$1 = stateComponent({
  createProps: createProps,
  createContent: createContent,
  element: button.element
});

button$1.theme = button.theme;

export { button$1 as button, ripple$1 as ripple, keys, renderer, stateComponent };
