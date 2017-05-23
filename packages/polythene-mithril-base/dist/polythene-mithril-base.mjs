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

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Conditional = {
  oninit: function oninit(vnode) {
    vnode.state = {
      visible: vnode.attrs.permanent || vnode.attrs.show || false,
      transitioning: false
    };
  },
  view: function view(vnode) {
    var attrs = vnode.attrs;
    var state = vnode.state;
    if (!attrs.permanent && !state.transitioning) {
      if (attrs.show) {
        state.visible = true;
      } else if (attrs.hide) {
        state.visible = false;
      }
    }
    return state.visible ? m(attrs.instance, _extends$1({}, attrs, {
      setVisible: function setVisible(value) {
        return state.visible = value, m.redraw();
      },
      setTransitioning: function setTransitioning(value) {
        return state.transitioning = value, m.redraw();
      }
    })) : m("span", { className: attrs.placeholderClassName });
  }
};

export { keys, renderer, statefulComponent, viewComponent, Conditional };
