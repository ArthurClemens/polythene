import { ViewComponent, StateComponent } from 'polythene-mithril-base';
import { coreRadioButton } from 'polythene-core-radio-button';
import { viewControl, coreSelectionControl } from 'polythene-core-selection-control';
import { Icon } from 'polythene-mithril-icon';
import { IconButton } from 'polythene-mithril-icon-button';

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

var ViewControl = ViewComponent(_extends({}, viewControl, {
  createContent: function createContent(vnode, args) {
    return viewControl.createContent(vnode, _extends(args, {
      Icon: Icon,
      IconButton: IconButton
    }));
  }
}));
ViewControl.displayName = "ViewControl";

var SelectionControl = StateComponent(_extends({}, coreSelectionControl, {
  createContent: function createContent(vnode, args) {
    return coreSelectionControl.createContent(vnode, _extends(args, {
      ViewControl: ViewControl
    }));
  }
}));
SelectionControl.displayName = "SelectionControl";

var RadioButton = StateComponent(_extends({}, coreRadioButton, {
  component: SelectionControl
}));
RadioButton.displayName = "RadioButton";

export { RadioButton };
