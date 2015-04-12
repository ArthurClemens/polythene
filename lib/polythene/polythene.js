define(function() {
    'use strict';

    var defaultIconSet = 'material-design-iconic-font';

    return {
        iconSet: defaultIconSet,

        handleEventProps: function(props, args, ctrl, component) {
            var n, fn, props1 = {};
            for (n in props) {
                props1[n] = props[n];
            }
            for (n in args.events) {
                fn = args.events[n];
                props1[n] = function(e) {
                    fn(e, component, ctrl);
                };
            }
            return props1;
        },

        merge: function(obj1, obj2) {
            if (!obj1 || !obj2) {
                return;
            }
            for (var n in obj2) {
                obj1[n] = obj2[n];
            }
        }
    };
}.call());
