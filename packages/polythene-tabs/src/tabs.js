import m from "mithril";
import { button } from "polythene-button";
import { icon } from "polythene-icon";
import { iconButton } from "polythene-icon-button";
import { isTouch, subscribe, unsubscribe } from "polythene-core";
//import scrollTo from "polythene/common/scroll-to";
import { customTheme, arrowForward, arrowBackward } from "./theme";
import vars from "./theme/vars";

export const classes = {
  component:            "pe-tabs",
  scrollButton:         "pe-tabs__scroll-button",
  scrollButtonAtStart:  "pe-tabs__scroll-button-start",
  scrollButtonAtEnd:    "pe-tabs__scroll-button-end",
  scrollButtonOffset:   "pe-tabs__scroll-button-offset",
  tabRow:               "pe-tabs__row",
  tabRowCentered:       "pe-tabs__row--centered",
  tabRowIndent:         "pe-tabs__row--indent",
  tab:                  "pe-tabs__tab",
  tabContent:           "pe-tabs__tab-content",
  tabHasIcon:           "pe-tabs__tab---icon",
  indicator:            "pe-tabs__indicator",
  scrollable:           "pe-tabs--scrollable",
  isAutofit:            "pe-tabs--autofit",
  isAtStart:            "pe-tabs--start",
  isAtEnd:              "pe-tabs--end",
  smallTabs:            "pe-tabs--small",
  isMenu:               "pe-tabs--menu",
  activeSelectable:     "pe-tabs__active-selectable",
  // reference:  
  label:                "pe-button__label"
};

const POSITION_LEFT  = 1 << 1;
const POSITION_RIGHT = 1 << 2;

const getNewIndex = (index, tabs) => {
  const minTabIndex = 0;
  const maxTabIndex = tabs.length - 1;
  return {
    left: Math.max(index - 1, minTabIndex),
    right: Math.min(index + 1, maxTabIndex)
  };
};

const handleScrollButtonClick = (state, attrs, e, direction) => {
  e.stopPropagation();
  e.preventDefault();
  const currentTabIndex = state.selectedTabIndex;
  const newIndex = getNewIndex(currentTabIndex, state.tabs)[direction];
  scrollToTab(state, newIndex);
  if (newIndex !== currentTabIndex) {
    setSelectedTab(state, attrs, newIndex, true);
    m.redraw();
  }
};


const createScrollButton = (state, position, attrs) => {
  const scrollIconForward = attrs.scrollIconForward || arrowForward;
  const scrollIconBackward = attrs.scrollIconBackward || arrowBackward;

  return m(iconButton, {
    class: [
      classes.scrollButton,
      (position === POSITION_LEFT ? classes.scrollButtonAtStart : classes.scrollButtonAtEnd)
    ].join(" "),
    icon: position === POSITION_LEFT ? scrollIconBackward : scrollIconForward,
    ripple: {
      center: true
    },
    oncreate: vnode => {
      if (state.scrollButtonAtStartEl && state.scrollButtonAtEndEl) {
        return;
      }
      if (position === POSITION_LEFT) {
        state.scrollButtonAtStartEl = vnode.dom;
      } else {
        state.scrollButtonAtEndEl = vnode.dom;
      }
    },
    events: {
      onclick: (position === POSITION_LEFT) ? (e) => {
        handleScrollButtonClick(state, attrs, e, "left");
      } : (e) => {
        handleScrollButtonClick(state, attrs, e, "right");
      }
    }
  });
};

const alignToTitle = (state) => {
  const firstTab = state.tabs[0].el;
  const firstInnerLabel = firstTab.querySelector("." + classes.label + " span");
  const firstOuterLabelWidth = firstTab.getBoundingClientRect().width;
  const firstInnerLabelWidth = firstInnerLabel.getBoundingClientRect().width;
  const firstTabOffset = (firstOuterLabelWidth - firstInnerLabelWidth) / 2;
  firstTab.style.marginLeft = -firstTabOffset + "px";
};

const createRightButtonOffset = (state) => {
  // add padding to right so that last item is not hidden behind scroll button
  const scrollButtonAtEndWidth = state.scrollButtonAtEndEl.getBoundingClientRect().width;
  const scrollButtonOffsetEl = state.tabsEl.querySelector("." + classes.scrollButtonOffset);
  scrollButtonOffsetEl.style.width = scrollButtonAtEndWidth + "px";
};

const scrollToTab = () => {
// const scrollToTab = (state, tabIndex) => {
//   const tabs = state.tabs;
//   const scroller = state.scrollerEl;
//   // scroll to position of selected tab
//   const tabLeft = tabs.slice(0, tabIndex).reduce((totalWidth, tabData) => {
//     return totalWidth + tabData.el.getBoundingClientRect().width;
//   }, 0);
//   // tabs at the far right will not fully move to the left
//   // because the scrollable row will stick to the right 
//   // to get the max scroll left, we subtract the visible viewport from the scroll width
//   const scrollerWidth = scroller.getBoundingClientRect().width; // frame width
//   const scrollingWidth = scroller.scrollWidth;
//   const maxScroll = scrollingWidth - scrollerWidth;
//   const left = Math.min(tabLeft, maxScroll);
//   const currentLeft = scroller.scrollLeft;
//   if (currentLeft !== left) {
//     const duration = Math.abs(currentLeft - left) / vars.tabs_scroll_speed;
//     const delaySeconds = vars.tabs_scroll_delay || 0;
//     setTimeout(() => {
//       scrollTo({
//         element: scroller,
//         to: left,
//         duration: Math.max(vars.tabs_scroll_min_duration, duration),
//         direction: "horizontal"
//       });
//     }, delaySeconds * 1000);
//   }
};

const updateScrollButtons = (state) => {
  const scrollerEl = state.scrollerEl;
  const scrollLeft = scrollerEl.scrollLeft;
  const currentTabIndex = state.selectedTabIndex;
  const tabsEl = state.tabsEl;
  const minTabIndex = 0;
  const maxTabIndex = state.tabs.length - 1;
  const isAtLeft = (scrollerEl.scrollLeft === 0) && (currentTabIndex === minTabIndex);
  const isAtRight = (scrollLeft >= (scrollerEl.scrollWidth - tabsEl.getBoundingClientRect().width - 1)) && (currentTabIndex === maxTabIndex);
  state.scrollButtonStates.left = !isAtLeft;
  state.scrollButtonStates.right = !isAtRight;
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

const createTab = (state, attrs, index, buttonOpts) => {
  // Let internal onclick function co-exist with passed button option
  buttonOpts.events = buttonOpts.events || {};
  buttonOpts.events.onclick = buttonOpts.events.onclick || (() => {});
  const tabButtonOptions = Object.assign(
    {},
    buttonOpts,
    {
      content: m("div", {
        class: classes.tabContent
      }, [
        buttonOpts.icon ? m(icon, buttonOpts.icon) : null,
        buttonOpts.label
          ? m("div", {
            class: classes.label
          }, m("span", buttonOpts.label))
          : null,
      ]),
      class: [
        classes.tab,
        buttonOpts.icon && buttonOpts.label ? classes.tabHasIcon : null,
        buttonOpts.class
      ].join(" "),
      wash: false,
      ripple: true,
      events: Object.assign(
        {},
        buttonOpts.events,
        {
          onclick: e => {
            setSelectedTab(state, attrs, index, attrs.noIndicatorSlide ? false : true);
            buttonOpts.events.onclick(e);
          }
        }
      ),
      oncreate: vnode => {
        if (state.tabs[index] === undefined) {
          state.tabs[index] = {
            data: buttonOpts,
            el: vnode.dom
          };
        }
      }
    }
  );
  return m(button, tabButtonOptions);
};

const sortNumbers = (a, b) => {
  if (a < b)
    return -1;
  if (a > b)
    return 1;
  else
    return 0;
};

const view = vnode => {
  const attrs = vnode.attrs;
  const state = vnode.state;
  const element = attrs.element || "div";
  const autofit = attrs.scrollable || attrs.centered
    ? false
    : attrs.autofit
      ? true
      : false;

  // keep selected tab up to date
  if (attrs.selectedTab !== undefined && state.previousOptsSelectedTab !== attrs.selectedTab) {
    setSelectedTab(state, attrs, attrs.selectedTab, true);
  }
  state.previousOptsSelectedTab = attrs.selectedTab;

  const onResize = () => {
    setSelectedTab(state, attrs, state.selectedTabIndex, false);
    m.redraw();
  };

  const props = {
    class: [
      classes.component,
      attrs.scrollable ? classes.scrollable : null,
      state.selectedTabIndex === 0 ? classes.isAtStart : null,
      state.selectedTabIndex === state.tabs.length - 1 ? classes.isAtEnd : null,
      attrs.activeSelected ? classes.activeSelectable : null,
      autofit ? classes.isAutofit : null,
      attrs.small ? classes.smallTabs : null,
      attrs.menu ? classes.isMenu : null,
      attrs.class
    ].join(" "),
    id: attrs.id || "",
    oncreate: vnode => {
      state.tabsEl = vnode.dom;

      if (attrs.largestWidth) {
        const widths = state.tabs.map(tabData => tabData.el.getBoundingClientRect().width);
        const largest = widths.sort(sortNumbers).reverse()[0];
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
      subscribe("resize", onResize);
      setSelectedTab(state, attrs, state.selectedTabIndex, false);
      if (attrs.getState) {
        // Give immediate feedback
        setTimeout(m.redraw);
      }
    },
    onremove: () => {
      unsubscribe("resize", onResize);
    }
  };
  const buttons = attrs.content
    ? attrs.content
    : attrs.buttons
      ? attrs.buttons
      : attrs.children || vnode.children;
  const tabRow = buttons.map((buttonOpts = {}, index) => {
    const buttonOptsCombined = Object.assign(
      {},
      buttonOpts,
      {
        selected: index === state.selectedTabIndex,
        animateOnTap: (attrs.animateOnTap !== false) ? true : false
      },
      attrs.tabsOpts || {}
    );
    return createTab(state, attrs, index, buttonOptsCombined);
  }).concat([
    // offset for right scroll button
    attrs.scrollable ? m("div", {
      class: classes.scrollButtonOffset
    }) : null
  ]);

  let scrollButtonAtStart, scrollButtonAtEnd;
  if (attrs.scrollable) {
    scrollButtonAtStart = createScrollButton(state, POSITION_LEFT, attrs);
    scrollButtonAtEnd = createScrollButton(state, POSITION_RIGHT, attrs);
  }

  const tabIndicator = attrs.hideIndicator
    ? null
    : m("div", {
      class: classes.indicator,
      oncreate: vnode => (
        state.tabIndicatorEl = vnode.dom,
        setSelectedTab(state, attrs, state.selectedTabIndex, false)
      )
    });

  const content = [
    attrs.scrollable ? scrollButtonAtStart : null,
    m("div", {
      class: [
        classes.tabRow,
        (attrs.centered ? classes.tabRowCentered : null),
        (attrs.scrollable ? classes.tabRowIndent : null)
      ].join(" "),
      oncreate: vnode =>
        state.scrollerEl = vnode.dom,
      onscroll: () => {
        updateScrollButtons(state);
      }
    }, [
      tabRow,
      tabIndicator
    ]),
    attrs.scrollable ? scrollButtonAtEnd : null
  ];
  return m(element, props, [attrs.before, content, attrs.after]);
};

export const tabs = {
  theme: customTheme, // accepts (selector, vars)
  view,
  oninit: vnode => {
    vnode.state = {
      tabsEl:                  null,
      scrollerEl:              null,
      tabs:                    [], // {data, el}
      tabIndicatorEl:          null,
      selectedTabIndex:        0,
      previousOptsSelectedTab: undefined,
      managesScroll:           false,
      scrollButtonStates: {
        left: false,
        right: false
      }
    };
  }
};
