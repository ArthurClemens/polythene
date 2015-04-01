module.exports = function(title, subtitle) {
    'use strict';

    var m = require('mithril');
    return m('div', {class: 'p-title-block'}, [
		m('a', {href: './plain.html'}, 'Plain'),
		m('span', 'Mithril'),
		m('h1', title,
			m('span', subtitle)
		)
	]);
};