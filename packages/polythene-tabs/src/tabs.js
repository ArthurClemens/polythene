import m from "mithril";
import { filterSupportedAttributes } from "polythene-core-essentials";
import { isTouch, subscribe, unsubscribe } from "polythene-core-essentials";
import { scrollTo } from "polythene-utilities";
import { customTheme } from "./theme";
import tab from "./tab";
import scrollButton from "./scroll-button";
import vars from "./theme/vars";
import classes from "./classes";

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
  const currentTabIndex = state.selectedTabIndex;
  const newIndex = getNewIndex(currentTabIndex, state.tabs)[direction];
  if (newIndex !== currentTabIndex) {
    setSelectedTab(state, attrs, newIndex, true);
    m.redraw();
  } else {
    scrollToTab(state, newIndex);
  }
};

/*
Moves the first tab to the left so that the text label is as position 0. 
*/
const alignToTitle = (state) => {
  const firstTab = state.tabs[0].el;
  const firstInnerLabel = firstTab.querySelector(`.${classes.label} span`);
  const firstOuterLabelWidth = firstTab.getBoundingClientRect().width;
  const firstInnerLabelWidth = firstInnerLabel.getBoundingClientRect().width;
  const firstTabOffset = (firstOuterLabelWidth - firstInnerLabelWidth) / 2;
  firstTab.style.marginLeft = `${-firstTabOffset}px`;
};

const createRightButtonOffset = (state) => {
  // add padding to right so that last item is not hidden behind scroll button
  const scrollButtonAtEndWidth = state.scrollButtons["end"].getBoundingClientRect().width;
  const scrollButtonOffsetEl = state.tabsEl.querySelector(`.${classes.scrollButtonOffset}`);
  scrollButtonOffsetEl.style.width = `${scrollButtonAtEndWidth}px`;
};

const scrollToTab = (state, tabIndex) => {
  const tabs = state.tabs;
  const scroller = state.scrollerEl;
  // Scroll to position of selected tab
  const tabLeft = tabs.slice(0, tabIndex).reduce((totalWidth, tabData) => {
    return totalWidth + tabData.el.getBoundingClientRect().width;
  }, 0);
  // Tabs at the far right will not fully move to the left
  // because the scrollable row will stick to the right 
  // to get the max scroll left, we subtract the visible viewport from the scroll width
  const scrollerWidth = scroller.getBoundingClientRect().width; // frame width
  const scrollingWidth = scroller.scrollWidth;
  const maxScroll = scrollingWidth - scrollerWidth;
  const left = Math.min(tabLeft, maxScroll);
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
      });
    }, delaySeconds * 1000);
  }
};

const updateScrollButtons = state => {
  const scrollerEl = state.scrollerEl;
  const scrollLeft = scrollerEl.scrollLeft;
  const currentTabIndex = state.selectedTabIndex;
  const tabsEl = state.tabsEl;
  const minTabIndex = 0;
  const maxTabIndex = state.tabs.length - 1;
  const isAtStart = (scrollerEl.scrollLeft === 0) && (currentTabIndex === minTabIndex);
  const isAtEnd = (scrollLeft >= (scrollerEl.scrollWidth - tabsEl.getBoundingClientRect().width - 1)) && (currentTabIndex === maxTabIndex);
  state.scrollButtonStates.start = !isAtStart;
  state.scrollButtonStates.end = !isAtEnd;
};

const animateIndicator = (selectedTabEl, animate, state) => {
  const parentRect = state.tabsEl.getBoundingClientRect();
  const rect = selectedTabEl.getBoundingClientRect();
  const style = state.tabIndicatorEl.style;
  const translateX = rect.left - parentRect.left + state.scrollerEl.scrollLeft;
  const transformCmd = `translate(${translateX}px, 0)`;
  const duration = animate ? vars.indicator_slide_min_duration : 0;
  // use width instead of scale to please IE10
  style.width = rect.width + "px";
  style["transition-duration"] =
    style["-webkit-transition-duration"] =
    style["-moz-transition-duration"] =
    style["-o-transition-duration"] = duration + "s";
  style.transform =
    style["-webkit-transform"] =
    style["-moz-transform"] =
    style["-ms-transform"] =
    style["-o-transform"] = transformCmd;
};

const setSelectedTab = (state, attrs, index, animate) => {
  state.selectedTabIndex = index;
  if (!state.tabs.length) return;
  const selectedTabEl = state.tabs[index].el;
  if (selectedTabEl && state.tabIndicatorEl && state.tabsEl) {
    animateIndicator(selectedTabEl, animate, state);
  }
  if (state.managesScroll) {
    updateScrollButtons(state);
    scrollToTab(state, index);
  }
  if (attrs.getState) {
    attrs.getState({
      index,
      data: state.tabs[index].data,
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

const view = vnode => {
  const attrs = vnode.attrs;
  const state = vnode.state;
  const element = attrs.element || "div";
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

  const onResize = () => (
    setSelectedTab(state, attrs, state.selectedTabIndex, false),
    m.redraw()
  );

  const props = Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      class: [
        classes.component,
        attrs.scrollable ? classes.scrollable : null,
        state.selectedTabIndex === 0 ? classes.isAtStart : null,
        state.selectedTabIndex === state.tabs.length - 1 ? classes.isAtEnd : null,
        attrs.activeSelected ? classes.activeSelectable : null,
        autofit ? classes.isAutofit : null,
        attrs.small ? classes.smallTabs : null,
        attrs.menu ? classes.isMenu : null,
        attrs.tone === "dark" ? "pe-dark-tone" : null,
        attrs.tone === "light" ? "pe-light-tone" : null,
        attrs.class
      ].join(" "),
      oninit: () => subscribe("resize", onResize),
      oncreate: vnode => {
        state.tabsEl = vnode.dom;
        // A promise can't resolve during the oncreate loop
        // The Mithril draw loop is synchronous - there is no delay between one this oncreate and the tab button's oncreate
        whenCreateDone().then(() => {
          if (attrs.largestWidth) {
            const widths = state.tabs.map(tabData => tabData.el.getBoundingClientRect().width);
            const largest = widths.sort(sortByLargestWidth)[0];
            state.tabs.forEach(tabData => tabData.el.style.width = largest + "px");
          }
          // Align first scrollable tab to title
          if (attrs.scrollable) {
            alignToTitle(state);
          }
          // Handle scroll
          if (attrs.scrollable && !isTouch) {
            state.managesScroll = true;
            createRightButtonOffset(state);
          }
          setSelectedTab(state, attrs, state.selectedTabIndex, false);
          if (attrs.getState) {
            // Give immediate feedback
            setTimeout(m.redraw);
          }
        });
      },
      onremove: () => unsubscribe("resize", onResize)
    }
  );

  const buttons = attrs.content
    ? attrs.content
    : attrs.buttons
      ? attrs.buttons
      : attrs.children || vnode.children;

  const tabRowButtons = buttons.map((buttonOpts = {}, index) => {
    const buttonOptsCombined = Object.assign(
      {},
      buttonOpts,
      {
        // These options can be overridden by tabsOpts
        selected: index === state.selectedTabIndex,
        animateOnTap: (attrs.animateOnTap !== false) ? true : false
      },
      attrs.tabsOpts || {},
      {
        // Internal options, should never be overridden
        index,
        key: `tab-${index}`,
        register: state.registerTabButton,
        onSelect: () => (
          setSelectedTab(state, attrs, index, attrs.noIndicatorSlide ? false : true),
          setTimeout(m.redraw)
        )
      }
    );
    return m(tab, buttonOptsCombined);
  });

  const tabRow = attrs.scrollable
    ? tabRowButtons.concat([
      // offset for right scroll button
      m("div", { class: classes.scrollButtonOffset })
    ])
    : tabRowButtons;

  let scrollButtonAtStart, scrollButtonAtEnd;
  if (attrs.scrollable) {
    scrollButtonAtStart = m(scrollButton, Object.assign(
      {},
      {
        icon: attrs.scrollIconBackward,
        class: classes.scrollButtonAtStart,
        position: "start",
        register: state.registerScrollButton,
        events: { onclick: e => handleScrollButtonClick(state, attrs, e, "backward") }
      }
    ));
    scrollButtonAtEnd = m(scrollButton, Object.assign(
      {},
      {
        icon: attrs.scrollIconForward,
        class: classes.scrollButtonAtEnd,
        position: "end",
        register: state.registerScrollButton,
        events: { onclick: e => handleScrollButtonClick(state, attrs, e, "forward") }
      }
    ));
  }

  const tabIndicator = attrs.hideIndicator
    ? null
    : m("div", {
      class: classes.indicator,
      oncreate: vnode => state.tabIndicatorEl = vnode.dom
    });

  const content = [
    attrs.scrollable ? scrollButtonAtStart : null,
    m("div", {
      class: [
        classes.tabRow,
        attrs.centered ? classes.tabRowCentered : null,
        attrs.scrollable ? classes.tabRowIndent : null
      ].join(" "),
      oncreate: vnode => state.scrollerEl = vnode.dom
    }, [
      tabRow,
      tabIndicator
    ]),
    attrs.scrollable ? scrollButtonAtEnd : null
  ];

  return m(element, props, [attrs.before, content, attrs.after]);
};

export default {
  theme: customTheme, // accepts (selector, vars)
  view,
  oninit: vnode => {
    const registerTabButton = (index, data) => vnode.state.tabs[index] = data;
    const registerScrollButton = (position, dom) => vnode.state.scrollButtons[position] = dom;
    vnode.state = Object.assign(vnode.state, {
      tabsEl:              undefined,
      scrollerEl:          undefined,
      tabs:                [], // {data, el}
      tabRow:              undefined,
      tabIndicatorEl:      undefined,
      selectedTabIndex:    vnode.attrs.selectedTab || 0,
      previousSelectedTab: undefined,
      managesScroll:       false,
      scrollButtonStates: {
        start: false,
        end: false
      },
      scrollButtons: {
        start: undefined,
        end: undefined
      },
      registerTabButton,
      registerScrollButton
    });
  }
};
