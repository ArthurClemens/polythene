import { _ListTile } from 'polythene-core-list-tile';
import { Icon } from 'polythene-mithril-icon';
import { Ripple } from 'polythene-mithril-ripple';
import { cast, h, a } from 'cyano-mithril';

var ListTile = cast(_ListTile, {
  h: h,
  a: a,
  Icon: Icon,
  Ripple: Ripple
});
ListTile["displayName"] = "ListTile";

export { ListTile };
