'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

var _spinner = require('polythene/spinner/spinner');

var _spinner2 = _interopRequireDefault(_spinner);

require('polythene/spinner/theme/indeterminate/theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CSS_CLASSES = {
    block: 'pe-spinner-indeterminate',
    animation: 'pe-spinner-indeterminate__animation',
    layer: 'pe-spinner-indeterminate__layer',
    layerN: 'pe-spinner-indeterminate__layer--',
    gapPatch: 'pe-spinner-indeterminate__gap-patch',
    circle: 'pe-spinner-indeterminate__circle',
    circleClipper: 'pe-spinner-indeterminate__circle-clipper',
    circleClipperLeft: 'pe-spinner-indeterminate__circle-clipper--left',
    circleClipperRight: 'pe-spinner-indeterminate__circle-clipper--right'
}; /*
   Derived from https://github.com/PolymerElements/paper-spinner
   
   @license
   Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */

var layer = function layer(num) {
    return (0, _mithril2.default)('div', {
        class: [CSS_CLASSES.layer, CSS_CLASSES.layerN + num].join(' ')
    }, [(0, _mithril2.default)('div', {
        class: [CSS_CLASSES.circleClipper, CSS_CLASSES.circleClipperLeft].join(' ')
    }, (0, _mithril2.default)('div', {
        class: CSS_CLASSES.circle
    })), (0, _mithril2.default)('div', {
        class: CSS_CLASSES.gapPatch
    }, (0, _mithril2.default)('div', {
        class: CSS_CLASSES.circle
    })), (0, _mithril2.default)('div', {
        class: [CSS_CLASSES.circleClipper, CSS_CLASSES.circleClipperRight].join(' ')
    }, (0, _mithril2.default)('div', {
        class: CSS_CLASSES.circle
    }))]);
};

var component = {
    view: function view(ctrl) {
        var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        opts.content = (0, _mithril2.default)('div', {
            class: CSS_CLASSES.animation
        }, [1, 2, 3, 4].map(function (num) {
            return layer(num);
        }));
        opts.class = [CSS_CLASSES.block, opts.class].join(' ');
        return _mithril2.default.component(_spinner2.default, opts);
    }
};

exports.default = component;
module.exports = exports['default'];

//# sourceMappingURL=indeterminate-spinner.js.map