import { _Toolbar, _ToolbarTitle } from 'polythene-core-toolbar';
import { Shadow } from 'polythene-react-shadow';
import { cast, h, a } from 'cyano-react';

var Toolbar = cast(_Toolbar, {
  h: h,
  a: a,
  Shadow: Shadow
});

var ToolbarTitle = cast(_ToolbarTitle, {
  h: h,
  a: a
});

// @ts-check

export { Toolbar, ToolbarTitle };
