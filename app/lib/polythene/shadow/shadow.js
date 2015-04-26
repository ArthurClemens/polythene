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
        view: function(ctrl, opts) {
            var tag, props, content,
                helperTag,
                z;

            opts = opts || {};
            z = opts.z;

            tag = opts.tag || 'div[fit]';
            props = p.componentProps({
                classList: ['shadow'],
            }, opts, this, ctrl);

            helperTag = 'div[fit]' + (opts.animated ? '[animated]' : null);
            content = [
                opts.content ? opts.content : null,
                m(helperTag, {
                    class: 'shadow-bottom shadow-bottom-z-' + z
                }),
                m(helperTag, {
                    class: 'shadow-top shadow-top-z-' + z
                })
            ];

            return m(tag, props, content);
        }
    };
});