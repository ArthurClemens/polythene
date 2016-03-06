import 'polythene/common/object.assign';
import events from 'polythene/common/events';
import m from 'mithril';
import dialog from 'polythene/dialog/dialog';
import transition from 'polythene/common/transition';
import shadow from 'polythene/shadow/shadow';
import 'polythene/dialog/theme/theme';

const CSS_CLASSES = {
    block: 'pe-dialog',
    visible: 'pe-dialog--visible',
    body: 'pe-dialog__body',
    fullscreen: 'pe-dialog--fullscreen',
    content: 'pe-dialog__content',
    header: 'pe-dialog__header',
    footer: 'pe-dialog__footer',
    footerHigh: 'pe-dialog__footer--high',
    title: 'pe-dialog__title',
    actions: 'pe-dialog__actions',
    hasBackdrop: 'pe-dialog--backdrop',
    hasTopOverflow: 'pe-dialog--overflow-top',
    hasBottomOverflow: 'pe-dialog--overflow-bottom',
    menuContent: 'pe-menu__content'
};

const SCROLL_WATCH_TIMER = 150;

const updateScrollState = (ctrl) => {
    const scroller = ctrl.scrollEl;
    if (!scroller) {
        return;
    }
    ctrl.topOverflow = (scroller.scrollTop > 0);
    ctrl.bottomOverflow = (scroller.scrollHeight - (scroller.scrollTop + scroller.getBoundingClientRect().height) > 0);
};

const updateFooterState = (ctrl) => {
    const footerEl = ctrl.footerEl;
    if (footerEl) {
        const style = window.getComputedStyle(footerEl);
        const height = footerEl.getBoundingClientRect().height;
        const minHeight = parseInt(style.minHeight, 10);
        if (height > minHeight) {
            footerEl.classList.add(CSS_CLASSES.footerHigh);
        } else {
            footerEl.classList.remove(CSS_CLASSES.footerHigh);
        }
    }
};

const show = (ctrl, opts) => {
    const id = ctrl.instanceId;
    ctrl.isTransitioning = true;
    return transition.show(Object.assign({}, opts, {
        el: ctrl.el,
        showClass: CSS_CLASSES.visible
    })).then(() => {
        ctrl.isTransitioning = false;
        ctrl.visible = true;
        dialog.setVisibleState(true, id);
        if (opts.didShow) {
            opts.didShow(id);
        }
    });
};

const hide = (ctrl, opts) => {
    const id = ctrl.instanceId;
    ctrl.isTransitioning = true;
    return transition.hide(Object.assign({}, opts, {
        el: ctrl.el,
        showClass: CSS_CLASSES.visible
    })).then(() => {
        dialog.remove(id);
        ctrl.isTransitioning = false;
        ctrl.visible = false;
        dialog.setVisibleState(false, id);
        if (opts.didHide) {
            opts.didHide(id);
        }
        setTimeout(m.redraw, 0); // removes remainder of drawn component
    });
};

const createViewContent = (ctrl, opts) => {
    // if flex "self-stretch" is not supported, calculate the maximum height
    let style = {};
    const bodyOpts = opts.body || opts.menu;

    return m('div', {
        class: CSS_CLASSES.body,
        style: style,
        config: (el, inited) => {
            if (inited) {
                return;
            }
            ctrl.scrollEl = el;
        },
        onscroll: () => {
            ctrl.isScrolling = true;
            updateScrollState(ctrl);

            clearTimeout(ctrl.scrollWatchId);
            ctrl.scrollWatchId = setTimeout(() => {
                ctrl.isScrolling = false;
            }, SCROLL_WATCH_TIMER);
        }
    }, bodyOpts);
};

const createView = (ctrl, opts = {}) => {
    const bodyOpts = opts.body || opts.menu;
    const updateContentOnScroll = opts.updateContentOnScroll || false;
    const ignoreContent = !updateContentOnScroll && ctrl.isScrolling;
    const tag = opts.tag || 'form';

    const update = () => {
        updateScrollState(ctrl);
        updateFooterState(ctrl);
        m.redraw();
    };

    const props = Object.assign({}, {
        class: [
            CSS_CLASSES.block,
            (opts.fullscreen ? CSS_CLASSES.fullscreen : null),
            (opts.backdrop ? CSS_CLASSES.hasBackdrop : null),
            (ctrl.topOverflow || opts.borders ? CSS_CLASSES.hasTopOverflow : null),
            (ctrl.bottomOverflow || opts.borders ? CSS_CLASSES.hasBottomOverflow : null),
            ctrl.visible ? CSS_CLASSES.visible : null,
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
            ctrl.el = el;

            const cleanup = () => {
                events.unsubscribe('resize', update);
                events.unsubscribe('keydown', handleEscape);
            };

            const handleEscape = (e) => {
                if (opts.fullscreen || opts.backdrop) return;
                if (e.which === 27) {
                    cleanup();
                    hide(ctrl, Object.assign({}, opts, {hideDelay: 0}));
                }
            };

            // resize: update scroll state ('overflow' borders)
            events.subscribe('resize', update);
            events.subscribe('keydown', handleEscape);

            context.onunload = () => {
                cleanup();
            };

            updateScrollState(ctrl);
            updateFooterState(ctrl);

            if (!ctrl.visible) {
                show(ctrl, opts).then(() => {
                    updateScrollState(ctrl);
                    updateFooterState(ctrl);
                    if (ctrl.topOverflow || ctrl.bottomOverflow) {
                        setTimeout(m.redraw, 0);
                    }
                });
            }
        },
        // click backdrop: close dialog
        onclick: (e) => {
            if (e.target !== ctrl.el) {
                return;
            }
            if (opts.modal) {
                // not allowed
                return;
            }
            if (!ctrl.isTransitioning) {
                hide(ctrl, Object.assign({}, opts, {hideDelay: 0}));
            }
        }
    }, opts.formOptions ? opts.formOptions : null);

    const body = bodyOpts ? (ignoreContent ? {
        subtree: 'retain'
    } : createViewContent(ctrl, opts)) : null;

    const content = m('div', {
        class: [CSS_CLASSES.content, (opts.menu ? CSS_CLASSES.menuContent : null)].join(' ')
    }, [
        opts.fullscreen ? null : m.component(shadow, {
            z: ctrl.z,
            animated: true
        }),
        opts.fullscreen ? null : opts.title ? m('div', {
            class: CSS_CLASSES.header,
            config: (el) => {
                ctrl.headerHeight = el.scrollHeight;
            }
        }, [
            m('div', {class: CSS_CLASSES.title}, opts.title)
        ]) : null,
        body,
        opts.fullscreen ? null : opts.footer ? m('div', {
            class: CSS_CLASSES.footer,
            config: (el, inited) => {
                ctrl.footerHeight = el.scrollHeight;
                if (inited) {
                    return;
                }
                ctrl.footerEl = el;
            }
        }, [
            m('div', {class: CSS_CLASSES.actions}, opts.footer)
        ]) : null
    ]);
    return m(tag, props, [opts.before, content, opts.after]);
};

const component = {
    controller: (instanceData = {}) => {
        // instanceData contains {id, opts}
        const opts = instanceData.opts || {};
        let z = (opts.z !== undefined) ? opts.z : 3; // shadow depth
        return {
            instanceId: instanceData.instanceId,
            z: z,
            scrollEl: null,
            footerEl: null,
            topOverflow: false,
            bottomOverflow: false,
            scrollWatchId: 0,
            isScrolling: false,
            headerHeight: 0,
            footerHeight: 0,
            el: null,
            visible: instanceData.visible || false,
            isTransitioning: false
        };
    },
    view: (ctrl, instanceData) => {
        // instanceData contains {id, opts}
        const opts = (typeof instanceData.opts === 'function')
            ? instanceData.opts()
            : instanceData.opts;
        if (instanceData.hide && !ctrl.isTransitioning) {
            hide(ctrl, opts);
        }
        return createView(ctrl, opts);
    }
};

export default component;
