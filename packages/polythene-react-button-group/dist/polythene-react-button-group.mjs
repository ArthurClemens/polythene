import { cast, h, a } from 'cyano-react';
import { _ButtonGroup } from 'polythene-core-button-group';

var ButtonGroup = cast(_ButtonGroup, {
  h: h,
  a: a
});
ButtonGroup["displayName"] = "ButtonGroup";

export { ButtonGroup };
