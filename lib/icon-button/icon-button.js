define([
    'polythene/polythene/polythene',
    'mithril',
    'polythene/icon/icon',
    'polythene/button/button',
    'css!./icon-button'
], function(
    p,
    m,
    icon,
    button
) {
    'use strict';

    return {
        view: function(ctrl, opts) {
            opts = opts || {};
            opts.content = opts.content || m.component(icon, opts.icon);
            opts.parentClass = opts.parentClass || 'icon-button';
            opts.ink = false;
            opts.wash = false;
            return m.component(button, opts);
        }
    };
});