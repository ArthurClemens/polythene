define([
    'polythene/polythene/polythene',
    'mithril',
    'css!./toolbar'
], function(
    p,
    m
) {
    'use strict';

    var bar,
        barWrapper;

    barWrapper = function(className, content) {
        return m('div[center][horizontal][layout]', {
            class: ['toolbar-tools', className].join(' ')
        }, content);
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
            var tag, props, content,
                barClassName;
            opts = opts || {};
            barClassName = 'topBar';
            barClassName = opts.middleBar ? 'middleBar' : barClassName;
            barClassName = opts.bottomBar ? 'bottomBar' : barClassName;

            tag = opts.tag || 'div';
            props = p.componentProps({
                classList: ['toolbar animate', barClassName, (opts.mode || 'standard')]
            }, opts, this, ctrl);

            content = bar(opts);

            return m(tag, props, p.embellish(content, opts));
        }
    };
});