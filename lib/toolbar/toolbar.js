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
            var defaultProps, tag, barClassName, props, eventProps;
            opts = opts || {};
            barClassName = 'topBar';
            barClassName = opts.middleBar ? 'middleBar' : barClassName;
            barClassName = opts.bottomBar ? 'bottomBar' : barClassName;
            defaultProps = {
                class: ['toolbar animate', barClassName, (opts.mode || 'standard'), (opts.className || null)].join(' ')
            };
            tag = opts.tag || 'div';
            eventProps = p.handleEventProps(opts.events, this, ctrl);
            props = p.assign(defaultProps, eventProps, opts.props);

            return m(tag, props,
                bar(opts)
            );
        }
    };
});