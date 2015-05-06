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

    createView = function (ctrl, opts) {
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
    };

    return {
        controller: function() {
            return {
                view: m.prop()
            };
        },
        view: function(ctrl, opts) {
            opts = opts || {};
            var view = ctrl.view();
            if (!view || opts.refresh) {
                view = createView(ctrl, opts);
                ctrl.view(view);
            }
            return view;
        }
    };
});