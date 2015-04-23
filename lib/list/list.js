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

    return {
        view: function(ctrl, opts) {
            var defaultProps, tag, props, eventProps;
            opts = opts || {};
            
            defaultProps = {
                class: ['list', (opts.header ? 'list-has-subheader' : null), (opts.className || null)].join(' ')
            };
            tag = opts.tag || 'div';
            eventProps = p.handleEventProps(opts.events, this, ctrl);
            props = p.assign(defaultProps, eventProps, opts.props);

            if (opts.header) {
                opts.header.className = ['subheader', (opts.header.className || null)].join(' ');
            }

            return m(tag, props, [
                opts.header ? m.component(listTile, opts.header) : null,
                opts.tiles ? opts.tiles : null
            ]);
        }
    };
});