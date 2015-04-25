define([
    'polythene/polythene/polythene',
    'mithril',
    'polythene/list-tile/list-tile',
    'css!./list'
], function(
    p,
    m,
    listTile
) {
    'use strict';

    return {
        view: function(ctrl, opts) {
            var tag, props, content;
            opts = opts || {};
            
            tag = opts.tag || 'div';
            props = p.componentProps({
                classList: ['list', (opts.header ? 'list-has-subheader' : null)]
            }, opts, this, ctrl);

            if (opts.header) {
                opts.header.className = ['subheader', (opts.header.className || null)].join(' ');
            }

            content = [
                opts.header ? m.component(listTile, opts.header) : null,
                opts.tiles ? opts.tiles : null
            ];

            return m(tag, props, p.embellish(content, opts));
        }
    };
});