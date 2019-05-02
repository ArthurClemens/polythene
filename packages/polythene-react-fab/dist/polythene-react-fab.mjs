import { _FAB } from 'polythene-core-fab';
import { Icon } from 'polythene-react-icon';
import { Button } from 'polythene-react-button';
import { cast, h, a } from 'cyano-react';

var FAB = cast(_FAB, {
  h: h,
  a: a,
  Button: Button,
  Icon: Icon
});

export { FAB };
