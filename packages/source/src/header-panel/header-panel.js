import '../common/object.assign';
import p from '../polythene/polythene';
import events from '../common/events';
import m from 'mithril';
import toolbar from '../toolbar/toolbar';
import './theme/theme';

const CSS_CLASSES = {
    panel: 'pe-header-panel',
    header: 'pe-header',
    dropShadow: 'pe-header-panel__drop-shadow',
    outerContainer: 'pe-header-panel__outer-container',
    headerContainer: 'pe-header-panel__header-container',
    backgroundContainer: 'pe-header-panel__background-container',
    condensedBackground: 'pe-header-panel__condensed-background',
    headerBackground: 'pe-header-panel__header-background',
    mediaDimmer: 'pe-header-panel__media-dimmer',
    mainContainer: 'pe-header-panel__main-container',

    headerAnimated: 'pe-header--animated',
    fixed: 'pe-header-panel--fixed',
    cascaded: 'pe-header-panel--cascaded',
    modeCover: 'pe-header-panel--cover',
    modeScroll: 'pe-header-panel--scroll',
    modeSeamed: 'pe-header-panel--seamed',
    modeStandard: 'pe-header-panel--standard',
    modeTall: 'pe-header-panel--tall',
    modeWaterfallTall: 'pe-header-panel--waterfall-tall',
    modeWaterfall: 'pe-header-panel--waterfall',

    // lookups:
    toolbar: 'pe-toolbar',
    toolbarTopbar: 'pe-toolbar__bar--top',
    headerTall: 'pe-header--tall'
};

const DEFAULT_SHADOW_HEIGTH = 6;
const DEFAULT_HEADER_HEIGHT = 192;
const DEFAULT_CONDENSED_HEADER_HEIGHT = DEFAULT_HEADER_HEIGHT / 3;
const SCROLL_WATCH_TIMER = 150;

let scroller; // keep track of scrolling elements on the page
const scrollPositions = {};

const modeConfigs = {
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

const modeClasses = {
    'cover': CSS_CLASSES.modeCover,
    'scroll': CSS_CLASSES.modeScroll,
    'seamed': CSS_CLASSES.modeSeamed,
    'standard': CSS_CLASSES.modeStandard,
    'tall': CSS_CLASSES.modeTall,
    'waterfall-tall': CSS_CLASSES.modeWaterfallTall,
    'waterfall': CSS_CLASSES.modeWaterfall
};

const classForMode = (mode = 'standard') => {
    return modeClasses[mode];
};

const setTransform = (document.documentElement.style.transform !== undefined) ? ((style, string) => {
    style.transform = string;
}) : ((style, string) => {
    style.webkitTransform = string;
});

const translateY = (style, y) => {
    const t = (y === null) ? '' : 'translate3d(0, ' + y + 'px, 0)';
    setTransform(style, t);
};

const createHeaderComponent = (opts = {}) => {
    const tall = opts.tall || false;
    const tallClass = opts.tallClass || '';
    const toolbarOpts = opts.toolbar;
    if (toolbarOpts) {
        toolbarOpts.class = [
            (toolbarOpts.class || null),
            tall ? tallClass : null
        ].join(' ');
        if (!toolbarOpts.topBar) {
            toolbarOpts.topBar = m('div');
        }
        return m(toolbar, toolbarOpts);
    } else if (opts.content) {
        return m('div', {
            class: [
                CSS_CLASSES.header,
                (opts.class || null),
                (tall ? tallClass : null),
                (opts.animated ? CSS_CLASSES.headerAnimated : '')
            ].join(' ')
        }, opts.content);
    } else {
        return m('div', opts);
    }
};

const createViewHeader = (ctrl, opts = {}) => {
    const initHeaderContainer = (headerContainer, inited) => {
        if (inited) {
            return;
        }
        ctrl.headerContainerElem = headerContainer;
    };
    const header = opts.header ? createHeaderComponent(Object.assign({}, opts.header, ctrl.headerConfig)) : null;
    return m('div', {
        class: CSS_CLASSES.headerContainer,
        config: initHeaderContainer
    }, [
        m('div', {
            class: CSS_CLASSES.backgroundContainer
        }, [
            m('div', {class: CSS_CLASSES.condensedBackground}),
            m('div', {class: CSS_CLASSES.headerBackground}),
            m('div', {class: CSS_CLASSES.mediaDimmer})
        ]),
        header,
        (ctrl.mode === 'seamed' || ctrl.shadow === false) ? null : m('div', {class: CSS_CLASSES.dropShadow})
    ]);
};

const createViewContent = (ctrl, scrollConfig, opts = {}) => {
    const initMainContainer = (mainContainer, inited) => {
        if (inited) {
            return;
        }
        if (scrollConfig.main) {
            ctrl.scrollerElem = mainContainer;
        }
    };
    return [
        m('div', {
            class: CSS_CLASSES.mainContainer,
            config: initMainContainer,
            onscroll: (e) => {
                scrollConfig.main(e);
                events.emit('scroll', e);
                ctrl.storeScrollPosition(e.target.scrollTop);
            }
        },
        opts.content ? opts.content : null)
    ];
};

const createView = (ctrl, opts = {}) => {
    opts.header = opts.header || {};
    opts.configs = opts.configs || [];
    ctrl.init(ctrl);

    const updateContentOnScroll = opts.updateContentOnScroll || false;
    const ignoreContent = !updateContentOnScroll && ctrl.isScrolling;
    const scrollerType = modeConfigs.outerScroll[ctrl.mode] ? 'outer' : 'main';
    const handleScroll = ctrl.handleScroll.bind(ctrl);
    const header = createViewHeader(ctrl, opts);
    const tag = opts.tag || 'div';

    const scrollConfig = {};
    scrollConfig[scrollerType] = handleScroll;

    const initOuterContainer = (outerContainer, inited) => {
        const headerElem = outerContainer.querySelector('.' + CSS_CLASSES.header) || outerContainer.querySelector('.' + CSS_CLASSES.toolbar);
        if (!headerElem) {
            return;
        }
        if (inited && ctrl.headerElem) {
            return;
        }
        const headerContainer = outerContainer.querySelector('.' + CSS_CLASSES.headerContainer);
        const topBarElem = headerContainer.querySelector('.' + CSS_CLASSES.toolbarTopbar);
        const headerBg = headerContainer.querySelector('.' + CSS_CLASSES.headerBackground);
        const condensedHeaderBg = headerContainer.querySelector('.' + CSS_CLASSES.condensedBackground);

        ctrl.outerContainerElem = outerContainer;
        ctrl.headerElem = headerElem;
        ctrl.headerTopBarElem = topBarElem;
        ctrl.headerBg = headerBg;
        ctrl.condensedHeaderBg = condensedHeaderBg;

        if (!opts.animated) {
            ctrl.setHeight(headerContainer.clientHeight);
        }
        if (scrollConfig.outer) {
            ctrl.scrollerElem = outerContainer;
        }

        ctrl.restoreScrollPosition();
    };

    const props = Object.assign({}, {
        class: [
            CSS_CLASSES.panel,
            ctrl.fixed ? CSS_CLASSES.fixed : null,
            classForMode(ctrl.mode),
            opts.class
        ].join(' '),
        id: opts.id || '',
        config: (el, inited) => {
            if (inited) {
                return;
            }
            ctrl.headerPanelElem = el;
        }
    });

    const content = m('div', {
        class: CSS_CLASSES.outerContainer,
        config: initOuterContainer,
        onscroll: (e) => {
            scrollConfig.outer(e);
            events.emit('scroll', e);
        }
    }, [
        header,
        ignoreContent ? {
            subtree: 'retain'
        } : createViewContent(ctrl, scrollConfig, opts)
    ]);
    return m(tag, props, [opts.before, content, opts.after]);
};

const component = {
    controller: (opts = {}) => {
        let ctrl,
            mode,
            y,
            scrolled,
            prevScrollTop,
            headerMargin,
            headerHeight;

        if (opts.mode) {
            mode = opts.mode;
        } else if (opts.header && opts.header.toolbar) {
            mode = opts.header.toolbar.mode;
        } else if (opts.header && opts.header.content) {
            mode = opts.header.mode;
        }
        mode = mode || 'standard';
        const tall = modeConfigs.tallMode[mode] || false;
        const tallClass = opts.tallClass || CSS_CLASSES.headerTall;
        const animated = opts.animated || false;
        const fixed = opts.fixed || false;
        const condenses = opts.condenses || false;
        const scrollAwayTopbar = opts.scrollAwayTopbar || false;
        const noReveal = opts.noReveal || false;
        const keepCondensedHeader = opts.keepCondensedHeader || false;
        const noDissolve = opts.noDissolve || false;
        const backgroundScrollSpeed = (opts.backgroundScrollSpeed !== undefined) ? opts.backgroundScrollSpeed : 0.5;
        y = 0;
        scrolled = false;
        prevScrollTop = 0;
        // defaults, finally set with setHeight
        const shadowHeight = DEFAULT_SHADOW_HEIGTH;
        headerHeight = (opts.headerHeight || DEFAULT_HEADER_HEIGHT) + shadowHeight;
        const condensedHeaderHeight = (opts.condensedHeaderHeight || DEFAULT_CONDENSED_HEADER_HEIGHT) + shadowHeight;
        headerMargin = headerHeight - condensedHeaderHeight;

        const handleScrollFns = {
            standard: () => {
                //
            },
            fixed: () => {
                const isScrolled = (ctrl.scrollerElem.scrollTop > 0);
                ctrl.showShadow(isScrolled);
                scrolled = isScrolled;
            },
            animated: () => {
                const isScrolled = (ctrl.scrollerElem.scrollTop > 0);
                if (isScrolled !== scrolled) {
                    const headerElem = ctrl.headerElem;
                    if (headerElem && tall) {
                        headerElem.classList[isScrolled ? 'remove' : 'add'](tallClass);
                    }
                    ctrl.showShadow(isScrolled);
                    scrolled = isScrolled;
                }
            },
            dynamicHeader: () => {
                let sy,
                    cascaded = false,
                    sTop;

                if (!ctrl.scrollInited && opts.initialScrollPosition) {
                    sTop = opts.initialScrollPosition;
                } else {
                    sTop = ctrl.scrollerElem.scrollTop;
                }
 
                if (!ctrl.scrollInited && opts.initialPositionFixed) {
                    prevScrollTop = sTop;
                    y = 0;
                    return;
                }

                if (sTop < headerMargin) {
                    sy = sTop;
                } else {
                    sy = Math.min(keepCondensedHeader
                            ? headerMargin
                            : headerHeight,
                        Math.max(0, ((noReveal || keepCondensedHeader)
                            ? sTop
                            : y + sTop - prevScrollTop))
                    );
                    if (condenses && prevScrollTop >= sTop && sTop > headerMargin) {
                        sy = Math.max(sy, headerMargin);
                    }
                }
                if (sTop > 0) {
                    ctrl.transformHeader(sy);
                } else if (p.isTouch) {
                    ctrl.enlargeImage(sy);
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

        let handleScrollFn;
        if (animated) {
            handleScrollFn = handleScrollFns.animated;
        } else if (mode === 'standard') {
            handleScrollFn = handleScrollFns.standard;
        } else if (fixed) {
            handleScrollFn = handleScrollFns.fixed;
        } else {
            handleScrollFn = handleScrollFns.dynamicHeader;
        }

        return {
            headerPanelElem: undefined,
            scrollerElem: undefined,
            outerContainerElem: undefined,
            headerContainerElem: undefined,
            headerTopBarElem: undefined,
            headerElem: undefined,
            headerBg: undefined,
            condensedHeaderBg: undefined,
            mode: mode,
            fixed: fixed,
            shadow: (opts.shadow !== undefined && !opts.shadow) ? false : true,
            scrollWatchId: 0,
            isScrolling: false,
            scrollInited: false,
            headerConfig: {
                tall: tall,
                tallClass: tallClass,
                animated: animated,
                fixed: fixed
            },

            init: (controller) => {
                ctrl = controller;
            },

            setHeight: (h) => {
                if (opts.headerHeight === undefined) {
                    headerHeight = h + shadowHeight;
                    headerMargin = headerHeight - condensedHeaderHeight;
                }
                if (!fixed) {
                    const mainContainer = ctrl.outerContainerElem.querySelector('.' + CSS_CLASSES.mainContainer);
                    mainContainer.style.paddingTop = h + 'px';
                }
                if (noReveal) {
                    ctrl.showShadow(false);
                }
            },

            handleScroll: (e) => {
                if (e) {
                    // this is a real scroll event
                    // instead of a programmatic call
                    ctrl.isScrolling = true;
                    scroller = ctrl;
                    clearTimeout(ctrl.scrollWatchId);
                    ctrl.scrollWatchId = setTimeout(() => {
                        ctrl.isScrolling = false;
                        scroller = undefined;
                    }, SCROLL_WATCH_TIMER);
                }

                if (mode === 'scroll') {
                    return;
                }
                if (modeConfigs.alwaysShadow[mode]) {
                    ctrl.showShadow(true);
                }

                handleScrollFn();
                ctrl.scrollInited = true;

                if (e && opts.scroll) {
                    opts.scroll(e);
                }
            },

            condenseHeader: (hy) => {
                const reset = (hy === null);

                // adjust top bar in core-header so the top bar stays at the top
                if (!scrollAwayTopbar) {
                    if (ctrl.headerTopBarElem) {
                        translateY(ctrl.headerTopBarElem.style, Math.min(hy, headerMargin));
                    }
                }

                // transition header bg
                const hbg = ctrl.headerBg.style;
                if (hbg) {
                    if (!noDissolve) {
                        hbg.opacity = reset ? '' : (headerMargin - hy) / headerMargin;
                    }

                    // adjust header bg so it stays at the center
                    translateY(hbg, reset ? null : hy * backgroundScrollSpeed);

                    // transition condensed header bg
                    if (!noDissolve) {
                        const chbg = ctrl.condensedHeaderBg.style;
                        chbg.opacity = reset ? '' : hy / headerMargin;
                        // adjust condensed header bg so it stays at the center
                        translateY(chbg, reset ? null : hy * backgroundScrollSpeed);
                    }
                }
            },

            transformHeader: (hy) => {
                if (hy < 0) {
                    return;
                }
                translateY(ctrl.headerContainerElem.style, -hy);
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

            enlargeImage: (hy) => {
                ctrl.headerBg.style.height = 100 / headerHeight * (headerHeight + Math.abs(hy / 2)) + '%';
            },

            showShadow: (cascaded) => {
                if (modeConfigs.alwaysShadow[mode]) {
                    cascaded = true;
                }
                ctrl.outerContainerElem.classList[cascaded ? 'add' : 'remove'](CSS_CLASSES.cascaded);
            },

            storeScrollPosition: (scrollTop) => {
                if (opts.restoreScrollPositionId) {
                    scrollPositions[opts.restoreScrollPositionId] = scrollTop;
                }
            },

            restoreScrollPosition: () => {
                if (opts.restoreScrollPositionId) {
                    const scrollTop = scrollPositions[opts.restoreScrollPositionId];
                    if (scrollTop !== undefined) {
                        const restore = () => (ctrl.scrollerElem.scrollTop = scrollTop);
                        restore();
                        setTimeout(restore, 0);
                    }
                }
            }
        };
    },

    view: (ctrl, opts) => {
        if (scroller && scroller !== ctrl) {
            // if we are scrolling,
            // don't render other header-panels
            return {
                subtree: 'retain'
            };
        } else {
            return createView(ctrl, opts);
        }
    }
};

export default component;
