import { filterSupportedAttributes, isTouch, subscribe, unsubscribe, isRTL, deprecation } from 'polythene-core';
import { scrollTo } from 'polythene-utilities';

var buttonClasses = {
  component: "pe-text-button",
  super: "pe-button",
  row: "pe-button-row",
  // elements      
  content: "pe-button__content",
  label: "pe-button__label",
  textLabel: "pe-button__text-label",
  wash: "pe-button__wash",
  dropdown: "pe-button__dropdown",
  // states      
  border: "pe-button--border",
  contained: "pe-button--contained",
  disabled: "pe-button--disabled",
  dropdownClosed: "pe-button--dropdown-closed",
  dropdownOpen: "pe-button--dropdown-open",
  extraWide: "pe-button--extra-wide",
  hasDropdown: "pe-button--dropdown",
  highLabel: "pe-button--high-label",
  inactive: "pe-button--inactive",
  raised: "pe-button--raised",
  selected: "pe-button--selected",
  separatorAtStart: "pe-button--separator-start"
};

var classes = {
  component: "pe-tabs",
  // elements
  indicator: "pe-tabs__indicator",
  scrollButton: "pe-tabs__scroll-button",
  scrollButtonAtEnd: "pe-tabs__scroll-button-end",
  scrollButtonAtStart: "pe-tabs__scroll-button-start",
  tab: "pe-tab",
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
  tabHasIcon: "pe-tabs__tab--icon",
  tabRowCentered: "pe-tabs__row--centered",
  tabRowIndent: "pe-tabs__row--indent",
  // lookup
  label: buttonClasses.label
};

const SCROLL_SPEED = 600; // px per second

const SCROLL_DELAY = .15; // seconds

const SCROLL_MIN_DURATION = .5; // seconds

const INDICATOR_SLIDE_MIN_DURATION = .25; // seconds

const whenCreateDone = () => Promise.resolve();

const getIndex = (state, attrs) => {
  const attrsSelectedTabIndex = attrs.selectedTabIndex !== undefined ? attrs.selectedTabIndex : attrs.selectedTab !== undefined // deprecated
  ? attrs.selectedTab : undefined;
  return attrsSelectedTabIndex !== undefined ? attrsSelectedTabIndex : Array.isArray(attrs.tabs) ? attrs.tabs.reduce((acc, tab, index) => acc === undefined && !tab.disabled ? index : acc, undefined) : undefined;
};

const scrollButtonGetNewIndex = (index, tabs) => {
  const minTabIndex = 0;
  const maxTabIndex = tabs.length - 1;
  return {
    backward: Math.max(index - 1, minTabIndex),
    forward: Math.min(index + 1, maxTabIndex)
  };
};

const handleScrollButtonClick = (state, attrs, e, direction) => {
  e.stopPropagation();
  e.preventDefault();
  const currentTabIndex = state.selectedTabIndex();
  const newIndex = scrollButtonGetNewIndex(currentTabIndex, state.tabs)[direction];

  if (newIndex !== currentTabIndex) {
    setSelectedTab(state, attrs, newIndex, true);
  } else {
    scrollToTab(state, newIndex);
  }
};

const scrollToTab = (state, tabIndex) => {
  const tabs = state.tabs;
  const scroller = state.tabRowEl; // Scroll to position of selected tab

  const tabLeft = tabs.slice(0, tabIndex).reduce((totalWidth, tabData) => totalWidth + tabData.dom.getBoundingClientRect().width, 0); // Tabs at the far right will not fully move to the left
  // because the scrollable row will stick to the right 
  // to get the max scroll left, we subtract the visible viewport from the scroll width

  const scrollerWidth = scroller.getBoundingClientRect().width; // frame width

  const scrollingWidth = scroller.scrollWidth;
  const maxScroll = scrollingWidth - scrollerWidth;
  const left = state.isRTL ? -1 * Math.min(tabLeft, maxScroll) : Math.min(tabLeft, maxScroll);
  const currentLeft = scroller.scrollLeft;

  if (currentLeft !== left) {
    const duration = Math.abs(currentLeft - left) / SCROLL_SPEED;
    const delaySeconds = SCROLL_DELAY;
    setTimeout(() => {
      scrollTo({
        element: scroller,
        to: left,
        duration: Math.max(SCROLL_MIN_DURATION, duration),
        direction: "horizontal"
      }).then(() => updateScrollButtons(state));
    }, delaySeconds * 1000);
  }
};

const updateScrollButtons = state => {
  const tabRowEl = state.tabRowEl;
  const scrollLeft = tabRowEl.scrollLeft;
  const currentTabIndex = state.selectedTabIndex();
  const tabsEl = state.tabsEl;
  const minTabIndex = 0;
  const maxTabIndex = state.tabs.length - 1;
  const isAtStart = tabRowEl.scrollLeft === 0 && currentTabIndex === minTabIndex;
  const isAtEnd = scrollLeft >= tabRowEl.scrollWidth - tabsEl.getBoundingClientRect().width - 1 && currentTabIndex === maxTabIndex;
  state.scrollButtonAtStart(isAtStart);
  state.scrollButtonAtEnd(isAtEnd);
};

const animateIndicator = (selectedTabEl, animate, state) => {
  const parentRect = state.tabsEl.getBoundingClientRect();
  const rect = selectedTabEl.getBoundingClientRect();
  const buttonSize = state.managesScroll ? rect.height : 0;
  const translateX = state.isRTL ? rect.right - parentRect.right + state.tabRowEl.scrollLeft + buttonSize : rect.left - parentRect.left + state.tabRowEl.scrollLeft - buttonSize;
  const scaleX = 1 / (parentRect.width - 2 * buttonSize) * rect.width;
  const transformCmd = `translate(${translateX}px, 0) scaleX(${scaleX})`;
  const duration = animate ? INDICATOR_SLIDE_MIN_DURATION : 0;
  const style = state.tabIndicatorEl.style;
  style["transition-duration"] = duration + "s";
  style.transform = transformCmd;
};

const setSelectedTab = (state, attrs, index, animate) => {
  state.selectedTabIndex(index);
  if (!state.tabs.length) return;
  const selectedTabEl = state.tabs[index].dom;

  if (selectedTabEl && state.tabIndicatorEl && state.tabsEl) {
    animateIndicator(selectedTabEl, animate, state);
  }

  if (state.managesScroll) {
    updateScrollButtons(state);
  }

  scrollToTab(state, index);

  if (attrs.onChange) {
    attrs.onChange({
      index,
      options: state.tabs[index].attrs,
      el: selectedTabEl
    });
  }
};

const sortByLargestWidth = (a, b) => a < b ? 1 : a > b ? -1 : 0;

const getInitialState = (vnode, createStream) => {
  const state = vnode.state;
  const attrs = vnode.attrs;

  if (attrs.selectedTab !== undefined) {
    deprecation("Tabs", {
      option: "selectedTab",
      newOption: "selectedTabIndex"
    });
  }

  const tabIndex = getIndex(state, attrs) || 0;
  const selectedTabIndex = createStream(tabIndex);
  const scrollButtonAtStart = createStream(true);
  const scrollButtonAtEnd = createStream(true);

  const registerTabButton = state => (index, data) => state.tabs[index] = data;

  const registerScrollButton = state => (position, dom) => state.scrollButtons[position] = dom;

  return {
    tabsEl: undefined,
    tabRowEl: undefined,
    tabs: [],
    // {data, el}
    tabRow: undefined,
    tabIndicatorEl: undefined,
    selectedTabIndex,
    previousSelectedTabIndex: undefined,
    managesScroll: attrs.scrollable && !isTouch,
    scrollButtonAtStart,
    scrollButtonAtEnd,
    scrollButtons: {
      start: undefined,
      end: undefined
    },
    registerTabButton,
    registerScrollButton,
    isRTL: false,
    cleanUp: undefined,
    // set in onMount
    redrawOnUpdate: createStream.merge([selectedTabIndex, scrollButtonAtStart, scrollButtonAtEnd])
  };
};
const onMount = vnode => {
  if (!vnode.dom) {
    return;
  }

  const dom = vnode.dom;
  const state = vnode.state;
  const attrs = vnode.attrs;
  state.tabsEl = dom;
  state.isRTL = isRTL({
    element: dom
  });

  if (!attrs.hideIndicator) {
    state.tabIndicatorEl = dom.querySelector(`.${classes.indicator}`);
  }

  state.tabRowEl = dom.querySelector(`.${classes.tabRow}`);

  const redrawLargestWidth = () => {
    if (state.tabs && attrs.largestWidth) {
      const widths = state.tabs.map(tabData => tabData.dom.getBoundingClientRect().width);
      const largest = widths.sort(sortByLargestWidth)[0];
      state.tabs.forEach(tabData => tabData.dom.style.width = largest + "px");
    }
  };

  const redraw = () => (redrawLargestWidth(), setSelectedTab(state, attrs, state.selectedTabIndex(), false));

  const handleFontEvent = ({
    name
  }) => name === "active" || name === "inactive" ? redraw() : null;

  subscribe("resize", redraw);
  subscribe("webfontloader", handleFontEvent);

  state.cleanUp = () => (unsubscribe("resize", redraw), unsubscribe("webfontloader", handleFontEvent)); // A promise can't resolve during the oncreate loop
  // The Mithril draw loop is synchronous - there is no delay between one this oncreate and the tab button's oncreate


  whenCreateDone().then(redraw);
};
const onUnMount = ({
  state
}) => state.cleanUp();
const createProps = (vnode, {
  keys: k
}) => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  const autofit = attrs.scrollable || attrs.centered ? false : attrs.autofit ? true : false; // Keep selected tab up to date

  const index = getIndex(state, attrs);

  if (index !== undefined && state.previousSelectedTabIndex !== index) {
    setSelectedTab(state, attrs, index, true);
  }

  state.previousSelectedTabIndex = index;
  return Object.assign({}, filterSupportedAttributes(attrs), {
    className: [classes.component, attrs.scrollable ? classes.scrollable : null, state.scrollButtonAtStart() ? classes.isAtStart : null, state.scrollButtonAtEnd() ? classes.isAtEnd : null, attrs.activeSelected ? classes.activeSelectable : null, autofit ? classes.isAutofit : null, attrs.compact ? classes.compactTabs : null, attrs.menu ? classes.isMenu : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};
const createContent = (vnode, {
  renderer: h,
  keys: k,
  Tab,
  ScrollButton
}) => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  const buttons = attrs.content ? attrs.content : attrs.tabs ? attrs.tabs : attrs.children || vnode.children || [];

  if (buttons.length === 0) {
    console.error("No tabs specified"); // eslint-disable-line no-console
  }

  const tabRow = buttons.map((buttonOpts = {}, index) => {
    const buttonOptsCombined = Object.assign({}, buttonOpts, {
      // These options can be overridden by `all`
      selected: index === state.selectedTabIndex(),
      animateOnTap: attrs.animateOnTap !== false ? true : false
    }, attrs.all, {
      // Internal options, should not get overridden
      index,
      key: buttonOpts.key || `tab-${index}`,
      register: state.registerTabButton(state),
      onSelect: () => setSelectedTab(state, attrs, index, attrs.noIndicatorSlide ? false : true)
    });
    return h(Tab, buttonOptsCombined);
  });
  let scrollButtonAtStart, scrollButtonAtEnd;

  if (attrs.scrollable) {
    scrollButtonAtStart = h(ScrollButton, Object.assign({}, {
      key: "backward",
      icon: attrs.scrollIconBackward,
      className: classes.scrollButtonAtStart,
      position: "start",
      register: state.registerScrollButton(state),
      events: {
        [k.onclick]: e => handleScrollButtonClick(state, attrs, e, "backward")
      },
      isRTL: state.isRTL
    }));
    scrollButtonAtEnd = h(ScrollButton, Object.assign({}, {
      key: "forward",
      icon: attrs.scrollIconForward,
      className: classes.scrollButtonAtEnd,
      position: "end",
      register: state.registerScrollButton(state),
      events: {
        [k.onclick]: e => handleScrollButtonClick(state, attrs, e, "forward")
      },
      isRTL: state.isRTL
    }));
  }

  const tabIndicator = attrs.hideIndicator ? null : h("div", {
    key: "indicator",
    className: classes.indicator
  });
  return [attrs.scrollable ? scrollButtonAtStart : null, h("div", {
    key: "tabrow",
    className: [classes.tabRow, attrs.centered ? classes.tabRowCentered : null, attrs.scrollable ? classes.tabRowIndent : null].join(" ")
  }, [tabRow, tabIndicator]), attrs.scrollable ? scrollButtonAtEnd : null];
};

var tabs = /*#__PURE__*/Object.freeze({
  getInitialState: getInitialState,
  onMount: onMount,
  onUnMount: onUnMount,
  createProps: createProps,
  createContent: createContent
});

const onMount$1 = vnode => {
  if (!vnode.dom) {
    return;
  }

  const dom = vnode.dom;
  const attrs = vnode.attrs;
  attrs.register(attrs.index, {
    attrs,
    dom
  });
};
const createProps$1 = (vnode, {
  renderer: h,
  keys: k,
  Icon
}) => {
  const attrs = vnode.attrs; // Let internal onclick function co-exist with passed button option

  attrs.events = attrs.events || {};

  attrs.events[k.onclick] = attrs.events[k.onclick] || (() => {});

  return Object.assign({}, attrs, {
    content: h("div", {
      className: classes.tabContent
    }, [attrs.icon ? h(Icon, attrs.icon) : null, attrs.label ? h("div", {
      className: classes.label
    }, h("span", attrs.label)) : null]),
    className: [classes.tab, attrs.icon && attrs.label ? classes.tabHasIcon : null, attrs.className || attrs[k.class]].join(" "),
    selected: attrs.selected,
    wash: false,
    ripple: true,
    events: Object.assign({}, attrs.events, {
      [k.onclick]: e => {
        attrs.onSelect();
        attrs.events[k.onclick](e);
      }
    })
  });
};
const createContent$1 = vnode => vnode.children;

var tab = /*#__PURE__*/Object.freeze({
  onMount: onMount$1,
  createProps: createProps$1,
  createContent: createContent$1
});

const arrowBackward = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/></svg>";
const arrowForward = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>";
const onMount$2 = vnode => {
  if (!vnode.dom) {
    return;
  }

  const dom = vnode.dom;
  const attrs = vnode.attrs;
  attrs.register(attrs.position, dom);
};
const createProps$2 = (vnode, {
  renderer: h,
  keys: k
}) => {
  const attrs = vnode.attrs;
  const icon = attrs.position === "start" ? attrs.icon || {
    svg: {
      content: h.trust(attrs.isRTL ? arrowForward : arrowBackward)
    }
  } : attrs.icon || {
    svg: {
      content: h.trust(attrs.isRTL ? arrowBackward : arrowForward)
    }
  };
  return {
    className: [classes.scrollButton, attrs.className || attrs[k.class]].join(" "),
    icon,
    ripple: {
      center: true
    },
    events: attrs.events
  };
};

var scrollButton = /*#__PURE__*/Object.freeze({
  onMount: onMount$2,
  createProps: createProps$2
});

export { tabs as coreTabs, tab as coreTab, scrollButton as coreScrollButton };
