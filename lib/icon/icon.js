/*
Usage:

var icon = require('polythene/icon/icon');
icon({
    className: 'my-icon'
    tag: 'span'
})

Options:

    tag (optional) (String): default 'div'
    className (optional) (String): is appended to class 'icon'; if not set, and args.iconset is used, iconset is used as classname
    src: (optional) (String): icon URL (svg or png)

    All parameters for svg can be passed too:
    iconset: (optional) (String): sub-directory name inside directory 'svg'
    group: (optional) (String): sub-sub-directory
    name: (mandatory) (String): icon name (without extension)

TODO:

    alt option: Alternative text content for accessibility support. If alt is present and not empty, it will set the element's role to img and add an aria-label whose content matches alt. If alt is present and is an empty string, '', it will hide the element from the accessibility layer If alt is not present, it will set the element's role to img and the element will fallback to using the icon attribute for its aria-label.

*/

define([
    'polythene/polythene/polythene',
    'mithril',
    'polythene/svg/svg',
    'css!./icon'
], function(
    p,
    m,
    svg
) {
    'use strict';

    var component = {
        view: function(ctrl, args) {
            args = args || {};
            var className = args.className || args.iconset || '';
            if (args.src) {
                var ext = p.extension(args.src);
                if (ext.toLowerCase() === 'png') {
                    return m('img', {class: ['icon', className].join(' '), src: args.src});
                }
            }
            var args1 = (JSON.parse(JSON.stringify(args))); // copy object
            args1.tag = 'i[fit]';
            return m((args.tag || 'div'), {class: ['icon', className].join(' ')}, svg(args1));
        }
    };
    return m.component(component, arguments);
});