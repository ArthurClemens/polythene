import buttonTests from "polythene-test-button/src/tests-mithril";
import buttonGroupTests from "polythene-test-button-group/src/tests-mithril";
import cardTests from "polythene-test-card/src/tests-mithril";
import checkboxTests from "polythene-test-checkbox/src/tests-mithril";
import dialogTests from "polythene-test-dialog/src/tests-mithril";
import dialogPaneTests from "polythene-test-dialog-pane/src/tests-mithril";
import drawerTests from "polythene-test-drawer/src/tests-mithril";
import fabTests from "polythene-test-fab/src/tests-mithril";
import iconTests from "polythene-test-icon/src/tests-mithril";
import iconButtonTests from "polythene-test-icon-button/src/tests-mithril";
import layoutStylesTests from "polythene-test-layout-styles/src/tests-mithril";
import listTests from "polythene-test-list/src/tests-mithril";
import listTileTests from "polythene-test-list-tile/src/tests-mithril";
import menuTests from "polythene-test-menu/src/tests-mithril";
import notificationTests from "polythene-test-notification/src/tests-mithril";
import radioButtonTests from "polythene-test-radio-button/src/tests-mithril";
import raisedButtonTests from "polythene-test-raised-button/src/tests-mithril";
import rippleTests from "polythene-test-ripple/src/tests-mithril";
import searchTests from "polythene-test-search/src/tests-mithril";
import shadowTests from "polythene-test-shadow/src/tests-mithril";
import sliderTests from "polythene-test-slider/src/tests-mithril";
import snackbarTests from "polythene-test-snackbar/src/tests-mithril";
import spinnerTests from "polythene-test-spinner/src/tests-mithril";
import svgTests from "polythene-test-svg/src/tests-mithril";
import switchButtonTests from "polythene-test-switch/src/tests-mithril";
import tabsTests from "polythene-test-tabs/src/tests-mithril";
import textfieldTests from "polythene-test-textfield/src/tests-mithril";
import toolbarTests from "polythene-test-toolbar/src/tests-mithril";

export default [
  {
    path: "/button",
    name: "Button",
    tests: buttonTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/mithril/button.md"
  },
  {
    path: "/raised-button",
    name: "Raised Button",
    tests: raisedButtonTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/mithril/raised-button.md"
  },
  {
    path: "/button-group",
    name: "Button Group",
    tests: buttonGroupTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/mithril/button-group.md"
  },
  {
    path: "/card",
    name: "Card",
    tests: cardTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/mithril/card.md"
  },
  {
    path: "/checkbox",
    name: "Checkbox",
    tests: checkboxTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/mithril/checkbox.md"
  },
  {
    path: "/dialog",
    name: "Dialog",
    tests: dialogTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/mithril/dialog.md"
  },
  {
    path: "/dialog-pane",
    name: "Dialog Pane",
    tests: dialogPaneTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/mithril/dialog-pane.md"
  },
  {
    path: "/drawer",
    name: "Drawer",
    tests: drawerTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/mithril/drawer.md"
  },
  {
    path: "/fab",
    name: "FAB",
    tests: fabTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/mithril/fab.md"
  },
  {
    path: "/icon",
    name: "Icon",
    tests: iconTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/mithril/icon.md"
  },
  {
    path: "/icon-button",
    name: "Icon Button",
    tests: iconButtonTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/mithril/icon-button.md"
  },
  {
    path: "/list",
    name: "List",
    tests: listTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/mithril/list.md"
  },
  {
    path: "/list-tile",
    name: "List Tile",
    tests: listTileTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/mithril/list-tile.md"
  },
  {
    path: "/menu",
    name: "Menu",
    tests: menuTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/mithril/menu.md"
  },
  {
    path: "/notification",
    name: "Notification",
    tests: notificationTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/mithril/notification.md"
  },
  {
    path: "/snackbar",
    name: "Notification - Snackbar",
    tests: snackbarTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/mithril/snackbar.md"
  },
  {
    path: "/radio-button",
    name: "Radio Button",
    tests: radioButtonTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/mithril/radio-button.md"
  },
  {
    path: "/ripple",
    name: "Ripple",
    tests: rippleTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/mithril/ripple.md"
  },
  {
    path: "/search",
    name: "Search",
    tests: searchTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/mithril/search.md"
  },
  {
    path: "/shadow",
    name: "Shadow",
    tests: shadowTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/mithril/shadow.md"
  },
  {
    path: "/slider",
    name: "Slider",
    tests: sliderTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/mithril/slider.md"
  },
  {
    path: "/spinner",
    name: "Spinner",
    tests: spinnerTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/mithril/spinner.md"
  },
  {
    path: "/svg",
    name: "SVG",
    tests: svgTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/mithril/svg.md"
  },
  {
    path: "/switch",
    name: "Switch",
    tests: switchButtonTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/mithril/switch.md"
  },
  {
    path: "/tabs",
    name: "Tabs",
    tests: tabsTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/mithril/tabs.md"
  },
  {
    path: "/textfield",
    name: "Text Field",
    tests: textfieldTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/mithril/textfield.md"
  },
  {
    path: "/toolbar",
    name: "Toolbar",
    tests: toolbarTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/components/mithril/toolbar.md"
  },
  {
    path: "/layout-styles",
    name: "Layout styles",
    tests: layoutStylesTests,
    doc: "https://github.com/ArthurClemens/polythene/blob/master/docs/css.md#layout-classes"
  }
];