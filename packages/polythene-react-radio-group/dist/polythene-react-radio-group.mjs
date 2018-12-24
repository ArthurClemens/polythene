import { StateComponent } from 'polythene-react-base';
import { coreRadioGroup } from 'polythene-core-radio-group';
import { RadioButton } from 'polythene-react-radio-button';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var RadioGroup = StateComponent(_extends({}, coreRadioGroup, {
  createContent: function createContent(vnode, args) {
    return coreRadioGroup.createContent(vnode, _extends(args, {
      RadioButton: RadioButton
    }));
  }
}));
RadioGroup.displayName = "RadioGroup";

export { RadioGroup };
