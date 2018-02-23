import { StateComponent, renderer } from 'polythene-react-base';
import { Conditional } from 'polythene-core';
import { coreDrawer } from 'polythene-core-drawer';
import { DialogInstance } from 'polythene-react-dialog';

var classes = {
  component: "pe-dialog pe-drawer",

  // states
  push: "pe-drawer--push"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var DrawerInstance = StateComponent(_extends({}, coreDrawer, {
  component: DialogInstance
}));

var DrawerToggle = StateComponent(Conditional);
DrawerToggle.displayName = "DrawerToggle";

var Drawer = function Drawer(props) {
  return renderer(DrawerToggle, _extends({}, props, {
    placeholderClassName: classes.placeholder,
    instance: DrawerInstance
  }));
};

Drawer.displayName = "Drawer";

// import { StateComponent } from "polythene-react-base";
// import { coreDrawer as core } from "polythene-core-drawer";
// import { DialogInstance } from "polythene-react-dialog";

// export const Drawer = StateComponent(Object.assign(
//   {},
//   core,
//   {
//     component: DialogInstance
//   }
// ));

// Drawer.displayName = "Drawer";


// import { StateComponent, renderer } from "polythene-react-base";
// import { Multi } from "polythene-core";
// import { coreDrawer as core } from "polythene-core-drawer";
// import classes from "polythene-css-classes/dialog";
// import { DialogInstance } from "polythene-react-dialog";

// export const DrawerInstance = StateComponent(Object.assign(
//   {},
//   core,
//   {
//     component: DialogInstance
//   }
// ));

// DrawerInstance.displayName = "DrawerInstance";

// const options = {
//   name:           "drawer",
//   htmlShowClass:  classes.open,
//   defaultId:      "default_drawer",
//   holderSelector: `div.${classes.holder}`,
//   instance:       DrawerInstance,
//   placeholder:    `span.${classes.placeholder}`
// };

// const Multiple = Multi({ options, renderer });
// export const Drawer = StateComponent(Multiple);
// Object.getOwnPropertyNames(Multiple).forEach(p => Drawer[p] = Multiple[p]);

// Drawer.displayName = "Drawer";

export { Drawer };
