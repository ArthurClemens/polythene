/*
Usage:

var svg = require('polythene/svg/svg');
svg({
    iconset: 'mdi',
    group: 'action',
    name: 'alarm'
})

Options:

    iconset: (optional) (String): sub-directory name inside directory 'svg'
    group: (optional) (String): sub-sub-directory
    name: (mandatory) (String): icon name (without extension)

CSS:

The <svg> is wrapped inside an <i>, which class will be the name of the iconset.
This can be used to target the SVG styling, dependent on the inner styling of SVGs.
For example:

    .icon i.material-design-iconic-font svg {
        fill: orange;
    }
    .icon i.mdi svg path {
        fill: orange;
    }
*/

define([
    'mithril'
], function(
    m
) {
    'use strict';

    var component = {
        controller: function(args) {
            this.svg = m.prop('');
            args = args || {};
            var iconset = args.iconset || 'material-design-iconic-font',
                subpath = args.group ? [args.group, args.name].join('/') : args.name,
                path = ['polythene/svg', iconset, subpath].join('/') + '.svg',
                requirePath = 'text!' + path,
                self = this;
            require([requirePath], function(xml) {
                self.svg(xml);
                m.redraw();
            });
        },
        view: function(ctrl, args) {
            args = args || {};
            var iconset = args.iconset || 'material-design-iconic-font';
            return m((args.tag || 'div'), {class: iconset}, m.trust(ctrl.svg()));
        }
    };
    return m.component(component, arguments);
});