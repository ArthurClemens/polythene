import p from 'polythene/polythene/polythene';
import m from 'mithril';
import shadow from 'polythene/shadow/shadow';
import transition from 'polythene/common/transition';
import 'polythene-theme/menu/menu';

const OFFSET_V = -8;
const DEFAULT_OFFSET_H = 16;
const SHOW_CLASS = 'visible';

const positionMenu = (ctrl, opts) => {
    if (!opts.target) {
        return;
    }
    const targetEl = document.querySelector('#' + opts.target);
    if (!targetEl) {
        return;
    }
    const offsetH = (opts.offset !== undefined) ? opts.offset : DEFAULT_OFFSET_H;
    const menuEl = ctrl.el;
    if (!menuEl) {
        return;
    }
    const contentEl = ctrl.contentEl;
    const origin = opts.origin || 'top-left';
    const reposition = opts.reposition === false ? false : true;
    let positionOffset = 0;
    if (reposition) {
        const firstItem = contentEl.querySelectorAll('.list .list-tile')[0];
        const selectedItem = contentEl.querySelector('.list-tile.selected');
        if (selectedItem) {
            // calculate v position: menu should shift upward relative to the first item
            const firstItemRect = firstItem.getBoundingClientRect();
            const selectedItemRect = selectedItem.getBoundingClientRect();
            positionOffset = selectedItemRect.top - firstItemRect.top;
        }
        // align to middle of target
        const alignEl = selectedItem || firstItem;
        const alignRect = alignEl.getBoundingClientRect();
        const targetRect = targetEl.getBoundingClientRect();
        const heightDiff = alignRect.height - targetRect.height;
        positionOffset += heightDiff / 2;

    }
    const targetRect = targetEl.getBoundingClientRect();
    const parentRect = menuEl.parentNode.getBoundingClientRect();
    const alignLeft = () => (menuEl.style.left = targetRect.left - parentRect.left + offsetH + 'px');
    const alignRight = () => (menuEl.style.right = targetRect.right - parentRect.right + offsetH + 'px');
    const alignTop = () => (menuEl.style.top = targetRect.top - parentRect.top - positionOffset + OFFSET_V + 'px');
    const alignBottom = () => (menuEl.style.bottom = targetRect.bottom - parentRect.bottom - positionOffset + 'px');
    const alignFn = {
        'top-left': () => (alignTop() && alignLeft()),
        'top-right': () => (alignTop() && alignRight()),
        'bottom-left': () => (alignBottom() && alignLeft()),
        'bottom-right': () => (alignBottom() && alignRight())
    };
    alignFn[origin].call();
};

const show = (ctrl, opts) => {
    ctrl.isTransitioning = true;
    return transition.show(Object.assign({}, opts, {
        el: ctrl.el,
        showClass: SHOW_CLASS
    })).then(() => {
        ctrl.isTransitioning = false;
        ctrl.visible = true;
        if (opts.didShow) {
            opts.didShow(opts.id);
        }
    });
};

const hide = (ctrl, opts) => {
    ctrl.isTransitioning = true;
    return transition.hide(Object.assign({}, opts, {
        el: ctrl.el,
        showClass: SHOW_CLASS
    })).then(() => {
        ctrl.isTransitioning = false;
        ctrl.visible = false;
        if (opts.didHide) {
            opts.didHide(opts.id);
        }
        m.redraw(); // removes remainder of drawn component
    });
};

const unifySize = (size) => {
    return (size < 1.5) ? 1.5 : size;
};

const widthClass = (size) => {
    if (size === 1.5) {
        return 'width-1-half';
    } else {
        return 'width-' + size;
    }
};

const createView = (ctrl, opts = {}) => {
    const listenEl = document.body;
    const activateDismissTap = () => {
        listenEl.addEventListener('click', handleDismissTap);
    };
    const deActivateDismissTap = () => {
        listenEl.removeEventListener('click', handleDismissTap);
    };
    const handleDismissTap = (e) => {
        if (e.target === ctrl.el) {
            return;
        }
        deActivateDismissTap();
        if (e.defaultPrevented) {
            // clicked on .menu-content
            hide(ctrl, opts);
        } else {
            hide(ctrl, Object.assign({}, opts, {hideDelay: 0}));
        }
    };
    const tag = opts.tag || 'div';
    const props = {
        class: ['menu', (opts.permanent ? 'permanent' : null), (opts.target ? 'target' : 'layout center-center'), (opts.size ? widthClass(unifySize(opts.size)) : null), opts.class].join(' '),

        id: opts.id || '',
        config: (el, inited, context, vdom) => {
            if (inited) {
                return;
            }
            if (opts.config) {
                opts.config(el, inited, context, vdom);
            }
            ctrl.el = el;

            const update = () => {
                positionMenu(ctrl, opts);
                m.redraw();
            };

            const handleEscape = (e) => {
                if (e.which === 27) {
                    hide(ctrl, Object.assign({}, opts, {hideDelay: 0}));
                }
            };

            if (!opts.permanent) {
                p.addListener('resize', update);
                p.addListener('keydown', handleEscape);
                setTimeout(() => {
                    activateDismissTap();
                    show(ctrl, opts);
                }, 0);
            }
            context.onunload = () => {
                p.removeListener('resize', update);
                p.removeListener('keydown', handleEscape);
                if (!opts.permanent) {
                    deActivateDismissTap();
                }
            };

            positionMenu(ctrl, opts);
        }
    };
    const content = m('.menu-content', {
        config: (el, inited) => {
            if (!inited) {
                ctrl.contentEl = el;
            }
        },
        onclick: (e) => {
            e.preventDefault();
        }
    }, [
        m.component(shadow, {
            z: ctrl.z,
            animated: true
        }),
        opts.content ? opts.content : null
    ]);
    return m(tag, props, p.insertContent(content, opts));
};

const component = {
    controller: (opts = {}) => {
        let z = (opts.z !== undefined) ? opts.z : 1;
        return {
            z: z,
            el: null,
            contentEl: null,
            isTransitioning: false,
            visible: opts.permanent || false
        };
    },
    view: (ctrl, opts = {}) => {
        if (opts.show && !ctrl.visible) {
            ctrl.visible = true;
        }
        if (ctrl.visible) {
            return createView(ctrl, opts);
        } else {
            return m('span.menu-placeholder');
        }
    }
};

export default component;
