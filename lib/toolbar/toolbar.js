/*
Toolbar wraps 3 (optional) sub components:
- topBar
- middleBar
- bottomBar

Alternatively, 'content' can be passed as substitute for the bars.
Either 'content' or at least one bar must be passed.

Usage:

var toolbar = require('polythene/toolbar/toolbar');
m.component(toolbar, {
    body: 
})

Options:

    tag: (optional) (String): default 'div'
    mode: (optional) (String): 'tall', 'medium-tall' or 'standard' (default); added to the class 'toolbar'
    bar (optional) (Function): returns Mithril template
    content (optional) (Mithril component or template): will be placed as 'topBar'

    Each bar contains the class 'toolbar-tools', plus the name of the bar type ('topBar' etc.)

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
        barWrapper;

    barWrapper = function(className, content) {
        return m('div[center][horizontal][layout]', {class: ['toolbar-tools', className].join(' ')}, content);
    };

    bar = function(opts) {
        var bars = [];
        if (opts.content) {
            bars.push(barWrapper('topBar', opts.content));
        } else {
            if (opts.topBar) {
                bars.push(barWrapper('topBar', opts.topBar));
            }
            if (opts.middleBar) {
                bars.push(barWrapper('middleBar', opts.middleBar));
            }
            if (opts.bottomBar) {
                bars.push(barWrapper('bottomBar', opts.bottomBar));
            }
        }
        return bars;
    };

    return {
        view: function(ctrl, opts) {
            opts = opts || {};
            var barClassName = 'topBar';
            barClassName = opts.middleBar ? 'middleBar' : barClassName;
            barClassName = opts.bottomBar ? 'bottomBar' : barClassName;
            return m((opts.tag || 'div'), {
                    class: ['toolbar animate', barClassName, (opts.mode || 'standard'), (opts.className || '')].join(' ')
                },
                opts.bar ? opts.bar(opts) : bar(opts)
            );
        }
    };
});
