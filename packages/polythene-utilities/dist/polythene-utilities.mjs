import { flex, styler } from 'polythene-core-css';
import { isClient, isServer } from 'polythene-core';

var flex$1 = [{
  ".layout, .layout.horizontal": flex.layout,
  ".layout.horizontal.inline, .layout.vertical.inline": flex.layoutInline,
  ".layout.horizontal": flex.layoutHorizontal,
  ".layout.horizontal.reverse": flex.layoutHorizontalReverse,
  ".layout.vertical": flex.layoutVertical,
  ".layout.vertical.reverse": flex.layoutVerticalReverse,
  ".layout.wrap": flex.layoutWrap,
  ".layout.wrap.reverse": flex.layoutWrapReverse,
  ".flex": flex.flex(1),
  ".span.flex": { "display": "block" }, // for IE 10
  ".flex.auto-vertical": flex.flexAutoVertical,
  ".flex.auto": flex.flexAuto,
  ".flex.none": flex.flexIndex("none"),
  ".flex.one": flex.flexIndex(1),
  ".flex.two": flex.flexIndex(2),
  ".flex.three": flex.flexIndex(3),
  ".flex.four": flex.flexIndex(4),
  ".flex.five": flex.flexIndex(5),
  ".flex.six": flex.flexIndex(6),
  ".flex.seven": flex.flexIndex(7),
  ".flex.eight": flex.flexIndex(8),
  ".flex.nine": flex.flexIndex(9),
  ".flex.ten": flex.flexIndex(10),
  ".flex.eleven": flex.flexIndex(11),
  ".flex.twelve": flex.flexIndex(12),

  // alignment in cross axis
  ".layout.start": flex.layoutStart,
  ".layout.center, .layout.center-center": flex.layoutCenter,
  ".layout.end": flex.layoutEnd,

  // alignment in main axis
  ".layout.start-justified": flex.layoutStartJustified,
  ".layout.center-justified, .layout.center-center": flex.layoutCenterJustified,
  ".layout.end-justified": flex.layoutEndJustified,
  ".layout.around-justified": flex.layoutAroundJustified,
  ".layout.justified": flex.layoutJustified,

  // self alignment
  ".self-start": flex.selfStart,
  ".self-center": flex.selfCenter,
  ".self-end": flex.selfEnd,
  ".self-stretch": flex.selfStretch
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
  }
}];

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var layoutStyles = _extends({}, flex$1, commonStyle);

var addLayoutStyles = function addLayoutStyles() {
  return styler.add("pe-layout", flex$1, commonStyle);
};

if (isClient && !window.WebFontConfig) {
    window.WebFontConfig = {};
    (function () {
        var wf = document.createElement('script');
        wf.src = (document.location.protocol === 'https:' ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
    })();
}

var addWebFont = function addWebFont(vendor, family, key) {
    if (isServer) {
        return;
    }
    var vendorCfg = window.WebFontConfig[vendor] || {};
    vendorCfg.families = vendorCfg.families || [];
    vendorCfg.families.push(family);
    if (key) {
        vendorCfg.key = key;
    }
    window.WebFontConfig[vendor] = vendorCfg;
};

export { layoutStyles, addLayoutStyles, addWebFont };
