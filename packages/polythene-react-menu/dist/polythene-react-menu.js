(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core'), require('polythene-core-menu'), require('polythene-react-shadow')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core', 'polythene-core-menu', 'polythene-react-shadow'], factory) :
  (factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core'],global['polythene-core-menu'],global['polythene-react-shadow']));
}(this, (function (exports,polytheneReactBase,polytheneCore,polytheneCoreMenu,polytheneReactShadow) { 'use strict';

  var listTileClasses = {
    component: "pe-list-tile",
    // elements
    content: "pe-list-tile__content",
    highSubtitle: "pe-list-tile__high-subtitle",
    primary: "pe-list-tile__primary",
    secondary: "pe-list-tile__secondary",
    subtitle: "pe-list-tile__subtitle",
    title: "pe-list-tile__title",
    contentFront: "pe-list-tile__content-front",
    // states
    compact: "pe-list-tile--compact",
    compactFront: "pe-list-tile--compact-front",
    disabled: "pe-list-tile--disabled",
    hasFront: "pe-list-tile--front",
    hasHighSubtitle: "pe-list-tile--high-subtitle",
    hasSubtitle: "pe-list-tile--subtitle",
    header: "pe-list-tile--header",
    hoverable: "pe-list-tile--hoverable",
    selectable: "pe-list-tile--selectable",
    selected: "pe-list-tile--selected",
    highlight: "pe-list-tile--highlight",
    sticky: "pe-list-tile--sticky",
    navigation: "pe-list-tile--navigation"
  };

  var classes = {
    component: "pe-menu",
    // elements
    panel: "pe-menu__panel",
    content: "pe-menu__content",
    placeholder: "pe-menu__placeholder",
    backdrop: "pe-menu__backdrop",
    // states
    floating: "pe-menu--floating",
    origin: "pe-menu--origin",
    permanent: "pe-menu--permanent",
    showBackdrop: "pe-menu--backdrop",
    visible: "pe-menu--visible",
    width_auto: "pe-menu--width-auto",
    width_n: "pe-menu--width-",
    isTopMenu: "pe-menu--top-menu",
    // lookup
    listTile: listTileClasses.component,
    selectedListTile: listTileClasses.selected
  };

  const MenuInstance = polytheneReactBase.StateComponent(Object.assign({}, polytheneCoreMenu.coreMenu, {
    createContent: (vnode, args) => polytheneCoreMenu.coreMenu.createContent(vnode, Object.assign(args, {
      Shadow: polytheneReactShadow.Shadow
    }))
  }));
  const MenuToggle = polytheneReactBase.StateComponent(polytheneCore.Conditional);
  MenuToggle.displayName = "MenuToggle";
  const Menu = props => polytheneReactBase.renderer(MenuToggle, Object.assign({}, props, {
    placeholderClassName: classes.placeholder,
    instance: MenuInstance
  }));
  Menu.displayName = "Menu";

  exports.Menu = Menu;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-menu.js.map
