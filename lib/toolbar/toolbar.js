/*
Toolbar wraps 3 (optional) sub components:
- topBar
- middleBar
- bottomBar

Alternatively, 'content' can be passed as substitute for the bars.
Either 'content' or at least one bar must be passed.

Usage:

var toolbar = require('polythene/toolbar/toolbar');
toolbar({
    body: 
})

Options:

    tag: (optional) (String): default 'div'
    mode: (optional) (String): 'tall', 'medium-tall' or 'standard' (default); added to the class 'toolbar'
    bar (optional) (Function): returns Mithril template
    content (optional) (Mithril component or template): will be placed as 'topBar'
    topBar (optional) (Mithril component or template): shown unless content is passed
    middleBar (optional) (Mithril component or template): shown unless content is passed
    bottomBar (optional) (Mithril component or template): shown unless content is passed


TODO:

    Classes: justify, middleJustify, bottomJustify
    Toolbar adapts to mobile/narrow layout when there is a core-narrow class set on itself or any of its ancestors

*/

define([
    'mithril',
    'css!./toolbar'
], function(
    m
) {
    'use strict';

    var bar,
        barWrapper,
        component;

    barWrapper = function(className, content) {
        return m('div[center][horizontal][layout]', {class: ['toolbar-tools', className].join(' ')}, content);
    };

    bar = function(args) {
        var bars = [];
        if (args.content) {
            bars.push(barWrapper('topBar', args.content));
        } else {
            if (args.topBar) {
                bars.push(barWrapper('topBar', args.topBar));
            }
            if (args.middleBar) {
                bars.push(barWrapper('middleBar', args.middleBar));
            }
            if (args.bottomBar) {
                bars.push(barWrapper('bottomBar', args.bottomBar));
            }
        }
        return bars;
    };

    component = {
        view: function(ctrl, args) {
            args = args || {};
            var barClassName = 'topBar';
            barClassName = args.middleBar ? 'middleBar' : barClassName;
            barClassName = args.bottomBar ? 'bottomBar' : barClassName;
            return m((args.tag || 'div'), {
                    class: ['toolbar', barClassName, (args.mode || 'standard'), (args.className || '')].join(' ')
                },
                args.bar ? args.bar(args) : bar(args)
            );
        }
    };
    return m.component(component, arguments);
});
