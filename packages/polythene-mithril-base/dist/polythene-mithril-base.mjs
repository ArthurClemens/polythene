import m from 'mithril';

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

export { keys, renderer, statefulComponent, statelessComponent };
