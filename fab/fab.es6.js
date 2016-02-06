import 'polythene/common/object.assign';
import m from 'mithril';
import iconBtn from 'polythene/icon-button/icon-button';
import 'polythene/fab/theme/theme';

const CSS_CLASSES = {
    block: 'pe-button--fab',
    mini: 'pe-button--fab-mini'
};

const createView = (ctrl, opts = {}) => {
    return m.component(iconBtn, Object.assign({}, opts, {
        parentClass = [CSS_CLASSES.block, (opts.mini ? CSS_CLASSES.mini : null)].join(' '),
        raised = true,
        ripple = {
            center: true,
            opacityDecayVelocity: 0.24
        },
        shadow = {
            increase: 5
        },
        ink = true,
        wash = true,
        animateOnTap = true
    }));
};

const component = {
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
