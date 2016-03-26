'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

require('polythene/common/object.assign');

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

var _icon = require('polythene/icon/icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('polythene/button/button');

var _button2 = _interopRequireDefault(_button);

require('polythene/base-button/base-button');

require('polythene/icon-button/theme/theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CSS_CLASSES = {
    block: 'pe-button pe-button--icon',
    label: 'pe-button__label',
    compact: 'pe-button--compact'
};

var createView = function createView(ctrl) {
    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var content = opts.icon ? _mithril2.default.component(_icon2.default, opts.icon) : opts.content ? opts.content : null;
    return _mithril2.default.component(_button2.default, Object.assign({}, opts, {
        content: (0, _mithril2.default)('div', {
            class: CSS_CLASSES.label
        }, content),
        parentClass: [opts.parentClass || CSS_CLASSES.block, opts.compact ? CSS_CLASSES.compact : null].join(' '),
        // default do not show hover effect
        wash: opts.wash !== undefined ? opts.wash : false,
        animateOnTap: opts.animateOnTap !== undefined ? opts.animateOnTap : false
    }));
};

var component = {
    view: function view(ctrl) {
        var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        return createView(ctrl, opts);
    }
};

exports.default = component;
module.exports = exports['default'];

//# sourceMappingURL=icon-button.js.map