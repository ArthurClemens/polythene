'use strict';

import p from 'polythene/polythene/polythene';
import m from 'mithril';
import shadow from 'polythene/shadow/shadow';
require('polythene-theme/dialog/dialog');

const FADE_IN_DURATION = 150;
const FADE_OUT_DURATION = 150;
const FADE_IN_DELAY = 0; // prevent flickering
const FADE_OUT_DELAY = 50; // prevent flickering
const SCROLL_WATCH_TIMER = 150;

const hide = (ctrl, opts = {}) => {
    ctrl.isHiding = true;
    if (opts.willHide) opts.willHide.call();
    const el = ctrl.dialogEl;
    if (opts.transition === 'out' || opts.transition === 'both') {
        setTimeout(() => {
            el.style.transitionDuration = FADE_OUT_DURATION + 'ms';
            el.style.opacity = 0;
        }, FADE_OUT_DELAY);
        if (opts.didHide) {
            setTimeout(() => {
                ctrl.parentEl.classList.remove('dialog-open');
                opts.didHide.call();
                ctrl.isHiding = false;
            }, FADE_OUT_DURATION + FADE_OUT_DELAY);
        } else {
            ctrl.isHiding = false;
        }
    } else {
        el.style.transitionDuration = 0;
        el.style.opacity = 0;
        ctrl.parentEl.classList.remove('dialog-open');
        if (opts.didHide) {
            opts.didHide.call();
        }
        ctrl.isHiding = false;
    }
};

const show = (ctrl, opts = {}) => {
    const dialogEl = ctrl.dialogEl;
    dialogEl.style.opacity = 0;
    ctrl.parentEl.classList.add('dialog-open');
    if (opts.transition === 'in' || opts.transition === 'both') {
        setTimeout(() => {
            dialogEl.style.transitionDuration = FADE_IN_DURATION + 'ms';
            dialogEl.style.opacity = 1;
        }, FADE_IN_DELAY);    
    } else {
        dialogEl.style.transitionDuration = 0;
        dialogEl.style.opacity = 1;
    }
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
    return m('div', {
        class: 'dialog-body',
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
            if (opts.config) {
                opts.config(el, inited, context, vdom);
            }
            if (inited) {
                return;
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

            show(ctrl, opts);
            onResize();
        },
        onclick: (e) => {
            e.stopPropagation();
            if (e.target !== ctrl.dialogEl) {
                return;
            }
            if (opts.modal) {
                return;
            }
            if (!ctrl.isHiding) {
                hide(ctrl, opts);
            }
        }
    }, opts.formOptions ? opts.formOptions : null);

    const body = opts.body ? (ignoreContent ? {subtree: 'retain'} : createViewContent(ctrl, opts)) : null;
    const content = m('.dialog-content.layout.vertical', [
        opts.fullscreen ? null : m.component(shadow, {
            z: ctrl.z(),
            animated: true
        }),
        opts.title ? m('.dialog-header.layout.start', [
            m('.title', opts.title)
        ]) : null,
        body,
        opts.footer ? m('.dialog-footer.layout.end', {
            config: (el, inited) => {
                if (inited) return;
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
            isHiding: false
        };
    },
    view: (ctrl, opts = {}) => {
        if (opts.shouldHide && opts.shouldHide.call()) {
            if (!ctrl.isHiding) {
                hide(ctrl, opts);
            }
            if (ctrl.isHiding) {
                return {subtree: 'retain'};
            }
        }
        return createView(ctrl, opts);
    }
};

export default component;
