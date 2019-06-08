import m from "mithril";
import {
  Button,
  Card,
  Checkbox,
  Dialog,
  Drawer,
  FAB,
  Icon,
  IconButton,
  IOSSpinner,
  List,
  ListTile,
  MaterialDesignSpinner,
  Menu,
  Notification,
  RadioGroup,
  Search,
  Shadow,
  Slider,
  Snackbar,
  SVG,
  Switch,
  Tabs,
  TextField,
  Toolbar,
  ToolbarTitle,
} from "polythene-mithril";
import { addTypography, CardCSS, SVGCSS } from "polythene-css";
import SearchField from "./SearchField";
import MyButton from "./MyButton";

addTypography();

const linkIconSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"/></svg>";
const iconFavoriteSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z\"/></svg>";

// START DRAWER

const icons = {
  drafts: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z\"/></svg>",
  inbox: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z\"/></svg>",
  star: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/></svg>",
  send: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z\"/></svg>"
};


const navigationList = (navItemClick: (e: Event) => void) => m(List, {
  tiles: [
  	{
      title: "Inbox",
      icon: icons.inbox,
    },
    {
      title: "Starred",
      icon: icons.star,
    },
    {
      title: "Sent mail",
      icon: icons.send,
    },
    {
      title: "Drafts",
      icon: icons.drafts,
    }
  ].map(({ title, icon }) => 
  	m(ListTile, {
      title,
      front: m(Icon, {
        svg: { content: m.trust(icon) }
      }),
      hoverable: true,
      navigation: true, // <= to create a navigation style
      events: {
        onclick: navItemClick
      }
    })
  )
});

const AppDrawer = () => {
  const state = {
    show: false
  };
  return {
    view: () => {
      const navItemClick = () => state.show = false
      return [
        // For simplicity use a regular button to show the drawer
        // usually this would be the app bar's menu button
        m(Button, {
          raised: true,
          label: "Show",
          events: {
            onclick: () => state.show = true
          }
        }),
        m(Drawer, {
          content: navigationList(navItemClick),
          fixed: true, // global drawer on top of everything
          backdrop: true,
          show: state.show,
          didHide: () => state.show = false // sync state with component
        })
      ]
    }
  };
};

// END DRAWER

// START SEARCH

const iconSearchSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\"/></svg>"

const iconSearch = m.trust(iconSearchSVG);

const SearchIcon = {
  view: () => 
    m(IconButton, {
      icon: { svg: { content: iconSearch } },
      // make this appear as Icon Button but without interactivity:
      inactive: true
    })
};

// END SEARCH

// START TOOLBAR

const iconMenuSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"/></svg>"
const iconRefreshSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z\"/></svg>"
const iconAddSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>"

const iconMenu = m.trust(iconMenuSVG);
const iconRefresh = m.trust(iconRefreshSVG);
const iconAdd = m.trust(iconAddSVG);

const toolbarButton = (svg: object) => m(IconButton, {
  icon: { svg }
});

// END TOOLBAR

SVGCSS.addStyle(".themed-svg", {
  color_light: "#2196f3"
});

CardCSS.addStyle(
  ".themed-card",
  {
    color_dark_main_background: "#B89E58",
    color_dark_title_text:      "#fff",
    color_dark_subtitle_text:   "#fff"
  }
);

/* Test other CSS styles */
import { BaseSpinnerCSS, ButtonCSS } from "polythene-css";

BaseSpinnerCSS.addStyle(".test", {});
ButtonCSS.addStyle(".test", {});
/* end */

const App = {
  view: () => 
    m(".page", [
      m(".row", [
        m("h3", "Polythene for Mithril built with TypeScript"),
      ]),
      m(".row",
        [
          m("h6", "Drawer"),
          m(".component",
            m(AppDrawer)
          )
        ]
      ),
      m(".row",
        [
          m("h6", "SVG"),
          m(".component",
            m(SVG, {
              content: m.trust(linkIconSVG),
              className: "themed-svg",
              // Set explicit size for IE 11:
              style: {
                width: "24px",
                height: "24px",
              }
            })
          )
        ]
      ),
      m(".row",
        [
          m("h6", "Raised Button"),
          m(".component", 
            m(Button, {
              raised: true,
              label: "Button",
              testId: "my-button"
            })
          )
        ]
      ),
      m(".row", 
        [
          m("h6", "Text Button"),
          m(".component", 
            m(Button, {
              label: "Button"
            })
          )
        ]
      ),
      m(".row", 
        [
          m("h6", "Themed Regular Button"),
          m(".component", 
            m(MyButton, {
              label: "Button",
              showCustomColor: true,
              testId: "my-button",
            })
          )
        ]
      ),
      m(".row", 
        [
          m("h6", "Icon"),
          m(".component", 
            m(Icon, {
              size: "large",
              src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
              avatar: true,
              testId: "my-icon"
            })
          )
        ]
      ),
      m(".row", 
        [
          m("h6", "Icon Button"),
          m(".component", 
            m(IconButton, {
              icon: {
                svg: { content: m.trust(iconFavoriteSVG) }
              },
              label: "Like"
            })
          )
        ]
      ),
      m(".row",
        [
          m("h6", "FAB"),
          m(".component", 
            m(FAB, {
              icon: {
                svg: { content: m.trust(linkIconSVG) }
              }
            })
          )
        ]
      ),
      m(".row", 
        [
          m("h6", "Tabs"),
          m(".component", 
            m(Tabs, {
              tabs: [
                { label: "New" },
                { label: "Favorites", selected: true },
                { label: "Saved", disabled: true }
              ],
              autofit: true
            })
          )
        ]
      ),
      m(".row", 
        [
          m("h6", "List"),
          m(".component", 
            m(List, {
              header: {
                title: "Friends"
              },
              tiles: [
                m(ListTile, { title: "Jennifer Barker" }),
                m(ListTile, { title: "Ali Connors" }),
              ]
            })
          )
        ]
      ),
      m(".row", 
        [
          m("h6", "Menu"),
          m(".component", 
            m(Menu, {
              show: true,
              permanent: true,
              content: m(List,
                {
                  border: true
                },
                [
                  m(ListTile, { title: "Yes" }),
                  m(ListTile, { title: "No" })
                ]
              )
            })
          )
        ]
      ),
      m(".row",
        [
          m("h6", "Card"),
          m(".component", 
            m(Card, {
              className: "themed-card",
              tone: "dark",
              content: [
                {
                  primary: {
                    title: "Get Ready",
                    subtitle: "2 Unlimited",
                    media: {
                      ratio: "square",
                      size: "medium",
                      content: m("img", {
                        src: "https://lastfm-img2.akamaized.net/i/u/avatar170s/ca297951611442bda8ea55fba764c757"
                      })
                    }
                  }
                },
                {
                  actions: {
                    content: [
                      m(Button, {
                        label: "Listen now",
                      })
                    ]
                  }
                }
              ]
            })
          )
        ]
      ),
      m(".row",
        [
          m("h6", "Checkbox"),
          m(".component", 
            m(Checkbox, {
              label: "Label"
            })
          )
        ]
      ),
      m(".row",
        [
          m("h6", "Switch"),
          m(".component", 
            m(Switch, {
              label: "Label"
            })
          )
        ]
      ),
      m(".row",
        [
          m("h6", "Radio Button"),
          m(".component", 
            m(RadioGroup,
              {
                name: "radio-button",
                content: [
                  {
                    value: "One",
                    label: "One",
                  },
                  {
                    value: "Two",
                    label: "Two",
                    defaultChecked: true
                  }
                ]
              }
            )
          )
        ]
      ),
      m(".row",
        [
          m("h6", "TextField"),
          m(".component", 
            m(TextField, {
              defaultValue: "abC",
              validate: (value: string) => 
                value !== value.toLowerCase()
                  ? ({
                    valid: false,
                    error: "Only use lowercase characters."
                  })
                  : null,
              validateAtStart: true
            })
          )
        ]
      ),
      m(".row",
        [
          m("h6", "Slider"),
          m(".component", 
            m(Slider, {
              defaultValue: 50
            })
          )
        ]
      ),
      m(".row",
        [
          m("h6", "Material Design Spinner"),
          m(".component", 
            m(MaterialDesignSpinner, {
              permanent: true,
              raised: true,
            })
          )
        ]
      ),
      m(".row",
        [
          m("h6", "iOS Spinner"),
          m(".component", 
            m(IOSSpinner, {
              permanent: true
            })
          )
        ]
      ),
      m(".row",
        [
          m("h6", "Search"),
          m(".component", 
            m(SearchField)
          )
        ]
      ),
      m(".row",
        [
          m("h6", "Toolbar"),
          m(".component", 
            m(Toolbar, [
              toolbarButton(iconMenu),
              m(ToolbarTitle, { text: "Title" }), // will take available horizontal space
              toolbarButton(iconRefresh),
              toolbarButton(iconAdd)
            ])
          )
        ]
      ),
      m(".row",
        [
          m("h6", "Dialog"),
          m(".component", 
            m(Button, {
              raised: true,
              label: "Show dialog",
              events: {
                onclick: () => Dialog.show({
                  /* note the Dialog component is below the other elements in the app */
                  title: "Hello",
                  body: "Click outside to close, or press ESCAPE",
                  backdrop: true
                })
              }
            })
          )
        ]
      ),
      m(".row",
        [
          m("h6", "Notification"),
          m(".component", 
            m(Button, {
              raised: true,
              label: "Show Notification",
              events: {
                onclick: () => Notification.show(() => ({
                  /* note the Notification component is below the other elements in the app */
                  title: "Hello",
                  timeout: 2,
                }))
              }
            })
          )
        ]
      ),
      m(".row",
        [
          m("h6", "Snackbar"),
          m(".component", 
            m(Button, {
              raised: true,
              label: "Show Snackbar",
              events: {
                onclick: () => Snackbar.show({
                  /* note the Snackbar component is below the other elements in the app */
                  title: "Hello",
                  timeout: 2,
                })
              }
            })
          )
        ]
      ),
      m(Dialog),
      m(Snackbar),
      m(Notification)
    ])
};

const rootElement: HTMLElement | null = document.getElementById("root");
if (rootElement) {
  m.mount(rootElement, App);
}
