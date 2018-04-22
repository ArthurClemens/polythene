(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.polythene = {})));
}(this, (function (exports) { 'use strict';

  var autoprefixer = require("autoprefixer");
  var cssbeautify = require("cssbeautify");
  var fs = require("fs");
  var J2c = require("j2c");
  var postcss = require("postcss");
  var cssnano = require("cssnano");
  var tar = require("tar");

  var j2c = new J2c();
  var COLOR_RED = "\x1b[31m";
  var COLOR_WHITE = "\x1b[37m";

  var makeStyleSheet = function makeStyleSheet() {
    for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
      styles[_key] = arguments[_key];
    }

    return styles.reduce(function (acc, styleList) {
      return (
        // each style returns a list
        Object.keys(styleList).length ? (styleList.forEach(function (style) {
          var scoped = {
            "@global": style
          };
          var sheet = j2c.sheet(scoped);
          acc += sheet;
        }), acc) : acc
      );
    }, "");
  };

  var beautifyCSS = function beautifyCSS(cssString) {
    return cssbeautify(cssString, {
      indent: "  "
    });
  };

  var saveToFile = function saveToFile(path, cssString) {
    return fs.writeFileSync(path, cssString, "ascii", function (err) {
      // throws an error, you could also catch it here
      if (err) throw err;
    });
  };

  var writeCSS = function writeCSS(_ref2) {
    var css = _ref2.css,
        styles = _ref2.styles,
        path = _ref2.path,
        autoPrefix = _ref2.autoPrefix,
        beautify = _ref2.beautify,
        _ref2$sourceMap = _ref2.sourceMap,
        sourceMap = _ref2$sourceMap === undefined ? true : _ref2$sourceMap,
        gzip = _ref2.gzip;

    var cssString = css ? css : styles ? styles.reduce(function (acc, current) {
      return acc + makeStyleSheet(current);
    }, "") : "";

    var mapPath = path + ".map";

    var plugins = [];
    if (autoPrefix) {
      plugins.push(autoprefixer());
    }
    plugins.push(cssnano({
      preset: "default",
      reduceIdents: false,
      zindex: false
    }));

    var options = sourceMap ? {
      from: undefined,
      to: path,
      map: { inline: false }
    } : {};

    postcss(plugins).process(cssString, options).then(function (result) {
      result.warnings().forEach(function (warn) {
        console.warn(COLOR_RED, "Warning", COLOR_WHITE, warn.toString()); // eslint-disable-line no-console
      });
      saveToFile(path, beautify ? beautifyCSS(result.css) : result.css);
      if (gzip) {
        tar.c({ gzip: true }, [path]).pipe(fs.createWriteStream(path + ".gz"));
      }
      if (sourceMap) {
        saveToFile(mapPath, result.map);
      }
    });
  };

  exports.writeCSS = writeCSS;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-scripts.js.map
