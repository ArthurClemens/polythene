/*
Generic show/hide transition module
*/

import m from 'mithril';

// defaults
const SHOW_DURATION = 200;
const HIDE_DURATION = 180;
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
        return (state === 'show')
            ? (opts.showDuration !== undefined) ? opts.showDuration : SHOW_DURATION
            : (opts.hideDuration !== undefined) ? opts.hideDuration : HIDE_DURATION;
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
        return (state === 'show')
            ? (opts.showDelay !== undefined) ? opts.showDelay : SHOW_DELAY
            : (opts.hideDelay !== undefined) ? opts.hideDelay : HIDE_DELAY;
    }
    return 0;
};

/*
opts:
- el
- showClass
- parentShowClass
- duration
- delay
*/
const transition = (opts, state) => {
    const cssAction = (state === 'show') ? 'add' : 'remove';
    const el = opts.el;
    const duration = getDuration(opts, state);
    const delay = getDelay(opts, state);
    const setTransitionCss = () => {
        el.style.transitionDuration = duration + 'ms';
        el.style.transitionDelay = delay + 'ms';
        el.classList[cssAction](opts.showClass);
    };

    const deferred = m.deferred();
    if (duration === 0) {
        // immediate effect
        setTransitionCss();
        setTimeout(() => {
            deferred.resolve();
        }, duration);
    } else {
        // wait to prevent flickering
        setTimeout(() => {
            setTransitionCss();
            setTimeout(() => {
                deferred.resolve();
            }, duration + delay);
        }, 0);
    }
    return deferred.promise;
};

export default {
    show,
    hide
};
