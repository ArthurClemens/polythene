define([
    'polythene/polythene/polythene',
    'mithril',
    'css!./shadow'
], function(
    p,
    m
) {
    'use strict';

    return {
        controller: function(opts) {
            var z = m.prop(opts.z || 0);
            return {
                z: z
            };
        },
        view: function(ctrl, opts) {
            var tag, props, content,
                helperTag,
                z;

            opts = opts || {};
            z = ctrl.z();

            tag = opts.tag || 'div';
            props = p.componentProps({
                classList: ['shadow'],
                z: z
            }, opts, this, ctrl);

            helperTag = 'div[fit]' + (opts.animated ? '[animated]' : null);
            content = [
                m(helperTag, {
                    class: 'shadow-bottom shadow-bottom-z-' + z
                }),
                m(helperTag, {
                    class: 'shadow-top shadow-top-z-' + z
                }),
                opts.content ? opts.content : null
            ];

            return m(tag, props, content);
        }
    };
});