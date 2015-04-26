define([
    'polythene/polythene/polythene',
    'mithril',
    'polythene/icon/icon',
    'polythene/ripple/ripple',
    'polythene/shadow/shadow',
    'css!./fab'
], function(
    p,
    m,
    icon,
    ripple,
    shadow
) {
    'use strict';

    return {
        view: function(ctrl, opts) {
            opts = opts || {};
            opts.className = ['fab', (opts.mini ? 'mini' : null), opts.className].join(' ');
            opts.z = (opts.z !== undefined) ? opts.z : 1;
            opts.content = m.component(icon, opts.icon);
            opts.after = m.component(ripple, opts.ripple);

            return m.component(shadow, opts);
        }
    };
});