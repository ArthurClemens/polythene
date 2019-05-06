import { _List } from 'polythene-core-list';
import { ListTile } from 'polythene-react-list-tile';
import { cast, h, a } from 'cyano-react';

var List = cast(_List, {
  h: h,
  a: a,
  ListTile: ListTile
});
List["displayName"] = "List";

export { List };
