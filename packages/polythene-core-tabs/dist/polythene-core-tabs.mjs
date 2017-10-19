import { filterSupportedAttributes, isTouch, subscribe, unsubscribe } from 'polythene-core';
import { scrollTo } from 'polythene-utilities';
import { vars } from 'polythene-theme';
import { classes, vars as vars$1 } from 'polythene-core-button';
import { vars as vars$2 } from 'polythene-core-icon-button';

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var fontSize = vars$1.font_size;
var tab_label_line_height = 1.1 * fontSize;

var vars$3 = {
  tab_min_width: 72,
  tab_max_width: "initial",
  tab_height: 48,
  // tab_min_width_tablet:             160,
  label_max_width: 264,
  menu_tab_height: 44,
  menu_tab_icon_label_height: 44,
  tab_icon_label_height: 72,
  tab_icon_label_icon_spacing: 7,
  indicator_slide_speed: 600, // px per second
  indicator_slide_min_duration: .250,
  tabs_indent: vars.unit_indent,
  tabs_scroll_speed: 600, // px per second
  tabs_scroll_delay: .15,
  tabs_scroll_min_duration: .5,
  scroll_button_fade_duration: .2,
  scroll_button_fade_delay: .5,
  tab_content_padding_v: 12,
  tab_menu_content_padding_v: 6,
  tab_indicator_height: 2,
  scrollbar_offset: 20,
  scroll_button_opacity: .7,
  label_opacity: .7,

  tab_label_line_height: tab_label_line_height,
  tab_label_vertical_offset: tab_label_line_height - fontSize,
  tab_label_transition_property: "opacity, color, backgroundColor",

  color_light: "inherit",
  color_light_selected: rgba(vars.color_primary),
  color_light_selected_background: "transparent",
  color_light_tab_indicator: rgba(vars.color_primary),
  color_light_icon: vars$2.color_light,

  color_dark: "inherit",
  color_dark_selected: rgba(vars.color_primary),
  color_dark_selected_background: "transparent",
  color_dark_tab_indicator: rgba(vars.color_primary),
  color_dark_icon: vars$2.color_dark
};

var classes$1 = {
  component: "pe-tabs",

  // elements
  indicator: "pe-tabs__indicator",
  scrollButton: "pe-tabs__scroll-button",
  scrollButtonAtEnd: "pe-tabs__scroll-button-end",
  scrollButtonAtStart: "pe-tabs__scroll-button-start",
  scrollButtonOffset: "pe-tabs__scroll-button-offset",
  tab: "pe-tabs__tab",
  tabContent: "pe-tabs__tab-content",
  tabRow: "pe-tabs__row",

  // states
  activeSelectable: "pe-tabs__active--selectable",
  isAtEnd: "pe-tabs--end",
  isAtStart: "pe-tabs--start",
  isAutofit: "pe-tabs--autofit",
  isMenu: "pe-tabs--menu",
  scrollable: "pe-tabs--scrollable",
  compactTabs: "pe-tabs--compact",
  tabHasIcon: "pe-tabs__tab---icon",
  tabRowCentered: "pe-tabs__row--centered",
  tabRowIndent: "pe-tabs__row--indent",

  // lookup
  label: classes.label
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var whenCreateDone = function whenCreateDone() {
  return Promise.resolve();
};

var getNewIndex = function getNewIndex(index, tabs) {
  var minTabIndex = 0;
  var maxTabIndex = tabs.length - 1;
  return {
    backward: Math.max(index - 1, minTabIndex),
    forward: Math.min(index + 1, maxTabIndex)
  };
};

var handleScrollButtonClick = function handleScrollButtonClick(state, attrs, e, direction) {
  e.stopPropagation();
  e.preventDefault();
  var currentTabIndex = state.selectedTabIndex();
  var newIndex = getNewIndex(currentTabIndex, state.tabs)[direction];
  if (newIndex !== currentTabIndex) {
    setSelectedTab(state, attrs, newIndex, true);
  } else {
    scrollToTab(state, newIndex);
  }
};

/*
Moves the first tab to the left so that the text label is as position 0. 
*/
var alignToTitle = function alignToTitle(state) {
  var firstTab = state.tabs[0].dom;
  var firstInnerLabel = firstTab.querySelector("." + classes$1.label + " span");
  var firstOuterLabelWidth = firstTab.getBoundingClientRect().width;
  var firstInnerLabelWidth = firstInnerLabel.getBoundingClientRect().width;
  var firstTabOffset = (firstOuterLabelWidth - firstInnerLabelWidth) / 2;
  firstTab.style.marginLeft = -firstTabOffset + "px";
};

var createRightButtonOffset = function createRightButtonOffset(state) {
  // add padding to right so that last item is not hidden behind scroll button
  var scrollButtonAtEndWidth = state.scrollButtons["end"].getBoundingClientRect().width;
  var scrollButtonOffsetEl = state.tabsEl.querySelector("." + classes$1.scrollButtonOffset);
  scrollButtonOffsetEl.style.width = scrollButtonAtEndWidth + "px";
};

var scrollToTab = function scrollToTab(state, tabIndex) {
  var tabs = state.tabs;
  var scroller = state.scrollerEl;
  // Scroll to position of selected tab
  var tabLeft = tabs.slice(0, tabIndex).reduce(function (totalWidth, tabData) {
    return totalWidth + tabData.dom.getBoundingClientRect().width;
  }, 0);
  // Tabs at the far right will not fully move to the left
  // because the scrollable row will stick to the right 
  // to get the max scroll left, we subtract the visible viewport from the scroll width
  var scrollerWidth = scroller.getBoundingClientRect().width; // frame width
  var scrollingWidth = scroller.scrollWidth;
  var maxScroll = scrollingWidth - scrollerWidth;
  var left = Math.min(tabLeft, maxScroll);
  var currentLeft = scroller.scrollLeft;
  if (currentLeft !== left) {
    var duration = Math.abs(currentLeft - left) / vars$3.tabs_scroll_speed;
    var delaySeconds = vars$3.tabs_scroll_delay || 0;
    setTimeout(function () {
      scrollTo({
        element: scroller,
        to: left,
        duration: Math.max(vars$3.tabs_scroll_min_duration, duration),
        direction: "horizontal"
      });
    }, delaySeconds * 1000);
  }
};

var updateScrollButtons = function updateScrollButtons(state) {
  var scrollerEl = state.scrollerEl;
  var scrollLeft = scrollerEl.scrollLeft;
  var currentTabIndex = state.selectedTabIndex();
  var tabsEl = state.tabsEl;
  var minTabIndex = 0;
  var maxTabIndex = state.tabs.length - 1;
  var isAtStart = scrollerEl.scrollLeft === 0 && currentTabIndex === minTabIndex;
  var isAtEnd = scrollLeft >= scrollerEl.scrollWidth - tabsEl.getBoundingClientRect().width - 1 && currentTabIndex === maxTabIndex;
  state.scrollButtonStates.start = !isAtStart;
  state.scrollButtonStates.end = !isAtEnd;
};

var animateIndicator = function animateIndicator(selectedTabEl, animate, state) {
  var parentRect = state.tabsEl.getBoundingClientRect();
  var rect = selectedTabEl.getBoundingClientRect();
  var style = state.tabIndicatorEl.style;
  var translateX = rect.left - parentRect.left + state.scrollerEl.scrollLeft;
  var transformCmd = "translate(" + translateX + "px, 0)";
  var duration = animate ? vars$3.indicator_slide_min_duration : 0;
  // use width instead of scale to please IE10
  style.width = rect.width + "px";
  style["transition-duration"] = duration + "s";
  style.transform = transformCmd;
};

var setSelectedTab = function setSelectedTab(state, attrs, index, animate) {
  state.selectedTabIndex(index);
  if (!state.tabs.length) return;
  var selectedTabEl = state.tabs[index].dom;
  if (selectedTabEl && state.tabIndicatorEl && state.tabsEl) {
    animateIndicator(selectedTabEl, animate, state);
  }
  if (state.managesScroll) {
    updateScrollButtons(state);
    scrollToTab(state, index);
  }
  if (attrs.onChange) {
    attrs.onChange({
      index: index,
      options: state.tabs[index].attrs,
      el: selectedTabEl
    });
  }
};

var sortByLargestWidth = function sortByLargestWidth(a, b) {
  return a < b ? 1 : a > b ? -1 : 0;
};

var getInitialState = function getInitialState(vnode, createStream) {
  var attrs = vnode.attrs;
  var selectedTabIndex = createStream(vnode.attrs.selectedTab || 0);
  var registerTabButton = function registerTabButton(state) {
    return function (index, data) {
      return state.tabs[index] = data;
    };
  };
  var registerScrollButton = function registerScrollButton(state) {
    return function (position, dom) {
      return state.scrollButtons[position] = dom;
    };
  };
  return {
    tabsEl: undefined,
    scrollerEl: undefined,
    tabs: [], // {data, el}
    tabRow: undefined,
    tabIndicatorEl: undefined,
    selectedTabIndex: selectedTabIndex,
    previousSelectedTab: undefined,
    managesScroll: attrs.scrollable && !isTouch,
    scrollButtonStates: {
      start: false,
      end: false
    },
    scrollButtons: {
      start: undefined,
      end: undefined
    },
    registerTabButton: registerTabButton,
    registerScrollButton: registerScrollButton,
    cleanUp: undefined, // set in onMount
    redrawOnUpdate: createStream.merge([selectedTabIndex])
  };
};

var onMount = function onMount(vnode) {
  var dom = vnode.dom;
  var state = vnode.state;
  var attrs = vnode.attrs;

  state.tabsEl = dom;
  if (!attrs.hideIndicator) {
    state.tabIndicatorEl = dom.querySelector("." + classes$1.indicator);
  }
  state.scrollerEl = dom.querySelector("." + classes$1.tabRow);

  // A promise can't resolve during the oncreate loop
  // The Mithril draw loop is synchronous - there is no delay between one this oncreate and the tab button's oncreate
  whenCreateDone().then(function () {
    if (state.tabs && attrs.largestWidth) {
      var widths = state.tabs.map(function (tabData) {
        return tabData.dom.getBoundingClientRect().width;
      });
      var largest = widths.sort(sortByLargestWidth)[0];
      state.tabs.forEach(function (tabData) {
        return tabData.dom.style.width = largest + "px";
      });
    }
    // Align first scrollable tab to title
    if (attrs.scrollable) {
      alignToTitle(state);
    }
    // Handle scroll
    if (state.managesScroll) {
      createRightButtonOffset(state);
    }
    setSelectedTab(state, attrs, state.selectedTabIndex(), false);
  });

  var onResize = function onResize() {
    return setSelectedTab(state, attrs, state.selectedTabIndex(), false);
  };

  subscribe("resize", onResize), state.cleanUp = function () {
    return unsubscribe("resize", onResize);
  };
};

var onUnMount = function onUnMount(_ref) {
  var state = _ref.state;
  return state.cleanUp();
};

var createProps = function createProps(vnode, _ref2) {
  var k = _ref2.keys;

  var state = vnode.state;
  var attrs = vnode.attrs;
  var autofit = attrs.scrollable || attrs.centered ? false : attrs.autofit ? true : false;

  // Keep selected tab up to date
  if (attrs.selectedTab !== undefined && state.previousSelectedTab !== attrs.selectedTab) {
    setSelectedTab(state, attrs, attrs.selectedTab, true);
  }
  state.previousSelectedTab = attrs.selectedTab;

  return _extends({}, filterSupportedAttributes(attrs), {
    className: [classes$1.component, attrs.scrollable ? classes$1.scrollable : null, state.selectedTabIndex === 0 ? classes$1.isAtStart : null, state.selectedTabIndex === state.tabs.length - 1 ? classes$1.isAtEnd : null, attrs.activeSelected ? classes$1.activeSelectable : null, autofit ? classes$1.isAutofit : null, attrs.compact ? classes$1.compactTabs : null, attrs.menu ? classes$1.isMenu : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent = function createContent(vnode, _ref3) {
  var h = _ref3.renderer,
      k = _ref3.keys,
      Tab = _ref3.Tab,
      ScrollButton = _ref3.ScrollButton;

  var state = vnode.state;
  var attrs = vnode.attrs;

  var buttons = attrs.content ? attrs.content : attrs.tabs ? attrs.tabs : attrs.children || vnode.children || [];

  if (buttons.length === 0) {
    console.error("No tabs specified"); // eslint-disable-line no-console
  }

  var tabRowButtons = buttons.map(function () {
    var buttonOpts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var index = arguments[1];

    var buttonOptsCombined = _extends({}, buttonOpts, {
      // These options can be overridden by `all`
      selected: index === state.selectedTabIndex(),
      animateOnTap: attrs.animateOnTap !== false ? true : false
    }, attrs.all, {
      // Internal options, should not get overridden
      index: index,
      key: "tab-" + index,
      register: state.registerTabButton(state),
      onSelect: function onSelect() {
        return setSelectedTab(state, attrs, index, attrs.noIndicatorSlide ? false : true);
      }
    });
    return h(Tab, buttonOptsCombined);
  });

  var tabRow = attrs.scrollable ? tabRowButtons.concat([
  // offset for right scroll button
  h("div", {
    key: "offset",
    className: classes$1.scrollButtonOffset
  })]) : tabRowButtons;

  var scrollButtonAtStart = void 0,
      scrollButtonAtEnd = void 0;
  if (attrs.scrollable) {
    scrollButtonAtStart = h(ScrollButton, _extends({}, {
      key: "backward",
      icon: attrs.scrollIconBackward,
      className: classes$1.scrollButtonAtStart,
      position: "start",
      register: state.registerScrollButton(state),
      events: _defineProperty({}, k.onclick, function (e) {
        return handleScrollButtonClick(state, attrs, e, "backward");
      })
    }));
    scrollButtonAtEnd = h(ScrollButton, _extends({}, {
      key: "forward",
      icon: attrs.scrollIconForward,
      className: classes$1.scrollButtonAtEnd,
      position: "end",
      register: state.registerScrollButton(state),
      events: _defineProperty({}, k.onclick, function (e) {
        return handleScrollButtonClick(state, attrs, e, "forward");
      })
    }));
  }

  var tabIndicator = attrs.hideIndicator ? null : h("div", {
    key: "indicator",
    className: classes$1.indicator
  });

  return [attrs.scrollable ? scrollButtonAtStart : null, h("div", {
    key: "tabrow",
    className: [classes$1.tabRow, attrs.centered ? classes$1.tabRowCentered : null, attrs.scrollable ? classes$1.tabRowIndent : null].join(" ")
  }, [tabRow, tabIndicator]), attrs.scrollable ? scrollButtonAtEnd : null];
};

var tabs = Object.freeze({
	getInitialState: getInitialState,
	onMount: onMount,
	onUnMount: onUnMount,
	createProps: createProps,
	createContent: createContent
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Don't export 'element': it will be the wrapped Button component (set in polythene-xxx-tabs/tab)

var onMount$1 = function onMount(vnode) {
  var dom = vnode.dom;
  if (!dom) {
    return;
  }
  var attrs = vnode.attrs;
  attrs.register(attrs.index, {
    attrs: attrs,
    dom: dom
  });
};

var createProps$1 = function createProps(vnode, _ref) {
  var h = _ref.renderer,
      k = _ref.keys,
      Icon = _ref.Icon;

  var attrs = vnode.attrs;
  // Let internal onclick function co-exist with passed button option
  attrs.events = attrs.events || {};
  attrs.events[k.onclick] = attrs.events[k.onclick] || function () {};
  return _extends$1({}, attrs, {
    content: h("div", { className: classes$1.tabContent }, [attrs.icon ? h(Icon, attrs.icon) : null, attrs.label ? h("div", { className: classes$1.label }, h("span", attrs.label)) : null]),
    className: [classes$1.tab, attrs.icon && attrs.label ? classes$1.tabHasIcon : null, attrs.className || attrs[k.class]].join(" "),
    selected: attrs.selected,
    wash: false,
    ripple: true,
    events: _extends$1({}, attrs.events, _defineProperty$1({}, k.onclick, function (e) {
      attrs.onSelect();
      attrs.events[k.onclick](e);
    }))
  });
};

var createContent$1 = function createContent() {
  return null;
};

var tab = Object.freeze({
	onMount: onMount$1,
	createProps: createProps$1,
	createContent: createContent$1
});

// Don't export 'element': it will be the wrapped IconButton component (set in polythene-xxx-tabs/scroll-button)

var arrowBackward = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/></svg>";
var arrowForward = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>";

var onMount$2 = function onMount(vnode) {
  var dom = vnode.dom;
  if (!dom) {
    return;
  }
  var attrs = vnode.attrs;
  attrs.register(attrs.position, dom);
};

var createProps$2 = function createProps(vnode, _ref) {
  var h = _ref.renderer,
      k = _ref.keys;

  var attrs = vnode.attrs;
  var icon = attrs.position === "start" ? attrs.icon || { svg: { content: h.trust(arrowBackward) } } : attrs.icon || { svg: { content: h.trust(arrowForward) } };
  return {
    className: [classes$1.scrollButton, attrs.className || attrs[k.class]].join(" "),
    icon: icon,
    ripple: { center: true },
    events: attrs.events
  };
};

var scrollButton = Object.freeze({
	onMount: onMount$2,
	createProps: createProps$2
});

export { tabs as coreTabs, tab as coreTab, scrollButton as coreScrollButton, classes$1 as classes, vars$3 as vars };
