define([
    'polythene/polythene/polythene',
    'mithril',
    'css!./shadow'
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
                class: ['shadow', (opts.className || null)].join(' '),
                z: z
            };
            tag = opts.tag || 'div';
            helperTag = 'div[fit]' + (opts.animated ? '[animated]' : null);
            eventProps = p.handleEventProps(opts.events, this, ctrl);
            props = p.assign(defaultProps, eventProps, opts.props);

            return m(tag, props, [
                m(helperTag, {
                    class: 'shadow-bottom shadow-bottom-z-' + z
                }),
                m(helperTag, {
                    class: 'shadow-top shadow-top-z-' + z
                }),
                opts.content ? opts.content : null
            ]);
        }
    };
});