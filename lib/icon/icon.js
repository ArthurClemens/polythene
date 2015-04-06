/*
Usage:

var icon = require('polythene/icon/icon');
icon({
    className: 'my-icon'
    tag: 'span',
    svg: {}
})

Options:

    tag (optional) (String): default 'div'
    className (optional) (String): is appended to class 'icon'
    src (optional) (String): icon URL (for PNG only; for SVG pass this in the svg object)
    svg (Object): parameters for svg

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
        if (args.content) {
            return args.content;
        } else if (args.svg) {
            var svgArgs = JSON.parse(JSON.stringify(args.svg)); // copy object
            svgArgs.tag = svgArgs.tag || 'i[fit]';
            return svg(svgArgs);
        } else {
            return m('i[fit]',
                m('img', {
                    src: args.src
                })
            );
        }
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
            className = args.className || null;
            attr = args.attr || {};
            attr.class = ['icon', className].join(' ');
            return m(tag, attr, content(args));
        }
    };
    return m.component(component, arguments);
});