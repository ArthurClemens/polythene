define([
    'polythene/polythene/polythene',
    'mithril',
    'polythene/icon-button/icon-button',
    'css!./fab'
], function(
    p,
    m,
    iconBtn
) {
    'use strict';

    var createView;

    createView = function(ctrl, opts) {
        opts = opts || {};
        opts.parentClass = ['fab', (opts.mini ? 'mini' : null)].join(' ');
        opts.raised = true;
        opts.ripple = {
            center: true,
            opacityDecayVelocity: 0.24
        };
        opts.shadow = {
            increase: 5
        };
        opts.ink = true;
        opts.wash = true;
        return m.component(iconBtn, opts);
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