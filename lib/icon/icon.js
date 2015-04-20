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

    var content;

    content = function(opts) {
        if (opts.content) {
            return opts.content;
        } else if (opts.svg) {
            var svgopts = p.copy(opts.svg); // copy object
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
        view: function(ctrl, opts) {
            var tag,
                typeClass,
                attr,
                className;

            opts = opts || {};
            if (!opts.svg && !opts.src) {
                console.log('polythene/icon/icon: missing opts.src');
                return;
            }
            tag = opts.tag || 'div';
            typeClass = 'icon-' + (opts.type || 'normal');
            className = opts.className || null;
            attr = opts.attr || {};
            attr.class = ['icon', typeClass, className].join(' ');
            return m(tag, attr, content(opts));
        }
    };
});