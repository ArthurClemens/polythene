/*
Usage:

var item = require('polythene/item/item');
item({
    
})

Options:

    tag (optional) (String): default 'div'
    className (optional) (String)
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

    var component = {
        view: function(ctrl, args) {
            args = args || {};
            return m((args.tag || 'div[center][horizontal][layout]'), {
                class: ['item', (args.className || '')].join(' ')
            }, [
                args.icon ? icon(args.icon) : null,
                args.label ? m('div', args.label) : null,
                args.content ? args.content : null
            ]);
        }
    };
    return m.component(component, arguments);
});