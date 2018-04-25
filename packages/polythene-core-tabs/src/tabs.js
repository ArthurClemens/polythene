import { filterSupportedAttributes, isTouch, subscribe, unsubscribe, isRTL } from "polythene-core";
import { scrollTo } from "polythene-utilities";
import vars from "./vars";
import classes from "polythene-css-classes/tabs";

const whenCreateDone = () => Promise.resolve();

const getNewIndex = (index, tabs) => {
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
  const newIndex = getNewIndex(currentTabIndex, state.tabs)[direction];
  if (newIndex !== currentTabIndex) {
    setSelectedTab(state, attrs, newIndex, true);
  } else {
    scrollToTab(state, newIndex);
  }
};

const scrollToTab = (state, tabIndex) => {
  const tabs = state.tabs;
  const scroller = state.scrollerEl;
  // Scroll to position of selected tab
  const tabLeft = tabs.slice(0, tabIndex).reduce((totalWidth, tabData) =>
    totalWidth + tabData.dom.getBoundingClientRect().width, 0);
  // Tabs at the far right will not fully move to the left
  // because the scrollable row will stick to the right 
  // to get the max scroll left, we subtract the visible viewport from the scroll width
  const scrollerWidth = scroller.getBoundingClientRect().width; // frame width
  const scrollingWidth = scroller.scrollWidth;
  const maxScroll = scrollingWidth - scrollerWidth;
  const left = state.isRTL
    ? -1 * Math.min(tabLeft, maxScroll)
    : Math.min(tabLeft, maxScroll);
  const currentLeft = scroller.scrollLeft;
  if (currentLeft !== left) {
    const duration = Math.abs(currentLeft - left) / vars.tabs_scroll_speed;
    const delaySeconds = vars.tabs_scroll_delay || 0;
    setTimeout(() => {
      scrollTo({
        element: scroller,
        to: left,
        duration: Math.max(vars.tabs_scroll_min_duration, duration),
        direction: "horizontal"
      }).then(() => updateScrollButtons(state));
    }, delaySeconds * 1000);
  }
};

const updateScrollButtons = state => {
  const scrollerEl = state.scrollerEl;
  const scrollLeft = scrollerEl.scrollLeft;
  const currentTabIndex = state.selectedTabIndex();
  const tabsEl = state.tabsEl;
  const minTabIndex = 0;
  const maxTabIndex = state.tabs.length - 1;
  const isAtStart = (scrollerEl.scrollLeft === 0) && (currentTabIndex === minTabIndex);
  const isAtEnd = (scrollLeft >= (scrollerEl.scrollWidth - tabsEl.getBoundingClientRect().width - 1)) && (currentTabIndex === maxTabIndex);
  state.scrollButtonAtStart(isAtStart);
  state.scrollButtonAtEnd(isAtEnd);
};

const animateIndicator = (selectedTabEl, animate, state) => {
  const parentRect = state.tabsEl.getBoundingClientRect();
  const rect = selectedTabEl.getBoundingClientRect();
  const buttonSize = state.managesScroll ? rect.height : 0;
  const translateX = state.isRTL
    ? rect.right - parentRect.right + state.scrollerEl.scrollLeft + buttonSize
    : rect.left - parentRect.left + state.scrollerEl.scrollLeft - buttonSize;
  const scaleX = 1 / (parentRect.width - 2 * buttonSize) * rect.width;
  const transformCmd = `translate(${translateX}px, 0) scaleX(${scaleX})`;
  const duration = animate ? vars.indicator_slide_min_duration : 0;
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

const sortByLargestWidth = (a, b) =>
  a < b
    ? 1
    : a > b
      ? -1
      : 0;

export const getInitialState = (vnode, createStream) => {
  const attrs = vnode.attrs;
  const tabIndex = attrs.selectedTab !== undefined
    ? attrs.selectedTab
    : Array.isArray(attrs.tabs)
      ? attrs.tabs.reduce((acc, tab, index) => (
        acc === undefined && !tab.disabled
          ? index
          : acc
      ), undefined)
      : 0;
  const selectedTabIndex = createStream(tabIndex);
  const scrollButtonAtStart = createStream(true);
  const scrollButtonAtEnd = createStream(true);
  const registerTabButton = state => (index, data) => state.tabs[index] = data;
  const registerScrollButton = state => (position, dom) => state.scrollButtons[position] = dom;
  return {
    tabsEl:              undefined,
    scrollerEl:          undefined,
    tabs:                [], // {data, el}
    tabRow:              undefined,
    tabIndicatorEl:      undefined,
    selectedTabIndex,
    previousSelectedTab: undefined,
    managesScroll:       attrs.scrollable && !isTouch,
    scrollButtonAtStart,
    scrollButtonAtEnd,
    scrollButtons: {
      start: undefined,
      end: undefined
    },
    registerTabButton,
    registerScrollButton,
    isRTL:               false,
    cleanUp:             undefined, // set in onMount
    redrawOnUpdate: createStream.merge([selectedTabIndex, scrollButtonAtStart, scrollButtonAtEnd])
  };
};

export const onMount = vnode => {
  const dom = vnode.dom;
  const state = vnode.state;
  const attrs = vnode.attrs;

  state.tabsEl = dom;
  state.isRTL = isRTL({ element: dom });
  if (!attrs.hideIndicator) {
    state.tabIndicatorEl = dom.querySelector(`.${classes.indicator}`);
  }
  state.scrollerEl = dom.querySelector(`.${classes.tabRow}`);

  // A promise can't resolve during the oncreate loop
  // The Mithril draw loop is synchronous - there is no delay between one this oncreate and the tab button's oncreate
  whenCreateDone().then(() => {
    if (state.tabs && attrs.largestWidth) {
      const widths = state.tabs.map(tabData => tabData.dom.getBoundingClientRect().width);
      const largest = widths.sort(sortByLargestWidth)[0];
      state.tabs.forEach(tabData => tabData.dom.style.width = largest + "px");
    }
    setSelectedTab(state, attrs, state.selectedTabIndex(), false);
  });

  const onResize = () =>
    setSelectedTab(state, attrs, state.selectedTabIndex(), false);

  subscribe("resize", onResize),

  state.cleanUp = () => (
    unsubscribe("resize", onResize)
  );
};

export const onUnMount = ({ state }) =>
  state.cleanUp();

export const createProps = (vnode, { keys: k }) => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  const autofit = attrs.scrollable || attrs.centered
    ? false
    : attrs.autofit
      ? true
      : false;

  // Keep selected tab up to date
  if (attrs.selectedTab !== undefined && state.previousSelectedTab !== attrs.selectedTab) {
    setSelectedTab(state, attrs, attrs.selectedTab, true);
  }
  state.previousSelectedTab = attrs.selectedTab;

  return Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      className: [
        classes.component,
        attrs.scrollable ? classes.scrollable : null,
        state.scrollButtonAtStart() ? classes.isAtStart : null,
        state.scrollButtonAtEnd() ? classes.isAtEnd : null,
        attrs.activeSelected ? classes.activeSelectable : null,
        autofit ? classes.isAutofit : null,
        attrs.compact ? classes.compactTabs : null,
        attrs.menu ? classes.isMenu : null,
        attrs.tone === "dark" ? "pe-dark-tone" : null,
        attrs.tone === "light" ? "pe-light-tone" : null,
        attrs.className || attrs[k.class],
      ].join(" ")
    }
  );
};

export const createContent = (vnode, { renderer: h, keys: k, Tab, ScrollButton }) => {
  const state = vnode.state;
  const attrs = vnode.attrs;

  const buttons = attrs.content
    ? attrs.content
    : attrs.tabs
      ? attrs.tabs
      : attrs.children || vnode.children || [];

  if (buttons.length === 0) {
    console.error("No tabs specified"); // eslint-disable-line no-console
  }

  const tabRowButtons = buttons.map((buttonOpts = {}, index) => {
    const buttonOptsCombined = Object.assign(
      {},
      buttonOpts,
      {
        // These options can be overridden by `all`
        selected: index === state.selectedTabIndex(),
        animateOnTap: (attrs.animateOnTap !== false) ? true : false
      },
      attrs.all,
      {
        // Internal options, should not get overridden
        index,
        key: `tab-${index}`,
        register: state.registerTabButton(state),
        onSelect: () =>
          setSelectedTab(state, attrs, index, attrs.noIndicatorSlide ? false : true)
      }
    );
    return h(Tab, buttonOptsCombined);
  });

  const tabRow = tabRowButtons;

  let scrollButtonAtStart, scrollButtonAtEnd;
  if (attrs.scrollable) {
    scrollButtonAtStart = h(ScrollButton, Object.assign(
      {},
      {
        key: "backward",
        icon: attrs.scrollIconBackward,
        className: classes.scrollButtonAtStart,
        position: "start",
        register: state.registerScrollButton(state),
        events: { [k.onclick]: e => handleScrollButtonClick(state, attrs, e, "backward") },
        isRTL: state.isRTL
      }
    ));
    scrollButtonAtEnd = h(ScrollButton, Object.assign(
      {},
      {
        key: "forward",
        icon: attrs.scrollIconForward,
        className: classes.scrollButtonAtEnd,
        position: "end",
        register: state.registerScrollButton(state),
        events: { [k.onclick]: e => handleScrollButtonClick(state, attrs, e, "forward") },
        isRTL: state.isRTL
      }
    ));
  }

  const tabIndicator = attrs.hideIndicator
    ? null
    : h("div",
      {
        key: "indicator",
        className: classes.indicator
      }
    );

  return [
    attrs.scrollable ? scrollButtonAtStart : null,
    h("div",
      {
        key: "tabrow",
        className: [
          classes.tabRow,
          attrs.centered ? classes.tabRowCentered : null,
          attrs.scrollable ? classes.tabRowIndent : null
        ].join(" ")
      },
      [
        tabRow,
        tabIndicator
      ]
    ),
    attrs.scrollable ? scrollButtonAtEnd : null
  ];
};

