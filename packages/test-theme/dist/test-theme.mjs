import { Button, FAB, Icon, IconButton, List, ListTile, renderer } from 'polythene-mithril';
import React from 'react';
import { Button as Button$1, FAB as FAB$1, Icon as Icon$1, IconButton as IconButton$1, List as List$1, ListTile as ListTile$1, renderer as renderer$1 } from 'polythene-react';

var alarmSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z\"/></svg>";

var genericTests = (function (_ref) {
  var Button$$1 = _ref.Button,
      FAB$$1 = _ref.FAB,
      Icon$$1 = _ref.Icon,
      IconButton$$1 = _ref.IconButton,
      List$$1 = _ref.List,
      ListTile$$1 = _ref.ListTile,
      h = _ref.renderer;


  var trustedAlarmSVG = h.trust(alarmSVG);

  Button$$1.theme(".tests-custom-theme-blue-button", {
    color_light_background: "#2196F3",
    color_light_text: "#fff"
  });

  Button$$1.theme(".tests-custom-theme-red-button", {
    color_light_background: "#ff0000",
    color_light_text: "#fff"
  });

  Icon$$1.theme(".tests-custom-theme-red-icon", {
    color_light: "red"
  });

  FAB$$1.theme(".tests-custom-theme-red-fab", {
    color_light_background: "#ff0000",
    color_light: "#fff"
  });

  IconButton$$1.theme(".tests-custom-theme-large-icon-button", {
    padding: 50,
    color_background: "#fff"
  });

  List$$1.theme(".tests-custom-theme-blue-list", {
    color_light_border: "#2196F3"
  });

  ListTile$$1.theme(".tests-custom-theme-red-list-tile", {
    color_light_title: "red"
  });

  return [{
    section: "Style variables"
  }, {
    name: "Theme with style variables: button (should be blue)",
    component: Button$$1,
    attrs: {
      className: "tests-custom-theme-blue-button",
      label: "Blue button"
    }
  }, {
    name: "Theme with style variables: button (should be red)",
    component: Button$$1,
    attrs: {
      className: "tests-custom-theme-red-button",
      label: "Red button"
    }
  }, {
    name: "No theme: normal button",
    component: Button$$1,
    attrs: {
      label: "Unaffected button"
    }
  }, {
    name: "Theme with style variables: FAB (should be red)",
    component: FAB$$1,
    attrs: {
      className: "tests-custom-theme-red-fab",
      icon: {
        svg: trustedAlarmSVG
      }
    }
  }, {
    name: "Theme with style variables: icon (should be red)",
    component: Icon$$1,
    attrs: {
      className: "tests-custom-theme-red-icon",
      svg: trustedAlarmSVG
    }
  }, {
    name: "Theme with style variables: icon button (should have large padding)",
    component: IconButton$$1,
    attrs: {
      className: "tests-custom-theme-large-icon-button",
      icon: {
        svg: trustedAlarmSVG
      }
    }
  }, {
    name: "Theme with style variables: list (should have blue borders)",
    component: List$$1,
    attrs: {
      className: "tests-custom-theme-blue-list",
      borders: true,
      tiles: [h(ListTile$$1, {
        title: "Jennifer Barker",
        subtitle: "Starting post doc"
      }), h(ListTile$$1, {
        title: "Ali Connors",
        subtitle: "Brunch this weekend?"
      }), h(ListTile$$1, {
        title: "Mike Eden",
        subtitle: "Watch a game"
      })]
    }
  }, {
    name: "Theme with style variables: list tile (should have red titles)",
    component: List$$1,
    attrs: {
      tiles: [h(ListTile$$1, {
        className: "tests-custom-theme-red-list-tile",
        title: "Jennifer Barker",
        subtitle: "Starting post doc"
      }), h(ListTile$$1, {
        className: "tests-custom-theme-red-list-tile",
        title: "Ali Connors",
        subtitle: "Brunch this weekend?"
      }), h(ListTile$$1, {
        className: "tests-custom-theme-red-list-tile",
        title: "Mike Eden",
        subtitle: "Watch a game"
      })]
    }
  }];
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var h = renderer;

var secondaryButton = {
  theme: Button.theme,
  view: function view(vnode) {
    return h(Button, _extends({
      className: "tests-custom-theme-secondary-button",
      borders: true
    }, vnode.attrs));
  }
};
secondaryButton.theme(".tests-custom-theme-secondary-button", {
  color_light_border: "#ddd",
  color_light_background: "#fff"
});

var mithrilTests = function mithrilTests() {
  return [{
    section: "Mithril specific tests"
  }, {
    name: "Theme with deriving component: button (should be bordered with white background)",
    component: secondaryButton,
    attrs: {
      label: "Bordered button"
    }
  }];
};

var testsMithril = [].concat(genericTests({ Button: Button, FAB: FAB, Icon: Icon, IconButton: IconButton, List: List, ListTile: ListTile, renderer: renderer })).concat(mithrilTests());

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var reactTests = function reactTests() {

  var SecondaryButton = function SecondaryButton(props) {
    return renderer$1(Button$1, _extends$1({}, props, {
      className: "tests-custom-theme-secondary-button",
      borders: true
    }));
  };

  Button$1.theme(".tests-custom-theme-secondary-button", {
    color_light_border: "#ddd",
    color_light_background: "#fff"
  });

  return [{
    section: "React specific tests"
  }, {
    name: "Theme with deriving component: button (should be bordered with white background)",
    component: SecondaryButton,
    attrs: {
      label: "Bordered button"
    }
  }, {
    section: "React JSX tests"
  }, {
    name: "Option: svg as content attribute (JSX)",
    component: function component() {
      return React.createElement(SecondaryButton, { label: "Bordered button" });
    }
  }];
};

var testsReact = [].concat(genericTests({ Button: Button$1, FAB: FAB$1, Icon: Icon$1, IconButton: IconButton$1, List: List$1, ListTile: ListTile$1, renderer: renderer$1 })).concat(reactTests());

export { testsMithril as mithrilTests, testsReact as reactTests };
