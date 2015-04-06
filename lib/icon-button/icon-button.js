/*
Usage:

var iconButton = require('polythene/icon-button/icon-button');
iconButton({
    icon: {
        svg: {
            group: 'navigation',
            name: 'menu'
        }
        className: 'md'
    }
})

Options:

    tag (optional) (String): default 'div'
    iconClass (mandatory) (String): CSS class name from material-design-iconic-font
    clickHandler (optional) (Function): default null

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
                    class: 'icon-button',
                    onclick: (args.clickHandler || null)
                },
                icon(args.icon)
            );
        }
    };
    return m.component(component, arguments);
});