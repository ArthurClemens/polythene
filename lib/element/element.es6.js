import p from 'polythene/polythene/polythene';
import m from 'mithril';
require('polythene-theme/element/element');

const createView = (ctrl, opts = {}) => {
    const tag = opts.tag || 'div';
    const props = {
        class: ['element', opts.class].join(' '),
        config: opts.config
    };
    const content = [
        opts.content ? opts.content : null
    ];
    return m(tag, props, p.insertContent(content, opts));
};

const component = {
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
