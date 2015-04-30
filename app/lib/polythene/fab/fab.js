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
            opts.ripple = {
                center: true,
                opacityDecayVelocity: .24
            };
            opts.shadow = {
                increase: 5
            };
            opts.ink = true;
            opts.wash = true;
            return m.component(iconBtn, opts);
        }
    };
});