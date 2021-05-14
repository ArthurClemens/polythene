import { _RadioButton } from 'polythene-core-radio-button';
import { _ViewControl, _SelectionControl } from 'polythene-core-selection-control';
import { cast, h, a, useState, useEffect, useRef } from 'cyano-mithril';
import { Icon } from 'polythene-mithril-icon';
import { IconButton } from 'polythene-mithril-icon-button';

var ViewControl = cast(_ViewControl, {
  h: h,
  a: a,
  Icon: Icon,
  IconButton: IconButton
});
ViewControl["displayName"] = "ViewControl";
var SelectionControl = cast(_SelectionControl, {
  h: h,
  a: a,
  useState: useState,
  useEffect: useEffect,
  useRef: useRef,
  ViewControl: ViewControl
});
SelectionControl["displayName"] = "SelectionControl";
var RadioButton = cast(_RadioButton, {
  h: h,
  a: a,
  SelectionControl: SelectionControl
});
RadioButton["displayName"] = "RadioButton";

export { RadioButton };
