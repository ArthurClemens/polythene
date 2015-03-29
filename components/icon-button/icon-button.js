/*

var iconButton = require('components/icon-button.js');
var myIconButton = new iconButton(opts);
var view = myIconButton.view();

	opts.controller (optional)
	opts.container (optional): function(inner, opts, controller) => Mithril template
	opts.inner (optional): function(opts) => Mithril template
	opts.clickHandler: function(e) => BOOL
	opts.iconClass: CSS class name from material-design-iconic-font

*/
module.exports = function(opts) {
    'use strict';

    var m = require('mithril');
    var style = require('../polythene/style.js');
    style('icon-button', require('./icon-button.jss'));
    require("../icon/icon.js");

    var container,
    	inner,
    	controller;

    opts = opts || {};

    container = opts.container || function(inner, opts, controller) {
    	var clickHandler = opts.clickHandler || null;
        return m('div', {class: 'icon-button', onclick: clickHandler}, inner);
    };

    inner = opts.inner || function(opts, controller) {
    	var iconClass = opts.iconClass || '';
    	return m('div', {class: 'icon'}, 
    		m('i[fit]', {class: ['md', iconClass].join(' ')})
    	);
    };

    controller = opts.controller || function() {};

	return {
        controller: controller,
        view: function(controller) {
        	return container(
                inner(opts, controller),
                opts,
                controller
            )
        }
    }
};