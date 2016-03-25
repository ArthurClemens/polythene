import 'polythene/common/object.assign';
import m from 'mithril';
import 'polythene/element/theme/theme';

const createView = (ctrl, opts = {}) => {
    const tag = opts.tag || 'div';
    const props = Object.assign({},
        {
            class: ['element', opts.class].join(' '),
            id: opts.id || '',
            config: opts.config
        },
        opts.events ? opts.events : null
    );
    const content = [
        opts.content ? opts.content : null
    ];
    return m(tag, props, [opts.before, content, opts.after]);
};

const component = {
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
