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

    return {
        controller: function(opts) {
            var z = m.prop(opts.z || 0);
            return {
                z: z
            };
        },
        view: function(ctrl, opts) {
            var z, defaultProps, tag, helperTag, props;
            opts = opts || {};
            z = ctrl.z();
            defaultProps = {
                class: ['paper-shadow', (opts.className || '')].join(' '),
                z: z
            };
            tag = opts.tag || 'div';
            helperTag = 'div[fit]' + (opts.animated ? '[animated]' : '');
            props = p.handleEventProps(defaultProps, opts, ctrl, this);
            p.merge(props, opts.props);

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