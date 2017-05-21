import m from 'mithril';
import { getModels, getUpdate } from 'polythene-core';

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

var requiresKeys = false;

var statefulComponent = function statefulComponent(_ref) {
  var createContent = _ref.createContent,
      createProps = _ref.createProps,
      element = _ref.element,
      _ref$getInitialState = _ref.getInitialState,
      getInitialState = _ref$getInitialState === undefined ? function () {
    return {};
  } : _ref$getInitialState,
      _ref$onMount = _ref.onMount,
      onMount = _ref$onMount === undefined ? function () {} : _ref$onMount,
      _ref$onUnmount = _ref.onUnmount,
      onUnmount = _ref$onUnmount === undefined ? function () {} : _ref$onUnmount,
      _ref$state = _ref.state,
      state = _ref$state === undefined ? {} : _ref$state;


  var createVirtualNode = function createVirtualNode(vnode) {
    return _extends({}, vnode, vnode.dom ? { dom: vnode.dom } : null, {
      updateState: updater(vnode)
    });
  };

  var updater = function updater(vnode) {
    return function (attr, value, callback) {
      vnode.state[attr] = value;
      setTimeout(function () {
        renderer.redraw();
        if (callback) {
          callback();
        }
      }, 0);
    };
  };

  var _oninit = function _oninit(vnode) {
    return vnode.state = _extends(vnode.state, state, getInitialState(vnode.attrs));
  };

  var view = function view(vnode) {
    var vnode1 = createVirtualNode(vnode);
    return renderer(vnode.attrs.element || element, createProps(vnode1, { renderer: renderer, requiresKeys: requiresKeys, keys: keys }), [vnode.attrs.before, createContent(vnode1, { renderer: renderer, requiresKeys: requiresKeys, keys: keys }), vnode.attrs.after]);
  };

  return {
    view: view,
    oninit: function oninit(vnode) {
      return _oninit(createVirtualNode(vnode));
    },
    oncreate: function oncreate(vnode) {
      return onMount(createVirtualNode(vnode));
    },
    onremove: function onremove(vnode) {
      return onUnmount(createVirtualNode(vnode));
    }
  };
};

var requiresKeys$1 = false;

var viewComponent = function viewComponent(_ref) {
  var createContent = _ref.createContent,
      createProps = _ref.createProps,
      element = _ref.element,
      renderView = _ref.renderView,
      onMount = _ref.onMount,
      onUnmount = _ref.onUnmount;


  var view = function view(vnode) {
    return renderer(vnode.attrs.element || element, createProps(vnode, { renderer: renderer, requiresKeys: requiresKeys$1, keys: keys }), [vnode.attrs.before, createContent(vnode, { renderer: renderer, requiresKeys: requiresKeys$1, keys: keys }), vnode.attrs.after]);
  };

  return {
    view: renderView || view,
    oncreate: onMount,
    onremove: onUnmount
  };
};

var requiresKeys$2 = false;

var samStateComponent = function samStateComponent(_ref) {
  var createContent = _ref.createContent,
      createProps = _ref.createProps,
      getInitialState = _ref.getInitialState,
      getUpdates = _ref.getUpdates,
      element = _ref.element,
      renderView = _ref.renderView,
      onInit = _ref.onInit,
      onMount = _ref.onMount,
      onUnmount = _ref.onUnmount;


  var oninit = function oninit(vnode) {
    var update = getUpdate();
    var initialModel = getInitialState(vnode.attrs);
    vnode.state.updates = getUpdates(update);
    var models = getModels(initialModel, update, function () {
      return renderer.redraw();
    });
    models.map(function (model) {
      return vnode.state.model = model;
    });
  };

  var view = function view(vnode) {
    return renderer(vnode.attrs.element || element, createProps(vnode, { renderer: renderer, requiresKeys: requiresKeys$2, keys: keys }), [vnode.attrs.before, createContent(vnode, { renderer: renderer, requiresKeys: requiresKeys$2, keys: keys }), vnode.attrs.after]);
  };

  return {
    view: renderView || view,
    oninit: onInit || oninit,
    oncreate: onMount,
    onremove: onUnmount
  };
};

export { keys, renderer, statefulComponent, viewComponent, samStateComponent };
