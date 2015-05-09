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
        var listModeClass, tag, props, content;
        opts = opts || {};

        tag = opts.tag || 'div';
        // create class for mode 'bordered' and 'bordered-indent'
        listModeClass = opts.mode ? opts.mode : null;

        props = {
            class: ['list', listModeClass, (opts.header ? 'list-has-subheader' : null), opts.class].join(' '),
            config: opts.config
        };
        if (opts.header) {
            opts.header.class = ['subheader', (opts.header.class || null)].join(' ');
        }
        content = [
            opts.header ? m.component(listTile, opts.header) : null,
            opts.tiles ? opts.tiles : null
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