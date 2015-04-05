/*
Usage:

var icon = require('polythene/icon/icon');
icon({
    iconClass: 'md-alarm'
    tag: 'span'
})

Options:

    tag: (optional) default 'div'
    iconClass: (required) CSS class name from material-design-iconic-font

*/

define([
    'mithril',
    'polythene/svg/svg',
    'css!./icon'
], function(
    m,
    svg
) {
    'use strict';

    var component = {
        view: function(ctrl, args) {
            args = args || {};
            var args1 = (JSON.parse(JSON.stringify(args))); // copy object
            args1.tag = 'i[fit]';
            return m((args.tag || 'div'), {class: 'icon'}, svg(args1));
        }
    };
    return m.component(component, arguments);
});