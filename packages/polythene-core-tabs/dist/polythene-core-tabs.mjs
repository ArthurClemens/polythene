import { isTouch, isRTL, subscribe, unsubscribe, filterSupportedAttributes } from 'polythene-core';
import { scrollTo } from 'polythene-utilities';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var buttonClasses = {
  component: "pe-text-button",
  "super": "pe-button",
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
  focus: "pe-button--focus",
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

var SCROLL_SPEED = 600; // px per second

var SCROLL_DELAY = .15; // seconds

var SCROLL_MIN_DURATION = .5; // seconds

var INDICATOR_SLIDE_MIN_DURATION = .25; // seconds

var getButtons = function getButtons(props) {
  return props.content ? props.content : props.tabs ? props.tabs : props.children || [];
};

var getIndex = function getIndex(props) {
  var buttons = getButtons(props);
  var selectedIndex = Array.isArray(buttons) ? buttons.reduce(function (acc, tab, index) {
    return acc === undefined && !tab.disabled && tab.selected ? index : acc;
  }, undefined) : undefined;

  if (selectedIndex !== undefined) {
    return selectedIndex;
  }

  var attrsSelectedTabIndex = props.selectedTabIndex !== undefined ? props.selectedTabIndex : props.selectedTab !== undefined // deprecated
  ? props.selectedTab : undefined;
  return attrsSelectedTabIndex !== undefined ? attrsSelectedTabIndex : 0;
};

var scrollButtonGetNewIndex = function scrollButtonGetNewIndex(index, tabs) {
  var minTabIndex = 0;
  var maxTabIndex = tabs.length - 1;
  return {
    backward: Math.max(index - 1, minTabIndex),
    forward: Math.min(index + 1, maxTabIndex)
  };
};

var sortByLargestWidth = function sortByLargestWidth(a, b) {
  return a < b ? 1 : a > b ? -1 : 0;
};

var _Tabs = function _Tabs(_ref) {
  var h = _ref.h,
      a = _ref.a,
      getRef = _ref.getRef,
      useState = _ref.useState,
      useEffect = _ref.useEffect,
      ScrollButton = _ref.ScrollButton,
      Tab = _ref.Tab,
      props = _objectWithoutProperties(_ref, ["h", "a", "getRef", "useState", "useEffect", "ScrollButton", "Tab"]);

  var buttons = getButtons(props);

  if (buttons.length === 0) {
    throw new Error("No tabs specified");
  }

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      domElement = _useState2[0],
      setDomElement = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      RTL = _useState4[0],
      setRTL = _useState4[1];

  var tabIndex = getIndex(props) || 0;

  var _useState5 = useState(tabIndex),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedTabIndex = _useState6[0],
      setSelectedTabIndex = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isScrollButtonAtStart = _useState8[0],
      setIsScrollButtonAtStart = _useState8[1];

  var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isScrollButtonAtEnd = _useState10[0],
      setIsScrollButtonAtEnd = _useState10[1];

  var _useState11 = useState([]),
      _useState12 = _slicedToArray(_useState11, 2),
      tabs = _useState12[0],
      setTabs = _useState12[1];

  var _useState13 = useState(),
      _useState14 = _slicedToArray(_useState13, 2),
      previousSelectedTabIndex = _useState14[0],
      setPreviousSelectedTabIndex = _useState14[1];

  var managesScroll = props.scrollable && !isTouch;
  var tabRowElement = domElement && domElement.querySelector(".".concat(classes.tabRow));
  var tabIndicatorElement = domElement && domElement.querySelector(".".concat(classes.indicator));
  var isTabsInited = !!domElement && tabs.length === buttons.length;
  useEffect(function () {
    if (!tabRowElement) return;

    var tabRowTabs = _toConsumableArray(tabRowElement.querySelectorAll("[data-index]")).map(function (dom) {
      var index = parseInt(dom.getAttribute("data-index"), 10);
      return {
        dom: dom,
        options: buttons[index]
      };
    });

    if (tabRowTabs) {
      setTabs(tabRowTabs);
    }
  }, [tabRowElement]);

  var handleScrollButtonClick = function handleScrollButtonClick(e, direction) {
    e.stopPropagation();
    e.preventDefault();
    var newIndex = scrollButtonGetNewIndex(selectedTabIndex, tabs)[direction];

    if (newIndex !== selectedTabIndex) {
      updateWithTabIndex({
        index: newIndex,
        animate: true
      });
    } else {
      scrollToTab(newIndex);
    }
  };

  var updateScrollButtons = function updateScrollButtons() {
    var scrollLeft = tabRowElement.scrollLeft;
    var minTabIndex = 0;
    var maxTabIndex = tabs.length - 1;
    var isAtStart = tabRowElement.scrollLeft === 0 && selectedTabIndex === minTabIndex;
    var isAtEnd = scrollLeft >= tabRowElement.scrollWidth - domElement.getBoundingClientRect().width - 1 && selectedTabIndex === maxTabIndex;
    setIsScrollButtonAtStart(isAtStart);
    setIsScrollButtonAtEnd(isAtEnd);
  };

  var updateIndicator = function updateIndicator(_ref2) {
    var selectedTabElement = _ref2.selectedTabElement,
        animate = _ref2.animate;

    if (!tabIndicatorElement) {
      return;
    }

    var parentRect = domElement.getBoundingClientRect();
    var rect = selectedTabElement.getBoundingClientRect();
    var buttonSize = managesScroll ? rect.height : 0;
    var translateX = RTL ? rect.right - parentRect.right + tabRowElement.scrollLeft + buttonSize : rect.left - parentRect.left + tabRowElement.scrollLeft - buttonSize;
    var scaleX = 1 / (parentRect.width - 2 * buttonSize) * rect.width;
    var transformCmd = "translate(".concat(translateX, "px, 0) scaleX(").concat(scaleX, ")");
    var duration = animate ? INDICATOR_SLIDE_MIN_DURATION : 0;
    var style = tabIndicatorElement.style;
    style["transition-duration"] = duration + "s";
    style.opacity = 1;
    style.transform = transformCmd;
  };

  var scrollToTab = function scrollToTab(tabIndex) {
    var scroller = tabRowElement; // Scroll to position of selected tab

    var tabLeft = tabs.slice(0, tabIndex).reduce(function (totalWidth, tabData) {
      return totalWidth + tabData.dom.getBoundingClientRect().width;
    }, 0); // Tabs at the far right will not fully move to the left
    // because the scrollable row will stick to the right 
    // to get the max scroll left, we subtract the visible viewport from the scroll width

    var scrollerWidth = scroller.getBoundingClientRect().width; // frame width

    var scrollingWidth = scroller.scrollWidth;
    var maxScroll = scrollingWidth - scrollerWidth;
    var left = RTL ? -1 * Math.min(tabLeft, maxScroll) : Math.min(tabLeft, maxScroll);
    var currentLeft = scroller.scrollLeft;

    if (currentLeft !== left) {
      var duration = Math.abs(currentLeft - left) / SCROLL_SPEED;
      var delaySeconds = SCROLL_DELAY;
      setTimeout(function () {
        scrollTo({
          element: scroller,
          to: left,
          duration: Math.max(SCROLL_MIN_DURATION, duration),
          direction: "horizontal"
        }).then(updateScrollButtons);
      }, delaySeconds * 1000);
    }
  };

  var updateWithTabIndex = function updateWithTabIndex(_ref3) {
    var index = _ref3.index,
        animate = _ref3.animate;

    if (!tabs.length) {
      return;
    }

    setSelectedTabIndex(index);
    var selectedTabElement = tabs[index].dom;

    if (selectedTabElement) {
      updateIndicator({
        selectedTabElement: selectedTabElement,
        animate: animate
      });
    }

    if (managesScroll) {
      updateScrollButtons();
    }

    scrollToTab(index);

    if (props.onChange) {
      props.onChange({
        index: index,
        options: tabs[index].options,
        el: selectedTabElement
      });
    }
  };

  useEffect(function () {
    if (!isTabsInited) {
      return;
    }

    setRTL(isRTL({
      element: domElement
    }));

    var redrawLargestWidth = function redrawLargestWidth() {
      if (props.largestWidth) {
        var widths = tabs.map(function (_ref4) {
          var dom = _ref4.dom;
          return dom.getBoundingClientRect().width;
        });
        var largest = widths.sort(sortByLargestWidth)[0];
        tabs.forEach(function (_ref5) {
          var dom = _ref5.dom;
          return dom.style.width = largest + "px";
        });
      }
    };

    var redraw = function redraw() {
      return redrawLargestWidth(), updateWithTabIndex({
        index: selectedTabIndex,
        animate: false
      });
    };

    var handleFontEvent = function handleFontEvent(_ref6) {
      var name = _ref6.name;
      return name === "active" || name === "inactive" ? redraw() : null;
    };

    subscribe("resize", redraw);
    subscribe("webfontloader", handleFontEvent);
    redraw();
    return function () {
      unsubscribe("resize", redraw);
      unsubscribe("webfontloader", handleFontEvent);
    };
  }, [isTabsInited]);
  var autofit = props.scrollable || props.centered ? false : props.autofit ? true : false; // Keep selected tab up to date

  if (tabIndex !== undefined && previousSelectedTabIndex !== tabIndex) {
    updateWithTabIndex({
      index: tabIndex,
      animate: true
    });
  }

  if (previousSelectedTabIndex !== tabIndex) {
    setPreviousSelectedTabIndex(tabIndex);
  }

  var componentProps = _extends({}, getRef(function (dom) {
    return dom && !domElement && setDomElement(dom);
  }), filterSupportedAttributes(props), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.scrollable ? classes.scrollable : null, isScrollButtonAtStart ? classes.isAtStart : null, isScrollButtonAtEnd ? classes.isAtEnd : null, props.activeSelected ? classes.activeSelectable : null, autofit ? classes.isAutofit : null, props.compact ? classes.compactTabs : null, props.menu ? classes.isMenu : null, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  });

  var tabRow = buttons.map(function () {
    var buttonOpts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var index = arguments.length > 1 ? arguments[1] : undefined;

    var buttonOptsCombined = _extends({}, buttonOpts, {
      // These options can be overridden by `all`
      selected: index === selectedTabIndex,
      animateOnTap: props.animateOnTap !== false ? true : false
    }, props.all, {
      // Internal options, should not get overridden
      index: index,
      key: buttonOpts.key || "tab-".concat(index),
      onSelect: function onSelect() {
        return updateWithTabIndex({
          index: index,
          animate: props.noIndicatorSlide ? false : true
        });
      }
    });

    return h(Tab, buttonOptsCombined);
  });
  var scrollButtonAtStart = null,
      scrollButtonAtEnd = null;

  if (props.scrollable) {
    scrollButtonAtStart = h(ScrollButton, _extends({}, {
      key: "backward",
      icon: props.scrollIconBackward,
      className: classes.scrollButtonAtStart,
      position: "start",
      events: _defineProperty({}, a.onclick, function (e) {
        return handleScrollButtonClick(e, "backward");
      }),
      isRTL: RTL
    }));
    scrollButtonAtEnd = h(ScrollButton, _extends({}, {
      key: "forward",
      icon: props.scrollIconForward,
      className: classes.scrollButtonAtEnd,
      position: "end",
      events: _defineProperty({}, a.onclick, function (e) {
        return handleScrollButtonClick(e, "forward");
      }),
      isRTL: RTL
    }));
  }

  var tabIndicator = props.hideIndicator ? null : h("div", {
    key: "indicator",
    className: classes.indicator
  });
  return h("div", componentProps, [props.before, scrollButtonAtStart, h("div", {
    key: "tabrow",
    className: [classes.tabRow, props.centered ? classes.tabRowCentered : null, props.scrollable ? classes.tabRowIndent : null].join(" ")
  }, [tabRow, tabIndicator]), scrollButtonAtEnd, props.after]);
};

var _Tab = function _Tab(_ref) {
  var h = _ref.h,
      a = _ref.a,
      Button = _ref.Button,
      Icon = _ref.Icon,
      props = _objectWithoutProperties(_ref, ["h", "a", "Button", "Icon"]);

  // Let internal onclick function co-exist with passed button option
  var events = props.events || {};

  events[a.onclick] = events[a.onclick] || function () {};

  var componentProps = _extends({}, props, props.testId && {
    "data-test-id": props.testId
  }, {
    "data-index": props.index,
    content: h("div", {
      className: classes.tabContent
    }, [props.icon ? h(Icon, props.icon) : null, props.label ? h("div", {
      className: classes.label
    }, h("span", props.label)) : null]),
    className: [classes.tab, props.icon && props.label ? classes.tabHasIcon : null, props.className || props[a["class"]]].join(" "),
    selected: props.selected,
    wash: false,
    ripple: true,
    events: _extends({}, events, _defineProperty({}, a.onclick, function (e) {
      props.onSelect();
      events[a.onclick](e);
    }))
  });

  var content = props.children;
  return h(Button, componentProps, content);
};

var arrowBackward = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/></svg>";
var arrowForward = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>";
var _ScrollButton = function _ScrollButton(_ref) {
  var h = _ref.h,
      a = _ref.a,
      IconButton = _ref.IconButton,
      props = _objectWithoutProperties(_ref, ["h", "a", "IconButton"]);

  var icon = props.position === "start" ? props.icon || {
    svg: {
      content: h.trust(props.isRTL ? arrowForward : arrowBackward)
    }
  } : props.icon || {
    svg: {
      content: h.trust(props.isRTL ? arrowBackward : arrowForward)
    }
  };

  var componentProps = _extends({}, {
    className: [classes.scrollButton, props.className || props[a["class"]]].join(" "),
    icon: icon,
    ripple: {
      center: true
    },
    events: props.events
  });

  return h(IconButton, componentProps);
};

export { _ScrollButton, _Tab, _Tabs };
