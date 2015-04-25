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
                    className: [(opts.className || null), isTall ? tallClass : null].join(' ')
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
            var tag, props, content,
                header,
                initElements;

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

            opts.header = opts.header || {};
            header = opts.header ? m.component(headerComponent, opts.header, ctrl.isTall(), ctrl.tallClass()) : null;

            tag = opts.tag || 'div';
            props = p.componentProps({
                classList: ['header-panel'],
                props: {
                    mode: mode
                }
            }, opts, this, ctrl);
            
            initElements = function(outerContainer, inited) {
                if (inited) return;
                var headerElem = outerContainer.querySelector('.header') || outerContainer.querySelector('.toolbar');
                ctrl.headerElem(headerElem);
                ctrl.updateStates(0, true, mode, ctrl);
            };

            content = m('.outerContainer[vertical][layout]', {
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
            ]);
            return m(tag, props, p.embellish(content, opts));
        }
    };
});