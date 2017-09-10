import m from "mithril";

import {
  Button,
  Card,
  IconButton,
  RaisedButton,
  // FAB,
  Checkbox,
  // Dialog,
  Switch,
  RadioGroup,
  // TextField,
  // Slider,
  // MaterialDesignSpinner,
  // Notification,
  // Snackbar,
  Tabs,
  SVG
} from "polythene-mithril";

import "polythene-css/dist/polythene.css";
import "polythene-css/dist/polythene-typography.css";

const linkIconSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"/></svg>";

const App = {
  view: () => 
    m(".page", [
      m(".row", [
        m("h1", "Polythene for Mithril"),
        m("h2", "CSS Test")
      ]),
      m(".row",
        [
          m("h2", "SVG"),
          m(".component", 
            m(SVG, {
              content: m.trust(linkIconSVG),
              className: "themed-svg"
            })
          )
        ]
      ),
      m(".row",
        [
          m("h2", "Raised Button"),
          m(".component", 
            m(RaisedButton, {
              label: "Button"
            })
          )
        ]
      ),
      m(".row", 
        [
          m("h2", "Regular Button"),
          m(".component", 
            m(Button, {
              label: "Button"
            })
          )
        ]
      ),
      m(".row", 
        [
          m("h2", "Icon Button"),
          m(".component", 
            m(IconButton, {
              icon: {
                svg: m.trust(linkIconSVG)
              }
            })
          )
        ]
      ),
      // m(".row",
      //   [
      //     m("h2", "FAB"),
      //     m(".component", 
      //       m(FAB, {
      //         icon: {
      //           svg: m.trust(linkIconSVG)
      //         }
      //       })
      //     )
      //   ]
      // ),
      m(".row", 
        [
          m("h2", "Tabs"),
          m(".component", 
            m(Tabs, {
              tabs: [
                { label: "New" },
                { label: "Favorites" },
                { label: "Saved" }
              ],
              autofit: true
            })
          )
        ]
      ),
      m(".row",
        [
          m("h2", "Card"),
          m(".component", 
            m(Card, {
              className: "themed-card",
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
          m("h2", "Checkbox"),
          m(".component", 
            m(Checkbox, {
              label: "Label"
            })
          )
        ]
      ),
      m(".row",
        [
          m("h2", "Switch"),
          m(".component", 
            m(Switch, {
              label: "Label"
            })
          )
        ]
      ),
      m(".row",
        [
          m("h2", "Radio Button"),
          m(".component", 
            m(RadioGroup,
              {
                name: "defaultChecked",
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

      // m(".row",
      //   [
      //     m("h2", "TextField"),
      //     m(".component", 
      //       m(TextField, {
      //         defaultValue: "abC",
      //         validate: value => 
      //           value !== value.toLowerCase()
      //             ? ({
      //               valid: false,
      //               error: "Only use lowercase characters."
      //             })
      //             : null,
      //         validateAtStart: true
      //       })
      //     )
      //   ]
      // ),
      // m(".row",
      //   [
      //     m("h2", "Slider"),
      //     m(".component", 
      //       m(Slider, {
      //         defaultValue: 50
      //       })
      //     )
      //   ]
      // ),
      // m(".row",
      //   [
      //     m("h2", "Spinner"),
      //     m(".component", 
      //       m(MaterialDesignSpinner, {
      //         permanent: true
      //       })
      //     )
      //   ]
      // ),
      // m(".row",
      //   [
      //     m("h2", "Dialog"),
      //     m(".component", 
      //       m(RaisedButton, {
      //         label: "Show dialog",
      //         events: {
      //           onclick: () => Dialog.show({
      //             /* note the Dialog component is below the other elements in the app */
      //             title: "Hello",
      //             body: "Click outside to close, or press ESCAPE",
      //             backdrop: true
      //           })
      //         }
      //       })
      //     )
      //   ]
      // ),
      // m(".row",
      //   [
      //     m("h2", "Notification"),
      //     m(".component", 
      //       m(RaisedButton, {
      //         label: "Show Notification",
      //         events: {
      //           onclick: () => Notification.show({
      //             /* note the Notification component is below the other elements in the app */
      //             title: "Hello"
      //           })
      //         }
      //       })
      //     )
      //   ]
      // ),
      // m(".row",
      //   [
      //     m("h2", "Snackbar"),
      //     m(".component", 
      //       m(RaisedButton, {
      //         label: "Show Snackbar",
      //         events: {
      //           onclick: () => Snackbar.show({
      //             /* note the Snackbar component is below the other elements in the app */
      //             title: "Hello"
      //           })
      //         }
      //       })
      //     )
      //   ]
      // ),
      // m(Dialog),
      // m(Snackbar),
      // m(Notification)
    ])
};

m.mount(document.querySelector("#root"), App);


