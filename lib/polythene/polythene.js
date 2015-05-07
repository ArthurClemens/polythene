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

    return {
        iconSet: defaultIconSet,

        componentProps: function(defaults, opts, component, ctrl) {
            var classList, eventProps, props;
            defaults.props = defaults.props || {};
            defaults.classList = defaults.classList || [];
            classList = defaults.classList;
            classList.push(opts.className || null);
            props = this.assign(defaults.props, {
                class: classList.join(' ')
            }, opts.props);
            return props;
        },

        /*
        Merge multiple objects, returns a copy.
        */
        assign: function(target) {
            if (target === undefined || target === null) {
                throw new TypeError('Cannot convert first argument to object');
            }

            var to = Object(target);
            for (var i = 1; i < arguments.length; i++) {
                var nextSource = arguments[i];
                if (nextSource === undefined || nextSource === null) {
                    continue;
                }
                nextSource = Object(nextSource);

                var keysArray = Object.keys(Object(nextSource));
                for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                    var nextKey = keysArray[nextIndex];
                    var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                    if (desc !== undefined && desc.enumerable) {
                        to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        },

        whichTransitionEvent: function() {
            return transitionEvent;
        },

        embellish: function(content, opts) {
            opts = opts || {};
            return [].concat(opts.before, content, opts.after);
        }
    };
});