define([
    'polythene/polythene/polythene',
    'mithril'
], function(
    p,
    m
) {
    'use strict';

    var createView;

    createView = function(ctrl, opts) {
        var tag, props, content;
        opts = opts || {};

        tag = opts.tag || 'div';
        props = p.componentProps({}, opts, this, ctrl);

        content = [
            opts.content ? opts.content : null
        ];
        return m(tag, props, p.embellish(content, opts));
    };

    return {
        controller: function() {
            return {
                view: m.prop()
            };
        },
        view: function(ctrl, opts) {
            var view = ctrl.view();
            if (!view || opts.refresh) {
                view = createView(ctrl, opts);
                ctrl.view(view);
            }
            return view;
        }
    };
});