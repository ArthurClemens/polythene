define(function() {
    'use strict';

    var defaultIconSet,
        transitionEvent,
        Observable;

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

    Observable = function() {
        var channels = {};

        return {
            register: function(subscriptions, controller) {
                return function self() {
                    var ctrl = new controller();
                    var reload = controller.bind(ctrl);
                    Observable.on(subscriptions, reload);
                    ctrl.onunload = function() {
                        Observable.off(reload);
                    };
                    return ctrl;
                };
            },
            on: function(subscriptions, callback) {
                subscriptions.forEach(function(subscription) {
                    if (!channels[subscription]) channels[subscription] = [];
                    channels[subscription].push(callback);
                });
            },
            off: function(callback) {
                for (var channel in channels) {
                    var index = channels[channel].indexOf(callback);
                    if (index > -1) channels[channel].splice(index, 1);
                }
            },
            trigger: function(channel, args) {
                console.log('channels', channels);
                channels[channel].map(function(callback) {
                    callback(args);
                });
            }
        };
    }.call();

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
            if (opts.before) {
                content.unshift(opts.before);
            }
            if (opts.after) {
                content.push(opts.after);
            }
            return content;
        },

        observable: Observable
    };
});