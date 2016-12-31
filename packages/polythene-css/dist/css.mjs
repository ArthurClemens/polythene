import { vars } from 'polythene-theme';
import j2c from 'j2c';

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

// Mixins for j2c

// Creates j2c vendor key string from vendor list
// mixin.vendorize({"user-select": "none"}, vars.prefixes_user_select)
var vendorize = function vendorize(what, prefixes) {
  var vendorsSel = prefixes.map(function (v) {
    return "_" + v + "$";
  }).join("");
  return defineProperty({}, vendorsSel, what);
};

// Centers an item absolutely within relative parent
// mixin.fit()
var fit = function fit() {
  var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  var offsetPx = offset + "px";
  return {
    position: "absolute",
    top: offsetPx,
    right: offsetPx,
    bottom: offsetPx,
    left: offsetPx
  };
};

// Optional font smoothing
// mixin.fontSmoothing()
var fontSmoothing = function fontSmoothing() {
  var smoothing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  if (smoothing) {
    return {
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale"
    };
  } else {
    return {
      "-webkit-font-smoothing": "subpixel-antialiased",
      "-moz-osx-font-smoothing": "auto"
    };
  }
};

// Breaks off a line with ...
// unless lines is "none"
// mixin.ellipsis(1, 16) // max 1 line, 16px high
// mixin.ellipsis(2, 1.3, "em") // max 2 lines, 2.6em high
var ellipsis = function ellipsis(lines, lineHeight) {
  var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "px";

  if (lines === "none") {
    return {
      "text-overflow": "initial",
      overflow: "initial",
      display: "block",
      height: "auto"
    };
  }
  return _extends({}, {
    overflow: "hidden",
    "text-overflow": "ellipsis",
    "text-rendering": "auto" // Samsung Android
  }, lines !== undefined ? {
    "-webkit-line-clamp": lines,
    "-webkit-box-orient": "vertical",
    display: "-webkit-box"
  } : null, lineHeight !== undefined ? {
    "max-height": lines * lineHeight + unit
  } : null);
};

// Clears float
// mixin.clearfix()
var clearfix = function clearfix() {
  return {
    "&:after": {
      content: "\"\"",
      display: "table",
      clear: "both"
    }
  };
};

// Creates a very thin line
// disabled, does not work in Chrome
// mixin.hairline()
var hairline = function hairline() {
  return {};
};

// const hairline = (which) => ({
//     [`${which}-width`]: "1px",
//
//     " html.pe-hairlines &": {
//         [`${which}-width`]: "0.5px"
//     }
// });

// Test if browser handles 0.5px borders
// and add class pe-hairlines if so
// if (window.devicePixelRatio && devicePixelRatio >= 2) {
//     const el = document.createElement("div");
//     el.style.border = ".5px solid transparent";
//     document.body.appendChild(el);
//     if (el.offsetHeight === 1) {
//         document.querySelector("html").classList.add("pe-hairlines");
//     }
//     document.body.removeChild(el);
// }

// Creates sticky headers in a scrollable list
// Does not work in Chrome: http://caniuse.com/#feat=css-sticky
// mixin.sticky()
var sticky = function sticky() {
  var zIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return [{
    position: "-webkit-sticky"
  }, {
    position: "-moz-sticky"
  }, {
    position: "-o-sticky"
  }, {
    position: "-ms-sticky"
  }, {
    position: "sticky"
  }, {
    top: 0,
    "z-index": zIndex
  }];
};

// Polythene utility function to generate style objects with scopes
// Used in theme files
var createStyles = function createStyles(common, fn) {
  if (Array.isArray(common)) {
    return common.map(function (o) {
      for (var scope in o) {
        return defineProperty({}, scope, fn(o[scope]));
      }
    });
  } else {
    return fn(common);
  }
};

// Creats a transition with presets
// mixin.defaultTransition("opacity", vars.animation_duration)
var defaultTransition = function defaultTransition() {
  var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "all";
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : vars.animation_duration;
  var curve = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : vars.animation_curve_default;

  return [vendorize({
    "transition-delay": 0
  }, vars.prefixes_transition), vendorize({
    "transition-duration": duration
  }, vars.prefixes_transition), vendorize({
    "transition-timing-function": curve
  }, vars.prefixes_transition), vendorize({
    "transition-property": properties
  }, vars.prefixes_transition)];
};

var mixin = {
  clearfix: clearfix,
  createStyles: createStyles,
  defaultTransition: defaultTransition,
  ellipsis: ellipsis,
  fit: fit,
  fontSmoothing: fontSmoothing,
  hairline: hairline,
  sticky: sticky,
  vendorize: vendorize
};

var styleComponent = function styleComponent(name, key, componentsConfig, componentConfig) {
  for (var _len = arguments.length, configFns = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
    configFns[_key - 4] = arguments[_key];
  }

  var customConfigFn = componentsConfig[key];
  var config = customConfigFn ? customConfigFn(componentConfig) : componentConfig;
  add(name, configFns.map(function (c) {
    return c(config);
  }));
};

/*
 * id: identifier, used as HTMLElement id for the attached <style></style> element
 * styles: list of lists style Objects
 */
var add = function add(id) {
  for (var _len2 = arguments.length, styles = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    styles[_key2 - 1] = arguments[_key2];
  }

  addToDocument.apply(undefined, [{
    id: id
  }].concat(styles));
};

var remove = function remove(id) {
  if (id) {
    var old = document.getElementById(id);
    if (old) {
      old.parentNode.removeChild(old);
    }
  }
};

/*
 * opts: options object
 * id: identifier, used as HTMLElement id for the attached <style></style> element
 * document: document reference; default window.document
 * styles: list of lists style Objects
 */
var addToDocument = function addToDocument(opts) {
  for (var _len3 = arguments.length, styles = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    styles[_key3 - 1] = arguments[_key3];
  }

  var id = opts.id;
  var documentRef = opts.document || window.document;
  remove(id);
  var styleEl = documentRef.createElement("style");
  if (id) {
    styleEl.setAttribute("id", id);
  }
  styles.forEach(function (styleList) {
    // each style returns a list
    if (Object.keys(styleList).length) {
      styleList.forEach(function (style) {
        var scoped = {
          "@global": style
        };
        var sheet = j2c.sheet(scoped);
        styleEl.appendChild(documentRef.createTextNode(sheet));
      });
    }
  });
  documentRef.head.appendChild(styleEl);
};

var styler = {
  add: add,
  addToDocument: addToDocument,
  remove: remove,
  styleComponent: styleComponent
};

export { mixin, styler };
