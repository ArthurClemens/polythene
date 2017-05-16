import { reactTests as tests } from "polythene-tests";

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
  // {
  //   path: "/card",
  //   name: "Card",
  //   tests: cardTests
  // },
  // {
  //   path: "/checkbox",
  //   name: "Checkbox",
  //   tests: checkboxTests
  // },
  // {
  //   path: "/dialog",
  //   name: "Dialog",
  //   tests: dialogTests
  // },
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
  // {
  //   path: "/list",
  //   name: "List",
  //   tests: listTests
  // },
  // {
  //   path: "/list-tile",
  //   name: "List tile",
  //   tests: listTileTests
  // },
  // {
  //   path: "/menu",
  //   name: "Menu",
  //   tests: menuTests
  // },
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
  // {
  //   path: "/notification",
  //   name: "Notification",
  //   tests: notificationTests
  // },
  // {
  //   path: "/snackbar",
  //   name: "Notification - Snackbar",
  //   tests: snackbarTests
  // },
  // {
  //   path: "/radio-button",
  //   name: "Radio button",
  //   tests: radioButtonTests
  // },
  {
    path: "/ripple",
    name: "Ripple",
    tests: tests.ripple
  },
  // {
  //   path: "/search",
  //   name: "Search",
  //   tests: searchTests
  // },
  {
    path: "/shadow",
    name: "Shadow",
    tests: tests.shadow
  },
  // {
  //   path: "/slider",
  //   name: "Slider",
  //   tests: sliderTests
  // },
  {
    path: "/svg",
    name: "SVG",
    tests: tests.svg
  },
  // {
  //   path: "/switch-button",
  //   name: "Switch button",
  //   tests: switchButtonTests
  // },
  // {
  //   path: "/tabs",
  //   name: "Tabs",
  //   tests: tabsTests
  // },
  // {
  //   path: "/textfield",
  //   name: "Textfield",
  //   tests: textfieldTests
  // },
  // {
  //   path: "/toolbar",
  //   name: "Toolbar",
  //   tests: toolbarTests
  // },
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