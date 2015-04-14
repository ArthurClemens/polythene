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
    className (optional) (String): extra CSS class appended to 'icon'
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

    var content;

    content = function(opts) {
        if (opts.content) {
            return opts.content;
        } else if (opts.svg) {
            var svgopts = JSON.parse(JSON.stringify(opts.svg)); // copy object
            svgopts.tag = svgopts.tag || 'i[fit]';
            return m.component(svg, svgopts);
        } else {
            return m('i[fit]',
                m('img', {
                    src: opts.src
                })
            );
        }
    };

    return {
        view: function(ctrl, opts) {
            var tag,
                attr,
                className;

            opts = opts || {};
            if (!opts.svg && !opts.src) {
                console.log('polythene/icon/icon: missing opts.src');
                return;
            }
            tag = opts.tag || 'div';
            className = opts.className || null;
            attr = opts.attr || {};
            attr.class = ['icon', className].join(' ');
            return m(tag, attr, content(opts));
        }
    };
});