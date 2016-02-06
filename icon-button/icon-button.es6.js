import m from 'mithril';
import icon from 'polythene/icon/icon';
import button from 'polythene/button/button';
import 'polythene/base-button/base-button';
import 'polythene/icon-button/theme/theme';

const CSS_CLASSES = {
    block: 'pe-button pe-button--icon',
    label: 'pe-button__label',
    compact: 'pe-button--compact'
};

const createView = (ctrl, opts = {}) => {
    let content;
    if (opts.icon) {
        content = m.component(icon, opts.icon);
    } else if (opts.content) {
        content = opts.content;
    }
    opts.content = m('div', {class: CSS_CLASSES.label}, content);
    opts.parentClass = [
        opts.parentClass || CSS_CLASSES.block,
        opts.compact ? CSS_CLASSES.compact : null
    ].join(' ');
    // default do not show hover effect
    opts.wash = (opts.wash !== undefined) ? opts.wash : false;
    opts.animateOnTap = (opts.animateOnTap !== undefined) ? opts.animateOnTap : false;
    return m.component(button, opts);
};

const component = {
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
