import { StateComponent } from 'polythene-mithril-base';
import { coreKeyboardList } from 'polythene-core-keyboard-list';
import { List } from 'polythene-mithril-list';
import { ListTile } from 'polythene-mithril-list-tile';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var KeyboardList = StateComponent(_extends({}, coreKeyboardList, {
  createProps: function createProps(vnode, args) {
    return coreKeyboardList.createProps(vnode, _extends(args, { List: List, ListTile: ListTile }));
  },
  createContent: function createContent(vnode, args) {
    return coreKeyboardList.createContent(vnode, _extends(args, { List: List, ListTile: ListTile }));
  }
}));

KeyboardList.displayName = "KeyboardList";

export { KeyboardList };
