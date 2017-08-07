import { Button, Dialog, FAB, RaisedButton, Snackbar, keys, renderer } from 'polythene-mithril';
import React, { Component } from 'react';
import { Button as Button$1, Dialog as Dialog$1, FAB as FAB$1, RaisedButton as RaisedButton$1, Snackbar as Snackbar$1, keys as keys$1, renderer as renderer$1 } from 'polythene-react';
import { subscribe, unsubscribe } from 'polythene-core';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var genericTests = (function (_ref) {
  var h = _ref.renderer,
      k = _ref.keys,
      Snackbar$$1 = _ref.Snackbar,
      Dialog$$1 = _ref.Dialog,
      Button$$1 = _ref.Button,
      buttonGroup = _ref.buttonGroup,
      containerSelector = _ref.containerSelector;


  Snackbar$$1.theme(".notification-tests-blue-notification", {
    color_dark_background: "#2196F3",
    border_radius: 5
  });

  var dialogOptions = {
    body: "You pressed a message action",
    footer: [h(Button$$1, {
      label: "Cancel",
      events: _defineProperty({}, k.onclick, function () {
        Dialog$$1.hide();
        Snackbar$$1.unpause();
      })
    }), h(Button$$1, {
      label: "OK",
      events: _defineProperty({}, k.onclick, function () {
        Dialog$$1.hide();
        Snackbar$$1.hide();
      })
    })],
    backdrop: true,
    modal: true,
    hideDelay: .2
  };

  var variations = [{
    label: "1 line",
    title: "A one line message"
  }, {
    label: "2 lines",
    title: "This message tells some things using two lines. This message tells some things using two lines."
  }, {
    label: "1 line action",
    title: "Archived",
    action: h(Button$$1, {
      label: "Undo",
      events: _defineProperty({}, k.onclick, function () {
        Snackbar$$1.pause();
        Dialog$$1.show(dialogOptions);
      })
    })
  }, {
    label: "2 line action",
    title: "This message tells some things using two lines.",
    layout: "vertical",
    action: h(Button$$1, {
      label: "Let me think about it",
      events: _defineProperty({}, k.onclick, function () {
        Snackbar$$1.pause();
        Dialog$$1.show(dialogOptions);
      })
    })
  }, {
    label: "No timeout",
    title: "Press Hide to close",
    timeout: 0
  }, {
    label: "Custom timing",
    title: "Custom timing",
    showDelay: .3,
    showDuration: 1.1,
    hideDuration: 1.5
  }];

  return [{
    name: "Main screen snackbar",
    interactive: true,
    exclude: true,
    component: {
      view: function view() {
        return h(buttonGroup, { variations: variations });
      }
    }
  }, {
    name: "Snackbar in container",
    interactive: true,
    exclude: true,
    component: {
      view: function view() {
        return h(containerSelector, { buttonGroup: buttonGroup, variations: variations, spawn: "container1", position: "container", foreground: "#fff", background: "#eceff1" });
      }
    }
  }, {
    name: "Snackbar in container -- dark tone",
    interactive: true,
    className: "pe-dark-tone",
    exclude: true,
    component: {
      view: function view() {
        return h(containerSelector, { buttonGroup: buttonGroup, variations: variations, spawn: "container2", position: "container", foreground: "#444", background: "#263238", tone: "light" });
      }
    }
  }];
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var buttonGroup = {
  view: function view(vnode) {
    return renderer("div", [vnode.attrs.variations.map(function (opts) {
      return renderer(RaisedButton, {
        label: opts.label,
        events: { onclick: function onclick() {
            return Snackbar.show(_extends({}, opts, { key: opts.title // add a key to let Mithril better distinguish between the notifications
            }), vnode.attrs.spawnOptions);
          } }
      });
    }), renderer(RaisedButton, {
      label: "Hide",
      disabled: Snackbar.count() === 0,
      events: { onclick: function onclick() {
          return Snackbar.hide(vnode.attrs.spawnOptions);
        } }
    }), renderer(RaisedButton, {
      label: "Clear",
      disabled: Snackbar.count() === 0,
      events: {
        onclick: function onclick() {
          return Snackbar.hide(vnode.attrs.spawnOptions).then(function () {
            return Snackbar.clear();
          });
        }
      }
    })]);
  }
};

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var pattern = function pattern(foreground, background) {
  return {
    backgroundImage: "radial-gradient(circle at 100% 150%, " + foreground + " 24%, " + background + " 25%, " + background + " 28%, " + foreground + " 29%, " + foreground + " 36%, " + background + " 36%, " + background + " 40%, transparent 40%, transparent), radial-gradient(circle at 0 150%, " + foreground + " 24%, " + background + " 25%, " + background + " 28%, " + foreground + " 29%, " + foreground + " 36%, " + background + " 36%, " + background + " 40%, transparent 40%, transparent), radial-gradient(circle at 50%  100%, " + background + " 10%, " + foreground + " 11%, " + foreground + " 23%, " + background + " 24%, " + background + " 30%, " + foreground + " 31%, " + foreground + " 43%, " + background + " 44%, " + background + " 50%, " + foreground + " 51%, " + foreground + " 63%, " + background + " 64%, " + background + " 71%, transparent 71%, transparent), radial-gradient(circle at 100% 50%, " + background + " 5%, " + foreground + " 6%, " + foreground + " 15%, " + background + " 16%, " + background + " 20%, " + foreground + " 21%, " + foreground + " 30%, " + background + " 31%, " + background + " 35%, " + foreground + " 36%, " + foreground + " 45%, " + background + " 46%, " + background + " 49%, transparent 50%, transparent), radial-gradient(circle at 0 50%, " + background + " 5%, " + foreground + " 6%, " + foreground + " 15%, " + background + " 16%, " + background + " 20%, " + foreground + " 21%, " + foreground + " 30%, " + background + " 31%, " + background + " 35%, " + foreground + " 36%, " + foreground + " 45%, " + background + " 46%, " + background + " 49%, transparent 50%, transparent)",
    backgroundSize: "100px 50px"
  };
};

var iconPlusSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24.00 24.00\" enableBackground=\"new 0 0 24.00 24.00\"><path fill=\"#000000\" fillOpacity=\"1\" strokeWidth=\"0.2\" strokeLinejoin=\"round\" d=\"M 18.9994,12.998L 12.9994,12.998L 12.9994,18.998L 10.9994,18.998L 10.9994,12.998L 4.99936,12.998L 4.99936,10.998L 10.9994,10.998L 10.9994,4.99805L 12.9994,4.99805L 12.9994,10.998L 18.9994,10.998L 18.9994,12.998 Z \"/></svg>";

var containerSelector = {
  view: function view(vnode) {
    var attrs = vnode.attrs;
    var containerSelectorId = "bottom_container_" + attrs.spawn;
    return renderer("div", [renderer(attrs.buttonGroup, {
      variations: attrs.variations.map(function (opts) {
        return _extends$1({}, opts, {
          tone: attrs.tone,
          containerSelector: "#" + containerSelectorId
        });
      }),
      spawnOptions: { spawn: attrs.spawn, position: attrs.position }
    }), renderer("div", {
      style: _extends$1({}, pattern(attrs.foreground, attrs.background), {
        height: "220px",
        overflow: "hidden",
        position: "relative",
        marginTop: "15px"
      })
    }, renderer("div", {
      style: {
        position: "absolute",
        width: "100%",
        left: 0,
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end"
      },
      id: containerSelectorId
    }, renderer(FAB, {
      className: "self-end",
      icon: { svg: renderer.trust(iconPlusSVG) },
      z: 1,
      style: {
        margin: "0 16px 16px 0"
      }
    }), renderer(Snackbar, { spawn: attrs.spawn, position: attrs.position })))]);
  }
};

var mithrilTests = function mithrilTests() {

  return [];
};

var testsMithril = [].concat(genericTests({ Snackbar: Snackbar, Dialog: Dialog, Button: Button, buttonGroup: buttonGroup, containerSelector: containerSelector, renderer: renderer, keys: keys })).concat(mithrilTests({ Snackbar: Snackbar, Dialog: Dialog, Button: Button, buttonGroup: buttonGroup, containerSelector: containerSelector, renderer: renderer, keys: keys }));

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class(props) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

    _this.state = {
      count: 0
    };
    _this.updateCount = _this.updateCount.bind(_this);
    _this.notificationChange = _this.notificationChange.bind(_this);
    subscribe("snackbar", _this.notificationChange);
    return _this;
  }

  _createClass(_class, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._mounted = true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._mounted = false;
      unsubscribe("snackbar", this.notificationChange);
    }
  }, {
    key: "updateCount",
    value: function updateCount(count) {
      var needsDisplay = this.props.needsDisplay;

      if (this._mounted) {
        this.setState({ count: count });
      }
      if (needsDisplay) {
        needsDisplay();
      }
    }
  }, {
    key: "notificationChange",
    value: function notificationChange() {
      this.updateCount(Snackbar$1.count());
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          variations = _props.variations,
          spawn = _props.spawn,
          position = _props.position,
          needsDisplay = _props.needsDisplay;

      var count = this.state.count;
      return React.createElement(
        "div",
        null,
        variations.map(function (opts) {
          return React.createElement(RaisedButton$1, {
            key: opts.label,
            label: opts.label,
            events: {
              onClick: function onClick() {
                needsDisplay && needsDisplay();
                Snackbar$1.show(_extends$2({}, opts, {
                  key: opts.title // add a key to let React better distinguish between the notifications
                }), { spawn: spawn, position: position });
              }
            }
          });
        }),
        React.createElement(RaisedButton$1, {
          label: "Hide",
          disabled: count === 0,
          events: {
            onClick: function onClick() {
              return Snackbar$1.hide({ spawn: spawn, position: position });
            }
          }
        }),
        React.createElement(RaisedButton$1, {
          label: "Clear",
          disabled: count === 0,
          events: {
            onClick: function onClick() {
              return Snackbar$1.hide({ spawn: spawn, position: position }).then(Snackbar$1.clear);
            }
          }
        })
      );
    }
  }]);

  return _class;
}(Component);

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pattern$1 = function pattern(foreground, background) {
  return {
    backgroundImage: "radial-gradient(circle at 100% 150%, " + foreground + " 24%, " + background + " 25%, " + background + " 28%, " + foreground + " 29%, " + foreground + " 36%, " + background + " 36%, " + background + " 40%, transparent 40%, transparent), radial-gradient(circle at 0 150%, " + foreground + " 24%, " + background + " 25%, " + background + " 28%, " + foreground + " 29%, " + foreground + " 36%, " + background + " 36%, " + background + " 40%, transparent 40%, transparent), radial-gradient(circle at 50%  100%, " + background + " 10%, " + foreground + " 11%, " + foreground + " 23%, " + background + " 24%, " + background + " 30%, " + foreground + " 31%, " + foreground + " 43%, " + background + " 44%, " + background + " 50%, " + foreground + " 51%, " + foreground + " 63%, " + background + " 64%, " + background + " 71%, transparent 71%, transparent), radial-gradient(circle at 100% 50%, " + background + " 5%, " + foreground + " 6%, " + foreground + " 15%, " + background + " 16%, " + background + " 20%, " + foreground + " 21%, " + foreground + " 30%, " + background + " 31%, " + background + " 35%, " + foreground + " 36%, " + foreground + " 45%, " + background + " 46%, " + background + " 49%, transparent 50%, transparent), radial-gradient(circle at 0 50%, " + background + " 5%, " + foreground + " 6%, " + foreground + " 15%, " + background + " 16%, " + background + " 20%, " + foreground + " 21%, " + foreground + " 30%, " + background + " 31%, " + background + " 35%, " + foreground + " 36%, " + foreground + " 45%, " + background + " 46%, " + background + " 49%, transparent 50%, transparent)",
    backgroundSize: "100px 50px"
  };
};

var iconPlus = React.createElement(
  "svg",
  { width: "24", height: "24", viewBox: "0 0 24.00 24.00", enableBackground: "new 0 0 24.00 24.00" },
  React.createElement("path", { fill: "#000000", fillOpacity: "1", strokeWidth: "0.2", strokeLinejoin: "round", d: "M 18.9994,12.998L 12.9994,12.998L 12.9994,18.998L 10.9994,18.998L 10.9994,12.998L 4.99936,12.998L 4.99936,10.998L 10.9994,10.998L 10.9994,4.99805L 12.9994,4.99805L 12.9994,10.998L 18.9994,10.998L 18.9994,12.998 Z " })
);

var _class$1 = function (_Component) {
  _inherits$1(_class, _Component);

  function _class(props) {
    _classCallCheck$1(this, _class);

    var _this = _possibleConstructorReturn$1(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

    _this.state = {
      needsDisplay: 0
    };
    _this.updateNeedsDisplay = _this.updateNeedsDisplay.bind(_this);
    return _this;
  }

  _createClass$1(_class, [{
    key: "updateNeedsDisplay",
    value: function updateNeedsDisplay(count) {
      this.setState({ needsDisplay: count });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          ButtonGroup = _props.buttonGroup,
          variations = _props.variations,
          spawn = _props.spawn,
          position = _props.position,
          foreground = _props.foreground,
          background = _props.background,
          tone = _props.tone;

      var backgroundStyle = _extends$3({}, pattern$1(foreground, background), {
        height: "220px",
        overflow: "hidden",
        position: "relative",
        marginTop: "15px"
      });
      var containerSelectorId = "bottom_container_" + spawn;
      return React.createElement(
        "div",
        null,
        React.createElement(ButtonGroup, {
          variations: variations.map(function (opts) {
            return _extends$3({}, opts, {
              tone: tone,
              containerSelector: "#" + containerSelectorId
            });
          }),
          spawn: spawn,
          position: position,
          needsDisplay: function needsDisplay() {
            return _this2.updateNeedsDisplay(_this2.state.needsDisplay + 1);
          }
        }),
        React.createElement(
          "div",
          {
            style: backgroundStyle
          },
          React.createElement(
            "div",
            {
              style: {
                position: "absolute",
                width: "100%",
                left: 0,
                bottom: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end"
              },
              id: containerSelectorId
            },
            React.createElement(FAB$1, {
              className: "self-end",
              icon: { svg: iconPlus },
              z: 1,
              style: {
                margin: "0 16px 16px 0"
              }
            }),
            React.createElement(Snackbar$1, {
              spawn: spawn,
              position: position
            })
          )
        )
      );
    }
  }]);

  return _class;
}(Component);

var reactTests = function reactTests() {

  return [];
};

var testsReact = [].concat(genericTests({ Snackbar: Snackbar$1, Dialog: Dialog$1, Button: Button$1, buttonGroup: _class, containerSelector: _class$1, renderer: renderer$1, keys: keys$1 })).concat(reactTests({ Snackbar: Snackbar$1, Dialog: Dialog$1, Button: Button$1, buttonGroup: _class, containerSelector: _class$1, renderer: renderer$1, keys: keys$1 }));

export { testsMithril as mithrilTests, testsReact as reactTests };
