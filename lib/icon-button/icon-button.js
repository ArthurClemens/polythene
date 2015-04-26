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
            if (opts.disabled) {
                tag += '[disabled]';
            }
            props = p.componentProps({
                classList: ['icon-button', (opts.active ? 'selected' : null)]
            }, opts, this, ctrl);

            content = [
                opts.content || m.component(icon, opts.icon),
                opts.wash !== false ? m('.wash[fit]') : null
            ];
            return m(tag, props, p.embellish(content, opts));
        }
    };
});