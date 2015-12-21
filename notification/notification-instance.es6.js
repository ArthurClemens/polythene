import m from 'mithril';
import Timer from 'polythene/common/timer';
import transition from 'polythene/common/transition';
import 'polythene/common/object.assign';

const DEFAULT_TIME_OUT = 4000;

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
    ctrl.isTransitioning = true;
    return transition.show(Object.assign({}, opts, ctrl.transitions.show(ctrl, opts))).then(() => {
        ctrl.isTransitioning = false;
        if (ctrl.didShow) {
            // notify multiple
            ctrl.didShow(ctrl.instanceId);
        }
        if (opts.didShow) {
            // notify other listener
            opts.didShow(opts.id);
        }
        // set timer to hide in a few seconds
        const timeout = opts.timeout;
        if (timeout === 0) {
            // do not time out
        } else {
            const timeoutMs = (timeout !== undefined) ? timeout : DEFAULT_TIME_OUT;
            ctrl.timer = new Timer(() => {
                hide(ctrl, opts);
            }, timeoutMs);
        }
    });
};

const hide = (ctrl, opts) => {
    stopTimer(ctrl);
    ctrl.isTransitioning = true;
    return transition.hide(Object.assign({}, opts, ctrl.transitions.hide(ctrl, opts))).then(() => {
        stopTimer(ctrl);
        ctrl.isTransitioning = false;
        if (ctrl.didHide) {
            // notify multiple
            ctrl.didHide(ctrl.instanceId);
        }
        if (opts.didHide) {
            // notify other listener
            opts.didHide(opts.id);
        }
        m.redraw(); // removes remainder of drawn component
    });
};

const createView = (ctrl, opts = {}) => {
    // const activateDismissTap = (ctrl) => {
    //     ctrl.dismissEl.addEventListener('click', handleDismissTap);
    // };
    // const deActivateDismissTap = (ctrl) => {
    //     ctrl.dismissEl.removeEventListener('click', handleDismissTap);
    // };
    // const handleDismissTap = (e) => {
    //     // small delay to detect isPaused (will be set after the click)
    //     setTimeout(() => {
    //         if (e.target === ctrl.el) {
    //             return;
    //         }
    //         if (ctrl.isPaused) {
    //             return;
    //         }
    //         deActivateDismissTap(ctrl);
    //         hide(ctrl, Object.assign({}, opts, {hideDelay: 0}));
    //     }, 0);
    // };
    const tag = opts.tag || 'div.layout.center';
    const props = {
        class: [ctrl.class, opts.class || 'dark-theme'].join(' '),
        id: opts.id || '',
        config: (el, inited, context, vdom) => {
            if (inited) return;
            if (opts.config) {
                opts.config(el, inited, context, vdom);
            }
            ctrl.el = el;
            ctrl.containerEl = document.querySelector('#' + opts.container);

            ctrl.dismissEl = opts.dismissSelector ? document.querySelector(opts.dismissSelector) : document.body;
            // activateDismissTap(ctrl);

            // context.onunload = () => {
            //     deActivateDismissTap(ctrl);
            // };
            show(ctrl, opts);
        },
        onclick: (e) => {
            e.preventDefault();
        }
    };
    const titleConfig = (el, inited) => {
        if (inited) return;
        const height = el.getBoundingClientRect().height;
        const lineHeight = parseInt(window.getComputedStyle(el).lineHeight, 10);
        const paddingTop = parseInt(window.getComputedStyle(el).paddingTop, 10);
        const paddingBottom = parseInt(window.getComputedStyle(el).paddingBottom, 10);
        if (height > (lineHeight + paddingTop + paddingBottom)) {
            el.classList.add('multi-line');
        }
    };
    const verticalLayout = opts.layout === 'vertical';
    const title = opts.title;
    const content = m(verticalLayout ? '.layout.vertical' : '.layout.horizontal', {
        class: 'content'
    }, [
        title ? m(verticalLayout ? 'div' : '.flex', {
            class: 'title',
            config: titleConfig
        }, title) : null,
        opts.action ? m(verticalLayout ? '.layout.end-justified' : '.layout.center', {
            class: 'action'
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
