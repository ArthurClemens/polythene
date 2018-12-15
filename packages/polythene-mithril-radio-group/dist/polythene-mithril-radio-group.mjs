import { StateComponent } from 'polythene-mithril-base';
import { coreRadioGroup } from 'polythene-core-radio-group';
import { RadioButton } from 'polythene-mithril-radio-button';

const RadioGroup = StateComponent(Object.assign({}, coreRadioGroup, {
  createContent: (vnode, args) => coreRadioGroup.createContent(vnode, Object.assign(args, {
    RadioButton
  }))
}));
RadioGroup.displayName = "RadioGroup";

export { RadioGroup };
