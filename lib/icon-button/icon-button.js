/*
Usage:

var iconButton = require('polythene/icon-button/icon-button');
iconButton({
    iconClass: 'md-alarm'
    tag: 'span'
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
            var args1 = (JSON.parse(JSON.stringify(args))); // copy object
            return m((args1.tag || 'div'), {
                    class: 'icon-button',
                    onclick: (args1.clickHandler || null)
                },
                icon(args1)
            );
        }
    };
    return m.component(component, arguments);
});