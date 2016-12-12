'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

require('../common/object.assign');

require('./theme/theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CSS_CLASSES = {
    component: 'pe-shadow',
    topShadow: 'pe-shadow__top',
    bottomShadow: 'pe-shadow__bottom',
    animated: 'pe-shadow--animated',
    depth_n: 'pe-shadow--z-'
};

var createView = function createView(vnode) {
    var attrs = vnode.attrs || {};
    var depthClass = '' + CSS_CLASSES.depth_n + Math.min(5, attrs.z !== undefined ? attrs.z : 1);
    var tag = attrs.tag || 'div';
    var props = {
        class: [CSS_CLASSES.component, attrs.animated && CSS_CLASSES.animated, attrs.class].join(' '),
        id: attrs.id || '',
        config: attrs.config
    };
    var content = [attrs.content && attrs.content, (0, _mithril2.default)('div', {
        class: [CSS_CLASSES.bottomShadow, depthClass].join(' ')
    }), (0, _mithril2.default)('div', {
        class: [CSS_CLASSES.topShadow, depthClass].join(' ')
    })];
    return (0, _mithril2.default)(tag, props, content);
};

var component = {
    view: createView
};

exports.default = component;
//# sourceMappingURL=shadow.js.map