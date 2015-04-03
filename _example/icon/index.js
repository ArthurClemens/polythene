'use strict';

// Styles
require('style/useable!css!../example-assets/example.css').use();
require('polythene/lib/layout');

// Content
var m = require('mithril');
var icon = require('polythene/lib/icon');

var block = function(label, iconClass) {
	return m('div', {class: 'p-block'}, [
		m('span', label),
		icon({
			iconClass: iconClass
		}).view()
	]);
};

var example = {};
example.controller = function() {};
example.view = function() {
	return [
		require('../example-assets/page-nav')('Icon', 'Mithril version'),
		block('Menu', 'md-menu'),
		block('Add', 'md-add'),
		block('Refresh', 'md-refresh')
	];
};

m.module(document.body, example);