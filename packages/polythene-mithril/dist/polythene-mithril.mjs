import m from 'mithril';
import { button, icon, ripple, shadow, svg } from 'polythene-new-core';

var keys = {
  class: "class",
  formaction: "formaction",
  onblur: "onblur",
  onclick: "onclick",
  onfocus: "onfocus",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  tabindex: "tabindex"
};

var renderer = m;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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


  var updater = function updater(vnode) {
    return function (attrs, value) {
      return vnode.state[attrs] = value, setTimeout(renderer.redraw, 0);
    };
  };

  var oninit = function oninit(vnode) {
    return vnode.state = _extends(vnode.state, state);
  };

  var view = function view(vnode) {
    var updateState = updater(vnode);
    return renderer(vnode.attrs.element || element, createProps(vnode, { renderer: renderer, keys: keys, updateState: updateState }), [vnode.attrs.before, createContent(vnode, { renderer: renderer, keys: keys, updateState: updateState }), vnode.attrs.after]);
  };

  return {
    view: view,
    oninit: oninit,
    oncreate: onMount,
    onremove: onUnmount
  };
};

var statelessComponent = function statelessComponent(_ref) {
  var createContent = _ref.createContent,
      createProps = _ref.createProps,
      element = _ref.element;


  var view = function view(vnode) {
    return renderer(vnode.attrs.element || element, createProps(vnode, { renderer: renderer, keys: keys }), [vnode.attrs.before, createContent(vnode, { renderer: renderer, keys: keys }), vnode.attrs.after]);
  };

  return {
    view: view
  };
};

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ripple$1 = statefulComponent(_extends$2({}, ripple));

ripple$1.theme = ripple.theme;

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createProps = function createProps(vnode, args) {
  return button.createProps(vnode, _extends$1(args, { ripple: ripple$1 }));
};
var createContent = function createContent(vnode, args) {
  return button.createContent(vnode, _extends$1(args, { ripple: ripple$1 }));
};

var button$1 = statefulComponent(_extends$1({}, button, {
  createProps: createProps,
  createContent: createContent
}));

button$1.theme = button.theme;

var _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var svg$1 = statelessComponent(_extends$4({}, svg));

svg$1.theme = svg.theme;

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createProps$1 = function createProps(vnode, args) {
  return icon.createProps(vnode, _extends$3(args, { svg: svg$1 }));
};
var createContent$1 = function createContent(vnode, args) {
  return icon.createContent(vnode, _extends$3(args, { svg: svg$1 }));
};

var icon$1 = statelessComponent(_extends$3({}, icon, {
  createProps: createProps$1,
  createContent: createContent$1
}));

icon$1.theme = icon.theme;

var _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var shadow$1 = statelessComponent(_extends$5({}, shadow));

shadow$1.theme = shadow.theme;

export { button$1 as button, icon$1 as icon, ripple$1 as ripple, shadow$1 as shadow, svg$1 as svg, keys, renderer, statefulComponent, statelessComponent };
