import { StateComponent, renderer } from 'polythene-react-base';
import { Conditional } from 'polythene-core';
import { coreDrawer } from 'polythene-core-drawer';
import { DialogInstance } from 'polythene-react-dialog';

var classes = {
  component: "pe-dialog pe-drawer",
  // states
  cover: "pe-drawer--cover",
  push: "pe-drawer--push",
  mini: "pe-drawer--mini",
  permanent: "pe-drawer--permanent",
  border: "pe-drawer--border",
  floating: "pe-drawer--floating",
  fixed: "pe-drawer--fixed",
  anchorEnd: "pe-drawer--anchor-end"
};

const DrawerInstance = StateComponent(Object.assign({}, coreDrawer, {
  component: DialogInstance
}));
const DrawerToggle = StateComponent(Conditional);
DrawerToggle.displayName = "DrawerToggle";
const Drawer = props => renderer(DrawerToggle, Object.assign({}, props, {
  placeholderClassName: classes.placeholder,
  instance: DrawerInstance,
  permanent: props.permanent || props.mini // passed to Conditional

}));
Drawer.displayName = "Drawer";

export { Drawer };
