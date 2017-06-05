/*
Generic show/hide transition module
*/

import m from 'mithril';

// defaults
var SHOW_DURATION = .220; // default dialog timing
var HIDE_DURATION = .200; // default dialog timing
var SHOW_DELAY = 0;
var HIDE_DELAY = 0;
var TRANSITION = 'both';

// See: transition
var show = function show(opts) {
    return transition(opts, 'show');
};

var hide = function hide(opts) {
    return transition(opts, 'hide');
};

/*
opts:
- transition
- showDuration
- hideDuration

- state (show, hide)
*/
var getDuration = function getDuration(opts, state) {
    var transition = opts.transition || TRANSITION;
    if (transition === 'none') {
        return 0;
    } else if (transition === 'show' && state === 'hide') {
        return 0;
    } else if (transition === 'hide' && state === 'show') {
        return 0;
    } else {
        // both
        return state === 'show' ? opts.showDuration !== undefined ? opts.showDuration : SHOW_DURATION : opts.hideDuration !== undefined ? opts.hideDuration : HIDE_DURATION;
    }
};

/*
opts:
- transition (show, hide, both)
- showDelay
- hideDelay

- state (show, hide)
*/
var getDelay = function getDelay(opts, state) {
    var transition = opts.transition || TRANSITION;
    if (transition === 'none') {
        return 0;
    } else if (transition === 'show' && state === 'hide') {
        return 0;
    } else if (transition === 'hide' && state === 'show') {
        return 0;
    } else {
        // both
        return state === 'show' ? opts.showDelay !== undefined ? opts.showDelay : SHOW_DELAY : opts.hideDelay !== undefined ? opts.hideDelay : HIDE_DELAY;
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
var transition = function transition(opts, state) {
    var deferred = m.deferred();
    var el = opts.el;
    if (!el) {
        deferred.resolve();
        return deferred.promise;
    }
    var transitionDuration = getDuration(opts, state) * 1000;
    var delay = getDelay(opts, state) * 1000;
    var style = el.style;
    var beforeTransition = opts.beforeShow && state === 'show' ? function () {
        style.transitionDuration = '0ms';
        style.transitionDelay = '0ms';
        opts.beforeShow();
    } : null;
    var applyTransition = function applyTransition() {
        style.transitionDuration = transitionDuration + 'ms';
        style.transitionDelay = delay + 'ms';
        if (opts.showClass) {
            el.classList[state === 'show' ? 'add' : 'remove'](opts.showClass);
        }
        if (opts.show && typeof opts.show === 'function' && state === 'show') {
            opts.show();
        }
        if (opts.hide && typeof opts.hide === 'function' && state === 'hide') {
            opts.hide();
        }
    };
    var applyAfterTransition = function applyAfterTransition() {
        if (opts.afterHide && state === 'hide') {
            style.transitionDuration = '0ms';
            style.transitionDelay = '0ms';
            opts.afterHide();
        }
    };

    var doTransition = function doTransition() {
        applyTransition();
        setTimeout(function () {
            applyAfterTransition();
            deferred.resolve();
        }, transitionDuration + delay);
    };

    var maybeDelayTransition = function maybeDelayTransition() {
        if (transitionDuration === 0) {
            doTransition();
        } else {
            setTimeout(function () {
                doTransition();
            }, 0);
        }
    };

    if (beforeTransition) {
        beforeTransition();
        setTimeout(function () {
            maybeDelayTransition();
        }, 0);
    } else {
        maybeDelayTransition();
    }

    return deferred.promise;
};

export default {
    show: show,
    hide: hide
};