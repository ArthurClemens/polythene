import '../common/object.assign';
import m from 'mithril';
import './theme/theme';

const CSS_CLASSES = {
    block: 'pe-svg'
};

const createView = (ctrl, opts = {}) => {
    const tag = opts.tag || 'div';
    const props = Object.assign({},
        {
            class: [CSS_CLASSES.block, opts.class].join(' '),
            id: opts.id || '',
            config: opts.config
        },
        opts.events ? opts.events : null
    );
    const content = opts.content;
    return m(tag, props, [opts.before, content, opts.after]);
};

const component = {
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
