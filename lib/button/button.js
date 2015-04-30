define([
    'polythene/polythene/polythene',
    'mithril',
    'polythene/ripple/ripple',
    'polythene/shadow/shadow',
    'polythene/shadow/tap-fn',
    'css!./button'
], function(
    p,
    m,
    ripple,
    shadow,
    tapFn
) {
    'use strict';

    return {
        controller: function(opts) {
            return {
                baseZ: m.prop(opts.z || 1),
                z: m.prop(opts.z || 1)
            };
        },
        view: function(ctrl, opts) {
            var tag, props, content,
                noink, label;
            opts = opts || {};

            tag = opts.tag || (opts.url ? 'a' : 'div');
            noink = (opts.ink !== undefined && !opts.ink);

            if (opts.disabled) {
                tag += '[disabled]';
            }
            if (noink) {
                tag += '[noink]';
            }
            if (opts.raised) {
                tag += '[raised]';
            }

            props = p.componentProps({
                classList: [opts.parentClass || 'button'],
                props: p.assign(tapFn(ctrl), (opts.url ? opts.url : null))
            }, opts, this, ctrl);

            label = null;
            if (opts.label) {
                label = m('span', opts.label);
            }
            if (opts.content) {
                label = opts.content;
            }

            content = [
                m('div', {
                    class: 'content'
                }, [
                    label,
                    noink ? null : m.component(ripple),
                    (opts.wash !== undefined && !opts.wash) ? null : m('.wash[fit]'),
                    (opts.raised && !opts.disabled) ? m.component(shadow, {
                        z: ctrl.z(),
                        animated: true
                    }) : null
                ])
            ];

            return m(tag, props, p.embellish(content, opts));
        }
    };
});