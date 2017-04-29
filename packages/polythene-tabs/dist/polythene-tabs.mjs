import m from 'mithril';
import { filterSupportedAttributes, isTouch, subscribe, unsubscribe } from 'polythene-core';
import { scrollTo } from 'polythene-utilities';
import { flex, mixin, styler } from 'polythene-css';
import { classes, vars } from 'polythene-button';
import { vars as vars$1 } from 'polythene-theme';
import iconButton, { vars as vars$2 } from 'polythene-icon-button';
import button from 'polythene-mithril-button';
import icon from 'polythene-icon';

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
  smallTabs: "pe-tabs--small",
  tabHasIcon: "pe-tabs__tab---icon",
  tabRowCentered: "pe-tabs__row--centered",
  tabRowIndent: "pe-tabs__row--indent",

  // lookup
  label: classes.label
};

var rgba = vars$1.rgba;

var fontSize = vars.font_size;
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
  tabs_indent: vars$1.unit_indent,
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
  color_light_selected: rgba(vars$1.color_primary),
  color_light_selected_background: "transparent",
  color_light_tab_indicator: rgba(vars$1.color_primary),
  color_light_icon: vars$2.color_light,

  color_dark: "inherit",
  color_dark_selected: rgba(vars$1.color_primary),
  color_dark_selected_background: "transparent",
  color_dark_tab_indicator: rgba(vars$1.color_primary),
  color_dark_icon: vars$2.color_dark
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector, componentVars) {
  return [_defineProperty({}, selector, {
    userSelect: "none",
    transform: "translate3d(0,0,0)",
    "-webkit-overflow-scrolling": "touch",

    "& ::-webkit-scrollbar": {
      "display": "none"
    },

    ".pe-tabs--menu": {
      // reset sizes to fit within a small space
      " .pe-tabs__tab": {
        height: componentVars.menu_tab_height + "px"
      },
      " .pe-tabs__tab---icon": {
        height: componentVars.menu_tab_icon_label_height + "px"
      },
      " .pe-tabs__tab, .pe-tabs__tab.pe-tabs__tab---icon, .pe-tabs__tab.pe-text-button": {
        minWidth: 0,
        height: componentVars.menu_tab_icon_label_height + "px",

        " .pe-button__content": {
          padding: "0 " + componentVars.tab_menu_content_padding_v + "px",
          height: componentVars.menu_tab_height + "px",

          " .pe-icon": {
            marginBottom: 0
          },
          " .pe-button__content": {
            fontSize: "10px",
            lineHeight: "12px",
            textTransform: "none"
          }
        }
      }
    },

    ".pe-tabs--scrollable": {
      // hide scrollbar (this approach is required for Firefox)
      "max-height": componentVars.tab_height + "px",
      "-ms-overflow-style": "none",

      " .pe-tabs__scroll-button": {
        // default hide, show with html.pe-no-touch
        display: "none"
      },

      " .pe-tabs__row": {
        marginBottom: -componentVars.scrollbar_offset + "px"
      }
    },

    " .pe-no-touch &": {
      ".pe-tabs--scrollable": {
        backgroundColor: "inherit"
      },

      " .pe-tabs__scroll-button": {
        position: "absolute",
        display: "block",
        top: 0,
        backgroundColor: "inherit",
        zIndex: 1,
        borderRadius: 0,

        " .pe-button__content": {
          borderRadius: 0,
          backgroundColor: "inherit",
          transitionProperty: componentVars.tab_label_transition_property,
          transitionDuration: componentVars.scroll_button_fade_duration + "s",
          transitionTimingFunction: "ease-out",
          transitionDelay: componentVars.scroll_button_fade_delay + "s",
          opacity: componentVars.scroll_button_opacity
        }
      },
      ".pe-tabs--start .pe-tabs__scroll-button-start": {
        pointerEvents: "none",
        cursor: "default",

        " .pe-button__content": {
          opacity: 0
        }
      },
      ".pe-tabs--end .pe-tabs__scroll-button-end": {
        pointerEvents: "none",
        cursor: "default",

        " .pe-button__content": {
          opacity: 0
        }
      },

      " .pe-tabs__scroll-button-start": {
        left: 0
      },
      " .pe-tabs__scroll-button-end": {
        right: 0
      }
    },

    " .pe-tabs__row": [flex.layoutHorizontal, {
      userSelect: "none",
      position: "relative",
      whiteSpace: "nowrap",

      ".pe-tabs__row--indent": {
        margin: 0,
        paddingLeft: componentVars.tabs_indent + "px",
        overflow: "auto"
      },

      ".pe-tabs__row--centered": flex.layoutCenterJustified
    }],

    " .pe-tabs__scroll-button-offset": [flex.flex(), flex.flexIndex("none")],

    " .pe-tabs__tab": [flex.flex(), flex.flexIndex("none"), mixin.defaultTransition("color"), {
      userSelect: "none",
      margin: 0,
      borderRadius: 0,
      height: componentVars.tab_height + "px",
      padding: 0,
      color: "inherit",
      minWidth: !isNaN(componentVars.tab_min_width) ? componentVars.tab_min_width + "px" : componentVars.tab_min_width, // for smaller screens, see also media query below
      maxWidth: !isNaN(componentVars.tab_max_width) ? componentVars.tab_max_width + "px" : componentVars.tab_max_width,

      ".pe-text-button .pe-button__content": {
        padding: "0 " + componentVars.tab_content_padding_v + "px",
        height: componentVars.tab_height + "px",
        lineHeight: vars$1.line_height + "em",
        borderRadius: 0,

        " .pe-button__label, .pe-icon": {
          maxWidth: componentVars.label_max_width + "px", // or .pe-tabs width minus 56dp
          lineHeight: componentVars.tab_label_line_height + "px",
          maxHeight: 2 * componentVars.tab_label_line_height + "px",
          overflow: "hidden",
          whiteSpace: "normal"
        },
        " .pe-button__label": [mixin.defaultTransition("opacity", componentVars.animation_duration), {
          margin: componentVars.tab_label_vertical_offset + "px 0 0 0",
          padding: 0,
          opacity: componentVars.label_opacity
        }],
        " .pe-icon": {
          marginLeft: "auto",
          marginRight: "auto"
        },
        " .pe-button__focus": {
          display: "none"
        }
      },
      ".pe-button--selected": {
        " .pe-button__content .pe-button__content": {
          opacity: 1
        }
      },
      ".pe-tabs__tab---icon": {
        "&, .pe-button__content": [{
          height: componentVars.tab_icon_label_height + "px"
        }, {
          " .pe-button__content, .pe-icon": {
            margin: "0 auto"
          }
        }, {
          " .pe-icon": {
            marginBottom: componentVars.tab_icon_label_icon_spacing + "px"
          }
        }]
      }
    }],

    " .pe-tabs__tab-content": [flex.layoutCenterCenter, flex.layoutVertical, {
      height: "inherit"
    }],

    ".pe-tabs--autofit .pe-tabs__tab": [flex.flex(), {
      minWidth: "initial",
      maxWidth: "none"
    }],

    ".pe-tabs__active--selectable": {
      " .pe-tabs__tab.pe-button--selected": {
        cursor: "pointer",
        pointerEvents: "initial"
      }
    },

    " .pe-tabs__indicator": {
      transform: "translate3d(0,0,0)",
      transformOrigin: "left 50%",
      transitionProperty: "all",
      transitionTimingFunction: "ease-out",
      position: "absolute",
      height: componentVars.tab_indicator_height + "px",
      bottom: 0,
      left: 0,
      width: "100%" // and transformed with js
      // background-color defined in implementation/theme css
    },

    " .pe-toolbar--tabs .pe-toolbar__bar &": [mixin.fit(), {
      width: "auto",
      margin: 0,
      top: "auto"
    }]

    // ["@media (min-width: " + vars.breakpoint_small_tablet_portrait + "px)"]: {
    //   ":not(.pe-tabs--small):not(.pe-tabs--menu):not(.pe-tabs--autofit) .pe-tabs__tab": {
    //     minWidth: componentVars.tab_min_width_tablet + "px"
    //   }
    // }
  })];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    color: componentVars["color_" + tint],

    " .pe-tabs__tab.pe-button--selected": {
      color: componentVars["color_" + tint + "_selected"],

      " .pe-button__content": {
        background: componentVars["color_" + tint + "_selected_background"]
      }
    },
    " .pe-tabs__tab:not(.pe-button--selected) .pe-icon": {
      color: componentVars["color_" + tint + "_icon"]
    },
    " .pe-tabs__indicator": {
      backgroundColor: componentVars["color_" + tint + "_tab_indicator"]
    },
    " .pe-tabs__scroll-button": {
      color: "inherit"
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

var iconArrowBackward = m.trust("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/></svg>");

var iconArrowForward = m.trust("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>");

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var arrowBackward = {
  msvg: iconArrowBackward
};
var arrowForward = {
  msvg: iconArrowForward
};

var fns = [layout, color];
var selector = "." + classes$1.component;

var customTheme = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends$1({}, vars$3, customVars), fns);
};

styler.generateStyles([selector], vars$3, fns);

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var view$1 = function view(vnode) {
  var attrs = vnode.attrs;
  // Let internal onclick function co-exist with passed button option
  attrs.events = attrs.events || {};
  attrs.events.onclick = attrs.events.onclick || function () {};
  var tabButtonOptions = _extends$2({}, attrs, {
    content: m("div", { class: classes$1.tabContent }, [attrs.icon ? m(icon, attrs.icon) : null, attrs.label ? m("div", { class: classes$1.label }, m("span", attrs.label)) : null]),
    class: [classes$1.tab, attrs.icon && attrs.label ? classes$1.tabHasIcon : null, attrs.class].join(" "),
    selected: attrs.selected,
    wash: false,
    ripple: true,
    events: _extends$2({}, attrs.events, {
      onclick: function onclick(e) {
        attrs.onSelect();
        attrs.events.onclick(e);
      }
    }),
    oncreate: function oncreate(vnode) {
      return attrs.register(attrs.index, {
        data: attrs,
        el: vnode.dom
      });
    }
  });
  return m(button, tabButtonOptions);
};

var tab = {
  view: view$1
};

var view$2 = function view(vnode) {
  var attrs = vnode.attrs;
  var icon$$1 = attrs.position === "start" ? attrs.icon || arrowBackward : attrs.icon || arrowForward;
  return m(iconButton, {
    class: [classes$1.scrollButton, attrs.class].join(" "),
    icon: icon$$1,
    ripple: { center: true },
    events: attrs.events,
    oncreate: function oncreate(vnode) {
      return attrs.register(attrs.position, vnode.dom);
    }
  });
};

var scrollButton = {
  view: view$2
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
  var currentTabIndex = state.selectedTabIndex;
  var newIndex = getNewIndex(currentTabIndex, state.tabs)[direction];
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
var alignToTitle = function alignToTitle(state) {
  var firstTab = state.tabs[0].el;
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
    return totalWidth + tabData.el.getBoundingClientRect().width;
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
  var currentTabIndex = state.selectedTabIndex;
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
  style["transition-duration"] = style["-webkit-transition-duration"] = style["-moz-transition-duration"] = style["-o-transition-duration"] = duration + "s";
  style.transform = style["-webkit-transform"] = style["-moz-transform"] = style["-ms-transform"] = style["-o-transform"] = transformCmd;
};

var setSelectedTab = function setSelectedTab(state, attrs, index, animate) {
  state.selectedTabIndex = index;
  if (!state.tabs.length) return;
  var selectedTabEl = state.tabs[index].el;
  if (selectedTabEl && state.tabIndicatorEl && state.tabsEl) {
    animateIndicator(selectedTabEl, animate, state);
  }
  if (state.managesScroll) {
    updateScrollButtons(state);
    scrollToTab(state, index);
  }
  if (attrs.getState) {
    attrs.getState({
      index: index,
      data: state.tabs[index].data,
      el: selectedTabEl
    });
  }
};

var sortByLargestWidth = function sortByLargestWidth(a, b) {
  return a < b ? 1 : a > b ? -1 : 0;
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var state = vnode.state;
  var element = attrs.element || "div";
  var autofit = attrs.scrollable || attrs.centered ? false : attrs.autofit ? true : false;

  // Keep selected tab up to date
  if (attrs.selectedTab !== undefined && state.previousSelectedTab !== attrs.selectedTab) {
    setSelectedTab(state, attrs, attrs.selectedTab, true);
  }
  state.previousSelectedTab = attrs.selectedTab;

  var onResize = function onResize() {
    return setSelectedTab(state, attrs, state.selectedTabIndex, false), m.redraw();
  };

  var props = _extends({}, filterSupportedAttributes(attrs), {
    class: [classes$1.component, attrs.scrollable ? classes$1.scrollable : null, state.selectedTabIndex === 0 ? classes$1.isAtStart : null, state.selectedTabIndex === state.tabs.length - 1 ? classes$1.isAtEnd : null, attrs.activeSelected ? classes$1.activeSelectable : null, autofit ? classes$1.isAutofit : null, attrs.small ? classes$1.smallTabs : null, attrs.menu ? classes$1.isMenu : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.class].join(" "),
    oninit: function oninit() {
      return subscribe("resize", onResize);
    },
    oncreate: function oncreate(vnode) {
      state.tabsEl = vnode.dom;
      // A promise can't resolve during the oncreate loop
      // The Mithril draw loop is synchronous - there is no delay between one this oncreate and the tab button's oncreate
      whenCreateDone().then(function () {
        if (attrs.largestWidth) {
          var widths = state.tabs.map(function (tabData) {
            return tabData.el.getBoundingClientRect().width;
          });
          var largest = widths.sort(sortByLargestWidth)[0];
          state.tabs.forEach(function (tabData) {
            return tabData.el.style.width = largest + "px";
          });
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
    onremove: function onremove() {
      return unsubscribe("resize", onResize);
    }
  });

  var buttons = attrs.content ? attrs.content : attrs.buttons ? attrs.buttons : attrs.children || vnode.children;

  var tabRowButtons = buttons.map(function () {
    var buttonOpts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var index = arguments[1];

    var buttonOptsCombined = _extends({}, buttonOpts, {
      // These options can be overridden by tabsOpts
      selected: index === state.selectedTabIndex,
      animateOnTap: attrs.animateOnTap !== false ? true : false
    }, attrs.tabsOpts || {}, {
      // Internal options, should never be overridden
      index: index,
      key: "tab-" + index,
      register: state.registerTabButton,
      onSelect: function onSelect() {
        return setSelectedTab(state, attrs, index, attrs.noIndicatorSlide ? false : true), setTimeout(m.redraw);
      }
    });
    return m(tab, buttonOptsCombined);
  });

  var tabRow = attrs.scrollable ? tabRowButtons.concat([
  // offset for right scroll button
  m("div", { class: classes$1.scrollButtonOffset })]) : tabRowButtons;

  var scrollButtonAtStart = void 0,
      scrollButtonAtEnd = void 0;
  if (attrs.scrollable) {
    scrollButtonAtStart = m(scrollButton, _extends({}, {
      icon: attrs.scrollIconBackward,
      class: classes$1.scrollButtonAtStart,
      position: "start",
      register: state.registerScrollButton,
      events: { onclick: function onclick(e) {
          return handleScrollButtonClick(state, attrs, e, "backward");
        } }
    }));
    scrollButtonAtEnd = m(scrollButton, _extends({}, {
      icon: attrs.scrollIconForward,
      class: classes$1.scrollButtonAtEnd,
      position: "end",
      register: state.registerScrollButton,
      events: { onclick: function onclick(e) {
          return handleScrollButtonClick(state, attrs, e, "forward");
        } }
    }));
  }

  var tabIndicator = attrs.hideIndicator ? null : m("div", {
    class: classes$1.indicator,
    oncreate: function oncreate(vnode) {
      return state.tabIndicatorEl = vnode.dom;
    }
  });

  var content = [attrs.scrollable ? scrollButtonAtStart : null, m("div", {
    class: [classes$1.tabRow, attrs.centered ? classes$1.tabRowCentered : null, attrs.scrollable ? classes$1.tabRowIndent : null].join(" "),
    oncreate: function oncreate(vnode) {
      return state.scrollerEl = vnode.dom;
    }
  }, [tabRow, tabIndicator]), attrs.scrollable ? scrollButtonAtEnd : null];

  return m(element, props, [attrs.before, content, attrs.after]);
};

var tabs = {
  theme: customTheme, // accepts (selector, vars)
  view: view,
  oninit: function oninit(vnode) {
    var registerTabButton = function registerTabButton(index, data) {
      return vnode.state.tabs[index] = data;
    };
    var registerScrollButton = function registerScrollButton(position, dom) {
      return vnode.state.scrollButtons[position] = dom;
    };
    vnode.state = _extends(vnode.state, {
      tabsEl: undefined,
      scrollerEl: undefined,
      tabs: [], // {data, el}
      tabRow: undefined,
      tabIndicatorEl: undefined,
      selectedTabIndex: vnode.attrs.selectedTab || 0,
      previousSelectedTab: undefined,
      managesScroll: false,
      scrollButtonStates: {
        start: false,
        end: false
      },
      scrollButtons: {
        start: undefined,
        end: undefined
      },
      registerTabButton: registerTabButton,
      registerScrollButton: registerScrollButton
    });
  }
};

export { classes$1 as classes, vars$3 as vars };export default tabs;
