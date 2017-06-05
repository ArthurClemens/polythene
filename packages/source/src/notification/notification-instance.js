import m from 'mithril';
import '../common/object.assign';
import { isClient, isServer } from 'polythene-core';
import Timer from '../common/timer';
import transition from '../common/transition';

const CSS_CLASSES = {
    content: 'pe-notification__content',
    title: 'pe-notification__title',
    multilineTitle: 'pe-notification__title--multiline',
    action: 'pe-notification__action',
    horizontal: 'pe-notification--horizontal',
    vertical: 'pe-notification--vertical'
};

const DEFAULT_TIME_OUT = 3;

const pause = (ctrl) => {
    ctrl.isPaused = true;
    if (ctrl.timer) {
        ctrl.timer.pause();
    }
};

const unpause = (ctrl) => {
    ctrl.isPaused = false;
    if (ctrl.timer) {
        ctrl.timer.resume();
    }
};

const stopTimer = (ctrl) => {
    if (ctrl.timer) {
        ctrl.timer.stop();
    }
};

const show = (ctrl, opts) => {
    stopTimer(ctrl);
    const id = ctrl.instanceId;
    ctrl.isTransitioning = true;
    return transition.show(Object.assign(
        {},
        opts,
        ctrl.transitions.show(ctrl, opts)
    )).then(() => {
        ctrl.isTransitioning = false;
        if (ctrl.didShow) {
            // notify multiple
            ctrl.didShow(id);
            // this will call opts.didShow
        }

        // set timer to hide in a few seconds
        const timeout = opts.timeout;
        if (timeout === 0) {
            // do not time out
        } else {
            const timeoutSeconds = (timeout !== undefined) ? timeout : DEFAULT_TIME_OUT;
            ctrl.timer = new Timer(() => {
                hide(ctrl, opts);
            }, timeoutSeconds * 1000);
        }
    });
};

const hide = (ctrl, opts) => {
    stopTimer(ctrl);
    const id = ctrl.instanceId;
    ctrl.isTransitioning = true;
    return transition.hide(Object.assign(
        {},
        opts,
        ctrl.transitions.hide(ctrl, opts)
    )).then(() => {
        stopTimer(ctrl);
        ctrl.isTransitioning = false;
        if (ctrl.didHide) {
            // notify multiple
            ctrl.didHide(id);
            // this will call opts.didHide
        }
        m.redraw(); // removes remainder of drawn component
    });
};

const createView = (ctrl, opts = {}) => {
    const tag = opts.tag || 'div';
    const props = {
        class: [ctrl.class, (opts.layout === 'vertical' ? CSS_CLASSES.vertical : CSS_CLASSES.horizontal), opts.class].join(' '),
        id: opts.id || '',
        config: (el, inited, context, vdom) => {
            if (inited) return;
            if (opts.config) {
                opts.config(el, inited, context, vdom);
            }
            ctrl.el = el;

            // container element is used for transitioning the notification
            ctrl.containerEl = isClient
                ? document.querySelector(opts.containerSelector || '.pe-notification__holder')
                : null;
            show(ctrl, opts);
        },
        onclick: (e) => {
            e.preventDefault();
        }
    };
    const titleConfig = (el, inited) => {
        if (isServer) {
            return;
        }
        if (inited) {
            return;
        }
        const height = el.getBoundingClientRect().height;
        const lineHeight = parseInt(window.getComputedStyle(el).lineHeight, 10);
        const paddingTop = parseInt(window.getComputedStyle(el).paddingTop, 10);
        const paddingBottom = parseInt(window.getComputedStyle(el).paddingBottom, 10);
        if (height > (lineHeight + paddingTop + paddingBottom)) {
            el.classList.add(CSS_CLASSES.multilineTitle);
        }
    };
    const title = opts.title;
    const content = m('div', {
        class: CSS_CLASSES.content
    }, [
        title ? m('div', {
            class: CSS_CLASSES.title,
            config: titleConfig
        }, title) : null,
        opts.action ? m('div', {
            class: CSS_CLASSES.action
        }, [
            opts.action
        ]) : null
    ]);
    return m(tag, props, content);
};

const component = {
    controller: (instanceData = {}) => {
        // instanceData contains {id, opts}
        return Object.assign({}, instanceData, {
            el: null,
            containerEl: null,
            dismissEl: null,
            isTransitioning: false,
            timer: null,
            isPaused: false
        });
    },
    view: (ctrl, instanceData) => {
        // instanceData contains {id, opts}
        const opts = (typeof instanceData.opts === 'function')
            ? instanceData.opts()
            : instanceData.opts;
        if (instanceData.hide && !ctrl.isTransitioning) {
            hide(ctrl, opts);
        }
        if (instanceData.pause && !ctrl.isPaused) {
            pause(ctrl, opts);
        } else if (instanceData.unpause && ctrl.isPaused) {
            unpause(ctrl, opts);
        }
        return createView(ctrl, opts);
    }
};

export default component;
