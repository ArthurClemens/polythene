import buttonTests from "polythene-tests/src/button/tests-mithril";
import buttonGroupTests from "polythene-tests/src/button-group/tests-mithril";
import cardTests from "polythene-tests/src/card/tests-mithril";
import checkboxTests from "polythene-tests/src/checkbox/tests-mithril";
import dialogTests from "polythene-tests/src/dialog/tests-mithril";
import dialogPaneTests from "polythene-tests/src/dialog-pane/tests-mithril";
import drawerTests from "polythene-tests/src/drawer/tests-mithril";
import fabTests from "polythene-tests/src/fab/tests-mithril";
import iconTests from "polythene-tests/src/icon/tests-mithril";
import iconButtonTests from "polythene-tests/src/icon-button/tests-mithril";
import layoutStylesTests from "polythene-tests/src/layout-styles/tests-mithril";
import listTests from "polythene-tests/src/list/tests-mithril";
import listTileTests from "polythene-tests/src/list-tile/tests-mithril";
import menuTests from "polythene-tests/src/menu/tests-mithril";
import notificationTests from "polythene-tests/src/notification/tests-mithril";
import radioButtonTests from "polythene-tests/src/radio-button/tests-mithril";
import raisedButtonTests from "polythene-tests/src/raised-button/tests-mithril";
import rippleTests from "polythene-tests/src/ripple/tests-mithril";
import searchTests from "polythene-tests/src/search/tests-mithril";
import shadowTests from "polythene-tests/src/shadow/tests-mithril";
import sliderTests from "polythene-tests/src/slider/tests-mithril";
import snackbarTests from "polythene-tests/src/snackbar/tests-mithril";
import spinnerTests from "polythene-tests/src/spinner/tests-mithril";
import svgTests from "polythene-tests/src/svg/tests-mithril";
import switchButtonTests from "polythene-tests/src/switch/tests-mithril";
import tabsTests from "polythene-tests/src/tabs/tests-mithril";
import textfieldTests from "polythene-tests/src/textfield/tests-mithril";
import toolbarTests from "polythene-tests/src/toolbar/tests-mithril";

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