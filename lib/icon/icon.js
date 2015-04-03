define([
    'mithril',
    'lib/font-iconic/font-iconic',
    'css!./icon'
    ],
function (
    m
) {
    'use strict';

    return function(opts) {
        var controller,
            container,
            inner;

        opts = opts || {};

        // function(inner, opts, controller)
        container = opts.container || function(inner) {
            return m('div', {class: 'icon'}, inner);
        };

        inner = opts.inner || function(opts) {
            var iconClass = opts.iconClass || '';
            return m('i[fit]', {class: ['md', iconClass].join(' ')});
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
});