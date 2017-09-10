import m from "mithril";
import { addFastClick } from "polythene-fastclick";
import { addLayoutStyles } from "polythene-utilities";
// import { addTypography, addRoboto } from "polythene-style";
import {
  Button,
  RaisedButton,
  FAB,
  Checkbox,
  Dialog,
  Switch,
  TextField,
  Slider,
  MaterialDesignSpinner,
  Notification,
  Snackbar,
  SVG } from "polythene-mithril";

// import "polythene-css";

// import * as polytheneCSS from "polythene-css";

// polytheneCSS.SVG.addStyle(".themed-svg", {
//   color_light: "red",
//   color_dark: "orange"
// });

addTypography();
addRoboto();
addLayoutStyles();
addFastClick();

import "polythene-css/dist/polythene.css";

const linkIconSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"/></svg>";

Button.theme(".themed-button", {
  color_light_background: "#FF1744",
  color_light_text: "#fff"
});

const App = {
  view: () => 
    m(".page", [
      m(".row", [
        m("h1", "Polythene for Mithril"),
        m("h2", "Standalone Test")
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
          m("h2", "Themed Regular Button"),
          m(".component", 
            m(Button, {
              label: "Button",
              className: "themed-button"
            })
          )
        ]
      ),
      m(".row",
        [
          m("h2", "FAB"),
          m(".component", 
            m(FAB, {
              icon: {
                svg: m.trust(linkIconSVG)
              }
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
          m("h2", "TextField"),
          m(".component", 
            m(TextField, {
              defaultValue: "abC",
              validate: value => 
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
          m("h2", "Slider"),
          m(".component", 
            m(Slider, {
              defaultValue: 50
            })
          )
        ]
      ),
      m(".row",
        [
          m("h2", "Spinner"),
          m(".component", 
            m(MaterialDesignSpinner, {
              permanent: true
            })
          )
        ]
      ),
      m(".row",
        [
          m("h2", "Dialog"),
          m(".component", 
            m(RaisedButton, {
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
          m("h2", "Notification"),
          m(".component", 
            m(RaisedButton, {
              label: "Show Notification",
              events: {
                onclick: () => Notification.show({
                  /* note the Notification component is below the other elements in the app */
                  title: "Hello"
                })
              }
            })
          )
        ]
      ),
      m(".row",
        [
          m("h2", "Snackbar"),
          m(".component", 
            m(RaisedButton, {
              label: "Show Snackbar",
              events: {
                onclick: () => Snackbar.show({
                  /* note the Snackbar component is below the other elements in the app */
                  title: "Hello"
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

m.mount(document.querySelector("#root"), App);


