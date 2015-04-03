'use strict';

require(['js/requirejs-config.js'], function () {
    main();
});

var main = function() {
    require([
        'mithril',
        'lib/icon/icon',
        'example/js/examples-page-nav',
        'lib/layout/layout'
    ], function(
        m,
        icon,
        page_nav
    ) {
		var block = function(label, iconClass) {
			return m('div', {class: 'p-block'}, [
				m('span', label),
				icon({
					iconClass: iconClass
				}).view()
			]);
		};

		// function(element, isInitialized, context) {
		var painted = function(element, isInitialized) {
		    if (isInitialized) return;
		    document.body.removeAttribute('unresolved');
		};

		var example = {};
		example.controller = function() {};
		example.view = function() {
			return m('div', {config: painted}, [
				page_nav('icon', 'Icon', 'Mithril version'),
				block('Menu', 'md-menu'),
				block('Add', 'md-add'),
				block('Refresh', 'md-refresh')
			]);
		};

		m.module(document.body, example);
    });
};