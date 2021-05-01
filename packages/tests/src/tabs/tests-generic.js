import onChange from "./components/onChange";
import nested from "./components/nested";
import { TabsCSS } from "polythene-css";

const iconHeartSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24.00 24.00\" enable-background=\"new 0 0 24.00 24.00\" xml:space=\"preserve\"><path fill=\"#000000\" fill-opacity=\"1\" stroke-width=\"0.2\" stroke-linejoin=\"round\" d=\"M 11.9994,21.3497L 10.5504,20.0327C 5.4014,15.3607 1.99939,12.2736 1.99939,8.49762C 1.99939,5.41364 4.41537,2.99762 7.49939,2.99762C 9.24039,2.99762 10.9084,3.80566 11.9994,5.08362C 13.0904,3.80566 14.7584,2.99762 16.4994,2.99762C 19.5834,2.99762 21.9994,5.41364 21.9994,8.49762C 21.9994,12.2736 18.5974,15.3607 13.4484,20.0327L 11.9994,21.3497 Z \"/></svg>";
const iconBellSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24.00 24.00\" enable-background=\"new 0 0 24.00 24.00\" xml:space=\"preserve\"><path fill=\"#000000\" fill-opacity=\"1\" stroke-width=\"0.2\" stroke-linejoin=\"round\" d=\"M 14,20C 14,21.1046 13.1046,22 12,22C 10.8954,22 10,21.1046 10,20L 14,20 Z M 12,2.00001C 12.5523,2.00001 13,2.44772 13,3L 13,4.08298C 15.8377,4.55905 18,7.02702 18,10L 18,16L 21,19L 3,19L 6,16L 6.00001,9.99998C 6.00001,7.02698 8.1623,4.55902 11,4.08294L 11,3C 11,2.44772 11.4477,2.00001 12,2.00001 Z \"/></svg>";
const iconSettingsSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24.00 24.00\" enable-background=\"new 0 0 24.00 24.00\" xml:space=\"preserve\"><path fill=\"#000000\" fill-opacity=\"1\" stroke-width=\"0.2\" stroke-linejoin=\"round\" d=\"M 11.9994,15.498C 10.0664,15.498 8.49939,13.931 8.49939,11.998C 8.49939,10.0651 10.0664,8.49805 11.9994,8.49805C 13.9324,8.49805 15.4994,10.0651 15.4994,11.998C 15.4994,13.931 13.9324,15.498 11.9994,15.498 Z M 19.4284,12.9741C 19.4704,12.6531 19.4984,12.329 19.4984,11.998C 19.4984,11.6671 19.4704,11.343 19.4284,11.022L 21.5414,9.36804C 21.7294,9.21606 21.7844,8.94604 21.6594,8.73004L 19.6594,5.26605C 19.5354,5.05005 19.2734,4.96204 19.0474,5.04907L 16.5584,6.05206C 16.0424,5.65607 15.4774,5.32104 14.8684,5.06903L 14.4934,2.41907C 14.4554,2.18103 14.2484,1.99805 13.9994,1.99805L 9.99939,1.99805C 9.74939,1.99805 9.5434,2.18103 9.5054,2.41907L 9.1304,5.06805C 8.52039,5.32104 7.95538,5.65607 7.43939,6.05206L 4.95139,5.04907C 4.7254,4.96204 4.46338,5.05005 4.33939,5.26605L 2.33939,8.73004C 2.21439,8.94604 2.26938,9.21606 2.4574,9.36804L 4.5694,11.022C 4.5274,11.342 4.49939,11.6671 4.49939,11.998C 4.49939,12.329 4.5274,12.6541 4.5694,12.9741L 2.4574,14.6271C 2.26938,14.78 2.21439,15.05 2.33939,15.2661L 4.33939,18.73C 4.46338,18.946 4.7254,19.0341 4.95139,18.947L 7.4404,17.944C 7.95639,18.34 8.52139,18.675 9.1304,18.9271L 9.5054,21.577C 9.5434,21.8151 9.74939,21.998 9.99939,21.998L 13.9994,21.998C 14.2484,21.998 14.4554,21.8151 14.4934,21.577L 14.8684,18.9271C 15.4764,18.6741 16.0414,18.34 16.5574,17.9431L 19.0474,18.947C 19.2734,19.0341 19.5354,18.946 19.6594,18.73L 21.6594,15.2661C 21.7844,15.05 21.7294,14.78 21.5414,14.6271L 19.4284,12.9741 Z \"/></svg>";
const arrowBackSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"/></svg>";
const arrowForwardSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z\"/></svg>";

export default ({ h, Tabs }) => {

  const iconHeart = h.trust(iconHeartSVG);
  const iconBell = h.trust(iconBellSVG);
  const iconSettings = h.trust(iconSettingsSVG);
  const arrowBack = h.trust(arrowBackSVG);
  const arrowForward = h.trust(arrowForwardSVG);

  const OnChange = onChange({ h, Tabs });
  const Nested = nested({ h, Tabs });

  TabsCSS.addStyle(".tests-tabs-fixed-width", {
    tab_min_width:             84,
    tab_min_width_tablet:      84,
    color_light_text:          "#6500ed",
    color_light_background:    "#e0c9ff",
    color_light_tab_indicator: "#6500ed",
  });

  TabsCSS.addStyle(".tests-tabs-custom_color", {
    color_light_text:          "#00BCD4",
    color_light_hover:         "#F44336",
    color_light_selected:      "#F44336",
    color_light_tab_indicator: "#F44336",
    color_dark_text:           "#00BCD4",
    color_dark_hover:          "#F44336",
    color_dark_selected:       "#F44336",
    color_dark_tab_indicator:  "#F44336"
  });

  TabsCSS.addStyle(".tests-tabs-scrollable", {
    color_dark_text:           "#00BCD4",
    color_dark_hover:          "#40c4ff",
    color_dark_selected:       "#40c4ff",
    color_dark_tab_indicator:  "#40c4ff"
  });

  TabsCSS.addStyle(".tests-tabs-no-indicators", {
    color_light_text:     "#333",
    color_light_selected: "#333",
    label_opacity:        1
  });

  const threeButtons = [
    { label: "New" },
    { label: "Favorites" },
    { label: "Saved" }
  ];

  const menuButtons = [
    { label: "New" },
    { label: "Favs" },
    { label: "Saved" }
  ];

  const longLabels = [
    { label: "New" },
    { label: "A very long label that runs on two lines" },
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
      icon: { svg: { content: iconHeart } }
    },
    {
      icon: { svg: { content: iconBell } }
    },
    {
      icon: { svg: { content: iconSettings } }
    }
  ];

  const iconTextButtons = [
    {
      icon: { svg: { content: iconHeart } },
      label: "Favs"
    },
    {
      icon: { svg: { content: iconBell } },
      label: "Notifs"
    },
    {
      icon: { svg: { content: iconSettings } },
      label: "Custom"
    }
  ];

  return [
    // {
    //   name: "Child node",
    //   component: Tabs,
    //   attrs: null,
    //   children: threeButtons
    // },
    // {
    //   name: "Option: content, before, after",
    //   component: Tabs,
    //   attrs: {
    //     content: threeButtons,
    //     before: "Before",
    //     after: "After"
    //   }
    // },
    {
      name: "Option: content",
      component: Tabs,
      attrs: () => ({
        content: threeButtons
      })
    },
    {
      name: "Option: tabs (text buttons)",
      component: Tabs,
      attrs: {
        tabs: threeButtons
      }
    },
    {
      name: "Option: compact",
      component: Tabs,
      attrs: {
        tabs: threeButtons,
        compact: true,
      }
    },
    {
      name: "Option: autofit",
      component: Tabs,
      attrs: {
        tabs: threeButtons,
        autofit: true
      }
    },
    {
      name: "Option: centered (no autofit)",
      component: Tabs,
      attrs: {
        tabs: threeButtons,
        centered: true
      }
    },
    {
      name: "Option: largestWidth (no autofit)",
      component: Tabs,
      attrs: {
        tabs: threeButtons,
        largestWidth: true
      }
    },
    {
      name: "Theme (small fixed width, color)",
      component: Tabs,
      attrs: {
        tabs: threeButtons,
        className: "tests-tabs-fixed-width",
        centered: true,
      }
    },
    {
      name: "Option: selectedTabIndex (1)",
      component: Tabs,
      attrs: {
        tabs: threeButtons,
        autofit: true,
        selectedTabIndex: 1
      }
    },
    {
      name: "Theme: custom colors",
      component: Tabs,
      attrs: {
        tabs: threeButtons,
        autofit: true,
        className: "tests-tabs-custom_color"
      }
    },
    {
      name: "Long labels: wrap to second line",
      component: Tabs,
      attrs: {
        tabs: longLabels,
        autofit: true,
      }
    },
    {
      name: "Option: scrollable",
      component: {
        view: () => 
          h("div", {
            style: {
              color: "#fff",
              backgroundColor: "#444",
              overflowX: "hidden",
              height: "48px"
            }
          },
          h(Tabs, {
            tabs: longList,
            scrollable: true,
            tone: "dark",
            className: "tests-tabs-scrollable",
          }))
      }
    },
    {
      name: "Option: scrollable with custom icons",
      component: {
        view: () => 
          h("div", {
            style: {
              color: "#fff",
              backgroundColor: "#444",
              overflowX: "hidden",
              height: "48px"
            }
          }, h(Tabs, {
            tabs: longList,
            scrollable: true,
            scrollIconBackward: { svg: { content: arrowBack } },
            scrollIconForward: { svg: { content: arrowForward } },
            tone: "dark",
            className: "tests-tabs-scrollable",
          }))
      }
    },
    {
      name: "Option: menu",
      component: {
        view: () => 
          h("div",
            {
              style: {
                maxWidth: "320px",
                color: "#444",
                backgroundColor: "#fff",
                height: "400px",
                display: "flex",
                flexDirection: "column"
              }
            },
            [
              h("div",
                {
                  style: {
                    padding: "20px",
                    display: "flex",
                    overflowX: "hidden",
                    overflowY: "scroll",
                    flexDirection: "column"
                  }
                },
                [1,2,3,4,5].map(() =>
                  h("p", { style: { flex: "none" } }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
                )
              ),
              h(Tabs, {
                tabs: menuButtons,
                menu: true,
                autofit: true,
                hideIndicator: true,
                style: { borderTop: "1px solid #eee" }
              })
            ]
          )
      }
    },
    {
      name: "Nested tabs",
      interactive: true,
      exclude: true,
      component: Nested
    },
    {
      name: "Option: hideIndicator",
      interactive: true,
      component: Tabs,
      attrs: {
        tabs: threeButtons,
        autofit: true,
        hideIndicator: true
      }
    },
    {
      name: "Option: noIndicatorSlide",
      interactive: true,
      component: Tabs,
      attrs: {
        tabs: threeButtons,
        autofit: true,
        noIndicatorSlide: true
      }
    },
    {
      name: "Option: all (ink: false)",
      interactive: true,
      component: Tabs,
      attrs: {
        tabs: threeButtons,
        autofit: true,
        all: { ink: false }
      }
    },
    {
      name: "Option: activeSelected",
      interactive: true,
      component: Tabs,
      attrs: {
        tabs: threeButtons,
        autofit: true,
        activeSelected: true
      }
    },
    {
      name: "Disabled tab",
      component: Tabs,
      attrs: {
        selectedTabIndex: 1,
        autofit: true,
        content: [
          { label: "New", disabled: true },
          { label: "Favorites" },
          { label: "Saved" }
        ],
        // onChange: newTab => console.log("newTab", newTab), // eslint-disable-line no-console
        // events: {
        //   [a.onclick]: () => console.log(a.onclick), // eslint-disable-line no-console
        // }
      }
    },
    {
      name: "Hide all selection indicators",
      interactive: true,
      component: Tabs,
      attrs: {
        tabs: threeButtons,
        autofit: true,
        hideIndicator: true,
        className: "tests-tabs-no-indicators"
      }
    },
    {
      name: "Option: all (style - colors)",
      component: Tabs,
      attrs: {
        tabs: threeButtons,
        autofit: true,
        all: {
          style: {
            backgroundColor: "#EF6C00",
            color: "#fff"
          }
        }
      }
    },
    {
      name: "Tabs with icons",
      component: Tabs,
      attrs: {
        tabs: iconButtons,
        autofit: true
      }
    },
    {
      name: "Tabs with icons and text",
      component: Tabs,
      attrs: {
        tabs: iconTextButtons,
        autofit: true
      }
    },
    {
      name: "Option: onChange",
      interactive: true,
      exclude: true,
      component: OnChange
    },
    
    {
      section: "Dark tone",
    },
    {
      name: "Option: tabs (text buttons) -- dark theme class",
      className: "pe-dark-tone",
      component: Tabs,
      attrs: {
        tabs: threeButtons,
        autofit: true,
      }
    },

    {
      name: "Theme: custom colors -- dark theme class",
      className: "pe-dark-tone",
      component: Tabs,
      attrs: {
        tabs: threeButtons,
        autofit: true,
        className: "tests-tabs-custom_color"
      }
    },
    {
      name: "Tabs with icons -- dark theme class",
      className: "pe-dark-tone",
      component: Tabs,
      attrs: {
        tabs: iconButtons,
        autofit: true
      }
    },
    {
      name: "Option: scrollable -- dark theme class",
      className: "pe-dark-tone",
      component: {
        view: () => 
          h("div", {
            style: {
              overflowX: "hidden",
              height: "48px",
              color: "#fff"
            }
          }, h(Tabs, {
            tabs: longList,
            scrollable: true,
            autofit: true,
          }))
      }
    },
    {
      name: "Dark tone class + light theme class",
      className: "pe-dark-tone",
      component: {
        view: () => 
          h("div", {
            style: {
              background: "#fff",
              padding: "20px"
            },
            className: "pe-light-tone"
          }, h(Tabs, {
            tabs: longList,
            scrollable: true,
            autofit: true,
          }))
      }
    },
    {
      name: "Dark tone class + light tone",
      className: "test-dark-tone",
      component: {
        view: () => 
          h("div", {
            style: {
              background: "#fff",
              padding: "20px"
            }
          }, h(Tabs, {
            tabs: longList,
            scrollable: true,
            tone: "light"
          }))
      }
    },

    {
      section: "Right-to-left",
    },
    {
      name: "Option: content (RTL)",
      component: {
        view: () => 
          h(".pe-rtl", null,
            h(Tabs,
              { content: threeButtons }
            )
          )
      }
    },

    // {
    //   name: "Option: scrollable (RTL) (does not work with Chrome)",
    //   component: {
    //     view: () => 
    //       h(".pe-rtl", {
    //         style: {
    //           color: "#fff",
    //           backgroundColor: "#444",
    //           overflowX: "hidden",
    //           height: "48px"
    //         }
    //       }, h(Tabs, {
    //         tabs: longList,
    //         scrollable: true
    //       }))
    //   }
    // },
  ];
};
