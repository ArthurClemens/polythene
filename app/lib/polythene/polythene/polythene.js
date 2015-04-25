define([
    'mithril',
    'polythene/ripple/ripple'
], function(
    m,
    ripple
) {
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

        handleEventProps: function(eventProps, component, ctrl) {
            var n, fn, copy;
            if (eventProps === undefined || eventProps === null) {
                return {};
            }
            copy = {};
            eventProps = eventProps || {};
            for (n in eventProps) {
                fn = eventProps[n];
                copy[n] = function(e) {
                    fn(e, component, ctrl);
                };
            }
            return copy;
        },

        componentProps: function(defaults, opts, component, ctrl) {
            var classList, eventProps, props;
            defaults.props = defaults.props || {};
            defaults.classList = defaults.classList || [];
            opts.events = opts.events || [];
            classList = defaults.classList;
            classList.push(opts.className || null);
            eventProps = this.handleEventProps(opts.events, component, ctrl);
            props = this.assign(defaults.props, {class: classList.join(' ')}, eventProps, opts.props);
            return props;
        },

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
            if (opts.ripple) {
                content.push(m.component(ripple, opts.ripple, this, m));
            }
            return content;
        }
    };
});