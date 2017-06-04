var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import '../common/object.assign';
import p from '../polythene/polythene';
import events from '../common/events';
import m from 'mithril';
import button from '../button/button';
import icon from '../icon/icon';
import iconBtn from '../icon-button/icon-button';
import scrollTo from '../common/scroll-to';
import theme from './theme/theme'; // contains icons
import config from './theme/config';

var CSS_CLASSES = {
    block: 'pe-tabs',
    scrollButton: 'pe-tabs__scroll-button',
    scrollButtonLeft: 'pe-tabs__scroll-button--start',
    scrollButtonRight: 'pe-tabs__scroll-button--end',
    scrollButtonOffset: 'pe-tabs__scroll-button--offset',
    tabRow: 'pe-tabs__row',
    tabRowCentered: 'pe-tabs__row--centered',
    tabRowIndent: 'pe-tabs__row--indent',
    tab: 'pe-tabs__tab',
    tabContent: 'pe-tabs__tab-content',
    tabHasIcon: 'pe-tabs__tab---icon',
    indicator: 'pe-tabs__indicator',
    scrollable: 'pe-tabs--scrollable',
    isAutofit: 'pe-tabs--autofit',
    isAtStart: 'pe-tabs--start',
    isAtEnd: 'pe-tabs--end',
    isMenu: 'pe-tabs--menu',
    isSmall: 'pe-tabs--small',
    activeSelected: 'pe-tabs__active-selected',
    // reference:
    label: 'pe-button__label'
};

var POSITION_LEFT = 1 << 1;
var POSITION_RIGHT = 1 << 2;

var getNewIndex = function getNewIndex(index, tabs) {
    var minTabIndex = 0;
    var maxTabIndex = tabs.length - 1;
    return {
        left: Math.max(index - 1, minTabIndex),
        right: Math.min(index + 1, maxTabIndex)
    };
};

var handleScrollButtonClick = function handleScrollButtonClick(ctrl, opts, e, direction) {
    e.stopPropagation();
    e.preventDefault();
    var tabs = ctrl.tabs;
    var currentTabIndex = ctrl.selectedTabIndex;
    var newIndex = getNewIndex(currentTabIndex, tabs)[direction];
    scrollToTab(ctrl, newIndex);
    if (newIndex !== currentTabIndex) {
        setSelectedTab(ctrl, opts, newIndex, true);
        m.redraw();
    }
};

var createScrollButton = function createScrollButton(ctrl, position, opts) {
    var scrollIconForward = opts.scrollIconForward || theme.arrowForward;
    var scrollIconBackward = opts.scrollIconBackward || theme.arrowBackward;

    return m(iconBtn, {
        class: [CSS_CLASSES.scrollButton, position === POSITION_LEFT ? CSS_CLASSES.scrollButtonLeft : CSS_CLASSES.scrollButtonRight].join(' '),
        icon: position === POSITION_LEFT ? scrollIconBackward : scrollIconForward,
        ripple: {
            center: true
        },
        config: function config(el) {
            if (ctrl.scrollButtonLeftEl && ctrl.scrollButtonRightEl) {
                return;
            }
            if (position === POSITION_LEFT) {
                ctrl.scrollButtonLeftEl = el;
            } else {
                ctrl.scrollButtonRightEl = el;
            }
        },
        events: {
            onclick: position === POSITION_LEFT ? function (e) {
                handleScrollButtonClick(ctrl, opts, e, 'left');
            } : function (e) {
                handleScrollButtonClick(ctrl, opts, e, 'right');
            }
        }
    });
};

var alignToTitle = function alignToTitle(ctrl) {
    var firstTab = ctrl.tabs[0].el;
    var firstInnerLabel = firstTab.querySelector('.' + CSS_CLASSES.label + ' span');
    var firstOuterLabelWidth = firstTab.getBoundingClientRect().width;
    var firstInnerLabelWidth = firstInnerLabel.getBoundingClientRect().width;
    var firstTabOffset = (firstOuterLabelWidth - firstInnerLabelWidth) / 2;
    firstTab.style.marginLeft = -firstTabOffset + 'px';
};

var createRightButtonOffset = function createRightButtonOffset(ctrl) {
    // add padding to right so that last item is not hidden behind scroll button
    var scrollButtonRightWidth = ctrl.scrollButtonRightEl.getBoundingClientRect().width;
    var scrollButtonOffsetEl = ctrl.tabsEl.querySelector('.' + CSS_CLASSES.scrollButtonOffset);
    scrollButtonOffsetEl.style.width = scrollButtonRightWidth + 'px';
};

var scrollToTab = function scrollToTab(ctrl, tabIndex) {
    var tabs = ctrl.tabs;
    var scroller = ctrl.scrollerEl;
    // scroll to position of selected tab
    var tabLeft = tabs.slice(0, tabIndex).reduce(function (totalWidth, tabData) {
        return totalWidth + tabData.el.getBoundingClientRect().width;
    }, 0);
    // tabs at the far right will not fully move to the left
    // because the scrollable row will stick to the right 
    // to get the max scroll left, we subtract the visible viewport from the scroll width
    var scrollerWidth = scroller.getBoundingClientRect().width; // frame width
    var scrollingWidth = scroller.scrollWidth;
    var maxScroll = scrollingWidth - scrollerWidth;
    var left = Math.min(tabLeft, maxScroll);
    var currentLeft = scroller.scrollLeft;
    if (currentLeft !== left) {
        var duration = Math.abs(currentLeft - left) / config.tabs_scroll_speed;
        var delaySeconds = config.tabs_scroll_delay || 0;
        setTimeout(function () {
            scrollTo({
                element: scroller,
                to: left,
                duration: Math.max(config.tabs_scroll_min_duration, duration),
                direction: 'horizontal'
            });
        }, delaySeconds * 1000);
    }
};

var updateScrollButtons = function updateScrollButtons(ctrl) {
    var scrollerEl = ctrl.scrollerEl;
    var scrollLeft = scrollerEl.scrollLeft;
    var currentTabIndex = ctrl.selectedTabIndex;
    var tabs = ctrl.tabs;
    var tabsEl = ctrl.tabsEl;
    var minTabIndex = 0;
    var maxTabIndex = tabs.length - 1;
    var isAtLeft = scrollerEl.scrollLeft === 0 && currentTabIndex === minTabIndex;
    var isAtRight = scrollLeft >= scrollerEl.scrollWidth - tabsEl.getBoundingClientRect().width - 1 && currentTabIndex === maxTabIndex;
    ctrl.scrollButtonStates.left = !isAtLeft;
    ctrl.scrollButtonStates.right = !isAtRight;
};

var animateIndicator = function animateIndicator(selectedTabEl, animate, ctrl) {
    var parentRect = ctrl.tabsEl.getBoundingClientRect();
    var rect = selectedTabEl.getBoundingClientRect();
    var style = ctrl.tabIndicatorEl.style;
    var translateX = rect.left - parentRect.left + ctrl.scrollerEl.scrollLeft;
    var transformCmd = 'translate(' + translateX + 'px, 0)';
    var duration = animate ? config.indicator_slide_min_duration : 0;
    // use width instead of scale to please IE10
    style.width = rect.width + 'px';
    style['transition-duration'] = style['-webkit-transition-duration'] = style['-moz-transition-duration'] = style['-o-transition-duration'] = duration + 's';
    style.transform = style['-webkit-transform'] = style['-moz-transform'] = style['-ms-transform'] = style['-o-transform'] = transformCmd;
};

var setSelectedTab = function setSelectedTab(ctrl, opts, index, animate) {
    ctrl.selectedTabIndex = index;
    if (!ctrl.tabs.length) return;
    var selectedTabEl = ctrl.tabs[index].el;
    if (selectedTabEl && ctrl.tabIndicatorEl && ctrl.tabsEl) {
        animateIndicator(selectedTabEl, animate, ctrl);
    }
    if (ctrl.managesScroll) {
        updateScrollButtons(ctrl);
        scrollToTab(ctrl, index);
    }
    if (opts.getState) {
        opts.getState({
            index: index,
            data: ctrl.tabs[index].data,
            el: selectedTabEl
        });
    }
};

var createTab = function createTab(ctrl, opts, index, buttonOpts) {
    // Let internal onclick function co-exist with passed button option
    buttonOpts.events = buttonOpts.events || {};
    buttonOpts.events.onclick = buttonOpts.events.onclick || function () {};
    var tabButtonOptions = _extends({}, buttonOpts, {
        content: m('div', {
            class: CSS_CLASSES.tabContent
        }, [buttonOpts.icon ? m(icon, buttonOpts.icon) : null, buttonOpts.label ? m('div', { class: CSS_CLASSES.label }, m('span', buttonOpts.label)) : null]),
        class: [CSS_CLASSES.tab, buttonOpts.icon && buttonOpts.label ? CSS_CLASSES.tabHasIcon : null, buttonOpts.class].join(' '),
        wash: false,
        ripple: true,
        events: _extends({}, buttonOpts.events, {
            onclick: function onclick(e) {
                setSelectedTab(ctrl, opts, index, opts.noIndicatorSlide ? false : true);
                buttonOpts.events.onclick(e);
            }
        }),
        config: function config(el, inited) {
            if (inited) {
                return;
            }
            ctrl.tabs.push({ data: buttonOpts, el: el });
        }
    });
    return m(button, tabButtonOptions);
};

var sortNumbers = function sortNumbers(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;else return 0;
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tag = opts.tag || 'div';
    var autofit = opts.scrollable || opts.centered ? false : opts.autofit ? true : false;

    // keep selected tab up to date
    if (opts.selectedTab !== undefined && ctrl.previousOptsSelectedTab !== opts.selectedTab) {
        setSelectedTab(ctrl, opts, opts.selectedTab, true);
    }
    ctrl.previousOptsSelectedTab = opts.selectedTab;

    var props = {
        class: [CSS_CLASSES.block, opts.scrollable ? CSS_CLASSES.scrollable : null, ctrl.selectedTabIndex === 0 ? CSS_CLASSES.isAtStart : null, ctrl.selectedTabIndex === ctrl.tabs.length - 1 ? CSS_CLASSES.isAtEnd : null, opts.activeSelected ? CSS_CLASSES.activeSelected : null, autofit ? CSS_CLASSES.isAutofit : null, opts.menu ? CSS_CLASSES.isMenu : null, opts.small ? CSS_CLASSES.isSmall : null, opts.class].join(' '),
        id: opts.id || '',
        config: function config(el, inited, context) {
            if (inited) {
                return;
            }
            ctrl.tabsEl = el;

            if (opts.largestWidth) {
                var widths = ctrl.tabs.map(function (tabData) {
                    return tabData.el.getBoundingClientRect().width;
                });
                var largest = widths.sort(sortNumbers).reverse()[0];
                ctrl.tabs.forEach(function (tabData) {
                    return tabData.el.style.width = largest + 'px';
                });
            }

            // align first scrollable tab to title
            if (opts.scrollable) {
                alignToTitle(ctrl);
            }
            // handle scroll
            if (opts.scrollable && !p.isTouch) {
                ctrl.managesScroll = true;
                createRightButtonOffset(ctrl);
            }

            var onResize = function onResize() {
                setSelectedTab(ctrl, opts, ctrl.selectedTabIndex, false);
                m.redraw();
            };
            events.subscribe('resize', onResize);

            context.onunload = function () {
                events.unsubscribe('resize', onResize);
            };

            setSelectedTab(ctrl, opts, ctrl.selectedTabIndex, false);
        }
    };
    var tabRow = opts.buttons.map(function (buttonOpts, index) {
        var buttonOptsCombined = _extends({}, buttonOpts, {
            selected: index === ctrl.selectedTabIndex,
            animateOnTap: opts.animateOnTap !== false ? true : false
        }, opts.tabsOpts || {});
        return createTab(ctrl, opts, index, buttonOptsCombined);
    }).concat([
    // offset for right scroll button
    opts.scrollable ? m('div', { class: CSS_CLASSES.scrollButtonOffset }) : null]);

    var scrollButtonLeft = void 0,
        scrollButtonRight = void 0;
    if (opts.scrollable) {
        scrollButtonLeft = createScrollButton(ctrl, POSITION_LEFT, opts);
        scrollButtonRight = createScrollButton(ctrl, POSITION_RIGHT, opts);
    }

    var tabIndicator = opts.hideIndicator ? null : m('div', {
        class: CSS_CLASSES.indicator,
        config: function config(el, inited) {
            if (inited) {
                return;
            }
            ctrl.tabIndicatorEl = el;
        }
    });

    var content = [opts.scrollable ? scrollButtonLeft : null, m('div', {
        class: [CSS_CLASSES.tabRow, opts.centered ? CSS_CLASSES.tabRowCentered : null, opts.scrollable ? CSS_CLASSES.tabRowIndent : null].join(' '),
        config: function config(el, inited) {
            if (inited) {
                return;
            }
            ctrl.scrollerEl = el;
        },
        onscroll: function onscroll() {
            updateScrollButtons(ctrl);
        }
    }, [tabRow, tabIndicator]), opts.scrollable ? scrollButtonRight : null];
    return m(tag, props, [opts.before, content, opts.after]);
};

var component = {
    controller: function controller() {
        return {
            tabsEl: null,
            scrollerEl: null,
            tabs: [], // {data, el}
            tabIndicatorEl: null,
            selectedTabIndex: 0,
            previousOptsSelectedTab: undefined,
            managesScroll: false,
            scrollButtonStates: {
                left: false,
                right: false
            }
        };
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView(ctrl, opts);
    }
};

export default component;