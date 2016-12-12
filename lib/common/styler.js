'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _j2c = require('j2c');

var _j2c2 = _interopRequireDefault(_j2c);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var remove = function remove(id) {
    if (id) {
        var old = document.getElementById(id);
        if (old) {
            old.parentNode.removeChild(old);
        }
    }
};

/*
* id: identifier, used as HTMLElement id for the attached <style></style> element
* styles: list of lists style Objects
*/
var add = function add(id) {
    for (var _len = arguments.length, styles = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        styles[_key - 1] = arguments[_key];
    }

    addToDocument.apply(undefined, [{ id: id }].concat(styles));
};

/*
* opts: options object
  * id: identifier, used as HTMLElement id for the attached <style></style> element
  * document: document reference; default window.document
* styles: list of lists style Objects
*/
var addToDocument = function addToDocument(opts) {
    for (var _len2 = arguments.length, styles = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        styles[_key2 - 1] = arguments[_key2];
    }

    var id = opts.id;
    var documentRef = opts.document || window.document;
    remove(id);
    var styleEl = documentRef.createElement('style');
    if (id) {
        styleEl.setAttribute('id', id);
    }
    styles.forEach(function (styleList) {
        // each style returns a list
        if (Object.keys(styleList).length) {
            styleList.forEach(function (style) {
                var scoped = { '@global': style };
                var sheet = _j2c2.default.sheet(scoped);
                styleEl.appendChild(documentRef.createTextNode(sheet));
            });
        }
    });
    documentRef.head.appendChild(styleEl);
};

exports.default = {
    add: add,
    addToDocument: addToDocument,
    remove: remove
};
//# sourceMappingURL=styler.js.map