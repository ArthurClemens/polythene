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
            var tag, props, content;
            opts = opts || {};

            tag = opts.tag || 'div[center][horizontal][layout]';
            props = p.componentProps({
                classList: ['item']
            }, opts, this, ctrl);

            content = [
                opts.icon ? m.component(icon, opts.icon) : null,
                opts.label ? m('div', opts.label) : null,
                opts.content ? opts.content : null
            ];
            return m(tag, props, p.embellish(content, opts));
        }
    };
});