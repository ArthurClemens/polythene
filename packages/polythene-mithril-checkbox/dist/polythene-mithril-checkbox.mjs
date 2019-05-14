import { _Checkbox } from 'polythene-core-checkbox';
import { _ViewControl, _SelectionControl } from 'polythene-core-selection-control';
import { cast, h, a, useState } from 'cyano-mithril';
import { Icon } from 'polythene-mithril-icon';
import { IconButton } from 'polythene-mithril-icon-button';

var ViewControl = cast(_ViewControl, {
  h: h,
  Icon: Icon,
  IconButton: IconButton
});
ViewControl["displayName"] = "ViewControl";
var SelectionControl = cast(_SelectionControl, {
  h: h,
  a: a,
  useState: useState,
  ViewControl: ViewControl
});
SelectionControl["displayName"] = "SelectionControl";
var Checkbox = cast(_Checkbox, {
  h: h,
  SelectionControl: SelectionControl
});
Checkbox["displayName"] = "Checkbox";

export { Checkbox };
