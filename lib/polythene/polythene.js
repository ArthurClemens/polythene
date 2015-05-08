define(function() {
    'use strict';

    var defaultIconSet,
        transitionEvent;

    defaultIconSet = 'material-design-iconic-font';

    transitionEvent = (function() {
        var a, el, animations;
        el = document.createElement('fakeelement');
        animations = {
            'animation': 'animationend',
            'OAnimation': 'oAnimationEnd',
            'MozAnimation': 'animationend',
            'WebkitAnimation': 'webkitAnimationEnd'
        };
        for (a in animations) {
            if (el.style[a] !== undefined) {
                return animations[a];
            }
        }
    }).call();

    /*
    Polyfill source: 
    https://github.com/Financial-Times/polyfill-service/blob/master/polyfills/Object.assign/polyfill.js
    */
    if (!Object.assign) {
        Object.assign = function assign(target, source) {
            for (var index = 1, key; index in arguments; ++index) {
                source = arguments[index];
                for (key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
    }

    return {
        iconSet: defaultIconSet,

        whichTransitionEvent: function() {
            return transitionEvent;
        },

        insertContent: function(content, opts) {
            opts = opts || {};
            return [].concat(opts.before, content, opts.after);
        }
    };
});