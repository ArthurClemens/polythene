define([
    'polythene/polythene/polythene',
    'mithril',
    'polythene/svg/svg',
    'css!./icon'
], function(
    p,
    m,
    svg
) {
    'use strict';

    var createView,
        layoutContent;

    createView = function(ctrl, opts) {
        var tag, props, content;
        opts = opts || {};

        tag = opts.tag || 'div';
        props = {
            class: ['icon', 'icon-' + (opts.type || 'normal'), opts.class].join(' '),
            config: opts.config
        };
        content = [
            layoutContent(opts)
        ];
        return m(tag, props, p.insertContent(content, opts));
    };

    layoutContent = function(opts) {
        if (opts.content) {
            return opts.content;
        } else if (opts.svg) {
            var svgopts = Object.assign({}, opts.svg);
            svgopts.tag = svgopts.tag || 'i[fit]';
            return m.component(svg, svgopts);
        } else {
            return m('i[fit]',
                m('img', {
                    src: opts.src
                })
            );
        }
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