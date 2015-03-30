'use strict';

module.exports = (function () {
    var jss = require('jss');
    var jssCache = {};

    return {
        addStyle: function(key, rules) {
            if (!key) return;
            if (!jssCache[key]) {
                var sheet = jss.createStyleSheet(rules, {named: false});
                sheet.attach();
                jssCache[key] = true;
            }
        },
        addStyleUrl: function(url) {
            var el = document.createElement('link');
            el.setAttribute('rel', 'stylesheet');
            el.setAttribute('type', 'text/css');
            el.setAttribute('href', url);
            document.head.appendChild(el);
        }
    };
}());