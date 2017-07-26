import { StateComponent } from 'polythene-mithril-base';
import { coreRadioGroup } from 'polythene-core-radio-group';
import { RadioButton } from 'polythene-mithril-radio-button';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var RadioGroup = StateComponent(_extends({}, coreRadioGroup, {
  createContent: function createContent(vnode, args) {
    return coreRadioGroup.createContent(vnode, _extends(args, { RadioButton: RadioButton }));
  }
}));

RadioGroup.displayName = "RadioGroup";

export { RadioGroup };
