import { Button, Dialog, Notification, RaisedButton, keys, renderer } from 'polythene-mithril';
import React, { Component } from 'react';
import { Button as Button$1, Dialog as Dialog$1, Notification as Notification$1, RaisedButton as RaisedButton$1, keys as keys$1, renderer as renderer$1 } from 'polythene-react';
import { subscribe, unsubscribe } from 'polythene-core';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var genericTests = (function (_ref) {
  var h = _ref.renderer,
      k = _ref.keys,
      Notification$$1 = _ref.Notification,
      Dialog$$1 = _ref.Dialog,
      Button$$1 = _ref.Button,
      buttonGroup = _ref.buttonGroup,
      containerSelector = _ref.containerSelector;


  Notification$$1.theme(".notification-tests-blue-notification", {
    color_dark_background: "#2196F3",
    border_radius: 5
  });

  var dialogOptions = {
    body: "You pressed a message action",
    footer: [h(Button$$1, {
      label: "Cancel",
      events: _defineProperty({}, k.onclick, function () {
        Dialog$$1.hide();
        Notification$$1.unpause();
      })
    }), h(Button$$1, {
      label: "OK",
      events: _defineProperty({}, k.onclick, function () {
        Dialog$$1.hide();
        Notification$$1.hide();
      })
    })],
    backdrop: true,
    modal: true,
    hideDelay: .2
  };

  var MultipleIds1 = buttonGroup({ title: "A one line message" }, { id: "one" });

  var MultipleIds2 = buttonGroup({ title: "This message tells some things using two lines" }, { id: "two" });

  return [{
    name: "Option: title (1 line)",
    interactive: true,
    exclude: true,
    component: buttonGroup({
      title: "A one line message"
    })
  }, {
    name: "Option: title (2 lines)",
    interactive: true,
    exclude: true,
    component: buttonGroup({
      title: "This message tells some things using two lines"
    })
  }, {
    name: "Option: title (1 line) as function",
    interactive: true,
    exclude: true,
    component: buttonGroup({
      title: "A one line message"
    })
  }, {
    name: "Option: content",
    interactive: true,
    exclude: true,
    component: buttonGroup({
      content: h("div", "This message tells some things using two lines")
    })
  }, {
    name: "Option: style",
    interactive: true,
    exclude: true,
    component: buttonGroup({
      title: "This message tells some things using two lines",
      style: {
        color: "white",
        backgroundColor: "#2196F3",
        padding: "1.5rem"
      }
    })
  }, {
    name: "Themed (color and border radius)",
    interactive: true,
    exclude: true,
    component: buttonGroup({
      title: "This message tells some things using two lines",
      className: "notification-tests-blue-notification"
    })
  }, {
    name: "Option: title (1 line), action",
    interactive: true,
    exclude: true,
    component: buttonGroup({
      title: "Archived",
      action: h(Button$$1, {
        label: "Undo",
        events: _defineProperty({}, k.onclick, function () {
          Notification$$1.pause();
          Dialog$$1.show(dialogOptions);
        })
      })
    })
  }, {
    name: "Option: title (1 line), action -- light tone",
    interactive: true,
    exclude: true,
    component: buttonGroup({
      title: "Archived",
      tone: "light",
      action: h(Button$$1, {
        label: "Undo",
        events: _defineProperty({}, k.onclick, function () {
          Notification$$1.pause();
          Dialog$$1.show(dialogOptions);
        })
      })
    })
  }, {
    name: "Option: title (2 lines), action, layout vertical",
    interactive: true,
    exclude: true,
    component: buttonGroup({
      title: "This message tells some things using two lines",
      layout: "vertical",
      action: h(Button$$1, {
        label: "Let me think about it",
        events: _defineProperty({}, k.onclick, function () {
          Notification$$1.pause();
          Dialog$$1.show(dialogOptions);
        })
      })
    })
  }, {
    name: "Multiple ids",
    interactive: true,
    exclude: true,
    component: {
      view: function view() {
        return h("div", [h(MultipleIds1, { key: "one" }), h(MultipleIds2, { key: "two" })]);
      }
    }
  }, {
    name: "Option: containerSelector",
    interactive: true,
    exclude: true,
    component: containerSelector(buttonGroup)
  }, {
    name: "Option: transitions",
    interactive: true,
    exclude: true,
    component: buttonGroup({
      title: "Custom transitions",
      transitions: {
        show: function show(_ref2) {
          var el = _ref2.el;
          return {
            el: el,
            showDuration: .5,
            beforeShow: function beforeShow() {
              return el.style.opacity = 0, el.style.transform = "translate3d(0, 20px, 0)";
            },
            show: function show() {
              return el.style.opacity = 1, el.style.transform = "translate3d(0, 0px,  0)";
            }
          };
        },
        hide: function hide(_ref3) {
          var el = _ref3.el;
          return {
            el: el,
            hideDuration: .5,
            hide: function hide() {
              return el.style.opacity = 0;
            }
          };
        }
      }
    })
  }, {
    name: "Option: showDelay, showDuration, hideDuration",
    interactive: true,
    exclude: true,
    component: buttonGroup({
      title: "Custom timing",
      showDelay: .3,
      showDuration: 1.1,
      hideDuration: 1.5
    })
  }, {
    name: "Option: transition (show)",
    interactive: true,
    exclude: true,
    component: buttonGroup({
      title: "A one line message",
      transition: "show"
    })
  }, {
    name: "Option: transition (hide)",
    interactive: true,
    exclude: true,
    component: buttonGroup({
      title: "A one line message",
      transition: "hide"
    })
  }, {
    name: "Option: no transition",
    interactive: true,
    exclude: true,
    component: buttonGroup({
      title: "A one line message",
      transition: "none"
    })
  }];
});

var buttonGroup = (function (messageOptions, spawnOptions) {
  return {
    view: function view() {
      return renderer("div", [renderer(RaisedButton, {
        label: "Show",
        events: { onclick: function onclick() {
            return Notification.show(messageOptions, spawnOptions);
          } }
      }), renderer(RaisedButton, {
        label: "Hide",
        disabled: Notification.count() === 0,
        events: { onclick: function onclick() {
            return Notification.hide(spawnOptions);
          } }
      }), renderer(RaisedButton, {
        label: "Clear",
        disabled: Notification.count() === 0,
        events: {
          onclick: function onclick() {
            return Notification.hide(spawnOptions).then(function () {
              return Notification.clear();
            });
          }
        }
      })]);
    }
  };
});

var containerSelector = (function (buttonGroup) {

  var Spawn1 = buttonGroup({
    title: "Notification in a container",
    containerSelector: "#notifs1"
  }, { spawn: "container1" });

  var Spawn2 = buttonGroup({
    title: "Notification in container two",
    containerSelector: "#notifs2"
  }, { spawn: "container2" });

  return {
    view: function view() {
      return renderer("div", [renderer(Spawn1, { key: "one" }), renderer("#notifs1", {
        // key: "two",
        style: {
          position: "relative",
          height: "180px"
        }
      }, renderer(Notification, {
        spawn: "container1",
        position: "container"
      })), renderer(Spawn2, { key: "three" }), renderer("#notifs2", {
        // key: "four",
        style: {
          position: "relative",
          height: "180px"
        }
      }, renderer(Notification, {
        spawn: "container2",
        position: "container"
      }))]);
    }
  };
});

var mithrilTests = function mithrilTests() {

  return [];
};

var testsMithril = [].concat(genericTests({ Notification: Notification, Dialog: Dialog, Button: Button, buttonGroup: buttonGroup, containerSelector: containerSelector, renderer: renderer, keys: keys })).concat(mithrilTests({ Notification: Notification, Dialog: Dialog, Button: Button, buttonGroup: buttonGroup, containerSelector: containerSelector, renderer: renderer, keys: keys }));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var buttonGroup$1 = (function (messageOptions, spawnOptions) {
  return function (_Component) {
    _inherits(_class, _Component);

    function _class(props) {
      _classCallCheck(this, _class);

      var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

      _this.state = {
        count: 0
      };
      _this.updateCount = _this.updateCount.bind(_this);
      _this.notificationChange = _this.notificationChange.bind(_this);
      subscribe("notification", _this.notificationChange);
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
        unsubscribe("notification", this.notificationChange);
      }
    }, {
      key: "updateCount",
      value: function updateCount(count) {
        if (this._mounted) {
          this.setState({ count: count });
        }
      }
    }, {
      key: "notificationChange",
      value: function notificationChange() {
        this.updateCount(Notification$1.count());
      }
    }, {
      key: "render",
      value: function render() {
        var count = this.state.count;
        return React.createElement(
          "div",
          null,
          React.createElement(RaisedButton$1, {
            label: "Show",
            events: {
              onClick: function onClick() {
                return Notification$1.show(_extends({}, messageOptions, { key: messageOptions.title }), spawnOptions);
              }
            }
          }),
          React.createElement(RaisedButton$1, {
            label: "Hide",
            disabled: count === 0,
            events: {
              onClick: function onClick() {
                return Notification$1.hide(spawnOptions);
              }
            }
          }),
          React.createElement(RaisedButton$1, {
            label: "Clear",
            disabled: count === 0,
            events: {
              onClick: function onClick() {
                return Notification$1.hide(spawnOptions).then(Notification$1.clear);
              }
            }
          })
        );
      }
    }]);

    return _class;
  }(Component);
});

var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var containerSelector$1 = (function (buttonGroup) {

  var SpawnButtons1 = buttonGroup({
    title: "Notification in a container",
    containerSelector: "#notifs1"
  }, { spawn: "container1" });

  var SpawnButtons2 = buttonGroup({
    title: "Notification in container two",
    containerSelector: "#notifs2"
  }, { spawn: "container2" });

  var containerStyle = {
    position: "relative",
    height: "180px"
  };

  return function (_Component) {
    _inherits$1(_class, _Component);

    function _class(props) {
      _classCallCheck$1(this, _class);

      var _this = _possibleConstructorReturn$1(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

      _this.state = {
        count: 0
      };
      _this.updateCount = _this.updateCount.bind(_this);
      _this.notificationChange = _this.notificationChange.bind(_this);
      subscribe("notification", _this.notificationChange);
      return _this;
    }

    _createClass$1(_class, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this._mounted = true;
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this._mounted = false;
        unsubscribe("notification", this.notificationChange);
      }
    }, {
      key: "updateCount",
      value: function updateCount(count) {
        if (this._mounted) {
          this.setState({ count: count });
        }
      }
    }, {
      key: "notificationChange",
      value: function notificationChange() {
        this.updateCount(Notification$1.count());
      }
    }, {
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          null,
          React.createElement(SpawnButtons1, { key: "one" }),
          React.createElement(
            "div",
            { id: "notifs1", style: containerStyle },
            React.createElement(Notification$1, { spawn: "container1", position: "container" })
          ),
          React.createElement(SpawnButtons2, { key: "two" }),
          React.createElement(
            "div",
            { id: "notifs2", style: containerStyle },
            React.createElement(Notification$1, { spawn: "container2", position: "container" })
          )
        );
      }
    }]);

    return _class;
  }(Component);
});

var dialogOptions = {
  body: "You pressed a message action",
  footer: [React.createElement(Button$1, {
    label: "Cancel",
    events: {
      onClick: function onClick() {
        Dialog$1.hide();
        Notification$1.unpause();
      }
    }
  }), React.createElement(Button$1, {
    label: "OK",
    events: {
      onClick: function onClick() {
        Dialog$1.hide();
        Notification$1.hide();
      }
    }
  })],
  backdrop: true,
  modal: true,
  hideDelay: .2
};

var ShowNotification = (function () {
  return React.createElement(RaisedButton$1, {
    label: "Show notification",
    events: {
      onClick: function onClick() {
        return Notification$1.show({
          title: "This is the message",
          layout: "vertical",
          action: React.createElement(Button$1, {
            label: "Let me think about it",
            events: {
              onClick: function onClick() {
                Notification$1.pause();
                Dialog$1.show(dialogOptions);
              }
            }
          })
        });
      }
    }
  });
});

var reactTests = function reactTests() {

  return [{
    section: "React JSX tests"
  }, {
    name: "Option: layout vertical (JSX)",
    interactive: true,
    exclude: true,
    component: function component() {
      return React.createElement(ShowNotification, null);
    }
  }];
};

var testsReact = [].concat(genericTests({ Notification: Notification$1, Dialog: Dialog$1, Button: Button$1, buttonGroup: buttonGroup$1, containerSelector: containerSelector$1, renderer: renderer$1, keys: keys$1 })).concat(reactTests({ Notification: Notification$1, Dialog: Dialog$1, Button: Button$1, buttonGroup: buttonGroup$1, containerSelector: containerSelector$1, renderer: renderer$1, keys: keys$1 }));

export { testsMithril as mithrilTests, testsReact as reactTests };
