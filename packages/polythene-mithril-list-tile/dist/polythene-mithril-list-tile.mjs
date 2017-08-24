import { StateComponent } from 'polythene-mithril-base';
import { coreListTile } from 'polythene-core-list-tile';
import { Icon } from 'polythene-mithril-icon';
import { Ripple } from 'polythene-mithril-ripple';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ListTile = StateComponent(_extends({}, coreListTile, {
  createProps: function createProps(vnode, args) {
    return coreListTile.createProps(vnode, _extends(args, { Icon: Icon, Ripple: Ripple }));
  },
  createContent: function createContent(vnode, args) {
    return coreListTile.createContent(vnode, _extends(args, { Icon: Icon, Ripple: Ripple }));
  }
}));

ListTile.theme = coreListTile.theme;
ListTile.displayName = "ListTile";

export { ListTile };
