'use strict';
var cache = {};

module.exports = function (key, rules) {
    var jss = require('jss');

    if (!key) return;
    if (!cache[key]) {
        var sheet = jss.createStyleSheet(rules, {named: false});
        sheet.attach();
        cache[key] = true;
    }
};