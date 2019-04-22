import { _Icon } from 'polythene-core-icon';
import { SVG } from 'polythene-react-svg';
import { cast, h, a } from 'cyano-react';

var Icon = cast(_Icon, {
  h: h,
  a: a,
  SVG: SVG
});

export { Icon };
