/*
Animated scroll to a position.
Derived from https://github.com/madebysource/animated-scrollto
Adapted to Mithril and rewritten to es6.
*/

import easing from 'polythene/common/easing';
import isomorphic from 'polythene/common/isomorphic';

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
const scrollTo = (opts) => {
    const element = opts.element;
    const which = (opts.direction === 'horizontal') ? 'scrollLeft' : 'scrollTop';
    const to = opts.to;
    const duration = opts.duration * 1000;
    const start = element[which];
    const change = to - start;
    const animationStart = new Date().getTime();
    let animating = true;
    return new Promise(function(resolve) {
        const animateScroll = function() {
            if (!animating) {
                return;
            }
            requestAnimFrame(animateScroll);
            const now = new Date().getTime();
            const percentage = ((now - animationStart) / duration);
            const val = start + change * easing.easeInOutCubic(percentage);
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

const requestAnimFrame = (() => {
	if(isomorphic.isServer()) {
		return;
	}
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || (callback => {
        window.setTimeout(callback, 1000 / 60);
    });
})();

export default scrollTo;
