define([
    'polythene/polythene/polythene',
    'mithril',
    'polythene/ripple/ripple',
    'polythene/shadow/shadow',
    'css!./button'
], function(
    p,
    m,
    ripple,
    shadow
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
            if (opts.noink) {
                tag += '[noink]';
            }
            if (opts.raised) {
                tag += '[raised]';
            }
            props = p.componentProps({
                classList: ['button']
            }, opts, this, ctrl);

            content = [
                m('div', {class: 'content'}, [
                    //opts.icon ? m.component(icon, opts.icon) : null,
                    opts.label ? m('span', opts.label) : null,
                    opts.noink ? null : m.component(ripple),
                    opts.nowash ? null : m('.wash[fit]'),
                    (opts.raised && !opts.disabled) ? m.component(shadow, {
                        z: (opts.z !== undefined) ? opts.z : 1,
                        animated: opts.animated
                    }) : null
                ])
            ];

            return m(tag, props, p.embellish(content, opts));
        }
    };
});