/*
Generic show/hide transition module
*/

import m from 'mithril';

// defaults
const SHOW_DURATION = .220; // default dialog timing
const HIDE_DURATION = .200; // default dialog timing
const SHOW_DELAY = 0;
const HIDE_DELAY = 0;
const TRANSITION = 'both';

// See: transition
const show = (opts) =>
    transition(opts, 'show');

const hide = (opts) =>
    transition(opts, 'hide');

/*
opts:
- transition
- showDuration
- hideDuration

- state (show, hide)
*/
const getDuration = (opts, state) => {
    const transition = opts.transition || TRANSITION;
    if (transition === 'none') {
        return 0;
    } else if (transition === 'show' && state === 'hide') {
        return 0;
    } else if (transition === 'hide' && state === 'show') {
        return 0;
    } else {
        // both
        return (state === 'show') ? (opts.showDuration !== undefined) ? opts.showDuration : SHOW_DURATION : (opts.hideDuration !== undefined) ? opts.hideDuration : HIDE_DURATION;
    }
};

/*
opts:
- transition (show, hide, both)
- showDelay
- hideDelay

- state (show, hide)
*/
const getDelay = (opts, state) => {
    const transition = opts.transition || TRANSITION;
    if (transition === 'none') {
        return 0;
    } else if (transition === 'show' && state === 'hide') {
        return 0;
    } else if (transition === 'hide' && state === 'show') {
        return 0;
    } else {
        // both
        return (state === 'show') ? (opts.showDelay !== undefined) ? opts.showDelay : SHOW_DELAY : (opts.hideDelay !== undefined) ? opts.hideDelay : HIDE_DELAY;
    }
};

/*
opts:
- el
- duration
- delay
- showClass
- beforeShow
- show
- hide
- afterHide
- showDelay
- hideDelay

- state (show, hide)
*/
const transition = (opts, state) => {
    const deferred = m.deferred();
    const el = opts.el;
    if (!el) {
        deferred.resolve();
        return deferred.promise;
    }
    const transitionDuration = getDuration(opts, state) * 1000;
    const delay = getDelay(opts, state) * 1000;
    const style = el.style;
    const beforeTransition = (opts.beforeShow && state === 'show')
        ? () => {
            style.transitionDuration = '0ms';
            style.transitionDelay = '0ms';
            opts.beforeShow();
        }
        : null;
    const applyTransition = () => {
        style.transitionDuration = transitionDuration + 'ms';
        style.transitionDelay = delay + 'ms';
        if (opts.showClass) {
            el.classList[(state === 'show') ? 'add' : 'remove'](opts.showClass);
        }
        if (opts.show && typeof opts.show === 'function' && state === 'show') {
            opts.show();
        }
        if (opts.hide && typeof opts.hide === 'function' && state === 'hide') {
            opts.hide();
        }
    };
    const applyAfterTransition = () => {
        if (opts.afterHide && state === 'hide') {
            style.transitionDuration = '0ms';
            style.transitionDelay = '0ms';
            opts.afterHide();
        }
    };

    const doTransition = () => {
        applyTransition();
        setTimeout(() => {
            applyAfterTransition();
            deferred.resolve();
        }, transitionDuration + delay);
    };

    const maybeDelayTransition = () => {
        if (transitionDuration === 0) {
            doTransition();
        } else {
            setTimeout(() => {
                doTransition();
            }, 0);
        }
    };

    if (beforeTransition) {
        beforeTransition();
        setTimeout(() => {
            maybeDelayTransition();
        }, 0);
    } else {
        maybeDelayTransition();
    }

    return deferred.promise;
};

export default {
    show,
    hide
};
