import { _Icon } from 'polythene-core-icon';
import { SVG } from 'polythene-mithril-svg';
import { cast, h, a } from 'cyano-mithril';

var Icon = cast(_Icon, {
  h: h,
  a: a,
  SVG: SVG
});
Icon["displayName"] = "Icon";

export { Icon };
