/*
Usage:

var item = require('polythene/item/item');
item({
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
    'mithril',
    'polythene/icon/icon',
    'css!./item'
], function(
    m,
    icon
) {
    'use strict';

    return {
        view: function(ctrl, opts) {
            opts = opts || {};
            return m((opts.tag || 'div[center][horizontal][layout]'), {
                class: ['item', (opts.className || '')].join(' ')
            }, [
                opts.icon ? m.component(icon, opts.icon) : null,
                opts.label ? m('div', opts.label) : null,
                opts.content ? opts.content : null
            ]);
        }
    };
});