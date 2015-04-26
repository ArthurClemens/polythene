define([
    'polythene/polythene/polythene',
    'mithril',
    'polythene/icon-button/icon-button',
    'polythene/ripple/ripple',
    'polythene/shadow/shadow',
    'css!./fab'
], function(
    p,
    m,
    iconBtn,
    ripple,
    shadow
) {
    'use strict';

    return {
        view: function(ctrl, opts) {
            opts = opts || {};
            opts.className = ['fab', (opts.mini ? 'mini' : null), opts.className].join(' ');
            opts.z = (opts.z !== undefined) ? opts.z : 1;
            opts.after = opts.after || [];
            opts.after.push(m.component(ripple));
            opts.after.push(m.component(shadow, {
                z: opts.z,
                animated: opts.animated
            }));

            return m.component(iconBtn, opts);
        }
    };
});