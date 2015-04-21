/*
Usage:

var iconButton = require('polythene/icon-button/icon-button');
m.component(iconButton, {
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
    className (optional) (String): extra CSS class appended to 'icon-button'
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

    return {
        view: function(ctrl, opts) {
            opts = opts || {};
            return m((opts.tag || 'div'), {
                    class: ['icon-button', opts.className || null].join(' '),
                    onclick: (opts.clickHandler || null)
                },
                opts.content || m.component(icon, opts.icon)
            );
        }
    };
});