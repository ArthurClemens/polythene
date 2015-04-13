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
            var _z = m.prop(args.z || 0);
            return {
                z: _z
            };
        },
        view: function(ctrl, args) {
            args = args || {};
            var z = ctrl.z(),
                defaultProps = {
                    class: ['paper-shadow', (args.className || '')].join(' '),
                    z: z
                },
                tag = args.tag || 'div',
                helperTag = 'div[fit]' + (args.animated ? '[animated]' : ''),
                props;

            props = p.handleEventProps(defaultProps, args, ctrl, this);
            p.merge(props, args.props);

            return m(tag, props, [
                m(helperTag, {
                    class: 'shadow-bottom paper-shadow-bottom-z-' + z
                }),
                m(helperTag, {
                    class: 'shadow-top paper-shadow-top-z-' + z
                }),
                args.content ? args.content : null
            ]);
        }
    };
    return m.component(component);
});