import { statelessComponent } from 'polythene-react-base';
import { CoreList } from 'polythene-core-list';
import { ListTile } from 'polythene-react-list-tile';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createProps = function createProps(vnode, args) {
  return CoreList.createProps(vnode, _extends(args, { ListTile: ListTile }));
};
var createContent = function createContent(vnode, args) {
  return CoreList.createContent(vnode, _extends(args, { ListTile: ListTile }));
};

var List = statelessComponent(_extends({}, CoreList, {
  createProps: createProps,
  createContent: createContent
}));

List.theme = CoreList.theme;
List.displayName = "List";

export { List };
