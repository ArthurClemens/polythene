'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

var _easing = require('polythene/common/easing');

var _easing2 = _interopRequireDefault(_easing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
opts:
    element: HTML Element
    to: position
    duration: seconds
    direction: 'vertical' or 'horizontal'


Function is thennable:

    scrollTo({
        element: scroller,
        to: left,
        duration: .5,
        direction: 'horizontal'
    }).then(() => {
        console.log('scroll done')
    });

*/
/*
Animated scroll to a position.
Derived from https://github.com/madebysource/animated-scrollto
Adapted to Mithril and rewritten to es6.
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
    var deferred = _mithril2.default.deferred();
    var animateScroll = function animateScroll() {
        if (!animating) {
            return;
        }
        requestAnimFrame(animateScroll);
        var now = new Date().getTime();
        var percentage = (now - animationStart) / duration;
        var val = start + change * _easing2.default.easeInOutCubic(percentage);
        element[which] = val;
        if (percentage >= 1) {
            element[which] = to;
            animating = false;
            deferred.resolve();
        }
    };
    requestAnimFrame(animateScroll);
    return deferred.promise;
};

var requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };
}();

exports.default = scrollTo;
module.exports = exports['default'];

//# sourceMappingURL=scroll-to.js.map