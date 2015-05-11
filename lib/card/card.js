define([
    'polythene/polythene/polythene',
    'mithril',
    'polythene/shadow/shadow',
    'polythene/list-tile/list-tile',
    'css!./card'
], function(
    p,
    m,
    shadow,
    listTile
) {
    'use strict';

    var createView;

    createView = function(ctrl, opts) {
        var tag, props, content;
        opts = opts || {};

        tag = opts.tag || 'div';
        props = {
            class: ['card', opts.class].join(' '),
            config: opts.config
        };

        content = [
            opts.header ? m('.card-header', m.component(listTile, opts.header)) : null,
            opts.media ? m('.card-media', opts.media) : null,
            opts.primary ? m('.card-primary', m.component(listTile, opts.primary)) : null,
            opts.content ? m('.card-content', opts.content) : null,
            m.component(shadow, {
                z: ctrl.z(),
                animated: true
            })
        ];
        return m(tag, props, p.insertContent(content, opts));
    };

    return {
        controller: function(opts) {
            var z = (opts.z !== undefined) ? opts.z : 1;
            return {
                view: m.prop(),
                z: m.prop(z)
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