import 'polythene/common/object.assign';
import p from 'polythene/polythene/polythene';
import m from 'mithril';
import dialog from 'polythene/dialog/dialog';
import transition from 'polythene/common/transition';
import shadow from 'polythene/shadow/shadow';
import 'polythene-theme/dialog/dialog';

const SCROLL_WATCH_TIMER = 150;
const SHOW_CLASS = 'visible';

// test for flexbox 2 specs
// in practice, IE10 needs a different treatment
const d = document.documentElement.style;
const alignSelfSupported = ('alignSelf' in d) || ('WebkitAlignSelf' in d);

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
            footerEl.classList.add('high');
        } else {
            footerEl.classList.remove('high');
        }
    }
};

const show = (ctrl, opts) => {
    const id = ctrl.instanceId;
    ctrl.isTransitioning = true;
    return transition.show(Object.assign({}, opts, {
        el: ctrl.el,
        showClass: SHOW_CLASS
    })).then(() => {
        ctrl.isTransitioning = false;
        ctrl.visible = true;
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
        showClass: SHOW_CLASS
    })).then(() => {
        dialog.remove(id);
        ctrl.isTransitioning = false;
        ctrl.visible = false;
        if (opts.didHide) {
            opts.didHide(id);
        }
        m.redraw(); // removes remainder of drawn component
    });
};

const createViewContent = (ctrl, opts) => {
    // if flex "self-stretch" is not supported, calculate the maximum height
    let style = {};
    if (ctrl.el && !alignSelfSupported) {
        const styles = window.getComputedStyle(ctrl.el);
        const partsHeights = (ctrl.headerHeight || 0) + (ctrl.footerHeight || 0);
        const dialogPadding = parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom);
        style = {
            'max-height': 'calc(100vh - ' + dialogPadding + 'px - ' + partsHeights + 'px)'
        };
    }
    const bodyOpts = opts.body || opts.menu;

    return m('div', {
        class: 'dialog-body self-stretch',
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
    const props = Object.assign({}, {
        class: ['dialog layout center-center', (opts.fullscreen ? 'fullscreen' : null), (opts.backdrop ? 'hasBackdrop' : null), (ctrl.topOverflow ? 'topOverflow' : null), (ctrl.bottomOverflow ? 'bottomOverflow' : null), ctrl.visible ? SHOW_CLASS : null, opts.class].join(' '),
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
                p.removeListener('resize', update);
                p.removeListener('keydown', handleEscape);
            };
            const update = () => {
                updateScrollState(ctrl);
                updateFooterState(ctrl);
                m.redraw();
            };
            const handleEscape = (e) => {
                if (opts.fullscreen || opts.backdrop) return;
                if (e.which === 27) {
                    cleanup();
                    hide(ctrl, Object.assign({}, opts, {hideDelay: 0}));
                    //m.redraw(); // make it happen
                }
            };

            // resize: update scroll state ('overflow' borders)
            p.addListener('resize', update);
            p.addListener('keydown', handleEscape);

            context.onunload = () => {
                cleanup();
            };

            updateScrollState(ctrl);
            updateFooterState(ctrl);

            show(ctrl, opts).then(() => {
                updateScrollState(ctrl);
                updateFooterState(ctrl);
                if (ctrl.topOverflow || ctrl.bottomOverflow) {
                    setTimeout(() => (m.redraw()), 0);
                }
            });
        },
        // click backdrop: close dialog
        onclick: (e) => {
            e.stopPropagation();
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
        class: ['dialog-content', 'layout', 'vertical', (opts.menu ? 'menu-content' : null)].join(' ')
    }, [
        opts.fullscreen ? null : m.component(shadow, {
            z: ctrl.z,
            animated: true
        }),
        opts.fullscreen ? null : opts.title ? m('.dialog-header', {
            config: (el) => {
                ctrl.headerHeight = el.scrollHeight;
            }
        }, [
            m('.title', opts.title)
        ]) : null,
        body,
        opts.fullscreen ? null : opts.footer ? m('.dialog-footer', {
            config: (el, inited) => {
                ctrl.footerHeight = el.scrollHeight;
                if (inited) {
                    return;
                }
                ctrl.footerEl = el;
            }
        }, [
            m('.flex'),
            m('.actions.layout.horizontal.end-justified.wrap', opts.footer)
        ]) : null
    ]);
    return m(tag, props, p.insertContent(content, opts));
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
            visible: false,
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
