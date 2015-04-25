define([
    'polythene/polythene/polythene',
    'mithril',
    'polythene/icon/icon',
    'css!./icon-button'
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

            tag = opts.tag || 'div';
            props = p.componentProps({
                classList: ['icon-button', (opts.active ? 'selected' : null)]
            }, opts, this, ctrl);

            content = [
                opts.content || m.component(icon, opts.icon)
            ];
            return m(tag, props, p.embellish(content, opts));
        }
    };
});