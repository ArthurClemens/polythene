import p from 'polythene/polythene/polythene';
import m from 'mithril';
import 'polythene-theme/toolbar/toolbar';

const barWrapper = (className, content) => {
    return m('div.center.horizontal.layout', {
        class: ['toolbar-tools', className].join(' ')
    }, content);
};

const bar = (opts = {}) => {
    let bars = [];
    if (opts.content) {
        bars.push(barWrapper('topBar', opts.content));
    } else {
        if (opts.topBar) {
            bars.push(barWrapper('topBar', opts.topBar));
        }
        if (opts.middleBar) {
            bars.push(barWrapper('middleBar', opts.middleBar));
        }
        if (opts.bottomBar) {
            bars.push(barWrapper('bottomBar', opts.bottomBar));
        }
    }
    return bars;
};

const createView = (ctrl, opts = {}) => {
    const tag = opts.tag || 'div';
    const props = {
        class: ['toolbar', 'animate', (opts.mode || 'standard'), opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    };
    const content = bar(opts);
    return m(tag, props, p.insertContent(content, opts));
};

const component = {
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
