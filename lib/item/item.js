define([
    'polythene/polythene/polythene',
    'mithril',
    'polythene/icon/icon',
    'css!./item'
], function(
    p,
    m,
    icon
) {
    'use strict';

    var createView;

    createView = function(ctrl, opts) {
        var tag, props, content;
        opts = opts || {};

        tag = opts.tag || 'div[center][horizontal][layout]';
        props = {
            class: ['item', opts.class].join(' '),
            config: opts.config
        };
        content = [
            opts.icon ? m.component(icon, opts.icon) : null,
            opts.label ? m('div', opts.label) : null,
            opts.content ? opts.content : null
        ];
        return m(tag, props, p.insertContent(content, opts));
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