// Helper function for checkbox and radio button
import '../common/object.assign';
import m from 'mithril';
import icon from '../icon/icon';
import iconButton from '../icon-button/icon-button';

const CSS_CLASSES = {
    box: 'pe-control__box',
    button: 'pe-control__button',
    buttonOn: 'pe-control__button--on',
    buttonOff: 'pe-control__button--off'
};

const createIcon = (onOffType, opts) => {
    // if opts.iconOn/Off is passed, use that icon options object and ignore size
    // otherwise create a new object
    return Object.assign(
        {},
        opts[onOffType]
            ? opts[onOffType]
            : {
                msvg: opts.theme[onOffType]
            },
        {
            class: opts.class
        },
        opts.icon,
        opts.size
            ? {
                type: opts.size
            }
            : null
    );
};

const createSelection = (checked, opts) => {
    const selectable = opts.selectable(checked);
    return m('div', {
        class: CSS_CLASSES.box
    }, m(iconButton, Object.assign(
        {},
        {
            tag: 'div',
            class: CSS_CLASSES.button,
            content: [
                m(icon, createIcon('iconOn', Object.assign(
                    {},
                    {
                        class: CSS_CLASSES.buttonOn
                    },
                    opts
                ))),
                m(icon, createIcon('iconOff', Object.assign(
                    {},
                    {
                        class: CSS_CLASSES.buttonOff
                    },
                    opts
                )))
            ],
            ripple: {
                center: true
            },
            disabled: opts.disabled,
            inactive: !selectable
        },
        opts.iconButton
    )));
};

export default createSelection;
