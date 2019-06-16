import J2c from 'j2c';
import { isServer } from 'polythene-core';

// @ts-check

/**
 * @typedef {{[selector:string] : object}} Style
 * @typedef {Array<Style> | Style} Styles
 */

/**
 * @type {Styles} layout
 */
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
/**
 * @type {Styles} layoutInline
 */

var layoutInline = [layout, {
  "display": "-ms-inline-flexbox"
}, {
  "display": "-webkit-inline-flex"
}, {
  "display": "inline-flex"
}];
/**
 * @type {Styles} layoutHorizontal
 */

var layoutHorizontal = [layout, {
  "-ms-flex-direction": "row",
  "-webkit-flex-direction": "row",
  "flex-direction": "row"
}];
/**
 * @type {Styles} layoutHorizontalReverse
 */

var layoutHorizontalReverse = [layout, {
  "-ms-flex-direction": "row-reverse",
  "-webkit-flex-direction": "row-reverse",
  "flex-direction": "row-reverse"
}];
/**
 * @type {Styles} layoutVertical
 */

var layoutVertical = [layout, {
  "-ms-flex-direction": "column",
  "-webkit-flex-direction": "column",
  "flex-direction": "column"
}];
/**
 * @type {Styles} layoutVerticalReverse
 */

var layoutVerticalReverse = [layout, {
  "-ms-flex-direction": "column-reverse",
  "-webkit-flex-direction": "column-reverse",
  "flex-direction": "column-reverse"
}];
/**
 * @type {Styles} layoutWrap
 */

var layoutWrap = [layout, {
  "-ms-flex-wrap": "wrap",
  "-webkit-flex-wrap": "wrap",
  "flex-wrap": "wrap"
}];
/**
 * @type {Styles} layoutWrapReverse
 */

var layoutWrapReverse = [layout, {
  "-ms-flex-wrap": "wrap-reverse",
  "-webkit-flex-wrap": "wrap-reverse",
  "flex-wrap": "wrap-reverse"
}];
/**
 * @type {Styles} layoutStart
 */

var layoutStart = [layout, {
  "-ms-flex-align": "start",
  "-webkit-align-items": "flex-start",
  "align-items": "flex-start"
}];
/**
 * @type {Styles} layoutCenter
 */

var layoutCenter = [layout, {
  "-ms-flex-align": "center",
  "-webkit-align-items": "center",
  "align-items": "center"
}];
/**
 * @type {Styles} layoutEnd
 */

var layoutEnd = [layout, {
  "-ms-flex-align": "end",
  "-webkit-align-items": "flex-end",
  "align-items": "flex-end"
}];
/**
 * @type {Styles} layoutJustified
 */

var layoutJustified = [layout, {
  "-ms-flex-pack": "justify",
  "-webkit-justify-content": "space-between",
  "justify-content": "space-between"
}];
/**
 * @type {Styles} layoutStartJustified
 */

var layoutStartJustified = [layout, {
  "-ms-flex-pack": "start",
  "-webkit-justify-content": "flex-start",
  "justify-content": "flex-start"
}];
/**
 * @type {Styles} layoutCenterJustified
 */

var layoutCenterJustified = [layout, {
  "-ms-flex-pack": "center",
  "-webkit-justify-content": "center",
  "justify-content": "center"
}];
/**
 * @type {Styles} layoutEndJustified
 */

var layoutEndJustified = [layout, {
  "-ms-flex-pack": "end",
  "-webkit-justify-content": "flex-end",
  "justify-content": "flex-end"
}];
/**
 * @type {Styles} layoutCenterCenter
 */

var layoutCenterCenter = [layoutCenterJustified, layoutCenter];
/**
 * @type {Styles} layoutAroundJustified
 */

var layoutAroundJustified = [layout, {
  "-ms-flex-pack": "distribute",
  "-webkit-justify-content": "space-around",
  "justify-content": "space-around"
}];
/**
 * @param {number} [num=1] 
 * @returns {Styles}
 */

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
/**
 * @type {Styles} flexAuto
 */


var flexAuto = {
  "-ms-flex": "1 1 auto",
  "-webkit-flex-basis": "auto",
  "flex-basis": "auto"
};
/**
 * @type {Styles} flexAutoVertical
 */

var flexAutoVertical = {
  "-ms-flex": "1 1 auto",
  "-webkit-flex-basis": "auto",
  "flex-basis": "auto"
};
/**
 * 
 * @param {number|"none"} index 
 * @returns {Styles}
 */

var flexIndex = function flexIndex(index) {
  return {
    "-ms-flex": index,
    "-webkit-flex": index,
    "flex": index
  };
};
/**
 * 
 * @param {number} value 
 * @returns {Styles}
 */


var flexGrow = function flexGrow(value) {
  return {
    "-webkit-flex-grow": value,
    "flex-grow": value
  };
};
/**
 * 
 * @param {number} value 
 * @returns {Styles}
 */


var flexShrink = function flexShrink(value) {
  return {
    "-webkit-flex-shrink": value,
    "flex-shrink": value
  };
};
/**
 * @type {Styles} selfStart
 */


var selfStart = {
  "-ms-align-self": "flex-start",
  "-webkit-align-self": "flex-start",
  "align-self": "flex-start"
};
/**
 * @type {Styles} selfCenter
 */

var selfCenter = {
  "-ms-align-self": "center",
  "-webkit-align-self": "center",
  "align-self": "center"
};
/**
 * @type {Styles} selfEnd
 */

var selfEnd = {
  "-ms-align-self": "flex-end",
  "-webkit-align-self": "flex-end",
  "align-self": "flex-end"
};
/**
 * @type {Styles} selfStretch
 */

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
  flexShrink: flexShrink,
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

function _defineProperty(obj, key, value) {
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
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

// @ts-check

/**
 * @typedef {object} StyleObject 
 */

/**
 * Centers an item absolutely within relative parent.
 * @param {number} [offset=0] 
 * @returns {StyleObject}
 */
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
/**
 * Breaks off a line with ... unless lines is "none"
 * @param {number|"none"} lines 
 * @param {number} lineHeight 
 * @param {string} [unit=px]
 * @example
 * // max 1 line, 16px high
 * mixin.ellipsis(1, 16)
 * @example 
 * // max 2 lines, 2.6em high
 * mixin.ellipsis(2, 1.3, "em")
 * @returns {StyleObject} 
 */


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
    "@supports (-webkit-line-clamp: 2)": lines !== undefined ? {
      "-webkit-line-clamp": lines,
      "-webkit-box-orient": "vertical",
      display: "-webkit-box",
      wordBreak: "break-word"
    } : undefined
  }, _objectSpread({
    overflow: "hidden",
    textOverflow: "ellipsis",
    textRendering: "auto"
  }, lineHeight !== undefined ? {
    maxHeight: lines * lineHeight + unit
  } : undefined, lineHeight === 1 ? {
    wordWrap: "nowrap"
  } : undefined)];
};
/**
 * Clears float.
 * @returns {StyleObject} 
 */


var clearfix = function clearfix() {
  return {
    "&:after": {
      content: "\"\"",
      display: "table",
      clear: "both"
    }
  };
};
/**
 * Creates sticky headers in a scrollable list.
 * Does not work in IE 11, Edge < 16.
 * @param {number} [zIndex=1] 
 * @returns {StyleObject} 
 */


var sticky = function sticky() {
  var zIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return {
    position: "sticky",
    top: 0,
    zIndex: zIndex
  };
};
/**
 * Creates a transition with presets
 * @param {string} [properties=all]
 * @param {string} [duration=".18s"] 
 * @param {string} [curve=ease-out] 
 * @example
 * mixin.defaultTransition("opacity", vars.animation_duration)
 * @returns {StyleObject} 
 */


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
    supportedDecl = function(property, value) {return _supportedDecl(camelCase(property), value)};
    supportedProperty = function(property) {return _supportedProperty(camelCase(property))};
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
  return str.replace(/-([a-z])/g, function($0, $1) { return $1.toUpperCase() }).replace('-','')
}
function deCamelCase(str) {
  return str.replace(/[A-Z]/g, function($0) { return '-' + $0.toLowerCase() })
}
function _supportedDecl(property, value) {
  styleAttr[property] = '';
  styleAttr[property] = value;
  return !!styleAttr[property]
}
function supportedMedia(property, value) {
  styleElement.textContent = '@media (' + property + ':' + value +'){}';
  // The !!~indexOf trick. False for -1, true otherwise.
  return !!~styleElement.sheet.cssRules[0].cssText.indexOf(value)
}
function _supportedProperty(property) {
  return property in styleAttr
}
function supportedRule(selector) {
  styleElement.textContent = selector + '{}';
  return !!styleElement.sheet.cssRules.length
}

// Derived from Lea Verou's PrefixFree

// TODO: http://caniuse.com/#feat=css-media-resolution

function detectAtrules(fixers) {
  if (fixers.prefix === '') return
  var atrules = {
    'keyframes': 'name',
    'viewport': null,
    'document': 'regexp(".")'
  };

  // build a map of {'@ruleX': '@-prefix-ruleX'}
  for(var atrule in atrules) {
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
  if (fixers.prefix === '') return
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
  functions['repeating-linear-gradient'] =
  functions['repeating-radial-gradient'] =
  functions['radial-gradient'] =
  functions['linear-gradient'];

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
    values: [ 'grab', 'grabbing', 'zoom-in', 'zoom-out']
  },
  {
    props: ['display'],
    values:['box', 'inline-box', 'flexbox', 'inline-flexbox', 'flex', 'inline-flex', 'grid', 'inline-grid']
  },
  {
    props: ['position'],
    values: [ 'sticky' ]
  },
  {
    props: ['width', 'column-width', 'height', 'max-height', 'max-width', 'min-height', 'min-width'],
    values: ['contain-floats', 'fill-available', 'fit-content', 'max-content', 'min-content']
  }
];
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
  'box-direction' : 'box-direction', // we prepopulate the cache for the above case.
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
  if (fixers.prefixes.length === 0) return

  // build a map of {propertyI: {keywordJ: previxedKeywordJ, ...}, ...}
  for (var i = 0; i < keywords.length; i++) {
    var map = {}, property = keywords[i].props[0];
    // eslint-disable-next-line
    for (var j = 0, keyword; keyword = keywords[i].values[j]; j++) {
      for (var k = fixers.prefixes.length; k--;) {
        if (
          !supportedDecl(property, keyword) &&
          supportedDecl(property, fixers.prefixes[k] + keyword)
        ) {
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
  } else if (
    fixers.keywords.display &&
    fixers.keywords.display.box &&
    !supportedDecl('display', 'flex') &&
    !supportedDecl('display', fixers.prefix + 'flex')
  ) {
    // old flexbox spec
    fixers.keywords.display.flex = fixers.keywords.display.box;
    fixers.keywords.display['inline-flex'] = fixers.keywords.display['inline-box'];
    fixers.flexbox2009 = true;
    for (k in flex2009Props) {
      fixers.properties[k] = fixers.prefix + flex2009Props[k];
      fixers.keywords[k] = flex2009Values;
    }
  } else if (
    fixers.keywords.display &&
    !fixers.keywords.display.box &&
    !fixers.keywords.display.flex &&
    !fixers.keywords.display.flexbox &&
    !supportedDecl('display', 'flex')
  ) {
    fixers.jsFlex = true;
  }
  if (
    !supportedDecl('color', 'initial') &&
    supportedDecl('color', fixers.prefix + 'initial')
  ) {
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
    if(property.charAt(0) === '-') {
      var prefix = property.split('-')[1];

      // Count prefix uses
      prefixCounters[prefix] = ++prefixCounters[prefix] || 1;
    }
  }

  // Some browsers have numerical indices for the properties, some don't
  if(allStyles && allStyles.length > 0) {
    for(var i=0; i<allStyles.length; i++) {
      iteration(allStyles[i]);
    }
  } else {
    for(var property in allStyles) {
      iteration(deCamelCase(property));
    }
  }

  var prefixes = [];
  for (var p in prefixCounters) prefixes.push(p);
  prefixes.sort(function(a,b) {return prefixCounters[b] - prefixCounters[a]});

  fixers.prefixes = prefixes.map(function(p){return '-' + p + '-'});
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
    return selector.replace(/^::?/, function($0) { return $0 + fixers.prefix })
  }

  if (fixers.prefix === '') return
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
    if(!supportedRule(selectors[selector] || selector) && supportedRule(prefixed)) {
      fixers.hasSelectors = true;
      fixers.selectorList.push(selectors[selector] || selector);
      fixers.selectorMap[selectors[selector] || selector] = prefixed;
    }
  }
}

function detectWebkitCompat(fixers) {
  if (!supportedDecl('background-clip', 'text') && supportedDecl('-webkit-background-clip', 'text')) fixers.WkBCTxt = true
  ;['background-clip', 'text-fill-color', 'text-stroke-color', 'text-stroke-width', 'text-stroke'].forEach(function(prop){
    if(!supportedProperty(prop) && supportedProperty('-webkit-' + prop)) fixers.properties[prop] = '-webkit-' + prop;
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
  }
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
  var indices = [], res = [], inParen = 0, o;
  /*eslint-disable no-cond-assign*/
  while (o = valueTokenizer.exec(value)) {
  /*eslint-enable no-cond-assign*/
    switch (o[0]) {
    case '(': inParen++; break
    case ')': inParen--; break
    case ',': if (inParen) break; indices.push(o.index);
    }
  }
  for (o = indices.length; o--;){
    res.unshift(value.slice(indices[o] + 1));
    value = value.slice(0, indices[o]);
  }
  res.unshift(value);
  return res
}

function makeDetector (before, targets, after) {
  return new RegExp(before + '(?:' + targets.join('|') + ')' + after)
}

function makeLexer (before, targets, after) {
  return new RegExp(
        "\"(?:\\\\[\\S\\s]|[^\"])*\"|'(?:\\\\[\\S\\s]|[^'])*'|\\/\\*[\\S\\s]*?\\*\\/|" +
            before + '((?:' +
            targets.join('|') +
            '))' + after,
        'gi'
    )
}

// declarations
// ------------
// function trim(s) {
//   return s.replace(/^\s*(.*?)\s*$/, '$1')
// }

function fixDecl(fixers, emit, property, value) {
  if (typeof property !== 'string' || property.charAt(0) === '-') return emit(property, value)

  if (!(typeof value === 'string' || typeof value === 'number')){
    return emit(fixers.properties[property] || fixers.fixProperty(property), value)
  }

  value = value + '';
  if (fixers.jsFlex) {
    if (property === 'display' && (value === 'flex' || value === 'inline-flex')) {
      emit('-js-display', value);
      return
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
      value.split(/\s+/).forEach(function(v){
        // recurse! The lack of `next.` is intentional.
        if (v.indexOf('wrap') > -1) fixDecl(fixers, emit, 'flex-wrap', v);
        else if(v !== '') fixDecl(fixers, emit, 'flex-direction', v);
      });
      return
    } else if (property === 'flex-direction') {
      emit(fixers.properties['box-orient'], value.indexOf('column') > -1 ? 'block-axis' : 'inline-axis');
      emit(fixers.properties['box-direction'], value.indexOf('-reverse') > -1 ? 'reverse' : 'normal');
      return
    }
  }
  // else if (fixers.flexbox2012) {
  //   // if (property === 'flex' && value.indexOf('calc(') !== -1) {
  //   //   var parsed =
  //   // }
  // }
  if(fixers.WkBCTxt && property === 'background-clip' && value === 'text') {
    emit('-webkit-background-clip', value);
  } else {
    emit(
      fixers.properties[property] || fixers.fixProperty(property),
      fixers.fixValue(value, property)
    );
  }
}


function finalizeFixers(fixers) {
  var prefix = fixers.prefix;


  // properties
  // ----------

  fixers.fixProperty = fixers.fixProperty || function(prop) {
    var prefixed;
    return fixers.properties[prop] = (
      supportedProperty(prop) ||
      !supportedProperty(prefixed = prefix + prop)
    ) ? prop : prefixed
  };


  // selectors
  // ----------

  var selectorDetector = makeDetector('', fixers.selectorList, '(?:\\b|$|[^-])');
  var selectorMatcher = makeLexer('', fixers.selectorList, '(?:\\b|$|[^-])');
  var selectorReplacer = function(match, selector) {
    return selector != null ? fixers.selectorMap[selector] : match
  };
  fixers.fixSelector = function(selector) {
    return selectorDetector.test(selector) ? selector.replace(selectorMatcher, selectorReplacer) : selector
  };


  // values
  // ------

  // When gradients are supported with a prefix, convert angles to legacy
  // (from clockwise to trigonometric)
  var hasGradients = fixers.functions.indexOf('linear-gradient') > -1;
  var gradientDetector = /\blinear-gradient\(/;
  var gradientMatcher = /(^|\s|,|\()((?:repeating-)?linear-gradient\()\s*(-?\d*\.?\d*)deg/ig;
  var gradientReplacer = function (match, delim, gradient, deg) {
    return delim + gradient + (90-deg) + 'deg'
  };

  // functions
  var hasFunctions = !!fixers.functions.length;
  var functionsDetector = makeDetector('(?:^|\\s|,|\\()', fixers.functions, '\\s*\\(');
  var functionsMatcher = makeLexer('(^|\\s|,|\\()', fixers.functions, '(?=\\s*\\()');
  function functionReplacer (match, $1, $2) {
    return $1 + prefix + $2
  }

  // properties as values (for transition, ...)
  // No need to look for strings in these properties. We may insert prefixes in comments. Oh the humanity.
  var valuePropertiesMatcher = /^\s*([-\w]+)/gi;
  var valuePropertiesReplacer = function(match, prop){
    return fixers.properties[prop] || fixers.fixProperty(prop)
  };

  fixers.fixValue = function (value, property) {
    var res;
    if (fixers.initial != null && value === 'initial') return fixers.initial

    if (fixers.hasKeywords && (res = (fixers.keywords[property] || emptySet)[value])) return res

    res = value;

    if (fixers.valueProperties.hasOwnProperty(property)) {
      res = (value.indexOf(',') === -1) ?
        value.replace(valuePropertiesMatcher, valuePropertiesReplacer) :
        splitValue(value).map(function(v) {
          return v.replace(valuePropertiesMatcher, valuePropertiesReplacer)
        }).join(',');
    }

    if (hasFunctions && functionsDetector.test(value)) {
      if (hasGradients && gradientDetector.test(value)) {
        res = res.replace(gradientMatcher, gradientReplacer);
      }
      res = res.replace(functionsMatcher, functionReplacer);
    }
    return res
  };

  // @media (resolution:...) {
  // -------------------------

  var resolutionMatcher = /((?:min-|max-)?resolution)\s*:\s*((?:\d*\.)?\d+)dppx/g;
  var resolutionReplacer = (
    fixers.hasPixelRatio ? function(_, prop, param){return fixers.properties[prop] + ':' + param} :
    fixers.hasPixelRatioFraction ? function(_, prop, param){return fixers.properties[prop] + ':' + Math.round(param*10) + '/10'} :
    function(_, prop, param){return prop + ':' + Math.round(param * 96) +'dpi'}
  );

  fixers.fixAtMediaParams = fixers.hasDppx !== false /*it may be null*/ ?
    function(p) {return p} :
    function (params) {
      return (params.indexOf('reso') !== -1) ?
        params.replace(resolutionMatcher, resolutionReplacer) :
        params
    };


  // @supports ... {
  // ---------------

  var supportsProp, supportsValue;
  var atSupportsParamsFixer = function (property, value) {
    supportsProp = property;
    supportsValue = value;
  };
  // regexp built by scripts/regexps.js
  var atSupportsParamsMatcher =  /\(\s*([-\w]+)\s*:\s*((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|[^\)])*\)|[^\)])*\)|[^\)])*\)|[^\)])*\)|[^\)])*\)|[^\)])*\)|[^\)])*)/g;
  function atSupportsParamsReplacer(match, prop, value) {
    fixDecl(fixers, atSupportsParamsFixer, prop, value);
    return '(' + supportsProp + ':' + supportsValue
  }
  fixers.fixAtSupportsParams = function(params) {
    return params.replace(atSupportsParamsMatcher, atSupportsParamsReplacer)
  };
}

var commonFixers;

function initBrowser() { // exported for the test suite
  commonFixers = blankFixers();
  if (typeof getComputedStyle === 'function') browserDetector(commonFixers);
  finalizeFixers(commonFixers);
}
initBrowser();

function prefixPlugin(){
  var fixers = commonFixers;
  var cache = [];
  return {
    set: {
      setPrefixDb: function(f) {
        if (cache.indexOf(f) === -1) {
          finalizeFixers(f);
          cache.push(f);
        }
        fixers = f;
        return prefixPlugin
      }
    },
    filter: function(next) {
      return {
        atrule: function(rule, kind, params, hasBlock) {
          next.atrule(
            fixers.hasAtrules && fixers.atrules[rule] || rule,
            kind,
            (
              rule === '@media'    ? fixers.fixAtMediaParams(params) :
              rule === '@supports' ? fixers.fixAtSupportsParams(params) :
              params
            ),
            hasBlock
          );
        },
        decl: function(property, value) {
          fixDecl(fixers, next.decl, property, value);
        },
        rule: function(selector) {
          next.rule(
            fixers.hasSelectors ? fixers.fixSelector(selector) : selector
          );
        }
      }
    }
  }
}

exports.prefixPlugin = prefixPlugin;
});

unwrapExports(j2cPluginPrefixBrowser_commonjs);
var j2cPluginPrefixBrowser_commonjs_1 = j2cPluginPrefixBrowser_commonjs.prefixPlugin;

// @ts-ignore
var j2c = new J2c(j2cPluginPrefixBrowser_commonjs_1);

var ID_REGEX = /[^a-z0-9\\-]/g;
/**
 * @typedef {object} StyleObject 
 * @typedef {(selector: string|Array<string>, vars: object, customVars?: object) => Array<object>} StyleFn
 */

/**
 * Adds styles to head.
 * @param {string} id - Identifier, used as HTMLElement id for the attached <style></style> element.
 * @param {...Array<StyleObject>} styles - List of style Objects
 * @returns {void}
 */

var add = function add(id) {
  for (var _len = arguments.length, styles = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    styles[_key - 1] = arguments[_key];
  }

  return addToDocument.apply(void 0, [{
    id: id
  }].concat(styles));
};
/**
 * Removes a style from head.
 * @param {string} id - Identifier, used as HTMLElement id for the attached <style></style> element.
 * @returns {void}
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
/**
 * Adds styles to the head.
 * @param {object} params
 * @param {string} params.id - Identifier, used as HTMLElement id for the attached <style></style> element.
 * @param {object} [params.document] - Document reference.
 * @param {...Array<StyleObject>} styles - List of style Objects.
 * @returns {void}
 */


var addToDocument = function addToDocument(_ref) {
  var id = _ref.id,
      document = _ref.document;
  if (isServer) return;
  var safeId = id.replace(ID_REGEX, "_");
  remove(safeId);
  var documentRef = document || window.document;
  var styleEl = documentRef.createElement("style");

  if (safeId) {
    styleEl.setAttribute("id", safeId);
  }

  for (var _len2 = arguments.length, styles = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    styles[_key2 - 1] = arguments[_key2];
  }

  styles.forEach(function (styles) {
    // each style returns a list
    if (Object.keys(styles).length) {
      styles.forEach(function (style) {
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
/**
 * 
 * @param {object} params
 * @param {StyleObject|Array<StyleObject>} params.styles
 * @param {string} [params.scope]
 * @returns {Array<StyleObject>}
 */


var wrapInScope = function wrapInScope(_ref2) {
  var styles = _ref2.styles,
      scope = _ref2.scope;
  return scope ? [_defineProperty({}, scope, styles)] : styles;
};
/**
 * Adds component styles to head.
 * @param {object} params
 * @param {Array<string>} params.selectors
 * @param {Array<StyleFn>} params.fns
 * @param {object} params.vars
 * @param {object} [params.customVars]
 * @param {string} [params.mediaQuery]
 * @param {string} [params.scope]
 * @param {string} [params.identifier]
 * @returns {void}
 */


var addStyle = function addStyle(_ref4) {
  var selectors = _ref4.selectors,
      styleFns = _ref4.fns,
      vars = _ref4.vars,
      customVars = _ref4.customVars,
      mediaQuery = _ref4.mediaQuery,
      scope = _ref4.scope,
      identifier = _ref4.identifier;
  var prefix = scope ? " " : "";
  var selector = prefix + selectors.join("");
  var styles = styleFns.map(function (fn) {
    return fn(selector, vars, customVars);
  }).filter(function (list) {
    return list.length > 0;
  });

  if (styles.length === 0) {
    return;
  }

  var id = identifier || selector.trim().replace(/^[^a-z]?(.*)/, "$1");
  add(id, wrapInScope({
    styles: wrapInScope({
      styles: styles,
      scope: scope
    }),
    scope: mediaQuery
  }));
};
/**
 * Returns a list of style objects for a component.
 * @param {object} params
 * @param {Array<string>} params.selectors
 * @param {Array<StyleFn>} params.fns
 * @param {object} params.vars - Style configuration variables
 * @param {object} [params.customVars] - Style configuration variables
 * @param {string} [params.mediaQuery] - Mediaquery string
 * @param {string} [params.scope] - Scope selector
 * @returns {Array<StyleObject>}
 */


var getStyle = function getStyle(_ref5) {
  var selectors = _ref5.selectors,
      styleFns = _ref5.fns,
      vars = _ref5.vars,
      customVars = _ref5.customVars,
      mediaQuery = _ref5.mediaQuery,
      scope = _ref5.scope;
  var prefix = scope ? " " : "";
  var selector = prefix + selectors.join("");
  var styles = styleFns.map(function (fn) {
    return fn(selector, vars, customVars);
  });
  return wrapInScope({
    styles: wrapInScope({
      styles: styles,
      scope: scope
    }),
    scope: mediaQuery
  });
};
/**
 * Adds component styles to head.
 * @param {string} selector 
 * @param {Array<StyleFn>} fns 
 * @param {object} vars - Style configuration variables
 */


var createAddStyle = function createAddStyle(selector, fns, vars) {
  return (
    /**
     * @param {string} [customSelector=""]
     * @param {object} customVars
     * @param {object} [scoping={}]
     * @param {string} [scoping.mediaQuery]
     * @param {string} [scoping.scope]
     * @returns {void}
     */
    function () {
      var customSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var customVars = arguments.length > 1 ? arguments[1] : undefined;

      var _ref6 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          mediaQuery = _ref6.mediaQuery,
          scope = _ref6.scope;

      return addStyle({
        selectors: [selector, customSelector],
        fns: fns,
        vars: vars,
        customVars: customVars,
        mediaQuery: mediaQuery,
        scope: scope
      });
    }
  );
};
/**
 * Returns styles for a component.
 * @param {string} selector 
 * @param {Array<StyleFn>} fns 
 * @param {object} vars - Style configuration variables
 */


var createGetStyle = function createGetStyle(selector, fns, vars) {
  return (
    /**
     * @param {string} [customSelector=""]
     * @param {object} customVars
     * @param {object} [scoping={}]
     * @param {string} [scoping.mediaQuery]
     * @param {string} [scoping.scope]
     * @returns {Array<StyleObject>}
     */
    function () {
      var customSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var customVars = arguments.length > 1 ? arguments[1] : undefined;

      var _ref7 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          mediaQuery = _ref7.mediaQuery,
          scope = _ref7.scope;

      return [getStyle({
        selectors: [selector, customSelector],
        fns: fns,
        vars: vars,
        customVars: customVars,
        mediaQuery: mediaQuery,
        scope: scope
      })];
    }
  );
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

// @ts-check

/**
 * @typedef {(selector: string, vars: object, customVars?: object) => Array<object>} StyleFn
 * @typedef {{[s: string]: StyleFn}} StyleCollection
 */

/**
 * Wraps an object with a selector.
 * @param {string} selector 
 * @param {object} o 
 * @returns {object}
 */
var sel = function sel(selector, o) {
  return _defineProperty({}, selector, o);
};
/**
 * Creates a right-to-left selector.
 * @param {string} selector
 * @returns {string}
 */

var selectorRTL = function selectorRTL(selector) {
  return "*[dir=rtl] ".concat(selector, ", .pe-rtl ").concat(selector);
};
/**
 * Creates a rgba CSS color string.
 * @param {string} colorStr 
 * @param {number} opacity 
 * @returns {string}
 */

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(".concat(colorStr, ", ").concat(opacity, ")");
};
/**
 * @param {object} params
 * @param {string} [params.selector]
 * @param {string} [params.scopedSelector]
 * @param {StyleCollection} [params.varFns]
 * @param {StyleCollection} [params.customVarFns]
 * @param {StyleFn} [params.superStyle]
 * @param {(_:any) => StyleCollection} [params.varMixin]
 * @param {StyleCollection} [params.componentVars]
 * @param {StyleCollection} [params.customVars]
 * @returns {Array<object>}
 */

var createStyle = function createStyle(_ref2) {
  var varFns = _ref2.varFns,
      customVarFns = _ref2.customVarFns,
      superStyle = _ref2.superStyle,
      varMixin = _ref2.varMixin,
      selector = _ref2.selector,
      scopedSelector = _ref2.scopedSelector,
      _ref2$componentVars = _ref2.componentVars,
      componentVars = _ref2$componentVars === void 0 ? {} : _ref2$componentVars,
      customVars = _ref2.customVars;

  var allVars = _objectSpread({}, componentVars, customVars);

  var currentVars = customVars ? customVars : allVars;

  var general_styles = componentVars.general_styles,
      otherVars = _objectWithoutProperties(componentVars, ["general_styles"]);

  var baseLayout = superStyle !== undefined ? customVars !== undefined ? superStyle(selector, componentVars, customVars) : superStyle(selector, otherVars) : [];

  var fns = _objectSpread({}, customVars ? customVarFns : {}, varFns);

  return baseLayout.concat(Object.keys(varMixin(currentVars)).map(function (v) {
    return fns && fns[v] !== undefined ? fns[v](scopedSelector, allVars) : null;
  }).filter(function (s) {
    return s;
  }));
};
/**
 * 
 * @param {object} params
 * @param {StyleCollection} [params.varFns]
 * @param {StyleCollection} [params.customVarFns]
 * @param {StyleFn} [params.superLayout]
 * @param {(_:any) => StyleCollection} [params.varMixin]
 * @returns {StyleFn}
 */


var createLayout = function createLayout(_ref3) {
  var varFns = _ref3.varFns,
      customVarFns = _ref3.customVarFns,
      superLayout = _ref3.superLayout,
      _ref3$varMixin = _ref3.varMixin,
      varMixin = _ref3$varMixin === void 0 ? function (o) {
    return o;
  } : _ref3$varMixin;
  return (
    /**
     * @param {string} selector
     * @param {object} componentVars
     * @param {object} [customVars]
     * @returns {Array<object>}
     */
    function (selector, componentVars, customVars) {
      return createStyle({
        varFns: varFns,
        customVarFns: customVarFns,
        superStyle: superLayout,
        varMixin: varMixin,
        selector: selector,
        scopedSelector: selector,
        componentVars: componentVars,
        customVars: customVars
      });
    }
  );
};
/**
 * 
 * @param {object} params
 * @param {string} [params.selector]
 * @param {string} [params.scopedSelector]
 * @param {object} [params.componentVars]
 * @param {object} [params.customVars]  
 * @param {StyleFn} [params.superColor]
 * @param {StyleCollection} [params.varFns]
 * @param {(_:any) => StyleCollection} [params.varMixin]
 * @returns {Array<object>}
 */

var createColorStyle = function createColorStyle(_ref4) {
  var selector = _ref4.selector,
      scopedSelector = _ref4.scopedSelector,
      componentVars = _ref4.componentVars,
      customVars = _ref4.customVars,
      varFns = _ref4.varFns,
      superColor = _ref4.superColor,
      varMixin = _ref4.varMixin;
  return createStyle({
    varFns: varFns,
    superStyle: superColor,
    varMixin: varMixin,
    selector: selector,
    scopedSelector: scopedSelector,
    componentVars: componentVars,
    customVars: customVars
  });
};
/**
 * 
 * @param {object} params 
 * @param {Array<string>} params.scopes
 * @param {string} params.selector
 * @param {boolean} params.isNoTouch
* @returns {string}
 */

var appendPseudoClass = function appendPseudoClass(_ref5) {
  var scopes = _ref5.scopes,
      selector = _ref5.selector,
      isNoTouch = _ref5.isNoTouch;
  return isNoTouch ? scopes.map(function (s) {
    return s + selector + ":hover";
  }).join(",") : scopes.map(function (s) {
    return s + selector;
  }).join(",");
};
/**
 * 
 * @param {object} params 
 * @param {Array<string>} params.scopes
 * @param {string} params.selector
 * @param {boolean} [params.isNoTouch]
 * @returns {string}
 */


var createScopedSelector = function createScopedSelector(_ref6) {
  var scopes = _ref6.scopes,
      selector = _ref6.selector,
      _ref6$isNoTouch = _ref6.isNoTouch,
      isNoTouch = _ref6$isNoTouch === void 0 ? false : _ref6$isNoTouch;
  return selector.split(/\s*,\s*/).map(function (s) {
    return appendPseudoClass({
      scopes: scopes,
      selector: s,
      isNoTouch: isNoTouch
    });
  }).join("");
};
/**
 * @typedef {object} ColorScopeObject
 * @property {Array<string>} scopes
 * @property {string} varFnName
 * @property {boolean} isNoTouch
 */

/**
 * @type {Array<ColorScopeObject>} colorScopes
 */


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
/**
 * 
 * @param {object} params
 * @param {object} [params.varFns]
 * @param {StyleFn} [params.superColor]
 * @param {(_:any) => StyleCollection} [params.varMixin]
 * @returns {StyleFn}
 */

var createColor = function createColor(_ref7) {
  var _ref7$varFns = _ref7.varFns,
      varFns = _ref7$varFns === void 0 ? {} : _ref7$varFns,
      superColor = _ref7.superColor,
      _ref7$varMixin = _ref7.varMixin,
      varMixin = _ref7$varMixin === void 0 ? function (o) {
    return o;
  } : _ref7$varMixin;
  return (
    /**
     * @param {string} selector
     * @param {object} componentVars
     * @param {object} [customVars]
     * @returns {Array<object>}
     */
    function (selector, componentVars, customVars) {
      return colorScopes.map(function (_ref8) {
        var scopes = _ref8.scopes,
            varFnName = _ref8.varFnName,
            isNoTouch = _ref8.isNoTouch;
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
    }
  );
};
/**
 * @param {object} vars 
 * @param {object} behaviorVars
 * @returns {string|undefined} 
 */

var createMarkerValue = function createMarkerValue(vars, behaviorVars) {
  var marker = Object.keys(behaviorVars).filter(function (bvar) {
    return vars[bvar] === true;
  }).join(".");
  return marker ? "\"".concat(marker, "\"") : undefined;
};
/**
 * Creates a CSS style from which the key can be read from the `content` property.
 * @param {object} vars 
 * @param {object} behaviorVars 
 * @returns {object}
 */


var createMarker = function createMarker(vars, behaviorVars) {
  if (!vars) {
    console.error("createMarker requires param `vars`"); // eslint-disable-line no-console
  }

  var value = createMarkerValue(vars, behaviorVars);
  return value ? {
    ":before": {
      content: value,
      display: "none"
    }
  } : undefined;
};

// @ts-check
/**
 * @typedef {{[selector:string] : Style | any}} Style
 */

/**
 * @type {Array<Style>} classes
 */

var classes = [{
  ".layout, .layout.horizontal": flex$1.layout,
  ".layout.horizontal.inline, .layout.vertical.inline": flex$1.layoutInline,
  ".layout.horizontal": flex$1.layoutHorizontal,
  ".layout.horizontal.reverse": flex$1.layoutHorizontalReverse,
  ".layout.vertical": flex$1.layoutVertical,
  ".layout.vertical.reverse": flex$1.layoutVerticalReverse,
  ".layout.wrap": flex$1.layoutWrap,
  ".layout.wrap.reverse": flex$1.layoutWrapReverse,
  ".flex": flex$1.flex(1),
  ".span.flex": {
    "display": "block"
  },
  // for IE 10
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

// @ts-check

/**
 * @typedef {{[selector:string] : object}} Style
 * @type {Array<Style>} classes
 */
var classes$1 = [{
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
  },
  // flip directional icon if needed
  "*[dir=rtl], .pe-rtl ": {
    " .pe-rtl--flip": {
      transform: "scaleX(-1)"
    }
  }
}];

// @ts-check
/**
 * @typedef {{[selector:string] : object}} Style
 * 

/**
 * @type {Array<Style>} layoutStyles
 */

var layoutStyles = [classes, classes$1];
/**
 * @returns {void}
 */

var addLayoutStyles = function addLayoutStyles() {
  return styler.add("pe-layout", classes, classes$1);
};

// @ts-check

export { addLayoutStyles, createColor, createLayout, createMarker, flex$1 as flex, layoutStyles, mixin, rgba, sel, selectorRTL, styler };
