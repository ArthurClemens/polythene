/*
Animated scroll to a position.
Derived from https://github.com/madebysource/animated-scrollto
Adapted to Mithril and rewritten to es6.
*/

import easing from './easing';

/*
opts:
    element: HTML Element
    to: position
    duration: seconds
    direction: 'vertical' or 'horizontal'


Function returns a Promise:

    scrollTo({
        element: scroller,
        to: left,
        duration: .5,
        direction: 'horizontal'
    }).then(() => {
        console.log('scroll done')
    });

*/
var scrollTo = function scrollTo(opts) {
    var element = opts.element;
    var which = opts.direction === 'horizontal' ? 'scrollLeft' : 'scrollTop';
    var to = opts.to;
    var duration = opts.duration * 1000;
    var start = element[which];
    var change = to - start;
    var animationStart = new Date().getTime();
    var animating = true;
    return new Promise(function (resolve) {
        var animateScroll = function animateScroll() {
            if (!animating) {
                return;
            }
            requestAnimFrame(animateScroll);
            var now = new Date().getTime();
            var percentage = (now - animationStart) / duration;
            var val = start + change * easing.easeInOutCubic(percentage);
            element[which] = val;
            if (percentage >= 1) {
                element[which] = to;
                animating = false;
                resolve();
            }
        };
        requestAnimFrame(animateScroll);
    });
};

var requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };
}();

export default scrollTo;