import { _ViewControl, _Switch } from 'polythene-core-switch';
import { cast, h, a, useState, useEffect, useRef } from 'cyano-mithril';
import { Shadow } from 'polythene-mithril-shadow';
import { IconButton } from 'polythene-mithril-icon-button';
import { _SelectionControl } from 'polythene-core-selection-control';

var ViewControl = cast(_ViewControl, {
  h: h,
  a: a,
  Shadow: Shadow,
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
var Switch = cast(_Switch, {
  h: h,
  a: a,
  SelectionControl: SelectionControl
});
Switch["displayName"] = "Switch";

export { Switch };
