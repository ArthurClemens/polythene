import { renderer, samStateComponent, viewComponent } from 'polythene-mithril-base';
import { CoreMenu } from 'polythene-core-menu';
import { Shadow } from 'polythene-mithril-shadow';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createProps = function createProps(vnode, args) {
  return CoreMenu.createProps(vnode, _extends(args, { Shadow: Shadow }));
};
var createContent = function createContent(vnode, args) {
  return CoreMenu.createContent(vnode, _extends(args, { Shadow: Shadow }));
};

var MenuInstance = viewComponent(_extends({}, CoreMenu, {
  createProps: createProps,
  createContent: createContent
}));

var Menu = samStateComponent(_extends({}, {
  getInitialState: CoreMenu.getInitialState,
  getUpdates: CoreMenu.getUpdates,
  renderView: function renderView(vnode) {
    var model = vnode.state.model;
    if (!model.visible && !model.transitioning && vnode.attrs.show) {
      vnode.state.updates.setVisible(true);
    }
    return model.visible ? renderer(MenuInstance, _extends({}, vnode.attrs, {
      model: model,
      updates: vnode.state.updates
    })) : renderer("span", { className: CoreMenu.classes.placeholder });
  }
}));

Menu.theme = CoreMenu.theme;

export { Menu };
