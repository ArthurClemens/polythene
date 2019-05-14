import { _Shadow } from 'polythene-core-shadow';
import { cast, h, a } from 'cyano-mithril';

var Shadow = cast(_Shadow, {
  h: h,
  a: a
});
Shadow["displayName"] = "Shadow";

export { Shadow };
