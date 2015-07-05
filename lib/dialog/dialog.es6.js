'use strict';

import p from 'polythene/polythene/polythene';
import m from 'mithril';
import shadow from 'polythene/shadow/shadow';
require('polythene-theme/dialog/dialog');

const FADE_IN_DURATION = 150;
const FADE_OUT_DURATION = 150;
const SCROLL_WATCH_TIMER = 150;

const hide = (ctrl, opts = {}) => {
    ctrl.dialogEl.style.opacity = 0;
    ctrl.dialogEl.style.transitionDuration = FADE_OUT_DURATION + 'ms';
    if (opts.didHide) {
        setTimeout(() => {
            document.querySelector('html').classList.remove('dialog-open');
            opts.didHide.call();
        }, FADE_OUT_DURATION);
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
        class: ['dialog layout center-center', (opts.backdrop ? 'hasBackdrop' : null), (ctrl.topOverflow ? 'topOverflow' : null), (ctrl.bottomOverflow ? 'bottomOverflow' : null), opts.class].join(' '),
        config: (el, inited, context, vdom) => {
            if (opts.config) {
                opts.config(el, inited, context, vdom);
            }
            if (inited) {
                return;
            }
            ctrl.dialogEl = el;

            // resize: update scroll state ('overflow' borders)
            const onResize = () => {
                updateScrollState(ctrl);
                m.redraw();
            };
            p.addListener('resize', onResize);
            context.onunload = () => {
                p.removeListener('resize', onResize);
            };

            setTimeout(() => {
                updateScrollState(ctrl);
                ctrl.dialogEl.style.transitionDuration = FADE_IN_DURATION + 'ms';
                ctrl.dialogEl.style.opacity = 1;
                document.querySelector('html').classList.add('dialog-open');
                m.redraw();
            }, 0);
        },
        onclick: (e) => {
            e.stopPropagation();
            if (e.target !== ctrl.dialogEl) {
                return;
            }
            if (opts.modal) {
                return;
            }
            hide(ctrl, opts);
        }
    }, opts.formOptions ? opts.formOptions : null);

    const body = opts.body ? (ignoreContent ? {subtree: 'retain'} : createViewContent(ctrl, opts)) : null;
    const content = m('.dialog-content.layout.vertical', [
        m.component(shadow, {
            z: ctrl.z(),
            animated: true
        }),
        opts.title ? m('.dialog-header.layout.start', [
            m('.title', opts.title)
        ]) : null,
        body,
        opts.footer ? m('.dialog-footer.layout.end', [
            m('.flex'),
            m('.actions.layout.horizontal.end', opts.footer)
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
            scrollEl: null,
            topOverflow: false,
            bottomOverflow: false,
            scrollWatchId: 0,
            isScrolling: m.prop(false)
        };
    },
    view: (ctrl, opts = {}) => {
        if (opts.shouldHide && opts.shouldHide.call()) {
            hide(ctrl, opts);
            return {subtree: 'retain'};
        } else {
            return createView(ctrl, opts);
        }
    }
};

export default component;
