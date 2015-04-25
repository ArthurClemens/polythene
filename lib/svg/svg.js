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
            var path = opts.src ? opts.src : getPath(opts),
                requireUrl = require.toUrl(path);

            return {
                retain: m.prop(false),

                svg: (!opts.refresh && cache[requireUrl]) ? m.prop(cache[requireUrl]) : m.request({
                    method: 'GET',
                    url: requireUrl,
                    background: false,
                    deserialize: function(value) {
                        if (!opts.refresh) cache[requireUrl] = value;
                        return value;
                    },
                    initialValue: ''
                })
            };
        },
        view: function(ctrl, opts) {
            var tag, props, content;
            opts = opts || {};

            if (!opts.src && !opts.name) {
                if (console) console.log('polythene/svg/svg: missing opts.src or opts.name');
                return;
            }

            tag = opts.tag || 'div';
            props = p.componentProps({
                classList: ['svg']
            }, opts, this, ctrl);

            content = m.trust(ctrl.svg());

            return m(tag, props, p.embellish(content, opts));
        }
    };
});