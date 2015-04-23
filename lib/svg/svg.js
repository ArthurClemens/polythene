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
            this.svg = m.prop();
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
            var defaultProps, tag, props, eventProps;
            opts = opts || {};
            if (!opts.src && !opts.name) {
                if (console) console.log('polythene/svg/svg: missing opts.src or opts.name');
                return;
            }
            defaultProps = {
                class: ['svg', (opts.className || null)].join(' ')
            };
            tag = opts.tag || 'div';
            eventProps = p.handleEventProps(opts.events, this, ctrl);
            props = p.assign(defaultProps, eventProps, opts.props);

            return m(tag, props, m.trust(ctrl.svg()));
        }
    };
});