import 'polythene/common/object.assign';
import m from 'mithril';
import 'polythene/svg/theme/theme';

const CSS_CLASSES = {
    block: 'pe-svg'
};

const globalCache = {};

const createView = (ctrl, opts = {}) => {
    let content, svg;
    const tag = opts.tag || 'div';
    const props = Object.assign({},
        {
            class: [CSS_CLASSES.block, opts.class].join(' '),
            id: opts.id || '',
            config: opts.config
        },
        opts.events ? opts.events : null
    );
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
                loadSvg(path, ctrl, opts).then(m.redraw);
            }
        } else {
            // use the current svg
            svg = ctrl.svg();
            svg = svg || '';
            content = m.trust(svg);
            preloadNext(ctrl, opts);
        }
    }
    return m(tag, props, [opts.before, content, opts.after]);
};

const loadSvg = (path, ctrl, opts, preloading = false) => {
    if (typeof System !== "undefined" && System.import) {
        const normalizedName = System.normalizeSync(path);
        return System.import(normalizedName).then(function(data) {
            if (preloading) {
                globalCache[path] = data;
                ctrl.preloadingIndex++;
                preloadNext(ctrl, opts);
            } else {
                ctrl.svg(data);
            }
        });
    } else {
        if (typeof console !== "undefined" && console.log) {
            console.log('polythene/svg: System not found.');
        }
        return {
            then: function(){
                if (typeof console !== "undefined" && console.log) {
                    console.log('polythene/svg: System not found.');
                }
            }
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
        m.redraw.strategy('none');
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
