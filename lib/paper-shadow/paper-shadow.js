/*
Usage:

var paperShadow = require('polythene/paper-shadow/paper-shadow');
paperShadow({
    z: 1,
    content: 'z=1',
    animated: true
})

Options:

    tag (optional) (String): default 'div'
    className (optional) (String): extra CSS class appended to 'icon-button'
    props
    events
    z (optional) (Number 0-5): the z-depth of the shadow
    animated (optional) (Boolean): set this to true to animate the shadow when setting a new `z` value
    content
*/

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
                tag = args.tag || 'div',
                animatedTag = args.animated ? '[animated]' : '';

            props = p.handleEventProps(props, args, ctrl, this);
            p.merge(props, args.props);

            return m(tag, props, [
                m('div[fit]' + animatedTag, {
                    class: 'shadow-bottom paper-shadow-bottom-z-' + z
                }),
                m('div[fit]' + animatedTag, {
                    class: 'shadow-top paper-shadow-top-z-' + z
                }),
                args.content ? args.content : null
            ]);
        }
    };
    return m.component(component);
});
