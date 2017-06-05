import m from 'mithril';
import './theme';

const CSS_CLASSES = {
    block: 'pe-toolbar',
    bar: 'pe-toolbar__bar',
    topBar: 'pe-toolbar__bar--top',
    middleBar: 'pe-toolbar__bar--middle',
    bottomBar: 'pe-toolbar__bar--bottom',
    animated: 'pe-header--animated',
    mediumTall: 'pe-header--medium-tall',
    tall: 'pe-header--tall'
};

const barWrapper = (className, content) => {
    return m('div', {
        class: [CSS_CLASSES.bar, className].join(' ')
    }, content);
};

const bar = (opts = {}) => {
    const bars = [];
    if (opts.content) {
        bars.push(barWrapper(CSS_CLASSES.topBar, opts.content));
    } else {
        if (opts.topBar) {
            bars.push(barWrapper(CSS_CLASSES.topBar, opts.topBar));
        }
        if (opts.middleBar) {
            bars.push(barWrapper(CSS_CLASSES.middleBar, opts.middleBar));
        }
        if (opts.bottomBar) {
            bars.push(barWrapper(CSS_CLASSES.bottomBar, opts.bottomBar));
        }
    }
    return bars;
};

const modeClasses = {
    'medium-tall': CSS_CLASSES.mediumTall,
    tall: CSS_CLASSES.tall
};

const classForMode = (mode = 'standard') => {
    return mode === 'standard' ? '' : modeClasses[mode];
};

const createView = (ctrl, opts = {}) => {
    const tag = opts.tag || 'div';
    const props = {
        class: [CSS_CLASSES.block, CSS_CLASSES.animated, classForMode(opts.mode), opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    };
    const content = bar(opts);
    return m(tag, props, [opts.before, content, opts.after]);
};

const component = {
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
