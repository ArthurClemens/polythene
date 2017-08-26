import { StateComponent } from 'polythene-react-base';
import { coreList } from 'polythene-core-list';
import { ListTile } from 'polythene-react-list-tile';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var List = StateComponent(_extends({}, coreList, {
  createProps: function createProps(vnode, args) {
    return coreList.createProps(vnode, _extends(args, { ListTile: ListTile }));
  },
  createContent: function createContent(vnode, args) {
    return coreList.createContent(vnode, _extends(args, { ListTile: ListTile }));
  }
}));

List.theme = coreList.theme;
List.displayName = "List";

export { List };
