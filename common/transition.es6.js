/*
Generic show/hide transition module
*/

import m from 'mithril';

// defaults
const SHOW_DURATION = 200; // default dialog timing
const HIDE_DURATION = 180; // default dialog timing
const SHOW_DELAY = 10; // prevent flickering with Safari
const HIDE_DELAY = 50; // prevent flickering with Safari
const TRANSITION = 'both';

// See: transition
const show = (opts) => {
    return transition(opts, 'show');
};

const hide = (opts) => {
    return transition(opts, 'hide');
};

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
    return 0;
};

/*
opts:
- transition (show, hide, both)
- state (show, hide)
- showDelay
- hideDelay
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
    return 0;
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
*/
const transition = (opts, state) => {
    const deferred = m.deferred();
    const el = opts.el;
    const transitionDuration = getDuration(opts, state);
    const delay = getDelay(opts, state);
    const style = el.style;

    const beforeTransition = () => {
        if (opts.beforeShow && state === 'show') {
            style.transitionDuration = '0ms';
            style.transitionDelay = '0ms';
            opts.beforeShow();
        }
    };
    const applyTransition = () => {
        style.transitionDuration = transitionDuration + 'ms';
        style.transitionDelay = delay + 'ms';
        if (opts.showClass) {
            el.classList[(state === 'show') ? 'add' : 'remove'](opts.showClass);
        }
        if (opts.show && state === 'show') {
            opts.show();
        }
        if (opts.hide && state === 'hide') {
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
    beforeTransition();
    // Use setTimeout to apply changing transitionDuration settings
    setTimeout(() => {
        applyTransition();
        setTimeout(() => {
            applyAfterTransition();
            deferred.resolve();
        }, transitionDuration + delay);
    }, 0); // prevent flickering
    return deferred.promise;
};

export default {
    show,
    hide
};
