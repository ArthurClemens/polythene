var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import '../common/object.assign';
import p from '../polythene/polythene';
import events from '../common/events';
import m from 'mithril';
import toolbar from '../toolbar/toolbar';
import './theme/theme';

var CSS_CLASSES = {
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

var DEFAULT_SHADOW_HEIGTH = 6;
var DEFAULT_HEADER_HEIGHT = 192;
var DEFAULT_CONDENSED_HEADER_HEIGHT = DEFAULT_HEADER_HEIGHT / 3;
var SCROLL_WATCH_TIMER = 150;

var scroller = void 0; // keep track of scrolling elements on the page
var scrollPositions = {};

var modeConfigs = {
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

var modeClasses = {
    'cover': CSS_CLASSES.modeCover,
    'scroll': CSS_CLASSES.modeScroll,
    'seamed': CSS_CLASSES.modeSeamed,
    'standard': CSS_CLASSES.modeStandard,
    'tall': CSS_CLASSES.modeTall,
    'waterfall-tall': CSS_CLASSES.modeWaterfallTall,
    'waterfall': CSS_CLASSES.modeWaterfall
};

var classForMode = function classForMode() {
    var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'standard';

    return modeClasses[mode];
};

var setTransform = document.documentElement.style.transform !== undefined ? function (style, string) {
    style.transform = string;
} : function (style, string) {
    style.webkitTransform = string;
};

var translateY = function translateY(style, y) {
    var t = y === null ? '' : 'translate3d(0, ' + y + 'px, 0)';
    setTransform(style, t);
};

var createHeaderComponent = function createHeaderComponent() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var tall = opts.tall || false;
    var tallClass = opts.tallClass || '';
    var toolbarOpts = opts.toolbar;
    if (toolbarOpts) {
        toolbarOpts.class = [toolbarOpts.class || null, tall ? tallClass : null].join(' ');
        if (!toolbarOpts.topBar) {
            toolbarOpts.topBar = m('div');
        }
        return m(toolbar, toolbarOpts);
    } else if (opts.content) {
        return m('div', {
            class: [CSS_CLASSES.header, opts.class || null, tall ? tallClass : null, opts.animated ? CSS_CLASSES.headerAnimated : ''].join(' ')
        }, opts.content);
    } else {
        return m('div', opts);
    }
};

var createViewHeader = function createViewHeader(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var initHeaderContainer = function initHeaderContainer(headerContainer, inited) {
        if (inited) {
            return;
        }
        ctrl.headerContainerElem = headerContainer;
    };
    var header = opts.header ? createHeaderComponent(_extends({}, opts.header, ctrl.headerConfig)) : null;
    return m('div', {
        class: CSS_CLASSES.headerContainer,
        config: initHeaderContainer
    }, [m('div', {
        class: CSS_CLASSES.backgroundContainer
    }, [m('div', { class: CSS_CLASSES.condensedBackground }), m('div', { class: CSS_CLASSES.headerBackground }), m('div', { class: CSS_CLASSES.mediaDimmer })]), header, ctrl.mode === 'seamed' || ctrl.shadow === false ? null : m('div', { class: CSS_CLASSES.dropShadow })]);
};

var createViewContent = function createViewContent(ctrl, scrollConfig) {
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var initMainContainer = function initMainContainer(mainContainer, inited) {
        if (inited) {
            return;
        }
        if (scrollConfig.main) {
            ctrl.scrollerElem = mainContainer;
        }
    };
    return [m('div', {
        class: CSS_CLASSES.mainContainer,
        config: initMainContainer,
        onscroll: function onscroll(e) {
            scrollConfig.main(e);
            events.emit('scroll', e);
            ctrl.storeScrollPosition(e.target.scrollTop);
        }
    }, opts.content ? opts.content : null)];
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    opts.header = opts.header || {};
    opts.configs = opts.configs || [];
    ctrl.init(ctrl);

    var updateContentOnScroll = opts.updateContentOnScroll || false;
    var ignoreContent = !updateContentOnScroll && ctrl.isScrolling;
    var scrollerType = modeConfigs.outerScroll[ctrl.mode] ? 'outer' : 'main';
    var handleScroll = ctrl.handleScroll.bind(ctrl);
    var header = createViewHeader(ctrl, opts);
    var tag = opts.tag || 'div';

    var scrollConfig = {};
    scrollConfig[scrollerType] = handleScroll;

    var initOuterContainer = function initOuterContainer(outerContainer, inited) {
        var headerElem = outerContainer.querySelector('.' + CSS_CLASSES.header) || outerContainer.querySelector('.' + CSS_CLASSES.toolbar);
        if (!headerElem) {
            return;
        }
        if (inited && ctrl.headerElem) {
            return;
        }
        var headerContainer = outerContainer.querySelector('.' + CSS_CLASSES.headerContainer);
        var topBarElem = headerContainer.querySelector('.' + CSS_CLASSES.toolbarTopbar);
        var headerBg = headerContainer.querySelector('.' + CSS_CLASSES.headerBackground);
        var condensedHeaderBg = headerContainer.querySelector('.' + CSS_CLASSES.condensedBackground);

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

    var props = _extends({}, {
        class: [CSS_CLASSES.panel, ctrl.fixed ? CSS_CLASSES.fixed : null, classForMode(ctrl.mode), opts.class].join(' '),
        id: opts.id || '',
        config: function config(el, inited) {
            if (inited) {
                return;
            }
            ctrl.headerPanelElem = el;
        }
    });

    var content = m('div', {
        class: CSS_CLASSES.outerContainer,
        config: initOuterContainer,
        onscroll: function onscroll(e) {
            scrollConfig.outer(e);
            events.emit('scroll', e);
        }
    }, [header, ignoreContent ? {
        subtree: 'retain'
    } : createViewContent(ctrl, scrollConfig, opts)]);
    return m(tag, props, [opts.before, content, opts.after]);
};

var component = {
    controller: function controller() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var ctrl = void 0,
            mode = void 0,
            y = void 0,
            scrolled = void 0,
            prevScrollTop = void 0,
            headerMargin = void 0,
            headerHeight = void 0;

        if (opts.mode) {
            mode = opts.mode;
        } else if (opts.header && opts.header.toolbar) {
            mode = opts.header.toolbar.mode;
        } else if (opts.header && opts.header.content) {
            mode = opts.header.mode;
        }
        mode = mode || 'standard';
        var tall = modeConfigs.tallMode[mode] || false;
        var tallClass = opts.tallClass || CSS_CLASSES.headerTall;
        var animated = opts.animated || false;
        var fixed = opts.fixed || false;
        var condenses = opts.condenses || false;
        var scrollAwayTopbar = opts.scrollAwayTopbar || false;
        var noReveal = opts.noReveal || false;
        var keepCondensedHeader = opts.keepCondensedHeader || false;
        var noDissolve = opts.noDissolve || false;
        var backgroundScrollSpeed = opts.backgroundScrollSpeed !== undefined ? opts.backgroundScrollSpeed : 0.5;
        y = 0;
        scrolled = false;
        prevScrollTop = 0;
        // defaults, finally set with setHeight
        var shadowHeight = DEFAULT_SHADOW_HEIGTH;
        headerHeight = (opts.headerHeight || DEFAULT_HEADER_HEIGHT) + shadowHeight;
        var condensedHeaderHeight = (opts.condensedHeaderHeight || DEFAULT_CONDENSED_HEADER_HEIGHT) + shadowHeight;
        headerMargin = headerHeight - condensedHeaderHeight;

        var handleScrollFns = {
            standard: function standard() {
                //
            },
            fixed: function fixed() {
                var isScrolled = ctrl.scrollerElem.scrollTop > 0;
                ctrl.showShadow(isScrolled);
                scrolled = isScrolled;
            },
            animated: function animated() {
                var isScrolled = ctrl.scrollerElem.scrollTop > 0;
                if (isScrolled !== scrolled) {
                    var headerElem = ctrl.headerElem;
                    if (headerElem && tall) {
                        headerElem.classList[isScrolled ? 'remove' : 'add'](tallClass);
                    }
                    ctrl.showShadow(isScrolled);
                    scrolled = isScrolled;
                }
            },
            dynamicHeader: function dynamicHeader() {
                var sy = void 0,
                    cascaded = false,
                    sTop = void 0;

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
                    sy = Math.min(keepCondensedHeader ? headerMargin : headerHeight, Math.max(0, noReveal || keepCondensedHeader ? sTop : y + sTop - prevScrollTop));
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

        var handleScrollFn = void 0;
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
            shadow: opts.shadow !== undefined && !opts.shadow ? false : true,
            scrollWatchId: 0,
            isScrolling: false,
            scrollInited: false,
            headerConfig: {
                tall: tall,
                tallClass: tallClass,
                animated: animated,
                fixed: fixed
            },

            init: function init(controller) {
                ctrl = controller;
            },

            setHeight: function setHeight(h) {
                if (opts.headerHeight === undefined) {
                    headerHeight = h + shadowHeight;
                    headerMargin = headerHeight - condensedHeaderHeight;
                }
                if (!fixed) {
                    var mainContainer = ctrl.outerContainerElem.querySelector('.' + CSS_CLASSES.mainContainer);
                    mainContainer.style.paddingTop = h + 'px';
                }
                if (noReveal) {
                    ctrl.showShadow(false);
                }
            },

            handleScroll: function handleScroll(e) {
                if (e) {
                    // this is a real scroll event
                    // instead of a programmatic call
                    ctrl.isScrolling = true;
                    scroller = ctrl;
                    clearTimeout(ctrl.scrollWatchId);
                    ctrl.scrollWatchId = setTimeout(function () {
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

            condenseHeader: function condenseHeader(hy) {
                var reset = hy === null;

                // adjust top bar in core-header so the top bar stays at the top
                if (!scrollAwayTopbar) {
                    if (ctrl.headerTopBarElem) {
                        translateY(ctrl.headerTopBarElem.style, Math.min(hy, headerMargin));
                    }
                }

                // transition header bg
                var hbg = ctrl.headerBg.style;
                if (hbg) {
                    if (!noDissolve) {
                        hbg.opacity = reset ? '' : (headerMargin - hy) / headerMargin;
                    }

                    // adjust header bg so it stays at the center
                    translateY(hbg, reset ? null : hy * backgroundScrollSpeed);

                    // transition condensed header bg
                    if (!noDissolve) {
                        var chbg = ctrl.condensedHeaderBg.style;
                        chbg.opacity = reset ? '' : hy / headerMargin;
                        // adjust condensed header bg so it stays at the center
                        translateY(chbg, reset ? null : hy * backgroundScrollSpeed);
                    }
                }
            },

            transformHeader: function transformHeader(hy) {
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

            enlargeImage: function enlargeImage(hy) {
                ctrl.headerBg.style.height = 100 / headerHeight * (headerHeight + Math.abs(hy / 2)) + '%';
            },

            showShadow: function showShadow(cascaded) {
                if (modeConfigs.alwaysShadow[mode]) {
                    cascaded = true;
                }
                ctrl.outerContainerElem.classList[cascaded ? 'add' : 'remove'](CSS_CLASSES.cascaded);
            },

            storeScrollPosition: function storeScrollPosition(scrollTop) {
                if (opts.restoreScrollPositionId) {
                    scrollPositions[opts.restoreScrollPositionId] = scrollTop;
                }
            },

            restoreScrollPosition: function restoreScrollPosition() {
                if (opts.restoreScrollPositionId) {
                    var scrollTop = scrollPositions[opts.restoreScrollPositionId];
                    if (scrollTop !== undefined) {
                        var restore = function restore() {
                            return ctrl.scrollerElem.scrollTop = scrollTop;
                        };
                        restore();
                        setTimeout(restore, 0);
                    }
                }
            }
        };
    },

    view: function view(ctrl, opts) {
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