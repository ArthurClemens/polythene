/*
Derived from https://github.com/madebysource/animated-scrollto
Adapted to Mithril and rewritten to es6.
*/

import m from 'mithril';

const requestAnimFrame = (() => {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || (callback => {
        window.setTimeout(callback, 1000 / 60);
    });
}).call();

const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) {
        return c / 2 * t * t + b;
    }
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};

/*
opts:
    element: HTML Element
    to: position
    duration: milliseconds
    which: either 'scrollTop' (default) or 'scrollLeft'


Function is thennable:

    scrollTo({
        element: scroller,
        to: left,
        duration: 500,
        which: 'scrollLeft'
    }).then(() => {
        console.log('scroll done')
    });

*/
const scrollTo = (opts) => {
    const element = opts.element;
    const which = opts.which;
    const to = opts.to;
    const duration = opts.duration;
    const start = element[which];
    const change = to - start;
    const animationStart = new Date().getTime();
    let animating = true;
    let lastpos = null;
    let deferred = m.deferred();
    const animateScroll = function() {
        if (!animating) {
            return;
        }
        requestAnimFrame(animateScroll);
        const now = new Date().getTime();
        const val = Math.floor(easeInOutQuad(now - animationStart, start, change, duration));
        if (lastpos) {
            if (lastpos === element[which]) {
                lastpos = val;
                element[which] = val;
            } else {
                animating = false;
            }
        } else {
            lastpos = val;
            element[which] = val;
        }
        if (now > animationStart + duration) {
            element[which] = to;
            animating = false;
            deferred.resolve();
        }
    };
    requestAnimFrame(animateScroll);
    return deferred.promise;
};

export default scrollTo;
