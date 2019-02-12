import m from "mithril";
import {
  Button,
  Card,
  Checkbox,
  Dialog,
  FAB,
  Icon,
  IconButton,
  MaterialDesignSpinner,
  Notification,
  RadioGroup,
  Slider,
  Snackbar,
  SVG,
  Switch,
  Tabs,
  TextField,
} from "polythene-mithril";
import { addTypography, CardCSS, SVGCSS } from "polythene-css";
import SearchField from "./SearchField";
import MyButton from "./MyButton";

addTypography();

const linkIconSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"/></svg>";
const iconFavoriteSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z\"/></svg>";

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
              label: "Button"
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
              avatar: true
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
          m("h6", "Spinner"),
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
          m("h6", "Search"),
          m(".component", 
            m(SearchField)
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
