import '../common/object.assign';
import m from 'mithril';
import icon from '../icon/icon';
import button from '../button/button';
import './theme';

const CSS_CLASSES = {
    block: 'pe-button pe-button--icon',
    label: 'pe-button__label',
    compact: 'pe-button--compact'
};

const createView = (ctrl, opts = {}) => {
    const content = opts.icon
        ? m(icon, opts.icon)
        : opts.content
            ? opts.content
            : null;
    return m(button, Object.assign({}, opts, {
        content: m('div', {
            class: CSS_CLASSES.label
        }, content),
        parentClass: [
            opts.parentClass || CSS_CLASSES.block,
            opts.compact ? CSS_CLASSES.compact : null
        ].join(' '),
        // default do not show hover effect
        wash: (opts.wash !== undefined) ? opts.wash : false,
        ripple: opts.ripple || null,
        animateOnTap: (opts.animateOnTap !== undefined) ? opts.animateOnTap : false
    }));
};

const component = {
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
