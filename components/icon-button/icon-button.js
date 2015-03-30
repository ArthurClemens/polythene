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
    var styler = require('../polythene/styler.js');
    styler('icon-button', require('./icon-button.jss'));
    var icon = require('../icon/icon.js');

    var container,
        inner,
        controller;

    opts = opts || {};

    // function(inner, opts, controller)
    container = opts.container || function(inner, opts) {
        var clickHandler = opts.clickHandler || null;
        return m('div', {class: 'icon-button', onclick: clickHandler}, inner);
    };

    // function(opts, controller)
    inner = opts.inner || function(opts) {
        return icon({
            iconClass: opts.iconClass || ''
        }).view();
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