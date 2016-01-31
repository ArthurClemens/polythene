import 'polythene/common/object.assign';
import m from 'mithril';
import transition from 'polythene/common/transition';
import shadow from 'polythene/shadow/shadow';
import 'polythene/spinner/theme/common/theme';

const CSS_CLASSES = {
    block: 'pe-spinner',
    placeholder: 'pe-spinner--placeholder',
    animation: 'pe-spinner__animation',
    visible: 'pe-spinner--visible',
    small: 'pe-spinner--small',
    regular: 'pe-spinner--regular',
    medium: 'pe-spinner--medium',
    large: 'pe-spinner--large',
    fab: 'pe-spinner--fab',
    raised: 'pe-spinner--raised',
    permanent: 'pe-spinner--permanent',
    singleColor: 'pe-spinner--single-color',
    animated: 'pe-spinner--animated'
};

const typeClasses = {
    small: CSS_CLASSES.small,
    regular: CSS_CLASSES.regular,
    medium: CSS_CLASSES.medium,
    large: CSS_CLASSES.large,
    fab: CSS_CLASSES.fab
};

const classForType = (mode = 'regular') => {
    return typeClasses[mode];
};

const show = (ctrl, opts) => {
    if (ctrl.isTransitioning) {
        return;
    }
    ctrl.isTransitioning = true;
    return transition.show(Object.assign(
        {},
        opts, {
            el: ctrl.el,
            showClass: CSS_CLASSES.visible
        }
    )).then(() => {
        ctrl.isTransitioning = false;
        ctrl.visible = true;
    });
};

const hide = (ctrl, opts) => {
    if (ctrl.isTransitioning) {
        return;
    }
    ctrl.isTransitioning = true;
    return transition.hide(Object.assign(
        {},
        opts, {
            el: ctrl.el,
            afterHide: () => (ctrl.el.style.display = 'none'),
            showClass: CSS_CLASSES.visible
        }
    )).then(() => {
        ctrl.isTransitioning = false;
        ctrl.visible = false;
        ctrl.hide = false;
        m.redraw(); // removes remainder of drawn component
    });
};

const notifyState = (ctrl, opts) => {
    if (opts.percentage && opts.getPercentage) {
        let percentage;
        if (typeof opts.percentage === 'function') {
            percentage = opts.percentage();
        } else {
            percentage = opts.percentage;
        }
        opts.getPercentage(percentage, ctrl, opts);
    }
};

const createView = (ctrl, opts = {}) => {
    const tag = opts.tag || 'div';
    const props = Object.assign({},
        {
            class: [
                CSS_CLASSES.block,
                classForType(opts.type),
                (opts.singleColor ? CSS_CLASSES.singleColor: null),
                (opts.raised ? CSS_CLASSES.raised : null),
                (opts.animated ? CSS_CLASSES.animated : null),
                (opts.permanent ? CSS_CLASSES.permanent : null),
                opts.class
            ].join(' '),
            id: opts.id || '',
            config: (el, inited, context, vdom) => {
                if (inited) return;
                if (opts.config) {
                    opts.config(el, inited, context, vdom);
                }
                ctrl.el = el;

                notifyState(ctrl, opts);

                if (!opts.permanent) {
                    setTimeout(() => {
                        show(ctrl, opts);
                    }, 0);
                }

            },
        },
        opts.events ? opts.events : null
    );

    notifyState(ctrl, opts);

    if (ctrl.hide) {
        setTimeout(() => {
            hide(ctrl, opts);
        }, 0);
    }

    const content = [
        opts.raised && opts.content ? m.component(shadow, {
            z: opts.z
        }) : null,
        opts.content || m('div', {class: CSS_CLASSES.animation}, 'Specific spinner missing')
    ];

    return m(tag, props, [opts.before, content, opts.after]);
};

const component = {
    controller: (opts = {}) => {
        return {
            el: null,
            isTransitioning: false,
            visible: opts.permanent || false,
            hide: false,
            percentage: 0
        };
    },
    view: (ctrl, opts = {}) => {
        if (!ctrl.visible) {
            if ((opts.hide !== undefined && !opts.hide) || opts.show) {
                ctrl.visible = true;
            }
        } else {
            if ((opts.show !== undefined && !opts.show) || opts.hide) {
                ctrl.hide = true;
            }
        }
        if (ctrl.visible) {
            return createView(ctrl, opts);
        } else {
            return m('span', {class: CSS_CLASSES.placeholder});
        }
    }
};

export default component;
