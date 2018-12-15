(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core'), require('polythene-core-drawer'), require('polythene-react-dialog')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core', 'polythene-core-drawer', 'polythene-react-dialog'], factory) :
  (factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core'],global['polythene-core-drawer'],global['polythene-react-dialog']));
}(this, (function (exports,polytheneReactBase,polytheneCore,polytheneCoreDrawer,polytheneReactDialog) { 'use strict';

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

  const DrawerInstance = polytheneReactBase.StateComponent(Object.assign({}, polytheneCoreDrawer.coreDrawer, {
    component: polytheneReactDialog.DialogInstance
  }));
  const DrawerToggle = polytheneReactBase.StateComponent(polytheneCore.Conditional);
  DrawerToggle.displayName = "DrawerToggle";
  const Drawer = props => polytheneReactBase.renderer(DrawerToggle, Object.assign({}, props, {
    placeholderClassName: classes.placeholder,
    instance: DrawerInstance,
    permanent: props.permanent || props.mini // passed to Conditional

  }));
  Drawer.displayName = "Drawer";

  exports.Drawer = Drawer;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-drawer.js.map
