import { isServer } from 'polythene-core';
import J2c from 'j2c';

var layout = [{
  "display": "-webkit-box"
}, {
  "display": "-moz-box"
}, {
  "display": "-ms-flexbox"
}, {
  "display": "-webkit-flex"
}, {
  "display": "flex"
}];

var layoutInline = [layout, {
  "display": "-ms-inline-flexbox"
}, {
  "display": "-webkit-inline-flex"
}, {
  "display": "inline-flex"
}];

var layoutHorizontal = [layout, {
  "-ms-flex-direction": "row",
  "-webkit-flex-direction": "row",
  "flex-direction": "row"
}];

var layoutHorizontalReverse = [layout, {
  "-ms-flex-direction": "row-reverse",
  "-webkit-flex-direction": "row-reverse",
  "flex-direction": "row-reverse"
}];

var layoutVertical = [layout, {
  "-ms-flex-direction": "column",
  "-webkit-flex-direction": "column",
  "flex-direction": "column"
}];

var layoutVerticalReverse = [layout, {
  "-ms-flex-direction": "column-reverse",
  "-webkit-flex-direction": "column-reverse",
  "flex-direction": "column-reverse"
}];

var layoutWrap = [layout, {
  "-ms-flex-wrap": "wrap",
  "-webkit-flex-wrap": "wrap",
  "flex-wrap": "wrap"
}];

var layoutWrapReverse = [layout, {
  "-ms-flex-wrap": "wrap-reverse",
  "-webkit-flex-wrap": "wrap-reverse",
  "flex-wrap": "wrap-reverse"
}];

var layoutStart = [layout, {
  "-ms-flex-align": "start",
  "-webkit-align-items": "flex-start",
  "align-items": "flex-start"
}];

var layoutCenter = [layout, {
  "-ms-flex-align": "center",
  "-webkit-align-items": "center",
  "align-items": "center"
}];

var layoutEnd = [layout, {
  "-ms-flex-align": "end",
  "-webkit-align-items": "flex-end",
  "align-items": "flex-end"
}];

var layoutJustified = [layout, {
  "-ms-flex-pack": "justify",
  "-webkit-justify-content": "space-between",
  "justify-content": "space-between"
}];

var layoutStartJustified = [layout, {
  "-ms-flex-pack": "start",
  "-webkit-justify-content": "flex-start",
  "justify-content": "flex-start"
}];

var layoutCenterJustified = [layout, {
  "-ms-flex-pack": "center",
  "-webkit-justify-content": "center",
  "justify-content": "center"
}];

var layoutEndJustified = [layout, {
  "-ms-flex-pack": "end",
  "-webkit-justify-content": "flex-end",
  "justify-content": "flex-end"
}];

var layoutCenterCenter = [layoutCenterJustified, layoutCenter];

var layoutAroundJustified = [layout, {
  "-ms-flex-pack": "distribute",
  "-webkit-justify-content": "space-around",
  "justify-content": "space-around"
}];

var flex = function flex() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return [{
    "-webkit-box-flex": num
  }, {
    "-moz-box-flex": num
  }, {
    "-webkit-flex": num
  }, {
    "-ms-flex": num
  }, {
    "flex": num
  }, num === 1 ? {
    "-webkit-flex-basis": "0.000000001px"
  } : {}, num === 1 ? {
    "flex-basis": "0.000000001px"
  } : {}];
};

var flexAuto = {
  "-ms-flex": "1 1 auto",
  "-webkit-flex-basis": "auto",
  "flex-basis": "auto"
};

var flexAutoVertical = {
  "-ms-flex": "1 1 auto",
  "-webkit-flex-basis": "auto",
  "flex-basis": "auto"
};

var flexIndex = function flexIndex(index) {
  return {
    "-ms-flex": index,
    "-webkit-flex": index,
    "flex": index
  };
};

var flexGrow = function flexGrow(value) {
  return {
    "-webkit-flex-grow": value,
    "flex-grow": value
  };
};

var selfStart = {
  "-ms-align-self": "flex-start",
  "-webkit-align-self": "flex-start",
  "align-self": "flex-start"
};

var selfCenter = {
  "-ms-align-self": "center",
  "-webkit-align-self": "center",
  "align-self": "center"
};

var selfEnd = {
  "-ms-align-self": "flex-end",
  "-webkit-align-self": "flex-end",
  "align-self": "flex-end"
};

var selfStretch = {
  "-ms-align-self": "stretch",
  "-webkit-align-self": "stretch",
  "align-self": "stretch"
};

var flex$1 = {
  flex: flex,
  flexAuto: flexAuto,
  flexAutoVertical: flexAutoVertical,
  flexIndex: flexIndex,
  flexGrow: flexGrow,
  layout: layout,
  layoutAroundJustified: layoutAroundJustified,
  layoutCenter: layoutCenter,
  layoutCenterCenter: layoutCenterCenter,
  layoutCenterJustified: layoutCenterJustified,
  layoutEnd: layoutEnd,
  layoutEndJustified: layoutEndJustified,
  layoutHorizontal: layoutHorizontal,
  layoutHorizontalReverse: layoutHorizontalReverse,
  layoutInline: layoutInline,
  layoutJustified: layoutJustified,
  layoutStart: layoutStart,
  layoutStartJustified: layoutStartJustified,
  layoutVertical: layoutVertical,
  layoutVerticalReverse: layoutVerticalReverse,
  layoutWrap: layoutWrap,
  layoutWrapReverse: layoutWrapReverse,
  selfCenter: selfCenter,
  selfEnd: selfEnd,
  selfStart: selfStart,
  selfStretch: selfStretch
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Mixins for j2c

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
      textOverflow: "initial",
      overflow: "initial",
      display: "block",
      height: "auto",
      maxHeight: "none",
      whiteSpace: "normal"
    };
  }
  return [{
    "@supports (-webkit-line-clamp: 2)": _extends({}, lines !== undefined ? {
      "-webkit-line-clamp": lines,
      "-webkit-box-orient": "vertical",
      display: "-webkit-box",
      wordBreak: "break-word"
    } : null)
  }, _extends({}, {
    overflow: "hidden",
    textOverflow: "ellipsis",
    textRendering: "auto" // Samsung Android
  }, lineHeight !== undefined ? { maxHeight: lines * lineHeight + unit } : null, lineHeight === 1 ? { wordWrap: "nowrap" } : null)];
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

// Creates sticky headers in a scrollable list
// Does not work in Chrome: http://caniuse.com/#feat=css-sticky
// mixin.sticky()
var sticky = function sticky() {
  var zIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return {
    position: "sticky",
    top: 0,
    zIndex: zIndex
  };
};

// Creates a transition with presets
// mixin.defaultTransition("opacity", vars.animation_duration)
var defaultTransition = function defaultTransition() {
  var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "all";
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ".18s";
  var curve = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "ease-out";
  return {
    transitionDelay: "0ms",
    transitionDuration: duration,
    transitionTimingFunction: curve,
    transitionProperty: properties
  };
};

var mixin = {
  clearfix: clearfix,
  defaultTransition: defaultTransition,
  ellipsis: ellipsis,
  fit: fit,
  fontSmoothing: fontSmoothing,
  sticky: sticky
};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var j2cPluginPrefixBrowser_commonjs = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, '__esModule', { value: true });

  // Derived from Lea Verou's PrefixFree

  var allStyles;
  var styleAttr;
  var styleElement;
  var supportedProperty;
  var supportedDecl;

  function init() {
    allStyles = getComputedStyle(document.documentElement, null);
    styleAttr = document.createElement('div').style;
    styleElement = document.documentElement.appendChild(document.createElement('style'));
    supportedDecl = _supportedDecl;
    supportedProperty = _supportedProperty;
    if ('zIndex' in styleAttr && !('z-index' in styleAttr)) {
      // Some browsers like it dash-cased, some camelCased, most like both.
      supportedDecl = function supportedDecl(property, value) {
        return _supportedDecl(camelCase(property), value);
      };
      supportedProperty = function supportedProperty(property) {
        return _supportedProperty(camelCase(property));
      };
    }
  }
  function finalize() {
    if (typeof document !== 'undefined') document.documentElement.removeChild(styleElement);
    // `styleAttr` is used at run time via `supportedProperty()`
    // `allStyles` and `styleElement` can be displosed of after initialization.
    allStyles = styleElement = null;
  }

  // Helpers, in alphabetic order

  function camelCase(str) {
    return str.replace(/-([a-z])/g, function ($0, $1) {
      return $1.toUpperCase();
    }).replace('-', '');
  }
  function deCamelCase(str) {
    return str.replace(/[A-Z]/g, function ($0) {
      return '-' + $0.toLowerCase();
    });
  }
  function _supportedDecl(property, value) {
    styleAttr[property] = '';
    styleAttr[property] = value;
    return !!styleAttr[property];
  }
  function supportedMedia(property, value) {
    styleElement.textContent = '@media (' + property + ':' + value + '){}';
    // The !!~indexOf trick. False for -1, true otherwise.
    return !!~styleElement.sheet.cssRules[0].cssText.indexOf(value);
  }
  function _supportedProperty(property) {
    return property in styleAttr;
  }
  function supportedRule(selector) {
    styleElement.textContent = selector + '{}';
    return !!styleElement.sheet.cssRules.length;
  }

  // Derived from Lea Verou's PrefixFree

  // TODO: http://caniuse.com/#feat=css-media-resolution

  function detectAtrules(fixers) {
    if (fixers.prefix === '') return;
    var atrules = {
      'keyframes': 'name',
      'viewport': null,
      'document': 'regexp(".")'
    };

    // build a map of {'@ruleX': '@-prefix-ruleX'}
    for (var atrule in atrules) {
      var test = atrule + ' ' + (atrules[atrule] || '');
      for (var i = fixers.prefixes.length; i--;) {
        if (!supportedRule('@' + test) && supportedRule('@' + fixers.prefixes[i] + test)) {

          fixers.hasAtrules = true;
          fixers.atrules['@' + atrule] = '@' + fixers.prefixes[i] + atrule;
        }
      }
    }

    // Standard
    fixers.hasDppx = supportedMedia('resolution', '1dppx');
    // Webkit
    fixers.hasPixelRatio = supportedMedia(fixers.prefix + 'device-pixel-ratio', '1');
    // Opera
    fixers.hasPixelRatioFraction = supportedMedia(fixers.prefix + 'device-pixel-ratio', '1/1');

    if (fixers.hasPixelRatio || fixers.hasPixelRatioFraction) {
      fixers.properties['resolution'] = fixers.prefix + 'device-pixel-ratio';
      fixers.properties['min-resolution'] = fixers.prefix + 'min-device-pixel-ratio';
      fixers.properties['max-resolution'] = fixers.prefix + 'max-device-pixel-ratio';
      if (supportedMedia('min-' + fixers.prefix + 'device-pixel-ratio', '1')) {
        // Mozilla/Firefox tunred a vendor prefix into a vendor infix
        fixers.properties['min-resolution'] = 'min-' + fixers.prefix + 'device-pixel-ratio';
        fixers.properties['max-resolution'] = 'max-' + fixers.prefix + 'device-pixel-ratio';
      }
    }
  }

  // Derived from Lea Verou's PrefixFree

  function detectFunctions(fixers) {
    // Values that might need prefixing
    if (fixers.prefix === '') return;
    var functions = {
      'linear-gradient': {
        property: 'background-image',
        params: 'red, teal'
      },
      'calc': {
        property: 'width',
        params: '1px + 5%'
      },
      'element': {
        property: 'background-image',
        params: '#foo'
      },
      'cross-fade': {
        property: 'backgroundImage',
        params: 'url(a.png), url(b.png), 50%'
      }
    };
    functions['repeating-linear-gradient'] = functions['repeating-radial-gradient'] = functions['radial-gradient'] = functions['linear-gradient'];

    // build an array of prefixable functions
    for (var func in functions) {
      var test = functions[func],
          property = test.property,
          value = func + '(' + test.params + ')';

      if (!supportedDecl(property, value) && supportedDecl(property, fixers.prefix + value)) {
        // It's only supported with a prefix
        fixers.functions.push(func);
      }
    }
  }

  // Derived from Lea Verou's PrefixFree and Robin Frischmann's Inline Style Prefixer

  // TODO: http://caniuse.com/#feat=css-writing-mode

  // db of prop/value pairs whose values may need treatment.

  var keywords = [

  // `initial` applies to all properties and is thus handled separately.
  {
    props: ['cursor'],
    values: ['grab', 'grabbing', 'zoom-in', 'zoom-out']
  }, {
    props: ['display'],
    values: ['box', 'inline-box', 'flexbox', 'inline-flexbox', 'flex', 'inline-flex', 'grid', 'inline-grid']
  }, {
    props: ['position'],
    values: ['sticky']
  }, {
    props: ['width', 'column-width', 'height', 'max-height', 'max-width', 'min-height', 'min-width'],
    values: ['contain-floats', 'fill-available', 'fit-content', 'max-content', 'min-content']
  }];
  // The flexbox zoo
  //
  // ## Specs:
  // - box     (2009/old):  https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/
  // - flexbox (2012/ie10): https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/
  // - flex    (final):     https://www.w3.org/TR/css-flexbox-1/
  var flex2009Props = {
    // ?align-content =>
    // ?align-self =>
    'align-items': 'box-align',
    'flex': 'box-flex', // https://css-tricks.com/snippets/css/a-guide-to-flexbox/#comment-371025,
    // ?flex-basis =>
    // !!flex-direction => box-direction + box-orient, covered in `plugin.js`
    'box-direction': 'box-direction', // we prepopulate the cache for the above case.
    'box-orient': 'box-orient',
    // !!flex-flow => flex-direction and/or flex-wrap, covered in `plugin.js`
    'flex-grow': 'box-flex', // https://compat.spec.whatwg.org/#propdef--webkit-box-flex
    // ?flex-shrink =>
    'flex-wrap': 'box-lines',
    'justify-content': 'box-pack',
    'order': 'box-ordinal-group' // https://css-tricks.com/snippets/css/a-guide-to-flexbox/#comment-371025
  };
  var flex2009Values = {
    // flex => box || only for display? handled in the code
    'flex-end': 'end',
    'flex-start': 'start',
    // inline-flex => inline-box || see flex
    'nowrap': 'single',
    'space-around': 'justify',
    'space-between': 'justify',
    'wrap': 'multiple',
    'wrap-reverse': 'multiple'
  };
  var flex2012Props = {
    'align-content': '-ms-flex-line-pack',
    'align-items': '-ms-flex-align',
    'align-self': '-ms-flex-item-align',
    // flex => -ms-flex
    'flex-basis': '-ms-preferred-size',
    // flex-direction => -ms-flex-direction
    // flex-flow => -ms-flex-flow
    'flex-grow': '-ms-flex-positive',
    'flex-shrink': '-ms-flex-negative',
    // flex-wrap => -ms-flex-wrap
    'justify-content': '-ms-flex-pack',
    'order': '-ms-flex-order'
  };
  var flex2012Values = {
    // flex => flexbox || only for display? handled in the code
    'flex-end': 'end',
    'flex-start': 'start',
    // inline-flex => inline-flexbox || see 'flex'
    // nowrap => nowrap
    'space-around': 'distribute',
    'space-between': 'justify'
    // wrap => wrap
    // wrap-reverse => wrap-reverse
  };

  function detectKeywords(fixers) {
    if (fixers.prefixes.length === 0) return;

    // build a map of {propertyI: {keywordJ: previxedKeywordJ, ...}, ...}
    for (var i = 0; i < keywords.length; i++) {
      var map = {},
          property = keywords[i].props[0];
      // eslint-disable-next-line
      for (var j = 0, keyword; keyword = keywords[i].values[j]; j++) {
        for (var k = fixers.prefixes.length; k--;) {
          if (!supportedDecl(property, keyword) && supportedDecl(property, fixers.prefixes[k] + keyword)) {
            fixers.hasKeywords = true;
            map[keyword] = fixers.prefixes[k] + keyword;
          }
        }
      }
      // eslint-disable-next-line
      for (j = 0; property = keywords[i].props[j]; j++) {
        fixers.keywords[property] = map;
      }
    }
    if (fixers.keywords.display && fixers.keywords.display.flexbox && !supportedDecl('display', 'flex')) {
      // IE 10, Flexbox 2012
      fixers.keywords.display.flex = fixers.keywords.display.flexbox;
      fixers.keywords.display['inline-flex'] = fixers.keywords.display['inline-flexbox'];
      fixers.flexbox2012 = true;
      for (k in flex2012Props) {
        fixers.properties[k] = flex2012Props[k];
        fixers.keywords[k] = flex2012Values;
      }
    } else if (fixers.keywords.display && fixers.keywords.display.box && !supportedDecl('display', 'flex') && !supportedDecl('display', fixers.prefix + 'flex')) {
      // old flexbox spec
      fixers.keywords.display.flex = fixers.keywords.display.box;
      fixers.keywords.display['inline-flex'] = fixers.keywords.display['inline-box'];
      fixers.flexbox2009 = true;
      for (k in flex2009Props) {
        fixers.properties[k] = fixers.prefix + flex2009Props[k];
        fixers.keywords[k] = flex2009Values;
      }
    } else if (fixers.keywords.display && !fixers.keywords.display.box && !fixers.keywords.display.flex && !fixers.keywords.display.flexbox && !supportedDecl('display', 'flex')) {
      fixers.jsFlex = true;
    }
    if (!supportedDecl('color', 'initial') && supportedDecl('color', fixers.prefix + 'initial')) {
      // `initial` does not use the `hasKeywords` branch, no need to set it to true.
      fixers.initial = fixers.prefix + 'initial';
    }
  }

  // Derived from Lea Verou's PrefixFree

  function detectPrefix(fixers) {
    var prefixCounters = {};
    // Why are we doing this instead of iterating over properties in a .style object? Because Webkit.
    // 1. Older Webkit won't iterate over those.
    // 2. Recent Webkit will, but the 'Webkit'-prefixed properties are not enumerable. The 'webkit'
    //    (lower case 'w') ones are, but they don't `deCamelCase()` into a prefix that we can detect.

    function iteration(property) {
      if (property.charAt(0) === '-') {
        var prefix = property.split('-')[1];

        // Count prefix uses
        prefixCounters[prefix] = ++prefixCounters[prefix] || 1;
      }
    }

    // Some browsers have numerical indices for the properties, some don't
    if (allStyles && allStyles.length > 0) {
      for (var i = 0; i < allStyles.length; i++) {
        iteration(allStyles[i]);
      }
    } else {
      for (var property in allStyles) {
        iteration(deCamelCase(property));
      }
    }

    var prefixes = [];
    for (var p in prefixCounters) {
      prefixes.push(p);
    }prefixes.sort(function (a, b) {
      return prefixCounters[b] - prefixCounters[a];
    });

    fixers.prefixes = prefixes.map(function (p) {
      return '-' + p + '-';
    });
    fixers.prefix = fixers.prefixes[0] || '';
    // Edge supports both `webkit` and `ms` prefixes, but `ms` isn't detected with the method above.
    // the selector comes from http://browserstrangeness.com/css_hacks.html
    if (supportedRule('_:-ms-lang(x), _:-webkit-full-screen')) fixers.prefixes.push('-ms-');
    fixers.Prefix = camelCase(fixers.prefix);
  }

  // Derived from Lea Verou's PrefixFree

  function detectSelectors(fixers) {
    var selector, prefixed;
    function prefixSelector(selector) {
      return selector.replace(/^::?/, function ($0) {
        return $0 + fixers.prefix;
      });
    }

    if (fixers.prefix === '') return;
    var selectors = {
      ':any-link': null,
      '::backdrop': null,
      ':fullscreen': null, //TODO sort out what changed between specs
      ':full-screen': ':fullscreen',
      //sigh
      '::placeholder': null,
      ':placeholder': '::placeholder',
      '::input-placeholder': '::placeholder',
      ':input-placeholder': '::placeholder',
      ':read-only': null,
      ':read-write': null,
      '::selection': null
    };

    // builds an array of selectors that need a prefix.
    for (selector in selectors) {
      prefixed = prefixSelector(selector);
      if (!supportedRule(selectors[selector] || selector) && supportedRule(prefixed)) {
        fixers.hasSelectors = true;
        fixers.selectorList.push(selectors[selector] || selector);
        fixers.selectorMap[selectors[selector] || selector] = prefixed;
      }
    }
  }

  function detectWebkitCompat(fixers) {
    if (!supportedDecl('background-clip', 'text') && supportedDecl('-webkit-background-clip', 'text')) fixers.WkBCTxt = true;['background-clip', 'text-fill-color', 'text-stroke-color', 'text-stroke-width', 'text-stroke'].forEach(function (prop) {
      if (!supportedProperty(prop) && supportedProperty('-webkit-' + prop)) fixers.properties[prop] = '-webkit-' + prop;
    });
  }

  function blankFixers() {
    return {
      atrules: {},
      hasAtrules: false,
      hasDppx: null,
      hasKeywords: false,
      hasPixelRatio: false,
      hasPixelRatioFraction: false,
      hasSelectors: false,
      hasValues: false,
      fixAtMediaParams: null,
      fixAtSupportsParams: null,
      fixProperty: null,
      fixSelector: null,
      fixValue: null,
      flexbox2009: false,
      flexbox2012: false,
      functions: [],
      initial: null,
      jsFlex: false,
      keywords: {},
      placeholder: null,
      prefix: '',
      prefixes: [],
      Prefix: '',
      properties: {},
      selectorList: [],
      selectorMap: {},
      valueProperties: {
        'transition': 1,
        'transition-property': 1,
        'will-change': 1
      },
      WkBCTxt: false // -webkit-background-clip: text
    };
  }

  function browserDetector(fixers) {
    // add the required data to the fixers object.
    init();
    detectPrefix(fixers);
    detectSelectors(fixers);
    detectAtrules(fixers);
    detectKeywords(fixers);
    detectFunctions(fixers);
    detectWebkitCompat(fixers);
    finalize();
  }

  var emptySet = {};

  var valueTokenizer = /[(),]|\/\*[\s\S]*?\*\//g;

  /**
   * For properties whose values are also properties, this will split a coma-separated
   * value list into individual values, ignoring comas in comments and in
   * functions(parameter, lists).
   *
   * @param {string} selector
   * @return {string[]}
   */

  function splitValue(value) {
    var indices = [],
        res = [],
        inParen = 0,
        o;
    /*eslint-disable no-cond-assign*/
    while (o = valueTokenizer.exec(value)) {
      /*eslint-enable no-cond-assign*/
      switch (o[0]) {
        case '(':
          inParen++;break;
        case ')':
          inParen--;break;
        case ',':
          if (inParen) break;indices.push(o.index);
      }
    }
    for (o = indices.length; o--;) {
      res.unshift(value.slice(indices[o] + 1));
      value = value.slice(0, indices[o]);
    }
    res.unshift(value);
    return res;
  }

  function makeDetector(before, targets, after) {
    return new RegExp(before + '(?:' + targets.join('|') + ')' + after);
  }

  function makeLexer(before, targets, after) {
    return new RegExp("\"(?:\\\\[\\S\\s]|[^\"])*\"|'(?:\\\\[\\S\\s]|[^'])*'|\\/\\*[\\S\\s]*?\\*\\/|" + before + '((?:' + targets.join('|') + '))' + after, 'gi');
  }

  // declarations
  // ------------
  // function trim(s) {
  //   return s.replace(/^\s*(.*?)\s*$/, '$1')
  // }

  function fixDecl(fixers, emit, property, value) {
    if (typeof property !== 'string' || property.charAt(0) === '-') return emit(property, value);

    if (!(typeof value === 'string' || typeof value === 'number')) {
      return emit(fixers.properties[property] || fixers.fixProperty(property), value);
    }

    value = value + '';
    if (fixers.jsFlex) {
      if (property === 'display' && (value === 'flex' || value === 'inline-flex')) {
        emit('-js-display', value);
        return;
      }
    } else if (fixers.flexbox2009) {
      // TODO: flex only takes one value in the 2009 spec
      // if (property === 'flex') {
      //   value = trim(value)
      //   if (value === 'none' || value === 'initial') emit(property, '0')
      //   else if (value === 'auto') emit(property, '1')
      //   else emit(property, value.replace(/^(\d+)(?=\W|$).*/, '$1'))
      //   return
      // } else
      if (property === 'flex-flow') {
        value.split(/\s+/).forEach(function (v) {
          // recurse! The lack of `next.` is intentional.
          if (v.indexOf('wrap') > -1) fixDecl(fixers, emit, 'flex-wrap', v);else if (v !== '') fixDecl(fixers, emit, 'flex-direction', v);
        });
        return;
      } else if (property === 'flex-direction') {
        emit(fixers.properties['box-orient'], value.indexOf('column') > -1 ? 'block-axis' : 'inline-axis');
        emit(fixers.properties['box-direction'], value.indexOf('-reverse') > -1 ? 'reverse' : 'normal');
        return;
      }
    }
    // else if (fixers.flexbox2012) {
    //   // if (property === 'flex' && value.indexOf('calc(') !== -1) {
    //   //   var parsed =
    //   // }
    // }
    if (fixers.WkBCTxt && property === 'background-clip' && value === 'text') {
      emit('-webkit-background-clip', value);
    } else {
      emit(fixers.properties[property] || fixers.fixProperty(property), fixers.fixValue(value, property));
    }
  }

  function finalizeFixers(fixers) {
    var prefix = fixers.prefix;

    // properties
    // ----------

    fixers.fixProperty = fixers.fixProperty || function (prop) {
      var prefixed;
      return fixers.properties[prop] = supportedProperty(prop) || !supportedProperty(prefixed = prefix + prop) ? prop : prefixed;
    };

    // selectors
    // ----------

    var selectorDetector = makeDetector('', fixers.selectorList, '(?:\\b|$|[^-])');
    var selectorMatcher = makeLexer('', fixers.selectorList, '(?:\\b|$|[^-])');
    var selectorReplacer = function selectorReplacer(match, selector) {
      return selector != null ? fixers.selectorMap[selector] : match;
    };
    fixers.fixSelector = function (selector) {
      return selectorDetector.test(selector) ? selector.replace(selectorMatcher, selectorReplacer) : selector;
    };

    // values
    // ------

    // When gradients are supported with a prefix, convert angles to legacy
    // (from clockwise to trigonometric)
    var hasGradients = fixers.functions.indexOf('linear-gradient') > -1;
    var gradientDetector = /\blinear-gradient\(/;
    var gradientMatcher = /(^|\s|,|\()((?:repeating-)?linear-gradient\()\s*(-?\d*\.?\d*)deg/ig;
    var gradientReplacer = function gradientReplacer(match, delim, gradient, deg) {
      return delim + gradient + (90 - deg) + 'deg';
    };

    // functions
    var hasFunctions = !!fixers.functions.length;
    var functionsDetector = makeDetector('(?:^|\\s|,|\\()', fixers.functions, '\\s*\\(');
    var functionsMatcher = makeLexer('(^|\\s|,|\\()', fixers.functions, '(?=\\s*\\()');
    function functionReplacer(match, $1, $2) {
      return $1 + prefix + $2;
    }

    // properties as values (for transition, ...)
    // No need to look for strings in these properties. We may insert prefixes in comments. Oh the humanity.
    var valuePropertiesMatcher = /^\s*([-\w]+)/gi;
    var valuePropertiesReplacer = function valuePropertiesReplacer(match, prop) {
      return fixers.properties[prop] || fixers.fixProperty(prop);
    };

    fixers.fixValue = function (value, property) {
      var res;
      if (fixers.initial != null && value === 'initial') return fixers.initial;

      if (fixers.hasKeywords && (res = (fixers.keywords[property] || emptySet)[value])) return res;

      res = value;

      if (fixers.valueProperties.hasOwnProperty(property)) {
        res = value.indexOf(',') === -1 ? value.replace(valuePropertiesMatcher, valuePropertiesReplacer) : splitValue(value).map(function (v) {
          return v.replace(valuePropertiesMatcher, valuePropertiesReplacer);
        }).join(',');
      }

      if (hasFunctions && functionsDetector.test(value)) {
        if (hasGradients && gradientDetector.test(value)) {
          res = res.replace(gradientMatcher, gradientReplacer);
        }
        res = res.replace(functionsMatcher, functionReplacer);
      }
      return res;
    };

    // @media (resolution:...) {
    // -------------------------

    var resolutionMatcher = /((?:min-|max-)?resolution)\s*:\s*((?:\d*\.)?\d+)dppx/g;
    var resolutionReplacer = fixers.hasPixelRatio ? function (_, prop, param) {
      return fixers.properties[prop] + ':' + param;
    } : fixers.hasPixelRatioFraction ? function (_, prop, param) {
      return fixers.properties[prop] + ':' + Math.round(param * 10) + '/10';
    } : function (_, prop, param) {
      return prop + ':' + Math.round(param * 96) + 'dpi';
    };

    fixers.fixAtMediaParams = fixers.hasDppx !== false /*it may be null*/ ? function (p) {
      return p;
    } : function (params) {
      return params.indexOf('reso') !== -1 ? params.replace(resolutionMatcher, resolutionReplacer) : params;
    };

    // @supports ... {
    // ---------------

    var supportsProp, supportsValue;
    var atSupportsParamsFixer = function atSupportsParamsFixer(property, value) {
      supportsProp = property;
      supportsValue = value;
    };
    // regexp built by scripts/regexps.js
    var atSupportsParamsMatcher = /\(\s*([-\w]+)\s*:\s*((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|[^\)])*\)|[^\)])*\)|[^\)])*\)|[^\)])*\)|[^\)])*\)|[^\)])*\)|[^\)])*)/g;
    function atSupportsParamsReplacer(match, prop, value) {
      fixDecl(fixers, atSupportsParamsFixer, prop, value);
      return '(' + supportsProp + ':' + supportsValue;
    }
    fixers.fixAtSupportsParams = function (params) {
      return params.replace(atSupportsParamsMatcher, atSupportsParamsReplacer);
    };
  }

  var commonFixers;

  function initBrowser() {
    // exported for the test suite
    commonFixers = blankFixers();
    if (typeof getComputedStyle === 'function') browserDetector(commonFixers);
    finalizeFixers(commonFixers);
  }
  initBrowser();

  function prefixPlugin() {
    var fixers = commonFixers;
    var cache = [];
    return {
      set: {
        setPrefixDb: function setPrefixDb(f) {
          if (cache.indexOf(f) === -1) {
            finalizeFixers(f);
            cache.push(f);
          }
          fixers = f;
          return prefixPlugin;
        }
      },
      filter: function filter(next) {
        return {
          atrule: function atrule(rule, kind, params, hasBlock) {
            next.atrule(fixers.hasAtrules && fixers.atrules[rule] || rule, kind, rule === '@media' ? fixers.fixAtMediaParams(params) : rule === '@supports' ? fixers.fixAtSupportsParams(params) : params, hasBlock);
          },
          decl: function decl(property, value) {
            fixDecl(fixers, next.decl, property, value);
          },
          rule: function rule(selector) {
            next.rule(fixers.hasSelectors ? fixers.fixSelector(selector) : selector);
          }
        };
      }
    };
  }

  exports.prefixPlugin = prefixPlugin;
});

unwrapExports(j2cPluginPrefixBrowser_commonjs);
var j2cPluginPrefixBrowser_commonjs_1 = j2cPluginPrefixBrowser_commonjs.prefixPlugin;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var j2c = new J2c(j2cPluginPrefixBrowser_commonjs_1);
var ID_REGEX = /[^a-z0-9\\-]/g;

/*
 * @param id: identifier, used as HTMLElement id for the attached <style></style> element
 * @param styles: list of lists style Objects
 */
var add = function add(id) {
  for (var _len = arguments.length, styles = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    styles[_key - 1] = arguments[_key];
  }

  return addToDocument.apply(undefined, [{
    id: id
  }].concat(styles));
};

/*
 * Removes a style from head.
 */
var remove = function remove(id) {
  if (isServer) return;
  if (id) {
    var old = document.getElementById(id);
    if (old && old.parentNode) {
      old.parentNode.removeChild(old);
    }
  }
};

/*
 * opts: options object
 * id: identifier, used as HTMLElement id for the attached <style></style> element
 * document: document reference; default window.document
 * styles: list of lists style objects
 */
var addToDocument = function addToDocument(opts) {
  for (var _len2 = arguments.length, styles = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    styles[_key2 - 1] = arguments[_key2];
  }

  if (isServer) return;
  var id = opts.id.replace(ID_REGEX, "_");
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

/*
 * Adds styles to head for a component.
 * @param selector: Array of Strings: selectors
 * @param vars: Object configuration variables
 * @param styleFns: Array of Functions: (selector, componentVars) => [j2c style objects]
*/

var addStyle = function addStyle(_ref) {
  var selectors = _ref.selectors,
      styleFns = _ref.fns,
      vars = _ref.vars,
      customVars = _ref.customVars,
      mediaQuery = _ref.mediaQuery;

  var selector = selectors.join("");
  var styleList = styleFns.map(function (fn) {
    return fn(selector, vars, customVars);
  }).filter(function (list) {
    return list.length > 0;
  });
  if (styleList.length === 0) {
    return;
  }
  var id = selector.trim().replace(/^[^a-z]?(.*)/, "$1");
  if (mediaQuery) {
    add(id, [_defineProperty({}, mediaQuery, styleList)]);
  } else {
    add(id, styleList);
  }
};

var getStyle = function getStyle(_ref3) {
  var selectors = _ref3.selectors,
      styleFns = _ref3.fns,
      vars = _ref3.vars,
      customVars = _ref3.customVars,
      mediaQuery = _ref3.mediaQuery;

  var selector = selectors.join("");
  var styleList = styleFns.map(function (fn) {
    return fn(selector, vars, customVars);
  });
  return mediaQuery ? [_defineProperty({}, mediaQuery, styleList)] : styleList;
};

/*
 * Adds styles to head for a component.
 * @param selector: Array of Strings: selectors
 * @param fns: Array of Functions: (selector, componentVars) => [j2c style objects]
 * @param vars: (Object) Style configuration variables
*/
var createAddStyle = function createAddStyle(selector, fns, vars) {
  return function () {
    var customSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var customVars = arguments[1];

    var _ref5 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        mediaQuery = _ref5.mediaQuery;

    return addStyle({
      selectors: [selector, customSelector],
      fns: fns,
      vars: vars,
      customVars: customVars,
      mediaQuery: mediaQuery
    });
  };
};

var createGetStyle = function createGetStyle(selector, fns, vars) {
  return function () {
    var customSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var customVars = arguments[1];

    var _ref6 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        mediaQuery = _ref6.mediaQuery;

    return [getStyle({
      selectors: [selector, customSelector],
      fns: fns,
      vars: vars,
      customVars: customVars,
      mediaQuery: mediaQuery
    })];
  };
};

var styler = {
  add: add,
  addStyle: addStyle,
  addToDocument: addToDocument,
  createAddStyle: createAddStyle,
  createGetStyle: createGetStyle,
  getStyle: getStyle,
  remove: remove
};

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sel = function sel(selector, o) {
  return _defineProperty$1({}, selector, o);
};

var selectorRTL = function selectorRTL(selector) {
  return "*[dir=rtl] " + selector + ", .pe-rtl " + selector;
};

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var hex = function hex(value) {
  var bigint = parseInt(value.substring(1), 16);
  var r = bigint >> 16 & 255;
  var g = bigint >> 8 & 255;
  var b = bigint & 255;
  return r + "," + g + "," + b;
};

var createStyle = function createStyle(_ref2) {
  var varFns = _ref2.varFns,
      customVarFns = _ref2.customVarFns,
      superStyle = _ref2.superStyle,
      varMixin = _ref2.varMixin,
      selector = _ref2.selector,
      scopedSelector = _ref2.scopedSelector,
      componentVars = _ref2.componentVars,
      customVars = _ref2.customVars;

  var allVars = _extends$1({}, componentVars, customVars);
  var currentVars = customVars ? customVars : allVars;

  var _ref3 = componentVars || {},
      general_styles = _ref3.general_styles,
      otherVars = _objectWithoutProperties(_ref3, ["general_styles"]);

  var baseLayout = superStyle !== undefined ? customVars !== undefined ? superStyle(selector, componentVars, customVars) : superStyle(selector, otherVars) : [];
  var fns = _extends$1({}, !!customVars && customVarFns, varFns);
  return baseLayout.concat(Object.keys(varMixin(currentVars)).map(function (v) {
    return fns && fns[v] !== undefined ? fns[v](scopedSelector, allVars) : null;
  }).filter(function (s) {
    return s;
  }));
};

var createLayout = function createLayout(_ref4) {
  var varFns = _ref4.varFns,
      customVarFns = _ref4.customVarFns,
      superLayout = _ref4.superLayout,
      _ref4$varMixin = _ref4.varMixin,
      varMixin = _ref4$varMixin === undefined ? function (o) {
    return o;
  } : _ref4$varMixin;
  return function (selector, componentVars, customVars) {
    return createStyle({ varFns: varFns, customVarFns: customVarFns, superStyle: superLayout, varMixin: varMixin, selector: selector, scopedSelector: selector, componentVars: componentVars, customVars: customVars });
  };
};

var createColorStyle = function createColorStyle(_ref5) {
  var selector = _ref5.selector,
      scopedSelector = _ref5.scopedSelector,
      componentVars = _ref5.componentVars,
      customVars = _ref5.customVars,
      varFns = _ref5.varFns,
      superColor = _ref5.superColor,
      varMixin = _ref5.varMixin;
  return createStyle({ varFns: varFns, superStyle: superColor, varMixin: varMixin, selector: selector, scopedSelector: scopedSelector, componentVars: componentVars, customVars: customVars });
};

var appendPseudoClass = function appendPseudoClass(_ref6) {
  var scopes = _ref6.scopes,
      selector = _ref6.selector,
      _ref6$isNoTouch = _ref6.isNoTouch,
      isNoTouch = _ref6$isNoTouch === undefined ? false : _ref6$isNoTouch;
  return isNoTouch ? scopes.map(function (s) {
    return s + selector + ":hover";
  }).join(",") : scopes.map(function (s) {
    return s + selector;
  }).join(",");
};

var createScopedSelector = function createScopedSelector(_ref7) {
  var scopes = _ref7.scopes,
      selector = _ref7.selector,
      _ref7$isNoTouch = _ref7.isNoTouch,
      isNoTouch = _ref7$isNoTouch === undefined ? false : _ref7$isNoTouch;
  return selector.split(/\s*,\s*/).map(function (s) {
    return appendPseudoClass({ scopes: scopes, selector: s, isNoTouch: isNoTouch });
  });
};

var colorScopes = [{
  // has/inside dark tone
  scopes: [".pe-dark-tone", ".pe-dark-tone "],
  varFnName: "darkTintFns",
  isNoTouch: false
}, {
  // normal, has/inside light tone
  scopes: ["", ".pe-light-tone", ".pe-light-tone "],
  varFnName: "lightTintFns",
  isNoTouch: false
}, {
  // has/inside dark tone
  scopes: [".pe-no-touch .pe-dark-tone "],
  varFnName: "darkTintHoverFns",
  isNoTouch: true
}, {
  // normal, has/inside light tone
  scopes: [".pe-no-touch ", ".pe-no-touch .pe-light-tone "],
  varFnName: "lightTintHoverFns",
  isNoTouch: true
}];

var createColor = function createColor(_ref8) {
  var _ref8$varFns = _ref8.varFns,
      varFns = _ref8$varFns === undefined ? {} : _ref8$varFns,
      superColor = _ref8.superColor,
      _ref8$varMixin = _ref8.varMixin,
      varMixin = _ref8$varMixin === undefined ? function (o) {
    return o;
  } : _ref8$varMixin;
  return function (selector, componentVars, customVars) {
    return colorScopes.map(function (_ref9) {
      var scopes = _ref9.scopes,
          varFnName = _ref9.varFnName,
          isNoTouch = _ref9.isNoTouch;
      return createColorStyle({
        selector: selector,
        scopedSelector: createScopedSelector({
          scopes: scopes,
          selector: selector,
          isNoTouch: isNoTouch
        }),
        componentVars: componentVars,
        customVars: customVars,
        varFns: varFns[varFnName],
        superColor: superColor,
        varMixin: varMixin
      });
    });
  };
};

var createMarkerValue = function createMarkerValue(vars, behaviorVars) {
  if (!vars) {
    return;
  }
  var marker = Object.keys(behaviorVars).filter(function (bvar) {
    return vars[bvar] === true;
  }).join(".");
  return marker ? "\"" + marker + "\"" : null;
};

var createMarker = function createMarker(vars, behaviorVars) {
  var value = createMarkerValue(vars, behaviorVars);
  return value && {
    ":before": {
      content: value,
      display: "none"
    }
  };
};

var flex$2 = [{
  ".layout, .layout.horizontal": flex$1.layout,
  ".layout.horizontal.inline, .layout.vertical.inline": flex$1.layoutInline,
  ".layout.horizontal": flex$1.layoutHorizontal,
  ".layout.horizontal.reverse": flex$1.layoutHorizontalReverse,
  ".layout.vertical": flex$1.layoutVertical,
  ".layout.vertical.reverse": flex$1.layoutVerticalReverse,
  ".layout.wrap": flex$1.layoutWrap,
  ".layout.wrap.reverse": flex$1.layoutWrapReverse,
  ".flex": flex$1.flex(1),
  ".span.flex": { "display": "block" }, // for IE 10
  ".flex.auto-vertical": flex$1.flexAutoVertical,
  ".flex.auto": flex$1.flexAuto,
  ".flex.none": flex$1.flexIndex("none"),
  ".flex.one": flex$1.flexIndex(1),
  ".flex.two": flex$1.flexIndex(2),
  ".flex.three": flex$1.flexIndex(3),
  ".flex.four": flex$1.flexIndex(4),
  ".flex.five": flex$1.flexIndex(5),
  ".flex.six": flex$1.flexIndex(6),
  ".flex.seven": flex$1.flexIndex(7),
  ".flex.eight": flex$1.flexIndex(8),
  ".flex.nine": flex$1.flexIndex(9),
  ".flex.ten": flex$1.flexIndex(10),
  ".flex.eleven": flex$1.flexIndex(11),
  ".flex.twelve": flex$1.flexIndex(12),

  // alignment in cross axis
  ".layout.start": flex$1.layoutStart,
  ".layout.center, .layout.center-center": flex$1.layoutCenter,
  ".layout.end": flex$1.layoutEnd,

  // alignment in main axis
  ".layout.start-justified": flex$1.layoutStartJustified,
  ".layout.center-justified, .layout.center-center": flex$1.layoutCenterJustified,
  ".layout.end-justified": flex$1.layoutEndJustified,
  ".layout.around-justified": flex$1.layoutAroundJustified,
  ".layout.justified": flex$1.layoutJustified,

  // self alignment
  ".self-start": flex$1.selfStart,
  ".self-center": flex$1.selfCenter,
  ".self-end": flex$1.selfEnd,
  ".self-stretch": flex$1.selfStretch
}];

var commonStyle = [{
  ".pe-block": {
    display: "block"
  },

  ".pe-inline-block": {
    display: "inline-block"
  },

  // ie support for hidden
  ".pe-hidden": {
    display: "none !important"
  },

  ".pe-relative": {
    position: "relative"
  },

  ".pe-absolute": {
    position: "absolute"
  },

  ".pe-fit": {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },

  ".pe-fullbleed": {
    margin: 0,
    height: "100vh"
  },

  ".pe-rtl": {
    direction: "rtl"
  }
}];

var layoutStyles = [flex$2, commonStyle];

var addLayoutStyles = function addLayoutStyles() {
  return styler.add("pe-layout", flex$2, commonStyle);
};

export { flex$1 as flex, mixin, styler, hex, rgba, sel, selectorRTL, createLayout, createColor, createMarker, layoutStyles, addLayoutStyles };
