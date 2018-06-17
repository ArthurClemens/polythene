import { vars } from 'polythene-style';
export { vars } from 'polythene-style';
import { addWebFont } from 'polythene-utilities';
import { styler } from 'polythene-core-css';

var reset = (function () {
  return [{
    // apply a natural box layout model to all elements, but allow elements to change
    " html": {
      "box-sizing": "border-box"
    },
    " *, *:before, *:after": {
      "box-sizing": "inherit"
    },
    " *": [
    // remove tap highlight in mobile Safari
    {
      "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
    }, {
      "-webkit-tap-highlight-color": "transparent" // For some Androids
    }],

    // Remove dotted link borders in Firefox
    " a, a:active, a:focus, input:active, *:focus": {
      outline: 0
    },

    // Mobile Safari: override default fading of disabled elements
    " input:disabled": {
      opacity: 1
    }
  }];
});

var roboto = (function () {
  return [{
    "html, body, button, input, select, textarea": {
      fontFamily: "Roboto, Helvetica, Arial, sans-serif"
    }
  }];
});

var loadRoboto = function loadRoboto() {
  return [{
    "@import": "url('https://fonts.googleapis.com/css?family=Roboto:400,400i,500,700')"
  }];
};

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

var fns = [roboto, reset, typography];
var selector = "";

var addStyle = styler.createAddStyle(selector, fns, vars);

var getStyle = function getStyle(customSelector, customVars) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      mediaQuery = _ref.mediaQuery;

  return styler.getStyle({
    selectors: [customSelector, selector],
    fns: [loadRoboto].concat(fns), // add font import for written CSS
    vars: vars,
    customVars: customVars,
    mediaQuery: mediaQuery
  });
};

var addRoboto = function addRoboto() {
  addWebFont("google", "Roboto:400,500,700,400italic:latin");
};

var addTypography = function addTypography() {
  addRoboto();
  styler.add("pe-material-design-typography", fns.map(function (s) {
    return s();
  }));
};

export { addRoboto, addStyle, addTypography, getStyle };
