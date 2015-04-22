/*
Usage:

var item = require('polythene/item/item');
m.component(item, {
    icon: settingsIcon,
    label: 'Settings'
})

Options:

    tag (optional) (String): default 'div'
    className (optional) (String): extra CSS class appended to 'item'
    label (optional) (String)
    content (optional) (Mithril template)

*/

define([
    'polythene/polythene/polythene',
    'mithril',
    'polythene/icon/icon',
    'css!./item'
], function(
    p,
    m,
    icon
) {
    'use strict';

    return {
        view: function(ctrl, opts) {
            var defaultProps, tag, props;
            opts = opts || {};
            defaultProps = {
                class: ['item', (opts.className || '')].join(' ')
            };
            tag = opts.tag || 'div[center][horizontal][layout]';
            props = p.handleEventProps(defaultProps, opts, ctrl, this);
            p.merge(props, opts.props);

            return m(tag, props, [
                opts.icon ? m.component(icon, opts.icon) : null,
                opts.label ? m('div', opts.label) : null,
                opts.content ? opts.content : null
            ]);
        }
    };
});