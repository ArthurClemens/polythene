/*
Usage:

var iconButton = require('polythene/icon-button/icon-button');
iconButton({
    icon: {
        className: 'md',
        svg: {
            group: 'navigation',
            name: 'menu'
        }
    }
})

Options:

    tag (optional) (String): default 'div'
    className (optional) (String): is appended to class 'icon-button'
    clickHandler (optional) (Function): default null
    icon (mandatory) (Object): parameters for icon
    content
*/

define([
    'mithril',
    'polythene/icon/icon',
    'css!./icon-button'
], function(
    m,
    icon
) {
    'use strict';

    var component = {
        view: function(ctrl, args) {
            args = args || {};
            return m((args.tag || 'div'), {
                    class: ['icon-button', args.className || null].join(' '),
                    onclick: (args.clickHandler || null)
                },
                args.content || icon(args.icon)
            );
        }
    };
    return m.component(component, arguments);
});