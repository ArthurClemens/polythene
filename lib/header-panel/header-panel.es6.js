'use strict';

import p from 'polythene/polythene/polythene';
import m from 'mithril';
import toolbar from 'polythene/toolbar/toolbar';
require('polythene-theme/header-panel/header-panel');

const DEFAULT_SHADOW_HEIGTH = 6;
const DEFAULT_HEADER_HEIGHT = 192;
const DEFAULT_CONDENSED_HEADER_HEIGHT = DEFAULT_HEADER_HEIGHT / 3;
const SCROLL_WATCH_TIMER = 150;

let component,
    createViewHeader,
    createViewContent,
    createView,
    modeConfigs,
    translateY,
    setTransform,
    createHeaderComponent,
    scroller // keep track of scrolling elements on the page
    ;

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
    setTransform = (style, string) => {
        style.transform = string;
    };
} else {
    setTransform = (style, string) => {
        style.webkitTransform = string;
    };
}

translateY = (s, y) => {
    let t = y === null ? '' : 'translate3d(0, ' + y + 'px, 0)';
    setTransform(s, t);
};

createHeaderComponent = (opts = {}) => {
    let tall, tallClass;

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

createViewHeader = (ctrl, opts = {}) => {
    let header,
        initHeaderContainer;

    initHeaderContainer = (headerContainer, inited) => {
        if (inited) {
            return;
        }
        ctrl.headerContainerElem(headerContainer);
    };
    header = opts.header ? createHeaderComponent(Object.assign({}, opts.header, ctrl.headerConfig)) : null;

    return m('.headerContainer', {
        config: initHeaderContainer
    }, [
        m('.bg-container', [
            m('.condensedHeaderBg'),
            m('.headerBg'),
            m('.image-dimmer')
        ]),
        header, (ctrl.mode() === 'seamed' || ctrl.shadow() === false) ? null : m('.dropShadow')
    ]);
};

createViewContent = (ctrl, scrollConfig, opts = {}) => {
    let initMainContainer;

    initMainContainer = (mainContainer, inited) => {
        if (inited) {
            return;
        }
        if (scrollConfig.main) {
            ctrl.scrollerElem(mainContainer);
        }
    };

    return [
        m('.mainContainer[flex]', {
                config: initMainContainer,
                onscroll: scrollConfig.main
            },
            opts.content ? opts.content : null)
    ];
};

createView = (ctrl, opts = {}) => {
    let tag, props, content,
        header,
        initOuterContainer,
        scrollerType,
        scrollConfig,
        handleScroll,
        renderContentOnScroll,
        ignoreContent;

    opts.header = opts.header || {};
    opts.configs = opts.configs || [];
    ctrl.init(ctrl);

    renderContentOnScroll = opts.renderContentOnScroll || false;
    ignoreContent = !renderContentOnScroll && ctrl.isScrolling();

    scrollerType = modeConfigs.outerScroll[ctrl.mode()] ? 'outer' : 'main';
    scrollConfig = {};
    handleScroll = ctrl.handleScroll.bind(ctrl);
    scrollConfig[scrollerType] = handleScroll;

    header = createViewHeader(ctrl, opts);
    tag = opts.tag || 'div';

    initOuterContainer = (outerContainer, inited) => {
        let headerElem,
            headerContainer,
            topBarElem,
            headerBg,
            condensedHeaderBg;

        headerElem = outerContainer.querySelector('.header') || outerContainer.querySelector('.toolbar');

        if (!headerElem) {
            return;
        }
        if (inited && ctrl.headerElem()) {
            return;
        }

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

    props = Object.assign({}, {
            mode: ctrl.mode(),
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
        header,
        ignoreContent ? {
            subtree: 'retain'
        } : createViewContent(ctrl, scrollConfig, opts)
    ]);
    return m(tag, props, p.insertContent(content, opts));
};

component = {
    controller: function(opts = {}) {
        let ctrl,
            mode,
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
            standard: () => {
                //
            },
            fixed: () => {
                let sTop,
                    isScrolled;
                sTop = ctrl.scrollerElem().scrollTop;
                isScrolled = (sTop !== 0);
                ctrl.showShadow(isScrolled);
                scrolled = isScrolled;
            },
            animated: () => {
                let sTop,
                    isScrolled,
                    headerElem;

                sTop = ctrl.scrollerElem().scrollTop;
                isScrolled = (sTop !== 0);
                if (isScrolled !== scrolled) {
                    headerElem = ctrl.headerElem();
                    if (headerElem && tall) {
                        headerElem.classList[isScrolled ? 'remove' : 'add'](tallClass);
                    }
                    ctrl.showShadow(isScrolled);
                    scrolled = isScrolled;
                }
            },
            dynamicHeader: () => {
                let sy, sTop, cascaded;

                cascaded = false;
                sTop = ctrl.scrollerElem().scrollTop;

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
                    ctrl.transformHeader(sy);
                }
                if (!modeConfigs.noShadow[opts.mode]) {
                    if (sTop > sy) {
                        cascaded = true;
                    }
                    ctrl.showShadow(cascaded);
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
            scrollWatchId: 0,
            isScrolling: m.prop(false),
            headerConfig: {
                tall: tall,
                tallClass: tallClass,
                animated: animated,
                fixed: fixed
            },

            init: (controller) => {
                ctrl = controller;
            },

            setHeight: h => {
                let mainContainer;

                if (opts.headerHeight === undefined) {
                    headerHeight = h + shadowHeight;
                    headerMargin = headerHeight - condensedHeaderHeight;
                }
                if (!fixed) {
                    mainContainer = ctrl.outerContainerElem().querySelector('.mainContainer');
                    mainContainer.style.paddingTop = h + 'px';
                }
                if (noReveal) {
                    ctrl.showShadow(false);
                }
            },

            handleScroll: (e) => {
                let fn;

                if (e) {
                    // this is a real scroll event
                    // instead of a programmatic call
                    ctrl.isScrolling(true);
                    scroller = ctrl;
                    clearTimeout(ctrl.scrollWatchId);
                    ctrl.scrollWatchId = setTimeout(() => {
                        ctrl.isScrolling(false);
                        scroller = undefined;
                    }, SCROLL_WATCH_TIMER);
                }

                if (mode === 'scroll') {
                    return;
                }
                if (modeConfigs.alwaysShadow[mode]) {
                    ctrl.showShadow(true);
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

            condenseHeader: (hy) => {
                let reset,
                    hbg,
                    chbg;

                reset = (hy === null);

                // adjust top bar in core-header so the top bar stays at the top
                if (!scrollAwayTopbar) {
                    if (ctrl.headerTopBarElem()) {
                        translateY(ctrl.headerTopBarElem().style, Math.min(hy, headerMargin));
                    }
                }

                // transition header bg
                hbg = ctrl.headerBg().style;
                if (hbg) {
                    if (!noDissolve) {
                        hbg.opacity = reset ? '' : (headerMargin - hy) / headerMargin;
                    }

                    // adjust header bg so it stays at the center
                    translateY(hbg, reset ? null : hy * backgroundScrollSpeed);

                    // transition condensed header bg
                    if (!noDissolve) {
                        chbg = ctrl.condensedHeaderBg().style;
                        chbg.opacity = reset ? '' : hy / headerMargin;
                        // adjust condensed header bg so it stays at the center
                        translateY(chbg, reset ? null : hy * backgroundScrollSpeed);
                    }
                }
            },

            transformHeader: (hy) => {
                translateY(ctrl.headerContainerElem().style, -hy);
                if (condenses) {
                    ctrl.condenseHeader(hy);
                }
                if (opts.transform) {
                    opts.transform({
                        y: hy,
                        height: headerHeight,
                        condensedHeight: condensedHeaderHeight
                    });
                }
            },

            showShadow: (cascaded) => {
                if (modeConfigs.alwaysShadow[mode]) {
                    cascaded = true;
                }
                ctrl.outerContainerElem().classList[cascaded ? 'add' : 'remove']('cascaded');
            }
        };
    },

    view: (ctrl, opts = {}) => {
        if (scroller && scroller !== ctrl) {
            // if we are scrolling,
            // don't render other header-panels
            return {subtree: 'retain'};
        } else {
            return createView(ctrl, opts);
        }
    }
};

export default component;
