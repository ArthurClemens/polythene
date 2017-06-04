import '../common/object.assign';
import m from 'mithril';
import './theme';

const CSS_CLASSES = {
    block: 'pe-control',
    label: 'pe-control__label',
    input: 'pe-control__input',
    box: 'pe-control__box',
    on: 'pe-control--on',
    off: 'pe-control--off',
    disabled: 'pe-control--disabled',
    inactive: 'pe-control--inactive',
    small: 'pe-control--small',
    regular: 'pe-control--regular',
    medium: 'pe-control--medium',
    large: 'pe-control--large'
};

const typeClasses = {
    small: CSS_CLASSES.small,
    regular: CSS_CLASSES.regular,
    medium: CSS_CLASSES.medium,
    large: CSS_CLASSES.large
};

const classForType = (mode = 'regular') => {
    return typeClasses[mode];
};

const createView = (ctrl, opts = {}) => {
    if (typeof opts.checked === 'function') {
        ctrl.setChecked(opts.checked());
    }
    const checked = ctrl.checked();
    const selectable = opts.selectable(checked);
    const inactive = opts.disabled || !selectable;
    const tag = opts.tag || 'div';
    const name = opts.name || '';
    const props = Object.assign(
        {},
        {
            class: [
                CSS_CLASSES.block,
                opts.defaultClass,
                (checked ? CSS_CLASSES.on : CSS_CLASSES.off),
                (opts.disabled ? CSS_CLASSES.disabled: null),
                (inactive ? CSS_CLASSES.inactive: null),
                classForType(opts.size),
                opts.class
            ].join(' '),
            id: opts.id || '',
            config: (el, inited, context, vdom) => {
                if (inited) {
                    return;
                }
                if (opts.config) {
                    opts.config(el, inited, context, vdom);
                }
            }
        },
        opts.events ? opts.events : null
    );
    const content = [
        m('input', {
            class: CSS_CLASSES.input,
            name,
            value: ctrl.value(),
            type: opts.type, // set by checkbox / radio-button
            tabindex: -1, // set in selectionView / icon-button
            checked,
            config: (el, inited) => {
                if (inited) return;
                ctrl.setInputEl(el);
            }
        }),
        m('label', Object.assign(
            {},
            {
                class: CSS_CLASSES.label,
                tabindex: -1, // set in selectionView
            },
            inactive
                ? null
                : {
                    onclick: () => (ctrl.toggle())
                }
        ), [
            opts.selectionView ? opts.selectionView(checked, opts) : null,
            opts.label ? m('span', opts.label) : null
        ])
    ];
    return m(tag, props, [opts.before, content, opts.after]);
};

const component = {
    controller: (opts = {}) => {
        // Because this module also supports radio buttons (paired control elements)
        // we won't keep a separate 'checked' value but instead keep the checked value
        // as a HTMLElement checked state.
        const defaultChecked = false;
        let value = opts.value || '1';
        let inputEl;

        const setInputElChecked = (isChecked) => {
            if (inputEl) {
                inputEl.checked = isChecked;
            }
        };

        const getOptsChecked = () => {
            if (typeof opts.checked === 'function') {
                const v = opts.checked();
                return (v !== undefined) ? v : defaultChecked;
            } else {
                return (opts.checked !== undefined) ? opts.checked : defaultChecked;
            }
        };

        const setInputEl = (el) => {
            inputEl = el;
            setInputElChecked(getOptsChecked());
        };

        const setChecked = (isChecked) => {
            setInputElChecked(isChecked);
            if (opts.getState) {
                opts.getState({
                    checked: inputEl ? inputEl.checked : getOptsChecked(),
                    value,
                    el: inputEl,
                });
            }
        };

        const toggle = () => (setChecked(!inputEl.checked));

        return {
            setInputEl,
            setChecked,
            checked: () => (inputEl ? inputEl.checked : getOptsChecked()),
            toggle,
            value: () => (value)
        };
    },
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
