'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

require('polythene/common/object.assign');

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

var _icon = require('polythene/icon/icon');

var _icon2 = _interopRequireDefault(_icon);

var _ripple = require('polythene/ripple/ripple');

var _ripple2 = _interopRequireDefault(_ripple);

require('polythene/list-tile/theme/theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CSS_CLASSES = {
    block: 'pe-list-tile',
    primary: 'pe-list-tile__primary',
    secondary: 'pe-list-tile__secondary',
    content: 'pe-list-tile__content',
    contentFront: 'pe-list-tile__content--front',
    title: 'pe-list-tile__title',
    subtitle: 'pe-list-tile__subtitle',
    highSubtitle: 'pe-list-tile__subtitle--high',
    selected: 'pe-list-tile--selected',
    disabled: 'pe-list-tile--disabled',
    sticky: 'pe-list-tile--sticky',
    hasSubtitle: 'pe-list-tile--subtitle',
    hasHighSubtitle: 'pe-list-tile--high-subtitle',
    hasFront: 'pe-list-tile--front',
    isCompact: 'pe-list-tile--compact'
};

var parsePrimaryContent = function parsePrimaryContent(opts) {
    var tag = opts.tag ? opts.tag : opts.url ? 'a' : 'div';

    var frontComp = opts.front ? (0, _mithril2.default)('div', {
        class: CSS_CLASSES.content + ' ' + CSS_CLASSES.contentFront
    }, opts.front) : opts.indent ? (0, _mithril2.default)('div', {
        class: CSS_CLASSES.content + ' ' + CSS_CLASSES.contentFront
    }) : null;

    return (0, _mithril2.default)(tag, Object.assign({
        class: CSS_CLASSES.primary
    }, opts.url, opts.events), [frontComp, (0, _mithril2.default)('div', {
        class: CSS_CLASSES.content
    }, [opts.content ? opts.content : null, opts.title ? (0, _mithril2.default)('div', { class: CSS_CLASSES.title }, opts.title) : null, opts.subtitle ? (0, _mithril2.default)('div', { class: CSS_CLASSES.subtitle }, opts.subtitle) : null, opts.highSubtitle ? (0, _mithril2.default)('div', { class: CSS_CLASSES.subtitle + ' ' + CSS_CLASSES.highSubtitle }, opts.highSubtitle) : null])]);
};

var parseSecondaryContent = function parseSecondaryContent(opts) {
    var secondaryOpts = opts.secondary || {};
    var tag = undefined;
    if (secondaryOpts.tag) {
        tag = secondaryOpts.tag;
    } else {
        if (secondaryOpts.url) {
            tag = 'a';
        } else {
            tag = 'div';
        }
    }
    return (0, _mithril2.default)(tag, Object.assign({
        class: CSS_CLASSES.secondary
    }, secondaryOpts.url, secondaryOpts.events), (0, _mithril2.default)('div', {
        class: CSS_CLASSES.content
    }, [secondaryOpts.icon ? _mithril2.default.component(_icon2.default, secondaryOpts.icon) : null, secondaryOpts.content ? secondaryOpts.content : null]));
};

var createView = function createView(ctrl) {
    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var tag = opts.tag || 'div';

    var heightClass = opts.subtitle ? CSS_CLASSES.hasSubtitle : opts.highSubtitle ? CSS_CLASSES.hasHighSubtitle : opts.front || opts.indent ? CSS_CLASSES.hasFront : null;

    var props = {
        class: [CSS_CLASSES.block, opts.selected ? CSS_CLASSES.selected : null, opts.disabled ? CSS_CLASSES.disabled : null, opts.sticky ? CSS_CLASSES.sticky : null, opts.compact ? CSS_CLASSES.isCompact : null, heightClass, opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    };
    var content = [opts.ink && !opts.disabled ? _mithril2.default.component(_ripple2.default, opts.ripple) : null, parsePrimaryContent(opts), opts.secondary ? parseSecondaryContent(opts) : null];
    return (0, _mithril2.default)(tag, props, [opts.before, content, opts.after]);
};

var component = {
    view: function view(ctrl) {
        var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        return createView(ctrl, opts);
    }
};

exports.default = component;
module.exports = exports['default'];

//# sourceMappingURL=list-tile.js.map