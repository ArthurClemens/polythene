define(function() {
    'use strict';

    var defaultIconSet = 'material-design-iconic-font';

    return {
        iconSet: defaultIconSet,

        handleEventProps: function(props, args, ctrl, component) {
            var n, fn;
            var copy = this.copy(props);
            for (n in args.events) {
                fn = args.events[n];
                copy[n] = function(e) {
                    fn(e, component, ctrl);
                };
            }
            return copy;
        },

        merge: function(obj1, obj2) {
            if (!obj1 || !obj2) {
                return;
            }
            for (var n in obj2) {
                obj1[n] = obj2[n];
            }
        },

        copy: function(obj) {
            var n, copy = {};
            for (n in obj) {
                copy[n] = obj[n];
            }
            return copy;
        }
    };
}.call());
