import { reactTests as buttonTests } from "polythene-test-button";
import { reactTests as buttonGroupTests } from "polythene-test-button-group";
import { reactTests as cardTests } from "polythene-test-card";
import { reactTests as checkboxTests } from "polythene-test-checkbox";
import { reactTests as dialogTests } from "polythene-test-dialog";
import { reactTests as dialogPaneTests } from "polythene-test-dialog-pane";
import { reactTests as drawerTests } from "polythene-test-drawer";
import { reactTests as fabTests } from "polythene-test-fab";
import { reactTests as iconTests } from "polythene-test-icon";
import { reactTests as iconButtonTests } from "polythene-test-icon-button";
import { reactTests as layoutStylesTests } from "polythene-test-layout-styles";
import { reactTests as listTests } from "polythene-test-list";
import { reactTests as listTileTests } from "polythene-test-list-tile";
import { reactTests as menuTests } from "polythene-test-menu";
import { reactTests as notificationTests } from "polythene-test-notification";
import { reactTests as radioButtonTests } from "polythene-test-radio-button";
import { reactTests as raisedButtonTests } from "polythene-test-raised-button";
import { reactTests as rippleTests } from "polythene-test-ripple";
import { reactTests as searchTests } from "polythene-test-search";
import { reactTests as shadowTests } from "polythene-test-shadow";
import { reactTests as sliderTests } from "polythene-test-slider";
import { reactTests as snackbarTests } from "polythene-test-snackbar";
import { reactTests as spinnerTests } from "polythene-test-spinner";
import { reactTests as svgTests } from "polythene-test-svg";
import { reactTests as switchButtonTests } from "polythene-test-switch";
import { reactTests as tabsTests } from "polythene-test-tabs";
import { reactTests as textfieldTests } from "polythene-test-textfield";
import { reactTests as toolbarTests } from "polythene-test-toolbar";

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