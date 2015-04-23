define([
    'polythene/polythene/polythene',
    'mithril',
    'polythene/icon/icon',
    'css!./icon-button'
], function(
    p,
    m,
    icon
) {
    'use strict';

    return {
        view: function(ctrl, opts) {
            var defaultProps, tag, props, eventProps;
            opts = opts || {};
            defaultProps = {
                class: ['icon-button', (opts.active ? 'selected' : null), (opts.className || null)].join(' ')
            };
            tag = opts.tag || 'div';
            eventProps = p.handleEventProps(opts.events, this, ctrl);
            props = p.assign(defaultProps, eventProps, opts.props);

            return m(tag, props,
                opts.content || m.component(icon, opts.icon)
            );
        }
    };
});