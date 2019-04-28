import { _IconButton } from 'polythene-core-icon-button';
import { Icon } from 'polythene-mithril-icon';
import { Button } from 'polythene-mithril-button';
import { cast, h, a } from 'cyano-mithril';

var IconButton = cast(_IconButton, {
  h: h,
  a: a,
  Icon: Icon,
  Button: Button
});

export { IconButton };
