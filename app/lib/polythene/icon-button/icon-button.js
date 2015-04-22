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
            var defaultProps, tag, props;
            opts = opts || {};
            defaultProps = {
                class: ['icon-button', (opts.active ? 'selected' : ''), (opts.className || '')].join(' ')
            };
            tag = opts.tag || 'div';
            props = p.handleEventProps(defaultProps, opts, ctrl, this);
            p.merge(props, opts.props);

            return m(tag, props,
                opts.content || m.component(icon, opts.icon)
            );
        }
    };
});