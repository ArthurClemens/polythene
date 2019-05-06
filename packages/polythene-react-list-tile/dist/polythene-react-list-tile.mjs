import { _ListTile } from 'polythene-core-list-tile';
import { Icon } from 'polythene-react-icon';
import { Ripple } from 'polythene-react-ripple';
import { cast, h, a } from 'cyano-react';

var ListTile = cast(_ListTile, {
  h: h,
  a: a,
  Icon: Icon,
  Ripple: Ripple
});
ListTile["displayName"] = "ListTile";

export { ListTile };
