define([
    'css!./theme'
], function(
	p
) {
    'use strict';

	var html = document.querySelector('html');
    html.classList.add('theme');
});