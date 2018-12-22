import { StateComponent } from 'polythene-react-base';
import { coreRadioGroup } from 'polythene-core-radio-group';
import { RadioButton } from 'polythene-react-radio-button';

const RadioGroup = StateComponent(Object.assign({}, coreRadioGroup, {
  createContent: (vnode, args) => coreRadioGroup.createContent(vnode, Object.assign(args, {
    RadioButton
  }))
}));
RadioGroup.displayName = "RadioGroup";

export { RadioGroup };
