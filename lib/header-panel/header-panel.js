/*
Usage:

var headerPanel = require('polythene/header-panel/header-panel');
headerPanel({
    
})

Important: The header-panel will not display if its parent does not have a height.


Options:

TODO: rewrite

    opts.mode

        Controls header and scrolling behavior. Options are
        `standard`, `seamed`, `waterfall`, `waterfall-tall`, `scroll` and 
        `cover`. Default is `standard`.

        `standard`: The header is a step above the panel. The header will consume the
        panel at the point of entry, preventing it from passing through to the
        opposite side.

        `seamed`: The header is presented as seamed with the panel.

        `waterfall`: Similar to standard mode, but header is initially presented as
        seamed with panel, but then separates to form the step.

        `waterfall-tall`: The header is initially taller (`tall` class is added to
        the header).  As the user scrolls, the header separates (forming an edge)
        while condensing (`tall` class is removed from the header).

        `scroll`: The header keeps its seam with the panel, and is pushed off screen.

        `cover`: The panel covers the whole `core-header-panel` including the
        header. This allows user to style the panel in such a way that the panel is
        partially covering the header.


    opts.header: Mithril template
    opts.body: Mithril template
    opts.mode (optional): defaults to opts.mode
    opts.tallClass
    opts.shadow
    opts.animateDuration
*/

// TODO: remove scroll listener on detach

define([
    'polythene/polythene/polythene',
    'mithril',
    'css!./header-panel'
], function(
    p,
    m
) {
    'use strict';

    var modeConfigs,
        getScrollerContainer,
        headerComponent;

    modeConfigs = {
        shadowMode: {
            'waterfall': 1,
            'waterfall-tall': 1
        },
        noShadow: {
            'seamed': 1,
            'cover': 1,
            'scroll': 1
        },
        tallMode: {
            'tall': 1,
            'waterfall-tall': 1
        },
        outerScroll: {
            'scroll': 1
        }
    };

    getScrollerContainer = function(mode) {
        return modeConfigs.outerScroll[mode] ? 'outer' : 'main';
    };

    headerComponent = {
        view: function(ctrl, opts, headerPanelOpts) {
            opts = opts || {};
            var tallClass = opts.tallClass || 'tall';
            if (opts.content) {
                opts.className = opts.className || '';

                if (modeConfigs.tallMode[headerPanelOpts.mode]) {
                    opts.className += ' ' + tallClass;
                }
                return m('.header', {
                    className: opts.className
                }, opts.content);
            } else {
                return m('div', opts);
            }
        }
    };

    return {
        controller: function(opts) {
            return {
                initScroll: function(element, isInitialized) {
                    if (isInitialized) return;
                    if (opts.mode !== 'tall') return; // FIXME: premature optimization?

                    element.addEventListener('scroll', function(e) {
                        console.log('scrollHandler', e);
                    });

                    //context.onunload = function() {
                    //    element.removeEventListener('scroll', scrollHandler);
                    //    console.log('removeEventListener');
                    //}
                },
                isTall: false
            };
        },
        view: function(ctrl, opts) {
            var defaultProps, tag, header, scrollerContainer, props;
            opts = opts || {};
            defaultProps = {
                class: ['header-panel', (opts.className || '')].join(' ')
            };
            tag = opts.tag || 'div';

            header = opts.header ? m.component(headerComponent, opts.header, opts) : null;
            scrollerContainer = getScrollerContainer(opts.mode);
            props = p.handleEventProps(defaultProps, opts, ctrl, this);
            p.merge(props, opts.props);

            //opts.shadow = opts.shadow || false; // TODO: not used yet
            //opts.animateDuration = 200; // TODO: not used yet

            return m(tag, props,
                m('.outerContainer[vertical][layout]', {
                    config: scrollerContainer === 'outer' ? ctrl.initScroll : ''
                }, [
                    header,
                    m('.mainPanel[flex][vertical][layout]', [
                        m('.mainContainer[flex]', {
                            config: scrollerContainer === 'main' ? ctrl.initScroll : ''
                        }, opts.content ? opts.content : null),
                        opts.mode === 'seamed' ? '' : m('.dropShadow')
                    ])
                ])
            );
        }
    };
});