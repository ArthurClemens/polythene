import m from 'mithril';
import iconBtn from 'polythene/icon-button/icon-button';
import 'polythene/fab/theme/theme';

const CSS_CLASSES = {
    block: 'pe-button--fab',
    mini: 'pe-button--fab-mini'
};

const createView = (ctrl, opts = {}) => {
    opts.parentClass = [CSS_CLASSES.block, (opts.mini ? CSS_CLASSES.mini : null)].join(' ');
    opts.raised = true;
    opts.ripple = {
        center: true,
        opacityDecayVelocity: 0.24
    };
    opts.shadow = {
        increase: 5
    };
    opts.ink = true;
    opts.wash = true;
    opts.animateOnTap = true;
    return m.component(iconBtn, opts);
};

const component = {
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
