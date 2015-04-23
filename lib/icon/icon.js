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
        view: function(ctrl, opts) {
            var defaultProps, tag, props, eventProps;
            opts = opts || {};
            if (!opts.svg && !opts.src) {
                if (console) console.log('polythene/icon/icon: missing opts.src or opts.svg');
                return;
            }
            defaultProps = {
                class: ['icon', 'icon-' + (opts.type || 'normal'), (opts.className || '')].join(' ')
            };
            tag = opts.tag || 'div';
            eventProps = p.handleEventProps(opts.events, this, ctrl);
            props = p.assign(defaultProps, eventProps, opts.props);

            return m(tag, props, content(opts));
        }
    };
});