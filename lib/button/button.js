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

    var MAX_Z,
        raise,
        lower;

    MAX_Z = 5;

    raise = function(ctrl) {
        var z = ctrl.z();
        z = Math.min(++z, MAX_Z);
        ctrl.z(z);
    };
    lower = function(ctrl) {
        var z = ctrl.z();
        z = Math.max(--z, 0);
        ctrl.z(z);
    };

    return {
        controller: function(opts) {
            var restStateZ,
                ctrl;
            ctrl = this;
            restStateZ = opts.z || 1;
            return {
                z: m.prop(restStateZ)
            };
        },
        view: function(ctrl, opts) {
            var tag, props, content,
                noink;
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
                classList: ['button'],
                props: p.assign({
                    onmousedown: function() {
                        raise(ctrl);
                    },
                    onmouseup: function() {
                        lower(ctrl);
                    }
                }, (opts.url ? opts.url : null))
            }, opts, this, ctrl);

            content = [
                m('div', {
                    class: 'content'
                }, [
                    opts.label ? m('span', opts.label) : null,
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