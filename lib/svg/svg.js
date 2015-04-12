/*
Usage:

var svg = require('polythene/svg/svg');
svg({
    iconset: 'mdi',
    group: 'action',
    name: 'alarm'
})

Options:

    src: (optional) (String): icon URL
    or
    iconset: (optional) (String): sub-directory name inside directory 'svg'
    group: (optional) (String): sub-sub-directory
    name: (mandatory) (String): icon filename (without extension)
    
*/

define([
    'mithril',
    'polythene/polythene/polythene'
], function(
    m,
    p
) {
    'use strict';

    var getPath;

    getPath = function(args) {
        var components = ['polythene/svg'];
        components.push(args.iconset || p.iconSet);
        components.push(args.group || null);
        components.push(args.name || null);
        return components.join('/') + '.svg';
    };

    var component = {
        controller: function(args) {
            this.svg = m.prop('');
            args = args || {};
            var path = args.src ? args.src : getPath(args),
                requirePath = 'text!' + path,
                self = this;
            require([requirePath], function(xml) {
                self.svg(xml);
                m.redraw();
            });
        },
        view: function(ctrl, args) {
            args = args || {};
            return m((args.tag || 'div'), m.trust(ctrl.svg()));
        }
    };
    return m.component(component);
});