import { mithrilTests as tests } from "polythene-test";

export default [
  {
    path: "/button",
    name: "Button",
    tests: tests.button
  },
  {
    path: "/raised-button",
    name: "Raised Button",
    tests: tests.raisedButton
  },
  {
    path: "/card",
    name: "Card",
    tests: tests.card
  },
  {
    path: "/checkbox",
    name: "Checkbox",
    tests: tests.checkbox
  },
  {
    path: "/dialog",
    name: "Dialog",
    tests: tests.dialog
  },
  {
    path: "/dialog-pane",
    name: "Dialog Pane",
    tests: tests.dialogPane
  },
  {
    path: "/fab",
    name: "FAB",
    tests: tests.fab
  },
  {
    path: "/icon",
    name: "Icon",
    tests: tests.icon
  },
  {
    path: "/icon-button",
    name: "Icon Button",
    tests: tests.iconButton
  },
  {
    path: "/list",
    name: "List",
    tests: tests.list
  },
  {
    path: "/list-tile",
    name: "List Tile",
    tests: tests.listTile
  },
  {
    path: "/menu",
    name: "Menu",
    tests: tests.menu
  },
  // {
  //   path: "/md-spinner",
  //   name: "Material Design spinner",
  //   tests: mdSpinnerTests
  // },
  // {
  //   path: "/md-progress-spinner",
  //   name: "Material Design progress spinner",
  //   tests: mdEndSpinnerTests
  // },
  // {
  //   path: "/ios-spinner",
  //   name: "iOS spinner",
  //   tests: iOSSpinnerTests
  // },
  {
    path: "/notification",
    name: "Notification",
    tests: tests.notification
  },
  // {
  //   path: "/snackbar",
  //   name: "Notification - Snackbar",
  //   tests: snackbarTests
  // },
  {
    path: "/radio-button",
    name: "Radio Button",
    tests: tests.radioButton
  },
  {
    path: "/ripple",
    name: "Ripple",
    tests: tests.ripple
  },
  {
    path: "/search",
    name: "Search",
    tests: tests.search
  },
  {
    path: "/shadow",
    name: "Shadow",
    tests: tests.shadow
  },
  {
    path: "/slider",
    name: "Slider",
    tests: tests.slider
  },
  {
    path: "/svg",
    name: "SVG",
    tests: tests.svg
  },
  {
    path: "/switch",
    name: "Switch",
    tests: tests.switchButton
  },
  {
    path: "/tabs",
    name: "Tabs",
    tests: tests.tabs
  },
  {
    path: "/textfield",
    name: "Text Field",
    tests: tests.textfield
  },
  {
    path: "/toolbar",
    name: "Toolbar",
    tests: tests.toolbar
  },
  {
    path: "/theme",
    name: "Custom theme",
    tests: tests.theme
  },
  // {
  //   path: "/css",
  //   name: "CSS tools",
  //   tests: cssTests
  // },
  {
    path: "/layout-styles",
    name: "Layout styles",
    tests: tests.layoutStyles
  }
];