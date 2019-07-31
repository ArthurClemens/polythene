import { filterSupportedAttributes, isTouch, subscribe, unsubscribe, isRTL } from "polythene-core";
import { scrollTo } from "polythene-utilities";
import classes from "polythene-css-classes/tabs";

const SCROLL_SPEED                 = 600; // px per second
const SCROLL_DELAY                 = .15; // seconds
const SCROLL_MIN_DURATION          = .5; // seconds
const INDICATOR_SLIDE_MIN_DURATION = .25; // seconds

const getButtons = props => {
  return props.content
    ? props.content
    : props.tabs
      ? props.tabs
      : props.children || [];
};

const getIndex = props => {
  const buttons = getButtons(props);
  const selectedIndex = Array.isArray(buttons)
    ? buttons.reduce((acc, tab, index) => (
      acc === undefined && !tab.disabled && tab.selected  
        ? index
        : acc
    ), undefined)
    : undefined;
  if (selectedIndex !== undefined) {
    return selectedIndex;
  }
  const attrsSelectedTabIndex = props.selectedTabIndex !== undefined
    ? props.selectedTabIndex
    : props.selectedTab !== undefined // deprecated
      ? props.selectedTab
      : undefined;
  return attrsSelectedTabIndex !== undefined
    ? attrsSelectedTabIndex
    : 0;
};

const scrollButtonGetNewIndex = (index, tabs) => {
  const minTabIndex = 0;
  const maxTabIndex = tabs.length - 1;
  return {
    backward: Math.max(index - 1, minTabIndex),
    forward: Math.min(index + 1, maxTabIndex)
  };
};

const sortByLargestWidth = (a, b) =>
  a < b
    ? 1
    : a > b
      ? -1
      : 0;

export const _Tabs = ({ h, a, getRef, useState, useEffect, ScrollButton, Tab, ...props }) => {
  const buttons = getButtons(props);
  if (buttons.length === 0) {
    throw new Error("No tabs specified");
  }

  const [domElement, setDomElement] = useState();
  const [RTL, setRTL] = useState(false);
  const tabIndex = getIndex(props) || 0;
  const [selectedTabIndex, setSelectedTabIndex] = useState(tabIndex);
  const [isScrollButtonAtStart, setIsScrollButtonAtStart] = useState(false);
  const [isScrollButtonAtEnd, setIsScrollButtonAtEnd] = useState(false);
  const [tabs, setTabs] = useState([]);
  const [previousSelectedTabIndex, setPreviousSelectedTabIndex] = useState();

  const managesScroll = props.scrollable && !isTouch;
  const tabRowElement = domElement && domElement.querySelector(`.${classes.tabRow}`);
  const tabIndicatorElement = domElement && domElement.querySelector(`.${classes.indicator}`);
  const isTabsInited = !!domElement && tabs.length === buttons.length;

  useEffect(
    () => {
      if (!tabRowElement) return;
      const tabRowTabs = [...tabRowElement.querySelectorAll("[data-index]")].map(dom => {
        const index = parseInt(dom.getAttribute("data-index"), 10);
        return {
          dom,
          options: buttons[index]
        };
      });
      if (tabRowTabs) {
        setTabs(tabRowTabs);
      }
    },
    [tabRowElement]
  );

  const handleScrollButtonClick = (e, direction ) => {
    e.stopPropagation();
    e.preventDefault();
    const newIndex = scrollButtonGetNewIndex(selectedTabIndex, tabs)[direction];
    if (newIndex !== selectedTabIndex) {
      updateWithTabIndex({ index: newIndex, animate: true });
    } else {
      scrollToTab(newIndex);
    }
  };

  const updateScrollButtons = () => {
    const scrollLeft = tabRowElement.scrollLeft;
    const minTabIndex = 0;
    const maxTabIndex = tabs.length - 1;
    const isAtStart = (tabRowElement.scrollLeft === 0) && (selectedTabIndex === minTabIndex);
    const isAtEnd = (scrollLeft >= (tabRowElement.scrollWidth - domElement.getBoundingClientRect().width - 1)) && (selectedTabIndex === maxTabIndex);
    setIsScrollButtonAtStart(isAtStart);
    setIsScrollButtonAtEnd(isAtEnd);
  };

  const updateIndicator = ({ selectedTabElement, animate }) => {
    if (!tabIndicatorElement) {
      return;
    }
    const parentRect = domElement.getBoundingClientRect();
    const rect = selectedTabElement.getBoundingClientRect();
    const buttonSize = managesScroll ? rect.height : 0;
    const translateX = RTL
      ? rect.right - parentRect.right + tabRowElement.scrollLeft + buttonSize
      : rect.left - parentRect.left + tabRowElement.scrollLeft - buttonSize;
    const scaleX = 1 / (parentRect.width - 2 * buttonSize) * rect.width;
    const transformCmd = `translate(${translateX}px, 0) scaleX(${scaleX})`;
    const duration = animate
      ? INDICATOR_SLIDE_MIN_DURATION
      : 0;
    const style = tabIndicatorElement.style;
    style["transition-duration"] = duration + "s";
    style.opacity = 1;
    style.transform = transformCmd;
  };

  const scrollToTab = tabIndex => {
    const scroller = tabRowElement;
    // Scroll to position of selected tab
    const tabLeft = tabs.slice(0, tabIndex).reduce((totalWidth, tabData) =>
      totalWidth + tabData.dom.getBoundingClientRect().width, 0);
    // Tabs at the far right will not fully move to the left
    // because the scrollable row will stick to the right 
    // to get the max scroll left, we subtract the visible viewport from the scroll width
    const scrollerWidth = scroller.getBoundingClientRect().width; // frame width
    const scrollingWidth = scroller.scrollWidth;
    const maxScroll = scrollingWidth - scrollerWidth;
    const left = RTL
      ? -1 * Math.min(tabLeft, maxScroll)
      : Math.min(tabLeft, maxScroll);
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
        }).then(updateScrollButtons);
      }, delaySeconds * 1000);
    }
  };

  const updateWithTabIndex = ({ index, animate }) => {
    if (!tabs.length) {
      return;
    }
    setSelectedTabIndex(index);
    const selectedTabElement = tabs[index].dom;
    if (selectedTabElement) {
      updateIndicator({ selectedTabElement, animate });
    }
    if (managesScroll) {
      updateScrollButtons();
    }
    scrollToTab(index);
    if (props.onChange) {
      props.onChange({
        index,
        options: tabs[index].options,
        el: selectedTabElement
      });
    }
  };

  useEffect(
    () => {
      if (!isTabsInited) {
        return;
      }
      setRTL(isRTL({ element: domElement }));
      
      const redrawLargestWidth = () => {
        if (props.largestWidth) {
          const widths = tabs.map(({ dom }) => dom.getBoundingClientRect().width);
          const largest = widths.sort(sortByLargestWidth)[0];
          tabs.forEach(({ dom }) => dom.style.width = largest + "px");
        }
      };
    
      const redraw = () => (
        redrawLargestWidth(),
        updateWithTabIndex({ index: selectedTabIndex, animate: false })
      );
    
      const handleFontEvent = ({ name }) =>
        name === "active" || name === "inactive"
          ? redraw()
          : null;
    
      subscribe("resize", redraw);
      subscribe("webfontloader", handleFontEvent);
            
      redraw();

      return () => {
        unsubscribe("resize", redraw);
        unsubscribe("webfontloader", handleFontEvent);
      };
    },
    [isTabsInited]
  );

  const autofit = props.scrollable || props.centered
    ? false
    : props.autofit
      ? true
      : false;

  // Keep selected tab up to date
  if (tabIndex !== undefined && previousSelectedTabIndex !== tabIndex) {
    updateWithTabIndex({ index: tabIndex, animate: true });
  }
  if (previousSelectedTabIndex !== tabIndex) {
    setPreviousSelectedTabIndex(tabIndex);
  }

  const componentProps = Object.assign(
    {},
    getRef(dom => dom && !domElement && (
      setDomElement(dom)
    )),
    filterSupportedAttributes(props),
    props.testId && { "data-test-id": props.testId },
    {
      className: [
        classes.component,
        props.scrollable ? classes.scrollable : null,
        isScrollButtonAtStart ? classes.isAtStart : null,
        isScrollButtonAtEnd ? classes.isAtEnd : null,
        props.activeSelected ? classes.activeSelectable : null,
        autofit ? classes.isAutofit : null,
        props.compact ? classes.compactTabs : null,
        props.menu ? classes.isMenu : null,
        props.tone === "dark" ? "pe-dark-tone" : null,
        props.tone === "light" ? "pe-light-tone" : null,
        props.className || props[a.class],
      ].join(" ")
    }
  );

  const tabRow = buttons.map((buttonOpts = {}, index) => {
    const buttonOptsCombined = Object.assign(
      {},
      buttonOpts,
      {
        // These options can be overridden by `all`
        selected: index === selectedTabIndex,
        animateOnTap: (props.animateOnTap !== false) ? true : false
      },
      props.all,
      {
        // Internal options, should not get overridden
        index,
        onSelect: () =>
          updateWithTabIndex({
            index,
            animate: props.noIndicatorSlide
              ? false
              : true
          }),
      }
    );
    return h(Tab, buttonOptsCombined);
  });

  let scrollButtonAtStart = null, scrollButtonAtEnd = null;
  if (props.scrollable) {
    scrollButtonAtStart = h(ScrollButton, Object.assign(
      {},
      {
        icon: props.scrollIconBackward,
        className: classes.scrollButtonAtStart,
        position: "start",
        events: {
          [a.onclick]: e => handleScrollButtonClick(e, "backward")
        },
        isRTL: RTL
      }
    ));
    scrollButtonAtEnd = h(ScrollButton, Object.assign(
      {},
      {
        icon: props.scrollIconForward,
        className: classes.scrollButtonAtEnd,
        position: "end",
        events: {
          [a.onclick]: e => handleScrollButtonClick(e, "forward")
        },
        isRTL: RTL
      }
    ));
  }

  const tabIndicator = props.hideIndicator
    ? null
    : h("div",
      {
        className: classes.indicator
      }
    );

  const componentContent = [
    scrollButtonAtStart,
    h("div",
      {
        className: [
          classes.tabRow,
          props.centered ? classes.tabRowCentered : null,
          props.scrollable ? classes.tabRowIndent : null
        ].join(" ")
      },
      [
        ...tabRow,
        tabIndicator
      ]
    ),
    scrollButtonAtEnd,
  ];

  return h("div",
    componentProps,
    [
      props.before,
      ...componentContent,
      props.after
    ]
  );
};
