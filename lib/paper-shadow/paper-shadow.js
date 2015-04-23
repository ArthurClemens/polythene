define([
    'polythene/polythene/polythene',
    'mithril',
    'css!./paper-shadow'
], function(
    p,
    m
) {
    'use strict';

    return {
        controller: function(opts) {
            var z = m.prop(opts.z || 0);
            return {
                z: z
            };
        },
        view: function(ctrl, opts) {
            var z, defaultProps, tag, helperTag, eventProps, props;
            opts = opts || {};
            z = ctrl.z();
            defaultProps = {
                class: ['paper-shadow', (opts.className || '')].join(' '),
                z: z
            };
            tag = opts.tag || 'div';
            helperTag = 'div[fit]' + (opts.animated ? '[animated]' : '');
            eventProps = p.handleEventProps(opts.events, this, ctrl);
            props = p.assign(defaultProps, eventProps, opts.props);

            return m(tag, props, [
                m(helperTag, {
                    class: 'shadow-bottom paper-shadow-bottom-z-' + z
                }),
                m(helperTag, {
                    class: 'shadow-top paper-shadow-top-z-' + z
                }),
                opts.content ? opts.content : null
            ]);
        }
    };
});