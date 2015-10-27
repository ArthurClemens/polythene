import p from 'polythene/polythene/polythene';
import m from 'mithril';
import 'polythene-theme/svg/svg';

let globalCache = {};

const createView = (ctrl, opts = {}) => {
    let content, svg;
    const tag = opts.tag || 'div';
    const props = {
        class: ['svg', opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    };
    if (opts.content) {
        content = opts.content;
    } else {
        const path = opts.src;
        if (ctrl.path() !== path) {
            // not the current svg
            svg = globalCache[path];
            if (svg) {
                // exists in cache
                content = m.trust(svg);
                preloadNext(ctrl, opts);
            } else {
                // load new, then wait until file has been loaded
                ctrl.path(path);
                loadSvg(path, ctrl, opts);
            }
        } else {
            // use the current svg
            svg = ctrl.svg();
            svg = svg || '';
            content = m.trust(svg);
            preloadNext(ctrl, opts);
        }
    }
    return m(tag, props, p.insertContent(content, opts));
};

const loadSvg = (path, ctrl, opts, preloading = false) => {
    if (System && System.import) {
        const normalizedName = System.normalizeSync(path);
        const deferred = m.deferred();
        System.import(normalizedName).then(function(data) {
            deferred.resolve(data);
            if (preloading) {
                globalCache[path] = data;
                ctrl.preloadingIndex++;
                preloadNext(ctrl, opts);
            } else {
                ctrl.svg(data);
                m.redraw();
            }
        });
    } else {
        if (console) {
            console.log('polythene/svg: System not found.');
        }
    }
};

const preloadNext = (ctrl, opts) => {
    if (!ctrl.preloadingItems) {
        return;
    }
    if (ctrl.preloadingIndex >= ctrl.preloadingItems.length) {
        return;
    }
    const next = ctrl.preloadingItems[ctrl.preloadingIndex];
    if (!globalCache[next]) {
        loadSvg(next, ctrl, opts, true);
    } else {
        ctrl.preloadingIndex++;
        preloadNext(ctrl, opts);
    }
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
