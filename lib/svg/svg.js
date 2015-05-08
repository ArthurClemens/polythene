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
        var components = ['polythene/svg'];
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
            class: ['svg', opts.className].join(' '),
            config: opts.config
        };
        content = m.trust(ctrl.svg());

        return m(tag, props, p.embellish(content, opts));
    };

    return {
        controller: function(opts) {
            var ctrl, view, path, requireUrl;

            ctrl = this;
            view = m.prop();
            path = opts.src ? opts.src : getPath(opts);
            requireUrl = require.toUrl(path);

            return {
                view: view,
                svg: (!opts.refresh && cache[requireUrl]) ? m.prop(cache[requireUrl]) : m.request({
                    method: 'GET',
                    url: requireUrl,
                    background: true,
                    deserialize: function(value) {
                        if (!opts.refresh) cache[requireUrl] = value;
                        m.redraw();
                        view(null);
                        return value;
                    },
                    initialValue: ''
                })
            };
        },
        view: function(ctrl, opts) {
            opts = opts || {};
            var view = ctrl.view();
            if (!view || opts.refresh) {
                view = createView(ctrl, opts);
                ctrl.view(view);
            }
            return view;
        }
    };
});