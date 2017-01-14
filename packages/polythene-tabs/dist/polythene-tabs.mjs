import m from 'mithril';
import { button, vars } from 'polythene-button';
import { icon } from 'polythene-icon';
import { iconButton, vars as vars$1 } from 'polythene-icon-button';
import { isTouch, subscribe, unsubscribe } from 'polythene-core';
import { flex, mixin, styler } from 'polythene-css';
import { vars as vars$2 } from 'polythene-theme';

var rgba = vars$2.rgba;

var fontSize = vars.font_size;
var tab_label_line_height = 1.1 * fontSize;

var vars$3 = {
  tab_min_width: 72,
  tab_max_width: "none",
  tab_height: 48,
  tablet_tab_min_width: 160,
  label_max_width: 264,
  menu_tab_height: 44,
  menu_tab_icon_label_height: 44,
  tab_icon_label_height: 72,
  tab_icon_label_icon_spacing: 7,
  indicator_slide_speed: 600, // px per second
  indicator_slide_min_duration: .250,
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
  color_light_selected: rgba(vars$2.color_primary),
  color_light_selected_background: "transparent",
  color_light_tab_indicator: rgba(vars$2.color_primary),
  color_light_icon: vars$1.color_light,

  color_dark: "inherit",
  color_dark_selected: rgba(vars$2.color_primary),
  color_dark_selected_background: "transparent",
  color_dark_tab_indicator: rgba(vars$2.color_primary),
  color_dark_icon: vars$1.color_dark
};

var defineProperty = function (obj, key, value) {
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
};

var _extends = Object.assign || function (target) {
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

var layout = (function (selector, componentVars) {
  return [defineProperty({}, selector, [mixin.vendorize({
    userSelect: "none"
  }, vars$2.prefixes_user_select), mixin.vendorize({
    transform: "translate3d(0,0,0)"
  }, vars$2.prefixes_transform), defineProperty({
    "-webkit-overflow-scrolling": "touch",

    "& ::-webkit-scrollbar": {
      "display": "none"
    },

    "&.pe-tabs--menu": {
      // reset sizes to fit within a small space
      " .pe-tabs__tab": {
        height: componentVars.menu_tab_height + "px"
      },
      " .pe-tabs__tab---icon": {
        height: componentVars.menu_tab_icon_label_height + "px"
      },
      " .pe-tabs__tab, .pe-tabs__tab.pe-tabs__tab---icon": {
        minWidth: 0,
        height: componentVars.menu_tab_icon_label_height + "px",

        " .pe-button__content": {
          padding: "0 " + componentVars.tab_menu_content_padding_v + "px",
          height: componentVars.menu_tab_icon_label_height + "px",

          " .pe-icon": {
            marginBottom: 0
          },
          " .pe-button__label": {
            fontSize: "10px",
            lineHeight: "12px",
            textTransform: "none"
          }
        }
      }
    },

    "&.pe-tabs--scrollable": {
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
      "&.pe-tabs--scrollable": {
        backgroundColor: "inherit"
      },

      " .pe-tabs__scroll-button": {
        position: "absolute",
        display: "block",
        top: 0,
        backgroundColor: "inherit",
        zIndex: 3,

        " .pe-button__content": {
          borderRadius: 0,
          backgroundColor: "inherit"
        },
        " .pe-button__label": [mixin.vendorize({
          transitionProperty: componentVars.tab_label_transition_property
        }, vars$2.prefixes_transition), mixin.vendorize({
          transitionDuration: componentVars.scroll_button_fade_duration + "s"
        }, vars$2.prefixes_transition), mixin.vendorize({
          transitionTimingFunction: "ease-out"
        }, vars$2.prefixes_transition), mixin.vendorize({
          transitionDelay: componentVars.scroll_button_fade_delay + "s"
        }, vars$2.prefixes_transition), {
          opacity: componentVars.scroll_button_opacity
        }]
      },
      "&.pe-tabs--start .pe-tabs__scroll-button--start": {
        pointerEvents: "none",
        cursor: "default",

        " .pe-button__label": {
          opacity: 0
        }
      },
      "&.pe-tabs--end .pe-tabs__scroll-button--end": {
        pointerEvents: "none",
        cursor: "default",

        " .pe-button__label": {
          opacity: 0
        }
      },

      " .pe-tabs__scroll-button--start": {
        left: 0
      },
      " .pe-tabs__scroll-button--end": {
        right: 0
      }
    },

    " .pe-tabs__row": [flex.layoutHorizontal, mixin.vendorize({
      "user-select": "none"
    }, vars$2.prefixes_user_select), {
      position: "relative",
      whiteSpace: "nowrap"
    }],

    " .pe-tabs__row--centered": flex.layoutCenterJustified,

    " .pe-tabs__scroll-button--offset": [flex.flex(), flex.flexIndex("none")],

    " .pe-tabs__tab": [flex.flex(), flex.flexIndex("none"), mixin.vendorize({
      userSelect: "none"
    }, vars$2.prefixes_user_select), mixin.defaultTransition("color"), {
      margin: 0,
      borderRadius: 0,
      height: componentVars.tab_height + "px",
      padding: 0,
      color: "inherit",
      minWidth: !isNaN(componentVars.tab_min_width) ? componentVars.tab_min_width + "px" : componentVars.tab_min_width, // for smaller screens, see also media query below
      maxWidth: !isNaN(componentVars.tab_max_width) ? componentVars.tab_max_width + "px" : componentVars.tab_max_width,

      " .pe-button__content": {
        padding: "0 " + componentVars.tab_content_padding_v + "px",
        height: componentVars.tab_height + "px",
        lineHeight: vars$2.line_height + "em",

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
      "&.pe-button--selected": {
        " .pe-button__content .pe-button__label": {
          opacity: 1
        }
      },
      "&.pe-tabs__tab---icon": {
        "&, .pe-button__content": [{
          height: componentVars.tab_icon_label_height + "px"
        }, {
          " .pe-button__label, .pe-icon": {
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

    "&.pe-tabs--autofit .pe-tabs__tab": [flex.flex(), {
      minWidth: "none",
      maxWidth: "none"
    }],

    "&.pe-tabs__active-selected": {
      " .pe-tabs__tab.pe-button--selected": {
        cursor: "pointer",
        pointerEvents: "initial"
      }
    },

    " .pe-tabs__indicator": [mixin.vendorize({
      "transform": "translate3d(0,0,0)"
    }, vars$2.prefixes_transform), mixin.vendorize({
      "transform-origin": "left 50%"
    }, vars$2.prefixes_transform), mixin.vendorize({
      "transition-property": "all"
    }, vars$2.prefixes_transition), mixin.vendorize({
      "transition-timing-function": "ease-out"
    }, vars$2.prefixes_transition), {
      position: "absolute",
      height: componentVars.tab_indicator_height + "px",
      bottom: 0,
      left: 0,
      zIndex: 3,
      width: "100%" // and transformed with js
      // background-color defined in implementation/theme css
    }],

    " .pe-toolbar--tabs .pe-toolbar__bar &": [mixin.fit(), {
      width: "auto",
      margin: 0,
      top: "auto",

      " .pe-tabs__row.pe-tabs__row--indent": {
        margin: 0,
        paddingLeft: vars$2.unit_indent + "px",
        overflow: "auto"
      }
    }]

  }, "@media (min-width: " + vars$2.breakpoint_small_tablet_portrait + "px)", {
    "&:not(.pe-tabs--small):not(.pe-tabs--menu):not(.pe-tabs--autofit) .pe-tabs__tab": {
      minWidth: componentVars.tablet_tab_min_width + "px"
    }
  })])];
});

var style = function style(scope, selector, componentVars, tint) {
  return [defineProperty({}, scope + selector, {
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
      "background-color": componentVars["color_" + tint + "_tab_indicator"]
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style("", selector, componentVars, "light"), style(".pe-dark-theme ", selector, componentVars, "dark") // inside dark theme
  ];
});

var iconArrowBackward = m.trust("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/></svg>");

var iconArrowForward = m.trust("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>");

var arrowBackward = {
  msvg: iconArrowBackward
};
var arrowForward = {
  msvg: iconArrowForward
};

var fns = [layout, color];
var selector = ".pe-tabs";

var customTheme = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends({}, vars$3, customVars), fns);
};

styler.generateStyles([selector], vars$3, fns);

//import scrollTo from "polythene/common/scroll-to";
var classes = {
  component: "pe-tabs",
  scrollButton: "pe-tabs__scroll-button",
  scrollButtonLeft: "pe-tabs__scroll-button--start",
  scrollButtonRight: "pe-tabs__scroll-button--end",
  scrollButtonOffset: "pe-tabs__scroll-button--offset",
  tabRow: "pe-tabs__row",
  tabRowCentered: "pe-tabs__row--centered",
  tabRowIndent: "pe-tabs__row--indent",
  tab: "pe-tabs__tab",
  tabContent: "pe-tabs__tab-content",
  tabHasIcon: "pe-tabs__tab---icon",
  indicator: "pe-tabs__indicator",
  scrollable: "pe-tabs--scrollable",
  isAutofit: "pe-tabs--autofit",
  isAtStart: "pe-tabs--start",
  isAtEnd: "pe-tabs--end",
  isMenu: "pe-tabs--menu",
  activeSelected: "pe-tabs__active-selected",
  // reference:
  label: "pe-button__label"
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

var handleScrollButtonClick = function handleScrollButtonClick(state, attrs, e, direction) {
  e.stopPropagation();
  e.preventDefault();
  var currentTabIndex = state.selectedTabIndex;
  var newIndex = getNewIndex(currentTabIndex, state.tabs)[direction];
  scrollToTab(state, newIndex);
  if (newIndex !== currentTabIndex) {
    setSelectedTab(state, attrs, newIndex, true);
    m.redraw();
  }
};

var createScrollButton = function createScrollButton(state, position, attrs) {
  var scrollIconForward = attrs.scrollIconForward || arrowForward;
  var scrollIconBackward = attrs.scrollIconBackward || arrowBackward;

  return m(iconButton, {
    class: [classes.scrollButton, position === POSITION_LEFT ? classes.scrollButtonLeft : classes.scrollButtonRight].join(" "),
    icon: position === POSITION_LEFT ? scrollIconBackward : scrollIconForward,
    ripple: {
      center: true
    },
    oncreate: function oncreate(vnode) {
      if (state.scrollButtonLeftEl && state.scrollButtonRightEl) {
        return;
      }
      if (position === POSITION_LEFT) {
        state.scrollButtonLeftEl = vnode.dom;
      } else {
        state.scrollButtonRightEl = vnode.dom;
      }
    },
    events: {
      onclick: position === POSITION_LEFT ? function (e) {
        handleScrollButtonClick(state, attrs, e, "left");
      } : function (e) {
        handleScrollButtonClick(state, attrs, e, "right");
      }
    }
  });
};

var alignToTitle = function alignToTitle(state) {
  var firstTab = state.tabs[0].el;
  var firstInnerLabel = firstTab.querySelector("." + classes.label + " span");
  var firstOuterLabelWidth = firstTab.getBoundingClientRect().width;
  var firstInnerLabelWidth = firstInnerLabel.getBoundingClientRect().width;
  var firstTabOffset = (firstOuterLabelWidth - firstInnerLabelWidth) / 2;
  firstTab.style.marginLeft = -firstTabOffset + "px";
};

var createRightButtonOffset = function createRightButtonOffset(state) {
  // add padding to right so that last item is not hidden behind scroll button
  var scrollButtonRightWidth = state.scrollButtonRightEl.getBoundingClientRect().width;
  var scrollButtonOffsetEl = state.tabsEl.querySelector("." + classes.scrollButtonOffset);
  scrollButtonOffsetEl.style.width = scrollButtonRightWidth + "px";
};

var scrollToTab = function scrollToTab() {
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

var updateScrollButtons = function updateScrollButtons(state) {
  var scrollerEl = state.scrollerEl;
  var scrollLeft = scrollerEl.scrollLeft;
  var currentTabIndex = state.selectedTabIndex;
  var tabsEl = state.tabsEl;
  var minTabIndex = 0;
  var maxTabIndex = state.tabs.length - 1;
  var isAtLeft = scrollerEl.scrollLeft === 0 && currentTabIndex === minTabIndex;
  var isAtRight = scrollLeft >= scrollerEl.scrollWidth - tabsEl.getBoundingClientRect().width - 1 && currentTabIndex === maxTabIndex;
  state.scrollButtonStates.left = !isAtLeft;
  state.scrollButtonStates.right = !isAtRight;
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

var createTab = function createTab(state, attrs, index, buttonOpts) {
  // Let internal onclick function co-exist with passed button option
  buttonOpts.events = buttonOpts.events || {};
  buttonOpts.events.onclick = buttonOpts.events.onclick || function () {};
  var tabButtonOptions = _extends({}, buttonOpts, {
    content: m("div", {
      class: classes.tabContent
    }, [buttonOpts.icon ? m(icon, buttonOpts.icon) : null, buttonOpts.label ? m("div", {
      class: classes.label
    }, m("span", buttonOpts.label)) : null]),
    class: [classes.tab, buttonOpts.icon && buttonOpts.label ? classes.tabHasIcon : null, buttonOpts.class].join(" "),
    wash: false,
    ripple: true,
    events: _extends({}, buttonOpts.events, {
      onclick: function onclick(e) {
        setSelectedTab(state, attrs, index, attrs.noIndicatorSlide ? false : true);
        buttonOpts.events.onclick(e);
      }
    }),
    oncreate: function oncreate(vnode) {
      if (state.tabs[index] === undefined) {
        state.tabs[index] = {
          data: buttonOpts,
          el: vnode.dom
        };
      }
    }
  });
  return m(button, tabButtonOptions);
};

var sortNumbers = function sortNumbers(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;else return 0;
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var state = vnode.state;
  var element = attrs.element || "div";
  var autofit = attrs.scrollable || attrs.centered ? false : attrs.autofit ? true : false;

  // keep selected tab up to date
  if (attrs.selectedTab !== undefined && state.previousOptsSelectedTab !== attrs.selectedTab) {
    setSelectedTab(state, attrs, attrs.selectedTab, true);
  }
  state.previousOptsSelectedTab = attrs.selectedTab;

  var onResize = function onResize() {
    setSelectedTab(state, attrs, state.selectedTabIndex, false);
    m.redraw();
  };

  var props = {
    class: [classes.component, attrs.scrollable ? classes.scrollable : null, state.selectedTabIndex === 0 ? classes.isAtStart : null, state.selectedTabIndex === state.tabs.length - 1 ? classes.isAtEnd : null, attrs.activeSelected ? classes.activeSelected : null, autofit ? classes.isAutofit : null, attrs.menu ? classes.isMenu : null, attrs.class].join(" "),
    id: attrs.id || "",
    oncreate: function oncreate(vnode) {
      state.tabsEl = vnode.dom;

      if (attrs.largestWidth) {
        (function () {
          var widths = state.tabs.map(function (tabData) {
            return tabData.el.getBoundingClientRect().width;
          });
          var largest = widths.sort(sortNumbers).reverse()[0];
          state.tabs.forEach(function (tabData) {
            return tabData.el.style.width = largest + "px";
          });
        })();
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
    onremove: function onremove() {
      unsubscribe("resize", onResize);
    }
  };
  var children = vnode.children.length && vnode.children || attrs.children;
  var buttons = attrs.content ? attrs.content : attrs.buttons ? attrs.buttons : children && children[0] ? children : [];
  var tabRow = buttons.map(function (buttonOpts, index) {
    var buttonOptsCombined = _extends({}, buttonOpts, {
      selected: index === state.selectedTabIndex,
      animateOnTap: attrs.animateOnTap !== false ? true : false
    }, attrs.tabsOpts || {});
    return createTab(state, attrs, index, buttonOptsCombined);
  }).concat([
  // offset for right scroll button
  attrs.scrollable ? m("div", {
    class: classes.scrollButtonOffset
  }) : null]);

  var scrollButtonLeft = void 0,
      scrollButtonRight = void 0;
  if (attrs.scrollable) {
    scrollButtonLeft = createScrollButton(state, POSITION_LEFT, attrs);
    scrollButtonRight = createScrollButton(state, POSITION_RIGHT, attrs);
  }

  var tabIndicator = attrs.hideIndicator ? null : m("div", {
    class: classes.indicator,
    oncreate: function oncreate(vnode) {
      return state.tabIndicatorEl = vnode.dom, setSelectedTab(state, attrs, state.selectedTabIndex, false);
    }
  });

  var content = [attrs.scrollable ? scrollButtonLeft : null, m("div", {
    class: [classes.tabRow, attrs.centered ? classes.tabRowCentered : null, attrs.scrollable ? classes.tabRowIndent : null].join(" "),
    oncreate: function oncreate(vnode) {
      return state.scrollerEl = vnode.dom;
    },
    onscroll: function onscroll() {
      updateScrollButtons(state);
    }
  }, [tabRow, tabIndicator]), attrs.scrollable ? scrollButtonRight : null];
  return m(element, props, [attrs.before, content, attrs.after]);
};

var tabs = {
  theme: customTheme, // accepts (selector, vars)
  view: view,
  oninit: function oninit(vnode) {
    vnode.state = {
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
  }
};

export { tabs, classes, vars$3 as vars };
