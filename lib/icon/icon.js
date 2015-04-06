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

    var component,
        content;

    content = function(args) {
        return args.svg ? (function() {
            var scvArgs = JSON.parse(JSON.stringify(args.svg)); // copy object
            scvArgs.tag = scvArgs.tag || 'i[fit]';
            return svg(scvArgs);
        }()) : (function() {
            return m('i[fit]',
                m('img', {
                    src: args.src
                })
            );
        }());
    };

    component = {
        view: function(ctrl, args) {
            var tag,
                attr,
                className;

            args = args || {};
            if (!args.svg && !args.src) {
                console.log('polythene/icon/icon: missing args.src');
                return;
            }

            tag = args.tag || 'div';
            className = args.className || '';
            attr = args.attr || {};
            attr.class = ['icon', className].join(' ');
            return m(tag, attr, content(args));
        }
    };
    return m.component(component, arguments);
});