define([
    'polythene/polythene/polythene',
    'mithril',
    'css!./paper-shadow'
], function(
    p,
    m
) {
    'use strict';

    var component = {
        controller: function(args) {
            this.z = args.z || 0;
        },
        view: function(ctrl, args) {
            args = args || {};
            var z = ctrl.z,
                props = {
                    class: ['paper-shadow', (args.className || '')].join(' '),
                    z: z
                },
                tag = args.tag || 'div';

            props = p.handleEventProps(props, args, ctrl, this);
            p.merge(props, args.props);

            return m(tag, props, [
                m('div[fit]', {
                    class: 'shadow-bottom paper-shadow-bottom-z-' + z
                }),
                m('div[fit]', {
                    class: 'shadow-top paper-shadow-top-z-' + z
                }),
                args.content ? args.content : null
            ]);
        }
    };
    return m.component(component);
});
