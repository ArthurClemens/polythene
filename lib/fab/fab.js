define([
    'polythene/polythene/polythene',
    'mithril',
    'polythene/icon-button/icon-button',
    'css!./fab'
], function(
    p,
    m,
    iconBtn
) {
    'use strict';

    return {
        view: function(ctrl, opts) {
            opts = opts || {};
            opts.parentClass = ['fab', (opts.mini ? 'mini' : null)].join(' ');
            opts.raised = true;
            opts.tapOpts = {
                increase: 5
            };
            return m.component(iconBtn, opts);
        }
    };
});