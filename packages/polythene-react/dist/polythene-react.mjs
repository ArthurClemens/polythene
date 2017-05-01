import h from 'react-hyperscript';
import { Component } from 'react';
import { button, ripple, shadow, svg } from 'polythene-new-core';

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

renderer.trust = function (html) {
  var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "div";

  if (html == null) html = "";
  return h(element, {
    dangerouslySetInnerHTML: { __html: html }
  });
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var statefulComponent = function statefulComponent(_ref) {
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

      _this.state = _extends({}, state);
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
        var props = _extends({}, this.props);
        return {
          state: this.state,
          attrs: props,
          children: props.children,
          dom: this.dom
        };
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var vnode = this.createVirtualNode();
        var updateState = function updateState(attrs, value) {
          return _this2.setState(_defineProperty({}, attrs, value));
        };
        return renderer(vnode.attrs.element || element, _extends({}, createProps(vnode, { renderer: renderer, keys: keys, updateState: updateState }), { ref: function ref(dom) {
            return _this2.dom = dom;
          } }), [vnode.attrs.before, createContent(vnode, { renderer: renderer, keys: keys, updateState: updateState }), vnode.attrs.after]);
      }
    }]);

    return _class;
  }(Component);
};

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var statelessComponent = function statelessComponent(_ref) {
  var createContent = _ref.createContent,
      createProps = _ref.createProps,
      element = _ref.element;


  return function (_Component) {
    _inherits$1(_class, _Component);

    function _class() {
      _classCallCheck$1(this, _class);

      return _possibleConstructorReturn$1(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass$1(_class, [{
      key: "createVirtualNode",
      value: function createVirtualNode() {
        var props = _extends$1({}, this.props);
        return {
          state: this.state,
          attrs: props,
          children: props.children,
          dom: this.dom
        };
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var vnode = this.createVirtualNode();
        return renderer(vnode.attrs.element || element, _extends$1({}, createProps(vnode, { renderer: renderer, keys: keys }), { ref: function ref(dom) {
            return _this2.dom = dom;
          } }), [vnode.attrs.before, createContent(vnode, { renderer: renderer, keys: keys }), vnode.attrs.after]);
      }
    }]);

    return _class;
  }(Component);
};

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ripple$1 = statefulComponent(_extends$3({}, ripple));

ripple$1.theme = ripple.theme;
ripple$1.displayName = "ripple";

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createProps = function createProps(vnode, args) {
  return button.createProps(vnode, _extends$2(args, { ripple: ripple$1 }));
};
var createContent = function createContent(vnode, args) {
  return button.createContent(vnode, _extends$2(args, { ripple: ripple$1 }));
};

var button$1 = statefulComponent({
  createProps: createProps,
  createContent: createContent,
  element: button.element
});

button$1.theme = button.theme;
button$1.displayName = "button";

var _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var shadow$1 = statelessComponent(_extends$4({}, shadow));

shadow$1.theme = shadow.theme;
shadow$1.displayName = "shadow";

var _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var svg$1 = statelessComponent(_extends$5({}, svg));

svg$1.theme = svg.theme;
svg$1.displayName = "svg";

export { button$1 as button, ripple$1 as ripple, shadow$1 as shadow, svg$1 as svg, keys, renderer, statefulComponent, statelessComponent };
