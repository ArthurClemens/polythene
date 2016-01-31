// Helper function for checkbox and radio button
import m from 'mithril';
import iconButton from 'polythene/icon-button/icon-button';

const CSS_CLASSES = {
    box: 'pe-control__box',
    button: 'pe-control__button',
    buttonOn: 'pe-control__button--on',
    buttonOff: 'pe-control__button--off'
};

const createIcon = (onOffType, opts) => {
    // if opts.iconOn/Off is passed, use that icon options object and ignore size
    // otherwise create a new object
    return opts[onOffType] || Object.assign({
        msvg: opts.theme[onOffType]
    }, opts.icon, opts.size ? {
        type: opts.size
    } : null);
};

const createIconButton = (value, type, opts) => {
    const icon = createIcon(type === 'on' ? 'iconOn' : 'iconOff', opts);
    const classNameOn = (type === 'on') ? CSS_CLASSES.buttonOn : CSS_CLASSES.buttonOff;
    const classNameOff = (type !== 'on') ? CSS_CLASSES.buttonOff : CSS_CLASSES.buttonOn;
    return m.component(iconButton, Object.assign({}, {
        tag: 'div',
        class: [
            CSS_CLASSES.button,
            (value ? classNameOn : classNameOff)
        ].join(' '),
        icon: icon,
        disabled: opts.disabled
    }, opts.iconButton));
};

const createSelection = (checked, opts) => {
    return m('div', {
        class: CSS_CLASSES.box
    }, [
        createIconButton(checked, 'on', opts),
        createIconButton(checked, 'off', opts)
    ]);
};

export default createSelection;
