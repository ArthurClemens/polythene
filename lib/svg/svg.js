/*
Usage:

var svg = require('polythene/svg/svg');
m.component(svg, {
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

    var getPath,
        cache;

    getPath = function(opts) {
        var components = ['polythene/svg'];
        components.push(opts.iconset || p.iconSet);
        if (opts.group) components.push(opts.group);
        if (opts.name) components.push(opts.name);
        return components.join('/') + '.svg';
    };

    cache = {};

    return {
        controller: function(opts) {
            this.svg = m.prop('');
            opts = opts || {};
            var path = opts.src ? opts.src : getPath(opts),
                requirePath = 'text!' + path,
                self = this;
            if (!opts.refresh && cache[requirePath]) {
                this.svg(cache[requirePath]);
            } else {
                m.startComputation();
                require([requirePath], function(xml) {
                    self.svg(xml);
                    if (!opts.refresh) cache[requirePath] = xml;
                    m.endComputation();
                });
            }
        },
        view: function(ctrl, opts) {
            opts = opts || {};
            return m((opts.tag || 'div'), m.trust(ctrl.svg()));
        }
    };
});