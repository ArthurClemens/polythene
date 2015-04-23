define(function() {
    'use strict';

    var defaultIconSet = 'material-design-iconic-font';

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
        }
    };
}.call());