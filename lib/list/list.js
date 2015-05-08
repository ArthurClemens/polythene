define([
    'polythene/polythene/polythene',
    'mithril',
    'polythene/list-tile/list-tile',
    'css!./list'
], function(
    p,
    m,
    listTile
) {
    'use strict';

    var createView;

    createView = function(ctrl, opts) {
        var tag, props, content;
        opts = opts || {};

        tag = opts.tag || 'div';
        props = {
            class: ['list', (opts.header ? 'list-has-subheader' : null), opts.className].join(' '),
            config: opts.config
        };
        if (opts.header) {
            opts.header.className = ['subheader', (opts.header.className || null)].join(' ');
        }
        content = [
            opts.header ? m.component(listTile, opts.header) : null,
            opts.tiles ? opts.tiles : null
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