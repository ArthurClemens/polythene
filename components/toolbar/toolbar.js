/*

var toolbar = require('components/toolbar.js');
var myToolbar = new toolbar(opts);
var view = myToolbar.view();

    opts.container (optional): function(inner, mode) => Mithril template
    opts.inner (optional): function() => Mithril template
    opts.mode (optional): 'tall', 'medium-tall' or 'standard' (default)
    opts.bar (optional): bar contructor => Mithril template
    opts.body (optional): Mithril template
    opts.topBar (optional): shown if no opts.body is passed => Mithril template
    opts.middleBar (optional): shown if no opts.body is passed => Mithril template
    opts.bottomBar (optional): shown if no opts.body is passed => Mithril template


*/
module.exports = function(opts) {
    'use strict';

    var m = require('mithril');

    var p = require('../polythene/polythene');
    p.addStyle('toolbar', require('./toolbar.jss'));

    var container,
        inner,
        controller,
    	bar;

    opts = opts || {};
	opts.mode = opts.mode || 'standard';

    bar = opts.bar || function(body, className) {
        return body === null ? null : m('div[center][horizontal][layout]', {class: ['toolbar-tools', className].join(' ')}, body);
    };

    // function(inner, opts, controller)
    container = opts.container || function(inner, opts) {
        return m('div', {class: ['toolbar', opts.mode].join(' ')}, inner);
    };

    // function(opts, controller)
    inner = opts.inner || function(opts) {
        var body = opts.body || null;
        var topBar = !body && opts.topBar || null;
        var middleBar = !body && opts.middleBar || null;
        var bottomBar = !body && opts.bottomBar || null;

        return [
            bar(body, 'topBar'),
            bar(topBar, 'topBar'),
            bar(middleBar, 'middleBar'),
            bar(bottomBar, 'bottomBar')
        ];
    };

    controller = opts.controller || function() {};

	return {
        controller: controller,
        view: function(controller) {
            return container(
                inner(opts, controller),
                opts,
                controller
            );
        }
    };
};
