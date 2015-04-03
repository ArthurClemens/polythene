define([
    'mithril'
],
function (
    m
) {
    'use strict';

    return function(baseFileName, title, subtitle) {
	    return m('div', {class: 'p-title-block'}, [
			m('a', {href: './' + baseFileName + '-plain.html'}, 'Plain'),
			m('span', 'Mithril'),
			m('h1', title,
				m('span', subtitle)
			)
		]);
	};
});