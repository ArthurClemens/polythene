define([
    'mithril',
    'polythene/polythene/polythene'
], function(
    m,
    p
) {
    'use strict';

    var getPath,
        cache,
        createView;

    cache = {};

    getPath = function(opts) {
        var components = ['polythene/deps/svg'];
        components.push(opts.iconset || p.iconSet);
        if (opts.group) components.push(opts.group);
        if (opts.name) components.push(opts.name);
        return components.join('/') + '.svg';
    };

    createView = function(ctrl, opts) {
        var tag, props, content;
        opts = opts || {};

        tag = opts.tag || 'div';
        props = {
            class: ['svg', opts.class].join(' '),
            config: opts.config
        };
        content = m.trust(ctrl.svg());

        return m(tag, props, p.insertContent(content, opts));
    };

    return {
        controller: function(opts) {
            var svg, path, requireUrl;

            path = opts.src ? opts.src : getPath(opts);
            requireUrl = require.toUrl(path);

            svg = (!opts.refresh && cache[requireUrl]) ? m.prop(cache[requireUrl]) : m.request({
                method: 'GET',
                url: requireUrl,
                deserialize: function(value) {
                    if (!opts.refresh) cache[requireUrl] = value;
                    m.redraw();
                    return value;
                },
                initialValue: ''
            });

            return {
                svg: svg
            };
        },
        view: function(ctrl, opts) {
            return createView(ctrl, opts);
        }
    };
});