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
        if (!opts.svg && !opts.src) {
            if (console) console.log('polythene/icon/icon: missing opts.src or opts.svg');
            return;
        }

        tag = opts.tag || 'div';
        props = p.componentProps({
            classList: ['icon', 'icon-' + (opts.type || 'normal')]
        }, opts, this, ctrl);
        
        content = [
            layoutContent(opts)
        ];
        return m(tag, props, p.embellish(content, opts));
    };

    layoutContent = function(opts) {
        if (opts.content) {
            return opts.content;
        } else if (opts.svg) {
            var svgopts = p.assign({}, opts.svg);
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
            var view = ctrl.view();
            if (!view || opts.refresh) {
                view = createView(ctrl, opts);
                ctrl.view(view);
            }
            return view;
        }
    };
});