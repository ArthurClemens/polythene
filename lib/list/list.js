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
        var listModeClass, tag, props, content, headerOpts;
        opts = opts || {};

        tag = opts.tag || 'div';
        // create class for mode 'bordered' and 'bordered-indent'
        listModeClass = opts.mode ? opts.mode : null;

        props = {
            class: ['list', listModeClass, (opts.hoverable ? 'hoverable' : null), (opts.header ? 'has-subheader' : null), opts.class].join(' '),
            config: opts.config
        };

        if (opts.header) {
            headerOpts = Object.assign({}, opts.header);
            headerOpts.class = ['subheader', (headerOpts.class || null)].join(' ');
        }
        content = [
            headerOpts ? m.component(listTile, headerOpts) : null,
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