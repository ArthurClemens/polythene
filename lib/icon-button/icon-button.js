define([
    'polythene/polythene/polythene',
    'mithril',
    'polythene/icon/icon',
    'polythene/button/button',
    'css!./icon-button'
], function(
    p,
    m,
    icon,
    button
) {
    'use strict';

    var createView;

    createView = function(ctrl, opts) {
        opts = opts || {};
        opts.content = opts.content || m.component(icon, opts.icon);
        opts.parentClass = opts.parentClass || 'icon-button';
        opts.ink = (opts.ink !== undefined) ? opts.ink : false;
        opts.wash = (opts.wash !== undefined) ? opts.wash : false;
        return m.component(button, opts);
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