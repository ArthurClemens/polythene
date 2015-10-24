import m from 'mithril';
import 'polythene-theme/shadow/shadow';

const createView = (ctrl, opts = {}) => {
    const z = opts.z;
    const tag = opts.tag || 'div';
    const props = {
        class: ['shadow', opts.class].join(' '),
        config: opts.config
    };
    const helperTag = 'div.fit' + (opts.animated ? '.animated' : '');
    const content = [
        opts.content ? opts.content : null,
        m(helperTag, {
            class: 'shadow-bottom shadow-bottom-z-' + z
        }),
        m(helperTag, {
            class: 'shadow-top shadow-top-z-' + z
        })
    ];
    return m(tag, props, content);
};

const component = {
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
