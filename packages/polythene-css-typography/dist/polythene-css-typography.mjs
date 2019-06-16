import { vars } from 'polythene-style';
import { addWebFont } from 'polythene-utilities';
import { styler } from 'polythene-core-css';

// @ts-check
var robotoStyle = function robotoStyle() {
  return [{
    "html, body, button, input, select, textarea": {
      fontFamily: "Roboto, Helvetica, Arial, sans-serif"
    }
  }];
};
var loadRoboto = function loadRoboto() {
  return [{
    "@import": "url('https://fonts.googleapis.com/css?family=Roboto:400,400i,500,700')"
  }];
};

// @ts-check
var fontSize = 14;
var typography = (function () {
  return [{
    " h1, h2, h3, h4, h5, h6, p": {
      margin: 0,
      padding: 0
    }
  }, {
    " h1, h2, h3, h4, h5, h6": {
      " small": {
        "font-weight": vars.font_weight_normal,
        "line-height": vars.line_height,
        "letter-spacing": "-0.02em",
        "font-size": "0.6em"
      }
    }
  }, {
    " h1": {
      "font-size": "56px",
      "font-weight": vars.font_weight_normal,
      "line-height": vars.line_height,
      "margin-top": "24px",
      "margin-bottom": "24px"
    }
  }, {
    " h2": {
      "font-size": "45px",
      "font-weight": vars.font_weight_normal,
      "line-height": vars.line_height,
      "margin-top": "24px",
      "margin-bottom": "24px"
    }
  }, {
    " h3": {
      "font-size": "34px",
      "font-weight": vars.font_weight_normal,
      "line-height": vars.line_height,
      "margin-top": "24px",
      "margin-bottom": "24px"
    }
  }, {
    " h4": {
      "font-size": "24px",
      "font-weight": vars.font_weight_normal,
      "line-height": vars.line_height,
      "-moz-osx-font-smoothing": "grayscale",
      "margin-top": "24px",
      "margin-bottom": "16px"
    }
  }, {
    " h5": {
      "font-size": "20px",
      "font-weight": vars.font_weight_medium,
      "line-height": vars.line_height,
      "letter-spacing": "-0.02em",
      "margin-top": "24px",
      "margin-bottom": "16px"
    }
  }, {
    " h6": {
      "font-size": "16px",
      "font-weight": vars.font_weight_normal,
      "line-height": vars.line_height,
      "letter-spacing": "0.04em",
      "margin-top": "24px",
      "margin-bottom": "16px"
    }
  }, {
    " html, body": {
      "font-size": fontSize + "px",
      "line-height": vars.line_height,
      "font-weight": vars.font_weight_normal
    },
    " p": {
      "font-size": fontSize + "px",
      "font-weight": vars.font_weight_normal,
      "line-height": vars.line_height,
      "letter-spacing": "0",
      "margin-bottom": "16px"
    },
    " blockquote": {
      "position": "relative",
      "font-size": "24px",
      "font-weight": vars.font_weight_normal,
      "font-style": "italic",
      "line-height": vars.line_height,
      "letter-spacing": "0.08em",
      "margin-top": "24px",
      "margin-bottom": "16px"
    },
    " ul, ol": {
      "font-size": fontSize + "px",
      "font-weight": vars.font_weight_normal,
      "line-height": vars.line_height,
      "letter-spacing": 0
    },
    " b, strong": {
      "font-weight": vars.font_weight_medium
    }
  }];
});

// @ts-check
var fns = [robotoStyle, typography];
var fnsWithLoadRoboto = [loadRoboto, robotoStyle, typography]; // adds font import for written CSS

var selector = "";
var addStyle = styler.createAddStyle(selector, fns, vars);

var getStyle = function getStyle(customSelector, customVars) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$mediaQuery = _ref.mediaQuery,
      mediaQuery = _ref$mediaQuery === void 0 ? "" : _ref$mediaQuery,
      _ref$scope = _ref.scope,
      scope = _ref$scope === void 0 ? "" : _ref$scope;

  return styler.getStyle({
    selectors: [customSelector, selector],
    fns: fnsWithLoadRoboto,
    vars: vars,
    customVars: customVars,
    mediaQuery: mediaQuery,
    scope: scope
  });
};

var addRoboto = function addRoboto() {
  addWebFont("google", {
    families: ["Roboto:400,500,700,400italic:latin"]
  });
};

var addTypography = function addTypography() {
  addRoboto();
  styler.add("pe-material-design-typography", fns.map(function (s) {
    return s();
  }));
};

export { addRoboto, addStyle, addTypography, getStyle };
