define(function(require) {
    'use strict';

    return function(group, name, callback) {
        var path = 'polythene/svg/svgs/' + group + '/' + name + '.svg',
            requirePath = 'text!' + path + '!strip';
        
        require([requirePath], function(xml) {
            callback(xml);
        });
    };
});