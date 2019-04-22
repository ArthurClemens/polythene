import buttonTests from "polythene-test-button/src/tests-react";
import buttonGroupTests from "polythene-test-button-group/src/tests-react";
import cardTests from "polythene-test-card/src/tests-react";
import checkboxTests from "polythene-test-checkbox/src/tests-react";
import dialogTests from "polythene-test-dialog/src/tests-react";
import dialogPaneTests from "polythene-test-dialog-pane/src/tests-react";
import drawerTests from "polythene-test-drawer/src/tests-react";
import fabTests from "polythene-test-fab/src/tests-react";
import iconTests from "polythene-test-icon/src/tests-react";
import iconButtonTests from "polythene-test-icon-button/src/tests-react";
import layoutStylesTests from "polythene-test-layout-styles/src/tests-react";
import listTests from "polythene-test-list/src/tests-react";
import listTileTests from "polythene-test-list-tile/src/tests-react";
import menuTests from "polythene-test-menu/src/tests-react";
import notificationTests from "polythene-test-notification/src/tests-react";
import radioButtonTests from "polythene-test-radio-button/src/tests-react";
import raisedButtonTests from "polythene-test-raised-button/src/tests-react";
import rippleTests from "polythene-test-ripple/src/tests-react";
import searchTests from "polythene-test-search/src/tests-react";
import shadowTests from "polythene-test-shadow/src/tests-react";
import sliderTests from "polythene-test-slider/src/tests-react";
import snackbarTests from "polythene-test-snackbar/src/tests-react";
import spinnerTests from "polythene-test-spinner/src/tests-react";
import svgTests from "polythene-test-svg/src/tests-react";
import switchButtonTests from "polythene-test-switch/src/tests-react";
import tabsTests from "polythene-test-tabs/src/tests-react";
import textfieldTests from "polythene-test-textfield/src/tests-react";
import toolbarTests from "polythene-test-toolbar/src/tests-react";

export default [
  {
    path: "/button",
    name: "Button",
    tests: buttonTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/react/button.md"
  },
  {
    path: "/raised-button",
    name: "Raised Button",
    tests: raisedButtonTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/react/raised-button.md"
  },
  {
    path: "/button-group",
    name: "Button Group",
    tests: buttonGroupTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/react/button-group.md"
  },
  {
    path: "/card",
    name: "Card",
    tests: cardTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/react/card.md"
  },
  {
    path: "/checkbox",
    name: "Checkbox",
    tests: checkboxTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/react/checkbox.md"
  },
  {
    path: "/dialog",
    name: "Dialog",
    tests: dialogTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/react/dialog.md"
  },
  {
    path: "/dialog-pane",
    name: "Dialog Pane",
    tests: dialogPaneTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/react/dialog-pane.md"
  },
  {
    path: "/drawer",
    name: "Drawer",
    tests: drawerTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/react/drawer.md"
  },
  {
    path: "/fab",
    name: "FAB",
    tests: fabTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/react/fab.md"
  },
  {
    path: "/icon",
    name: "Icon",
    tests: iconTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/react/icon.md"
  },
  {
    path: "/icon-button",
    name: "Icon Button",
    tests: iconButtonTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/react/icon-button.md"
  },
  {
    path: "/list",
    name: "List",
    tests: listTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/react/list.md"
  },
  {
    path: "/list-tile",
    name: "List Tile",
    tests: listTileTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/react/list-tile.md"
  },
  {
    path: "/menu",
    name: "Menu",
    tests: menuTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/react/menu.md"
  },
  {
    path: "/notification",
    name: "Notification",
    tests: notificationTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/react/notification.md"
  },
  {
    path: "/snackbar",
    name: "Notification - Snackbar",
    tests: snackbarTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/react/snackbar.md"
  },
  {
    path: "/radio-button",
    name: "Radio Button",
    tests: radioButtonTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/react/radio-button.md"
  },
  {
    path: "/ripple",
    name: "Ripple",
    tests: rippleTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/react/ripple.md"
  },
  {
    path: "/search",
    name: "Search",
    tests: searchTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/react/search.md"
  },
  {
    path: "/shadow",
    name: "Shadow",
    tests: shadowTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/react/shadow.md"
  },
  {
    path: "/slider",
    name: "Slider",
    tests: sliderTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/react/slider.md"
  },
  {
    path: "/spinner",
    name: "Spinner",
    tests: spinnerTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/react/spinner.md"
  },
  {
    path: "/svg",
    name: "SVG",
    tests: svgTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/react/svg.md"
  },
  {
    path: "/switch",
    name: "Switch",
    tests: switchButtonTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/react/switch.md"
  },
  {
    path: "/tabs",
    name: "Tabs",
    tests: tabsTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/react/tabs.md"
  },
  {
    path: "/textfield",
    name: "Text Field",
    tests: textfieldTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/react/textfield.md"
  },
  {
    path: "/toolbar",
    name: "Toolbar",
    tests: toolbarTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/react/toolbar.md"
  },
  {
    path: "/layout-styles",
    name: "Layout styles",
    tests: layoutStylesTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/css.md#layout-classes"
  }
];