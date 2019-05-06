import { _List } from 'polythene-core-list';
import { ListTile } from 'polythene-mithril-list-tile';
import { cast, h, a } from 'cyano-mithril';

var List = cast(_List, {
  h: h,
  a: a,
  ListTile: ListTile
});
List["displayName"] = "List";

export { List };
