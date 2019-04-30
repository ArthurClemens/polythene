import { _IconButton } from 'polythene-core-icon-button';
import { Icon } from 'polythene-react-icon';
import { Button } from 'polythene-react-button';
import { cast, h, a } from 'cyano-react';

var IconButton = cast(_IconButton, {
  h: h,
  a: a,
  Icon: Icon,
  Button: Button
});
IconButton["displayName"] = "IconButton";

export { IconButton };
