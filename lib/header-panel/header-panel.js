/*
Usage:

var headerPanel = require('polythene/header-panel/header-panel');
m.component(headerPanel, {
    
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


    opts.header: Mithril template or toolbar options:
    header: {
        toolbar: {
            mode: 'tall',
            content: toolbarRow
        }
    },

    opts.body: Mithril template
    opts.mode (optional): defaults to opts.mode
    opts.tallClass
    opts.shadow
*/

// TODO: remove scroll listener on detach

define([
    'polythene/polythene/polythene',
    'mithril',
    'polythene/toolbar/toolbar',
    'css!./header-panel'
], function(
    p,
    m,
    toolbar
) {
    'use strict';

    var modeConfigs,
        getScrollerContainer,
        hasShadow,
        headerComponent;

    modeConfigs = {
        shadowAfterScroll: {
            'waterfall': 1,
            'waterfall-tall': 1
        },
        noShadow: {
            'seamed': 1,
            'cover': 1,
            'scroll': 1
        },
        tallMode: {
            'tall': true,
            'waterfall-tall': true
        },
        outerScroll: {
            'scroll': 1
        }
    };

    getScrollerContainer = function(mode) {
        return modeConfigs.outerScroll[mode] ? 'outer' : 'main';
    };

    hasShadow = function(mode, isTop) {
        if (modeConfigs.noShadow[mode]) {
            return false;
        }
        if (modeConfigs.shadowAfterScroll[mode] && isTop) {
            return false;
        }
        return true;
    };

    headerComponent = {
        view: function(ctrl, opts, isTall, tallClass) {
            opts = opts || {};
            if (opts.toolbar) {
                return m.component(toolbar, opts.toolbar);
            } else if (opts.content) {
                return m('.header animate', {
                    className: [(opts.className || ''), isTall ? tallClass : ''].join(' ')
                }, opts.content);
            } else {
                return m('div', opts);
            }
        }
    };

    return {
        controller: function() {
            return {
                headerElem: m.prop(),
                shadowElem: m.prop(),
                isTall: m.prop(false),
                isTop: m.prop(),
                tallClass: m.prop(),

                onScroll: function(scroller, mode, ctrl) {
                    var scrollPos = scroller.scrollTop,
                        isTop = scrollPos === 0;
                    this.updateStates(scrollPos, isTop, mode, ctrl);
                    ctrl.isTop(isTop);
                },

                updateStates: function(scrollPos, isTop, mode, ctrl) {
                    var shadowElem,
                        headerElem;

                    if (ctrl.isTop() !== isTop) {
                        // mode change
                        // toggle shadow
                        shadowElem = ctrl.shadowElem();
                        if (shadowElem) {
                            shadowElem.classList[(hasShadow(mode, isTop)) ? 'remove' : 'add']('hidden');
                        }
                        // toggle tall class
                        headerElem = ctrl.headerElem();
                        if (headerElem && ctrl.isTall()) {
                            headerElem.classList[isTop ? 'add' : 'remove'](ctrl.tallClass());
                        }
                    }
                }
            };
        },
        view: function(ctrl, opts) {
            var defaultProps, tag, header, props, initElements;
            opts = opts || {};

            var mode;
            if (opts.mode) {
                mode = opts.mode;
            } else if (opts.header.toolbar) {
                mode = opts.header.toolbar.mode;
            } else if (opts.header.content) {
                mode = opts.header.mode;
            }
            mode = mode || 'standard';
            ctrl.isTall(modeConfigs.tallMode[mode] || false);
            ctrl.tallClass(opts.tallClass || 'tall');
            header = opts.header ? m.component(headerComponent, opts.header, ctrl.isTall(), ctrl.tallClass()) : null;

            defaultProps = {
                class: ['header-panel', (opts.className || '')].join(' '),
                mode: mode
            };
            tag = opts.tag || 'div';

            props = p.handleEventProps(defaultProps, opts, ctrl, this);
            p.merge(props, opts.props);

            initElements = function(outerContainer, inited) {
                if (inited) return;
                var headerElem = outerContainer.querySelector('.header') || outerContainer.querySelector('.toolbar');
                ctrl.headerElem(headerElem);
                ctrl.updateStates(0, true, mode, ctrl);
            };

            return m(tag, props,
                m('.outerContainer[vertical][layout]', {
                    config: initElements
                }, [
                    header,
                    m('.mainPanel[flex][vertical][layout]', [
                        m('.mainContainer[flex]', {
                                onscroll: (getScrollerContainer(mode) === 'main') ? function() {
                                    ctrl.onScroll(this, mode, ctrl);
                                } : null
                            },
                            opts.content ? opts.content : null
                        ), (mode === 'seamed' || opts.shadow === false) ? null : m('.dropShadow', {
                            config: ctrl.shadowElem
                        })
                    ])
                ])
            );
        }
    };
});