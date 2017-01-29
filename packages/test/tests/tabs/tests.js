import m from "mithril";
import { tabs as component} from "polythene-tabs";

import iconHeart from "mmsvg/templarian/msvg/heart";
import iconBell from "mmsvg/templarian/msvg/bell";
import iconSettings from "mmsvg/templarian/msvg/settings";

// import iconMenu from "mmsvg/google/msvg/navigation/menu";
// import iconSearch from "mmsvg/google/msvg/action/search";
// import iconMore from "mmsvg/google/msvg/navigation/more-vert";

import arrowBack from "mmsvg/google/msvg/navigation/arrow-back";
import arrowForward from "mmsvg/google/msvg/navigation/arrow-forward";

component.theme(".tests-tabs-fixed-width", {
  tab_max_width: 110,
  tab_min_width: 110
});

component.theme(".tests-tabs-custom_color", {
  color_light: "#00BCD4",
  color_light_selected: "#F44336",
  color_light_tab_indicator: "#F44336",
  color_dark: "#00BCD4",
  color_dark_selected: "#F44336",
  color_dark_tab_indicator: "#F44336"
});

const threeButtons = [
  { label: "New" },
  { label: "My Favorites" },
  { label: "Saved" }
];

const longLabels = [
  { label: "New" },
  { label: "A very long label that does not fit" },
  { label: "Saved" }
];

const longList = [
  { label: "Web" },
  { label: "Shopping" },
  { label: "Videos" },
  { label: "Images" },
  { label: "Books" },
  { label: "More" }
];

const iconButtons = [
  {
    icon: { msvg: iconHeart }
  },
  {
    icon: { msvg: iconBell }
  },
  {
    icon: { msvg: iconSettings }
  }
];

const iconTextButtons = [
  {
    icon: { msvg: iconHeart },
    label: "Favs"
  },
  {
    icon: { msvg: iconBell },
    label: "Notifs"
  },
  {
    icon: { msvg: iconSettings },
    label: "Custom"
  }
];

export const tests = [
  {
    name: "Child node",
    component,
    attrs: null,
    children: threeButtons
  },
  {
    name: "Option: content",
    component,
    attrs: {
      content: threeButtons
    }
  },
  {
    name: "Option: buttons (text buttons)",
    component,
    attrs: {
      buttons: threeButtons
    }
  },
  {
    name: "Option: autofit (true)",
    component,
    attrs: {
      buttons: threeButtons,
      autofit: true
    }
  },
  {
    name: "Option: centered (no autofit)",
    component,
    attrs: {
      buttons: threeButtons,
      centered: true
    }
  },
  {
    name: "Option: largestWidth (no autofit)",
    component,
    attrs: {
      buttons: threeButtons,
      largestWidth: true
    }
  },
  {
    name: "Theme: small fixed width",
    component,
    attrs: {
      buttons: threeButtons,
      class: "tests-tabs-fixed-width",
      centered: true,
    }
  },
  {
    name: "Option: selectedTab (1)",
    component,
    attrs: {
      buttons: threeButtons,
      autofit: true,
      selectedTab: 1
    }
  },
  {
    name: "Theme: custom colors",
    component,
    attrs: {
      buttons: threeButtons,
      autofit: true,
      class: "tests-tabs-custom_color"
    }
  },
  {
    name: "Long labels: wrap to second line",
    component,
    attrs: {
      buttons: longLabels,
      autofit: true,
      class: "tests-tabs-fixed-width"
    }
  },
  {
    name: "Option: scrollable",
    component: {
      view: () => 
        m("div", {
          style: {
            maxWidth: "400px",
            color: "#fff",
            backgroundColor: "#444",
            overflowX: "hidden",
            height: "48px"
          }
        }, m(component, {
          buttons: longList,
          scrollable: true
        }))
    }
  },
  {
    name: "Option: scrollable with custom icons",
    component: {
      view: () => 
        m("div", {
          style: {
            maxWidth: "400px",
            color: "#fff",
            backgroundColor: "#444",
            overflowX: "hidden",
            height: "48px"
          }
        }, m(component, {
          buttons: longList,
          scrollable: true,
          scrollIconBackward: { msvg: arrowBack },
          scrollIconForward: { msvg: arrowForward }
        }))
    }
  },
  {
    name: "Option: menu",
    component: {
      view: () => 
        m("div", {
          style: {
            maxWidth: "320px",
            color: "#444",
            backgroundColor: "#fff",
            height: "400px",
            display: "flex",
            flexDirection: "column"
          }
        }, [
          m("div", {
            style: {
              padding: "20px",
              display: "flex",
              overflowX: "hidden",
              overflowY: "scroll",
              flexDirection: "column"
            }
          }, [1,2,3,4,5].map(() => m("p", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))
          ),
          m(component, {
            buttons: threeButtons,
            menu: true,
            autofit: true,
            hideIndicator: true,
            style: {
              borderTop: "1px solid #eee"
            }
          })
        ])
    }
  },
  {
    name: "Option: hideIndicator",
    interactive: true,
    component,
    attrs: {
      buttons: threeButtons,
      autofit: true,
      hideIndicator: true
    }
  },
  {
    name: "Option: noIndicatorSlide",
    interactive: true,
    component,
    attrs: {
      buttons: threeButtons,
      autofit: true,
      noIndicatorSlide: true
    }
  },
  {
    name: "Option: tabsOpts (ink: false)",
    interactive: true,
    component,
    attrs: {
      buttons: threeButtons,
      autofit: true,
      tabsOpts: {
        ink: false
      }
    }
  },
  {
    name: "Option: activeSelected",
    interactive: true,
    component,
    attrs: {
      buttons: threeButtons,
      autofit: true,
      activeSelected: true
    }
  },
  {
    name: "Option: tabsOpts (style - colors)",
    component,
    attrs: {
      buttons: threeButtons,
      autofit: true,
      tabsOpts: {
        style: {
          backgroundColor: "#EF6C00",
          color: "#fff"
        }
      }
    }
  },
  {
    name: "Tabs with icons",
    class: "small-result",
    component,
    attrs: {
      buttons: iconButtons,
      autofit: true
    }
  },
  {
    name: "Tabs with icons and text",
    class: "small-result",
    component,
    attrs: {
      buttons: iconTextButtons,
      autofit: true
    }
  },
  {
    name: "Option: getState",
    interactive: true,
    component: {
      oninit: vnode =>
        vnode.state = {},
      view: vnode => [
        m("ul", {
          style: {
            margin: "0 0 1rem 0",
            padding: 0,
            maxHeight: "7rem",
            overflow: "hidden"
          }
        }, [
          m("li", `${vnode.state.index}`),
          m("li", `${JSON.stringify(vnode.state.data)}`)
        ]),
        m(component, {
          buttons: threeButtons,
          autofit: true,
          getState: s => vnode.state = s
        })
      ]
    }
  },

  // Dark theme

  {
    name: "Option: buttons (text buttons) -- dark theme",
    class: "pe-dark-theme",
    component,
    attrs: {
      buttons: threeButtons
    }
  },

  {
    name: "Theme: custom colors -- dark theme",
    class: "pe-dark-theme",
    component,
    attrs: {
      buttons: threeButtons,
      autofit: true,
      class: "tests-tabs-custom_color"
    }
  },
  {
    name: "Tabs with icons -- dark theme",
    class: "small-result pe-dark-theme",
    component,
    attrs: {
      buttons: iconButtons,
      autofit: true
    }
  },
  {
    name: "Option: scrollable -- dark theme",
    class: "pe-dark-theme",
    component: {
      view: () => 
        m("div", {
          style: {
            maxWidth: "400px",
            overflowX: "hidden",
            height: "48px",
            color: "#fff"
          }
        }, m(component, {
          buttons: longList,
          scrollable: true
        }))
    }
  },
];
