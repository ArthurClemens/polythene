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

    getPath = function(opts) {
        var components = ['polythene/svg'];
        components.push(opts.iconset || p.iconSet);
        components.push(opts.group || null);
        components.push(opts.name || null);
        return components.join('/') + '.svg';
    };

    return {
        controller: function(opts) {
            this.svg = m.prop('');
            opts = opts || {};
            var path = opts.src ? opts.src : getPath(opts),
                requirePath = 'text!' + path,
                self = this;
            require([requirePath], function(xml) {
                self.svg(xml);
                m.redraw();
            });
        },
        view: function(ctrl, opts) {
            opts = opts || {};
            return m((opts.tag || 'div'), m.trust(ctrl.svg()));
        }
    };
});