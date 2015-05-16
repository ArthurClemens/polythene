define([
    'polythene/polythene/polythene',
    'mithril',
    'css!./shadow'
], function(
    p,
    m
) {
    'use strict';

    var createView;

    createView = function(ctrl, opts) {
        var tag, props, content,
            helperTag,
            z;

        opts = opts || {};
        z = opts.z;

        tag = opts.tag || 'div[fit]';
        props = {
            class: ['shadow', opts.class].join(' '),
            config: opts.config
        };
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
    };

    return {
        controller: function() {
            return {
                view: m.prop()
            };
        },
        view: function(ctrl, opts) {
            var view;
            opts = opts || {};
            view = ctrl.view();
            if (view && opts.cache) {
                return view;
            }
            view = createView(ctrl, opts);
            if (opts.cache) ctrl.view(view);
            return view;
        }
    };
});