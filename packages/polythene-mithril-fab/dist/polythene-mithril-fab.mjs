import { _FAB } from 'polythene-core-fab';
import { Icon } from 'polythene-mithril-icon';
import { Button } from 'polythene-mithril-button';
import { cast, h, a } from 'cyano-mithril';

var FAB = cast(_FAB, {
  h: h,
  a: a,
  Button: Button,
  Icon: Icon
});

export { FAB };
