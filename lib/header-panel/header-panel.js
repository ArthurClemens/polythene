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
        translateY,
        setTransform,
        createView,
        DEFAULT_SHADOW_HEIGTH = 6,
        DEFAULT_HEADER_HEIGHT = 192,
        DEFAULT_CONDENSED_HEADER_HEIGHT = DEFAULT_HEADER_HEIGHT / 3,
        createHeaderComponent;

    modeConfigs = {
        shadowAfterScroll: {
            'waterfall': 1,
            'waterfall-tall': 1
        },
        alwaysShadow: {
            'standard': 1,
            'tall': 1
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

    if (document.documentElement.style.transform !== undefined) {
        setTransform = function(style, string) {
            style.transform = string;
        };
    } else {
        setTransform = function(style, string) {
            style.webkitTransform = string;
        };
    }

    translateY = function(s, y) {
        var t = y === null ? '' : 'translate3d(0, ' + y + 'px, 0)';
        setTransform(s, t);
    };

    createHeaderComponent = function(opts) {
        var tall, tallClass;

        opts = opts || {};
        tall = opts.tall || false;
        tallClass = opts.tallClass || '';

        if (opts.toolbar) {
            opts.toolbar.class = [(opts.toolbar.class || null), tall ? tallClass : null].join(' ');
            return m.component(toolbar, opts.toolbar);
        } else if (opts.content) {
            return m(['.header', opts.animated ? ' .animate' : ''].join(' '), {
                class: [(opts.class || null), tall ? tallClass : null].join(' ')
            }, opts.content);
        } else {
            return m('div', opts);
        }
    };

    createView = function(ctrl, opts) {
        var tag, props, content,
            mode,
            header,
            initOuterContainer,
            initHeaderContainer,
            initMainContainer,
            scrollerType,
            scrollConfig,
            handleScroll;

        opts = opts || {};
        opts.header = opts.header || {};
        opts.configs = opts.configs || [];

        mode = ctrl.mode();
        scrollerType = modeConfigs.outerScroll[mode] ? 'outer' : 'main';
        scrollConfig = {};
        handleScroll = ctrl.handleScroll.bind(ctrl);
        scrollConfig[scrollerType] = handleScroll;

        initOuterContainer = function(outerContainer, inited) {
            var headerElem,
                headerContainer,
                topBarElem,
                headerBg,
                condensedHeaderBg;

            headerElem = outerContainer.querySelector('.header') || outerContainer.querySelector('.toolbar');

            if (!headerElem) return;
            if (inited && ctrl.headerElem()) return;

            headerContainer = outerContainer.querySelector('.headerContainer');
            topBarElem = headerContainer.querySelector('.topBar');
            headerBg = headerContainer.querySelector('.headerBg');
            condensedHeaderBg = headerContainer.querySelector('.condensedHeaderBg');

            ctrl.outerContainerElem(outerContainer);
            ctrl.headerElem(headerElem);
            ctrl.headerTopBarElem(topBarElem);
            ctrl.headerBg(headerBg);
            ctrl.condensedHeaderBg(condensedHeaderBg);

            if (!opts.animated) {
                ctrl.setHeight(headerContainer.clientHeight);
            }
            if (scrollConfig.outer) {
                ctrl.scrollerElem(outerContainer);
            }
            handleScroll();
        };

        initHeaderContainer = function(headerContainer, inited) {
            if (inited) return;
            ctrl.headerContainerElem(headerContainer);
        };

        initMainContainer = function(mainContainer, inited) {
            if (inited) return;
            if (scrollConfig.main) {
                ctrl.scrollerElem(mainContainer);
            }
        };

        header = opts.header ? createHeaderComponent(Object.assign({}, opts.header, ctrl.headerConfig)) : null;
        tag = opts.tag || 'div';

        props = Object.assign({}, {
                mode: mode,
                class: ['header-panel', opts.class].join(' '),
                config: opts.config
            },
            opts.animated ? {
                animated: true
            } : null,
            ctrl.fixed() ? {
                fixed: true
            } : null);

        content = m('.outerContainer[vertical][layout]', {
            config: initOuterContainer,
            onscroll: scrollConfig.outer
        }, [
            m('.headerContainer', {
                config: initHeaderContainer
            }, [
                m('.bg-container', [
                    m('.condensedHeaderBg'),
                    m('.headerBg')
                ]),
                header,
                (mode === 'seamed' || ctrl.shadow() === false) ? null : m('.dropShadow')
            ]),
            m('.mainContainer[flex]', {
                config: initMainContainer,
                onscroll: scrollConfig.main
            }, opts.content ? opts.content : null)
        ]);
        return m(tag, props, p.insertContent(content, opts));
    };

    return {
        controller: function(opts) {
            var mode,
                tall,
                tallClass,
                animated,
                fixed,
                condenses,
                scrollAwayTopbar,
                noReveal,
                keepCondensedHeader,
                noDissolve,
                backgroundScrollSpeed,
                y,
                scrolled,
                prevScrollTop,
                shadowHeight,
                headerMargin,
                headerHeight,
                condensedHeaderHeight,
                handleScrollFns;

            opts = opts || {};

            if (opts.mode) {
                mode = opts.mode;
            } else if (opts.header.toolbar) {
                mode = opts.header.toolbar.mode;
            } else if (opts.header.content) {
                mode = opts.header.mode;
            }
            mode = mode || 'standard';

            tall = modeConfigs.tallMode[mode] || false;
            tallClass = opts.tallClass || 'tall';
            animated = opts.animated || false;
            fixed = opts.fixed || false;
            condenses = opts.condenses || false;
            scrollAwayTopbar = opts.scrollAwayTopbar || false;
            noReveal = opts.noReveal || false;
            keepCondensedHeader = opts.keepCondensedHeader || false;
            noDissolve = opts.noDissolve || false;
            backgroundScrollSpeed = (opts.backgroundScrollSpeed !== undefined) ? opts.backgroundScrollSpeed : 0.5;
            y = 0;
            scrolled = false;
            prevScrollTop = 0;
            // defaults, finally set with setHeight
            shadowHeight = DEFAULT_SHADOW_HEIGTH;
            headerHeight = (opts.headerHeight || DEFAULT_HEADER_HEIGHT) + shadowHeight;
            condensedHeaderHeight = (opts.condensedHeaderHeight || DEFAULT_CONDENSED_HEADER_HEIGHT) + shadowHeight;
            headerMargin = headerHeight - condensedHeaderHeight;

            handleScrollFns = {
                standard: function() {
                    //
                },
                fixed: function() {
                    var sTop,
                        isScrolled;
                    sTop = this.scrollerElem().scrollTop;
                    isScrolled = (sTop !== 0);
                    this.toggleShadow(isScrolled);
                    scrolled = isScrolled;
                },
                animated: function() {
                    var sTop,
                        isScrolled,
                        headerElem;
                    sTop = this.scrollerElem().scrollTop;
                    isScrolled = (sTop !== 0);
                    if (isScrolled !== scrolled) {
                        headerElem = this.headerElem();
                        if (headerElem && tall) {
                            headerElem.classList[isScrolled ? 'remove' : 'add'](tallClass);
                        }
                        this.toggleShadow(isScrolled);
                        scrolled = isScrolled;
                    }
                },
                dynamicHeader: function() {
                    var sy, sTop, cascaded;

                    cascaded = false;
                    sTop = this.scrollerElem().scrollTop;

                    if (sTop < headerMargin) {
                        sy = sTop;
                    } else {
                        sy = Math.min(keepCondensedHeader ? headerMargin : headerHeight,
                            Math.max(0, ((noReveal || keepCondensedHeader) ? sTop : y + sTop - prevScrollTop))
                        );

                        if (condenses && prevScrollTop >= sTop && sTop > headerMargin) {
                            sy = Math.max(sy, headerMargin);
                        }
                    }
                    if (sy !== y) {
                        this.transformHeader(sy);
                    }
                    if (!noReveal && !modeConfigs.noShadow[opts.mode]) {
                        if (sTop > sy && sy > 0) {
                            cascaded = true;
                        }
                        this.toggleShadow(cascaded);
                    }
                    y = sy;
                    prevScrollTop = Math.max(sTop, 0);
                }
            };

            return {
                view: m.prop(),
                scrollerElem: m.prop(),
                outerContainerElem: m.prop(),
                headerContainerElem: m.prop(),
                headerTopBarElem: m.prop(),
                headerElem: m.prop(),
                headerBg: m.prop(),
                condensedHeaderBg: m.prop(),
                mode: m.prop(mode),
                fixed: m.prop(fixed),
                shadow: m.prop((opts.shadow !== undefined && !opts.shadow) ? false : true),
                prevScrollTop: m.prop(0),
                isTop: m.prop(),
                headerConfig: {
                    tall: tall,
                    tallClass: tallClass,
                    animated: animated,
                    fixed: fixed
                },

                setHeight: function(h) {
                    var mainContainer;

                    if (opts.headerHeight === undefined) {
                        headerHeight = h + shadowHeight;
                        headerMargin = headerHeight - condensedHeaderHeight;
                    }
                    if (!fixed) {
                        mainContainer = this.outerContainerElem().querySelector('.mainContainer');
                        mainContainer.style.paddingTop = h + 'px';
                    }
                },

                handleScroll: function(e) {
                    var fn;

                    if (modeConfigs.alwaysShadow[mode]) {
                        this.toggleShadow(true);
                    }
                    if (animated) {
                        fn = handleScrollFns.animated;
                        fn.bind(this).call();
                    }
                    if (mode === 'standard') {
                        fn = handleScrollFns.standard;
                    } else if (fixed) {
                        fn = handleScrollFns.fixed;
                    } else {
                        fn = handleScrollFns.dynamicHeader;
                    }
                    fn.bind(this).call();
                    if (e && opts.scroll) {
                        opts.scroll(e);
                    }
                },

                condenseHeader: function(y) {
                    var reset,
                        hbg,
                        chbg;

                    reset = (y === null);

                    // adjust top bar in core-header so the top bar stays at the top
                    if (!scrollAwayTopbar) {
                        translateY(this.headerTopBarElem().style, Math.min(y, headerMargin));
                    }

                    // transition header bg
                    hbg = this.headerBg().style;
                    if (hbg) {
                        if (!noDissolve) {
                            hbg.opacity = reset ? '' : (headerMargin - y) / headerMargin;
                        }

                        // adjust header bg so it stays at the center
                        translateY(hbg, reset ? null : y * backgroundScrollSpeed);

                        // transition condensed header bg
                        if (!noDissolve) {
                            chbg = this.condensedHeaderBg().style;
                            chbg.opacity = reset ? '' : y / headerMargin;
                            // adjust condensed header bg so it stays at the center
                            translateY(chbg, reset ? null : y * backgroundScrollSpeed);
                        }
                    }
                },

                transformHeader: function(y) {
                    translateY(this.headerContainerElem().style, -y);
                    if (condenses) {
                        this.condenseHeader(y);
                    }
                    if (opts.transform) {
                        opts.transform({
                            y: y,
                            height: headerHeight,
                            condensedHeight: condensedHeaderHeight
                        });
                    }
                },

                toggleShadow: function(cascaded) {
                    if (modeConfigs.alwaysShadow[mode]) {
                        cascaded = true;
                    }
                    this.outerContainerElem().classList[cascaded ? 'add' : 'remove']('cascaded');
                }
            };
        },

        view: function(ctrl, opts) {
            var view = ctrl.view();
            if (!view || opts.refresh) {
                view = createView(ctrl, opts);
                ctrl.view(view);
            }
            return view;
        }
    };
});