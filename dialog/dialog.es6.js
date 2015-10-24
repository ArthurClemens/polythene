import 'polythene/common/object.assign';
import p from 'polythene/polythene/polythene';
import m from 'mithril';
import shadow from 'polythene/shadow/shadow';
import 'polythene-theme/dialog/dialog';

const FADE_IN_DURATION = 150;
const FADE_OUT_DURATION = 150;
const FADE_IN_DELAY = 0; // prevent flickering
const FADE_OUT_DELAY = 0; // prevent flickering
const SCROLL_WATCH_TIMER = 150;

const d = document.documentElement.style;
const alignSelfSupported = ('alignSelf' in d) || ('WebkitAlignSelf' in d);

const willHide = (ctrl, opts) => {
    const deferred = m.deferred();
    if (opts.willHide) {
        opts.willHide.call();
    }
    deferred.resolve();
    return deferred.promise;
};

const fadeOut = (el, opts) => {
    const deferred = m.deferred();
    const duration = (opts.transition === 'out' || opts.transition === 'both') ? FADE_OUT_DURATION : 0;
    const delay = (opts.transition === 'out' || opts.transition === 'both') ? FADE_OUT_DELAY : 0;
    setTimeout(() => {
        el.style.transitionDuration = duration + 'ms';
        el.style.opacity = 0;
        deferred.resolve();
    }, delay);
    return deferred.promise;
};

const finishHide = (ctrl, opts) => {
    const deferred = m.deferred();
    const MIN_FADE_OUT_DURATION = 50; // prevent flickering
    const duration = (opts.transition === 'out' || opts.transition === 'both') ? FADE_OUT_DURATION : MIN_FADE_OUT_DURATION;
    setTimeout(() => {
        ctrl.parentEl.classList.remove('dialog-open');
        if (opts.didHide) {
            opts.didHide.call();
        }
        deferred.resolve();
    }, duration);
    return deferred.promise;
};

const transitionHide = (ctrl, opts) => {
    const deferred = m.deferred();
    const el = ctrl.dialogEl;
    fadeOut(el, opts)
        .then(finishHide(ctrl, opts)
            .then(deferred.resolve())
        );
    return deferred.promise;
};

const hide = (ctrl, opts = {}) => {
    ctrl.isTransitioning = true;

    willHide(ctrl, opts)
        .then(transitionHide(ctrl, opts)
            .then(function() {
                ctrl.isTransitioning = false;
            })
        );
};

const fadeIn = (el, opts) => {
    const deferred = m.deferred();
    const f = (duration) => {
        el.style.transitionDuration = duration + 'ms';
        el.style.opacity = 1;
        deferred.resolve();
    };
    if (opts.transition === 'in' || opts.transition === 'both') {
        setTimeout(() => {
            f(FADE_IN_DURATION);
        }, FADE_IN_DELAY);
    } else {
        f(0);
    }
    return deferred.promise;
};

const show = (ctrl, opts = {}) => {
    const deferred = m.deferred();
    if (ctrl.isTransitioning) {
        return;
    }
    const dialogEl = ctrl.dialogEl;
    dialogEl.style.opacity = 0;
    ctrl.parentEl.classList.add('dialog-open');

    ctrl.isTransitioning = true;
    fadeIn(dialogEl, opts).then(() => {
        ctrl.isTransitioning = false;
        deferred.resolve();
    });
    return deferred.promise;
};

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

const createViewContent = (ctrl, opts) => {
    // if flex "self-stretch" is not supported, calculate the maximum height
    let style = {};
    if (ctrl.dialogEl && !alignSelfSupported) {
        const styles = window.getComputedStyle(ctrl.dialogEl);
        const partsHeights = (ctrl.headerHeight || 0) + (ctrl.footerHeight || 0);
        const dialogPadding = parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom);
        style = {
            'max-height': 'calc(100vh - ' + dialogPadding + 'px - ' + partsHeights + 'px)'
        };
    }

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
            ctrl.isScrolling(true);
            updateScrollState(ctrl);

            clearTimeout(ctrl.scrollWatchId);
            ctrl.scrollWatchId = setTimeout(() => {
                ctrl.isScrolling(false);
            }, SCROLL_WATCH_TIMER);
        }
    }, opts.body);
};

const createView = (ctrl, opts = {}) => {
    const updateContentOnScroll = opts.updateContentOnScroll || false;
    const ignoreContent = !updateContentOnScroll && ctrl.isScrolling();
    const tag = opts.tag || 'form';
    const props = Object.assign({}, {
        class: ['dialog layout center-center', (opts.fullscreen ? 'fullscreen' : null), (opts.backdrop ? 'hasBackdrop' : null), (ctrl.topOverflow ? 'topOverflow' : null), (ctrl.bottomOverflow ? 'bottomOverflow' : null), opts.class].join(' '),
        config: (el, inited, context, vdom) => {
            if (inited) {
                return;
            }
            if (opts.config) {
                opts.config(el, inited, context, vdom);
            }
            ctrl.dialogEl = el;
            ctrl.parentEl = el.parentElement;

            // resize: update scroll state ('overflow' borders)
            const onResize = () => {
                updateScrollState(ctrl);
                updateFooterState(ctrl);
                m.redraw();
            };
            p.addListener('resize', onResize);
            context.onunload = () => {
                p.removeListener('resize', onResize);
            };

            show(ctrl, opts).then(() => {
                onResize();
            });
        },
        onclick: (e) => {
            e.stopPropagation();
            if (e.target !== ctrl.dialogEl) {
                return;
            }
            if (opts.modal) {
                return;
            }
            if (!ctrl.isTransitioning) {
                hide(ctrl, opts);
            }
        }
    }, opts.formOptions ? opts.formOptions : null);

    const body = opts.body ? (ignoreContent ? {
        subtree: 'retain'
    } : createViewContent(ctrl, opts)) : null;

    const content = m('.dialog-content.layout.vertical', [
        opts.fullscreen ? null : m.component(shadow, {
            z: ctrl.z(),
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
    controller: (opts = {}) => {
        let z = (opts.z !== undefined) ? opts.z : 3;
        return {
            z: m.prop(z),
            dialogEl: null,
            parentEl: null,
            scrollEl: null,
            footerEl: null,
            topOverflow: false,
            bottomOverflow: false,
            scrollWatchId: 0,
            isScrolling: m.prop(false),
            isTransitioning: false,
            headerHeight: 0,
            footerHeight: 0,
        };
    },
    view: (ctrl, opts = {}) => {
        if (opts.shouldHide && opts.shouldHide.call()) {
            if (!ctrl.isTransitioning) {
                hide(ctrl, opts);
            }
        }
        if (ctrl.isTransitioning) {
            return {
                subtree: 'retain'
            };
        }
        return createView(ctrl, opts);
    }
};

export default component;
