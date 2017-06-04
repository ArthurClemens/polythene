import '../common/object.assign';
import m from 'mithril';
import textfield from '../textfield/textfield';
import './theme/theme';

const CSS_CLASSES = {
    block: 'pe-search',
    content: 'pe-search__content',
    searchInset: 'pe-search--inset',
    searchFullwidth: 'pe-search--fullwidth'
};

const mapButtonState = (state = {}) => {
    if (state.focus && state.dirty) {
        return 'focus_dirty';
    } else if (state.focus) {
        return 'focus';
    } else if (state.dirty) {
        return 'dirty';
    }
    return 'none';
};

const typeClasses = {
    inset: CSS_CLASSES.searchInset,
    fullwidth: CSS_CLASSES.searchFullwidth
};

const classForType = (mode = 'inset') => {
    return typeClasses[mode];
};

const createView = (ctrl, opts = {}) => {
    const tag = opts.tag || 'div';
    const props = Object.assign({},
        {
            class: [
                CSS_CLASSES.block,
                classForType(opts.type),
                opts.class
            ].join(' '),
            id: opts.id || '',
            config: opts.config
        },
        opts.events ? opts.events : null
    );
    const state = mapButtonState(ctrl.state());
    const buttons = (opts.buttons || {})[state] || {};
    const textfieldOpts = opts.textfield || {};
    const content = m('div', {
        class: CSS_CLASSES.content
    }, [
        buttons.before ? buttons.before : null,
        m(textfield, Object.assign({}, textfieldOpts, {
            getState: (state) => {
                ctrl.state(state);
                if (textfieldOpts.getState) {
                    textfieldOpts.getState(state);
                }
            }
        })),
        buttons.after ? buttons.after : null
    ]);
    return m(tag, props, [opts.before, content, opts.after]);
};

const component = {
    controller: () => {
        const state = m.prop();
        return {
            state
        };
    },
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
