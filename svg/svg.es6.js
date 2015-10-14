import p from 'polythene/polythene/polythene';
import m from 'mithril';
import 'polythene-theme/svg/svg';

const PLUGIN_EXTENSION = '!text';

let globalCache = {};

const getPath = (opts = {}) => {
    let components = [];
    if (opts.iconSet) {
        components.push(opts.iconSet);
    }
    if (opts.group) {
        components.push(opts.group);
    }
    if (opts.name) {
        components.push(opts.name);
    }
    return components.join('/') + '.svg';
};

const createView = (ctrl, opts = {}) => {
    let content, svg;
    const tag = opts.tag || 'div';
    const props = {
        class: ['svg', opts.class].join(' '),
        config: opts.config
    };
    const path = opts.src ? opts.src : getPath(opts);
    if (ctrl.path() !== path) {
        svg = globalCache[path];
        if (svg) {
            content = m.trust(svg);
            preloadNext(ctrl);
        } else {
            // load new, then wait until file has been loaded
            ctrl.path(path);
            loadSvg(path, ctrl);
        }
    } else {
        svg = ctrl.svg();
        svg = svg || '';
        content = m.trust(svg);
        preloadNext(ctrl);
    }
    return m(tag, props, p.insertContent(content, opts));
};

const loadSvg = (path, ctrl, preload = false) => {
    const requireUrl = path + PLUGIN_EXTENSION;
    const deferred = m.deferred();
    System.import(requireUrl).then(function(data) {
        deferred.resolve(data);
        if (preload) {
            globalCache[path] = data;
            ctrl.preloadingIndex++;
        } else {
            ctrl.svg(data);
            m.redraw();
        }
    });
};

const preloadNext = (ctrl) => {
    if (!ctrl.preloadingItems) {
        return;
    }
    if (ctrl.preloadingIndex >= ctrl.preloadingItems.length) {
        return;
    }
    const next = ctrl.preloadingItems[ctrl.preloadingIndex];
    const path = next.src ? next.src : getPath(next);
    if (globalCache[path]) {
        return;
    }
    loadSvg(path, ctrl, true);
};

const component = {
    controller: (opts = {}) => {
        return {
            path: m.prop(''),
            svg: m.prop(''),
            preloadingItems: opts.preload,
            preloadingIndex: 0
        };
    },
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
